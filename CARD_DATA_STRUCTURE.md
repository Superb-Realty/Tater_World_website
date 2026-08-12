# Card Data Structure Guide

## 📁 Folder Organization

```
data/
├── media/
│   ├── 01-tater-world-expansion-2024.js
│   ├── 02-shilpi-jewels-media-feature.js
│   ├── 03-soultara-luxury-market-article.js
│   └── 04-skyline-sustainability-initiative.js
├── events/
│   ├── 01-youngin-launch-2016.js
│   └── 02-soultara-store-opening.js
├── achievements/
│   ├── 01-iijs-creative-award-2017.js
│   ├── 02-ibja-best-chain-store-wholesaler.js
│   └── 03-skyline-30000-customers.js
└── participation/
    └── 01-shilpi-iijs-2023.js
```

## ✅ How It Works

1. **Individual Card Files** - Each card is a separate JavaScript file
2. **Card Variables** - Each file exports data as a variable (e.g., `card_media_01`)
3. **Automatic Loading** - `newsroom.html` loads all card files via script tags
4. **Auto Aggregation** - `data-loader.js` combines all cards into `TATER.news.articles`

## 🎯 Creating a New Media + Event Pair

### Step 1: Create the Event Card First

Create a new file: `data/events/03-your-event-id.js`

```javascript
const card_events_03 = {
  id:       "your-event-unique-id",  // ← IMPORTANT: Use this ID later
  category: "events",
  title:    "Event Title Here",
  date:     "Month Year",
  summary:  "Event description goes here...",
  image:    "path/to/image.jpeg",
  link:     "https://example.com"
};
```

**Example:**
```javascript
const card_events_03 = {
  id:       "shilpi-store-launch-2025",
  category: "events",
  title:    "Shilpi Jewels Opens New Delhi Showroom",
  date:     "April 2025",
  summary:  "Shilpi Jewels inaugurates its new flagship showroom in New Delhi with exclusive collections.",
  image:    "images/shilpi-event.jpeg",
  link:     "https://www.shilpijewels.com"
};
```

### Step 2: Create the Media Card

Create a new file: `data/media/05-your-media-id.js`

```javascript
const card_media_05 = {
  id:        "media-article-unique-id",
  category:  "media",
  title:     "Media Article Title",
  date:      "Month Year",
  summary:   "Article summary...",
  images:    [
    "path/to/image1.jpg",
    "path/to/image2.jpg",
    "path/to/image3.jpg"
  ],
  link:      "https://external-article-link.com",
  tags:      "Tag1, Tag2",
  eventId:   "your-event-unique-id",  // ← MUST MATCH event id above!
  eventName: "Shilpi Launch"            // ← Display name for badge
};
```

**Example:**
```javascript
const card_media_05 = {
  id:        "shilpi-store-opening-photos",
  category:  "media",
  title:     "Behind the Scenes: Shilpi's New Showroom Launch",
  date:      "April 2025",
  summary:   "Exclusive photo coverage of the grand opening ceremony...",
  images:    [
    "images/shilpi-opening-1.jpg",
    "images/shilpi-opening-2.jpg",
    "images/shilpi-opening-3.jpg"
  ],
  link:      "https://www.shilpijewels.com",
  tags:      "Jewellery, Launch",
  eventId:   "shilpi-store-launch-2025",  // ← Connects to event
  eventName: "Shilpi Store Opening"        // ← Shows in gold badge
};
```

### Step 3: Register in newsroom.html

Add this line in `newsroom.html` after the other script tags (before data-loader.js):

```html
<!-- Media -->
<script src="data/media/05-your-media-id.js"></script>

<!-- Events -->
<script src="data/events/03-your-event-id.js"></script>
```

**Full example:**
```html
<!-- Media -->
<script src="data/media/01-tater-world-expansion-2024.js"></script>
<script src="data/media/02-shilpi-jewels-media-feature.js"></script>
<script src="data/media/03-soultara-luxury-market-article.js"></script>
<script src="data/media/04-skyline-sustainability-initiative.js"></script>
<script src="data/media/05-your-media-id.js"></script>  <!-- NEW -->

<!-- Events -->
<script src="data/events/01-youngin-launch-2016.js"></script>
<script src="data/events/02-soultara-store-opening.js"></script>
<script src="data/events/03-your-event-id.js"></script>  <!-- NEW -->
```

### Step 4: Update data-loader.js (Optional)

If you're creating a new card file, you may need to update `aggregateCards()` function in `data-loader.js`:

```javascript
// Media cards
if (typeof card_media_01 !== 'undefined') articles.push(card_media_01);
if (typeof card_media_02 !== 'undefined') articles.push(card_media_02);
if (typeof card_media_03 !== 'undefined') articles.push(card_media_03);
if (typeof card_media_04 !== 'undefined') articles.push(card_media_04);
if (typeof card_media_05 !== 'undefined') articles.push(card_media_05);  // ADD THIS

// Events cards
if (typeof card_events_01 !== 'undefined') articles.push(card_events_01);
if (typeof card_events_02 !== 'undefined') articles.push(card_events_02);
if (typeof card_events_03 !== 'undefined') articles.push(card_events_03);  // ADD THIS
```

## 📋 Field Reference

### Media Card Fields
```javascript
{
  id:        "unique-id",           // Required: Unique identifier
  category:  "media",               // Required: Always "media"
  title:     "Card Title",          // Required: Article title
  date:      "Month Year",          // Required: Publication date
  summary:   "Description...",      // Optional: Article summary
  image:     "path/to/image.jpg",   // Single image (use if only 1 image)
  images:    ["img1.jpg", ...],     // Multiple images (carousel)
  link:      "https://...",         // Optional: External link
  tags:      "Tag1, Tag2",          // Optional: Tags
  eventId:   "event-id",            // IMPORTANT: Must match event id
  eventName: "Display Name"         // IMPORTANT: Shows in gold badge
}
```

### Event Card Fields
```javascript
{
  id:       "unique-id",            // Required: Unique identifier
  category: "events",               // Required: Always "events"
  title:    "Event Title",          // Required: Event name
  date:     "Month Year",           // Required: Event date
  summary:  "Description...",       // Required: Event description
  image:    "path/to/image.jpeg",   // Required: Event image
  link:     "https://..."           // Optional: External link
}
```

## 🔗 Event Mapping Rules

✅ **Media `eventId`** must exactly match **Event `id`**  
✅ **Event `id`** must be unique  
✅ **`eventName`** is just display text in the badge  
✅ When you click "View Event", it navigates to the matching event card

## 📚 Example: Complete Working Pair

### Event: `data/events/03-shilpi-store-launch-2025.js`
```javascript
const card_events_03 = {
  id:       "shilpi-store-launch-2025",
  category: "events",
  title:    "Shilpi Jewels Opens New Delhi Showroom",
  date:     "April 2025",
  summary:  "Shilpi Jewels inaugurates its new flagship showroom in New Delhi, featuring exclusive gold jewelry collections and a modern luxury retail experience.",
  image:    "images/shilpi-event.jpeg",
  link:     "https://www.shilpijewels.com"
};
```

### Media: `data/media/05-shilpi-store-opening-photos.js`
```javascript
const card_media_05 = {
  id:        "shilpi-store-opening-photos",
  category:  "media",
  title:     "Behind the Scenes: Shilpi's New Showroom Launch",
  date:      "April 2025",
  summary:   "Exclusive photo coverage of Shilpi Jewels' grand opening ceremony in New Delhi.",
  images:    [
    "images/shilpi-opening-1.jpg",
    "images/shilpi-opening-2.jpg",
    "images/shilpi-opening-3.jpg"
  ],
  link:      "https://www.shilpijewels.com",
  tags:      "Jewellery, Launch",
  eventId:   "shilpi-store-launch-2025",  // ← Links to event above
  eventName: "Shilpi Store Opening"       // ← Shows in gold badge
};
```

## ❌ Common Mistakes

❌ **Wrong:** `eventId: "Shilpi Store"` (must match event `id` exactly)  
✅ **Right:** `eventId: "shilpi-store-launch-2025"` (matches event id)

❌ **Wrong:** Creating media without `eventId` field  
✅ **Right:** Always include `eventId` and `eventName` in media cards

❌ **Wrong:** Using spaces in IDs  
✅ **Right:** Use hyphens: `shilpi-store-launch-2025`

---

**Remember:** Data flows from individual card files → data-loader.js → TATER.news.articles → newsroom.html renders them
