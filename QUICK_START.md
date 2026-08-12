# Quick Start: Adding a New Media + Event Card

## 3 Files You Need to Create/Edit

### File 1: Event Card
**Location:** `data/events/03-my-event.js`

```javascript
const card_events_03 = {
  id:       "my-event-unique-id",    // ← Remember this!
  category: "events",
  title:    "My Event Title",
  date:     "Month Year",
  summary:  "Event description here...",
  image:    "images/path-to-image.jpg",
  link:     "https://example.com"
};
```

---

### File 2: Media Card
**Location:** `data/media/05-my-media.js`

```javascript
const card_media_05 = {
  id:        "my-media-unique-id",
  category:  "media",
  title:     "Media Article Title",
  date:      "Month Year",
  summary:   "Article summary...",
  images:    [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg"
  ],
  link:      "https://article-link.com",
  tags:      "Tag1, Tag2",
  eventId:   "my-event-unique-id",    // ← MUST MATCH event id above!
  eventName: "My Event Name"           // ← Shows in gold badge
};
```

---

### File 3: Register in newsroom.html
**Edit:** `newsroom.html` (around line 700)

Add these two lines after the existing card loads:

```html
<!-- Events -->
<script src="data/events/03-my-event.js"></script>

<!-- Media -->
<script src="data/media/05-my-media.js"></script>
```

---

## ✅ Checklist Before Publishing

- [ ] Event file created with unique `id`
- [ ] Media file created with matching `eventId`
- [ ] Both files registered in newsroom.html
- [ ] `eventName` is user-friendly (will show in badge)
- [ ] Images exist and paths are correct
- [ ] No typos in `eventId` matching

---

## The Magic Line

This is what connects them:

```javascript
// In Event File
id: "my-event-unique-id"

// In Media File
eventId: "my-event-unique-id"  // ← SAME!
```

They must be **EXACTLY** the same (including capitalization and hyphens).

---

## That's All!

The system automatically:
1. Loads your new files
2. Displays them in newsroom
3. Handles the "View Event" navigation
4. Highlights the event when clicked

No other changes needed! 🎉
