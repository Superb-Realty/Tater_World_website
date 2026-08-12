# Newsroom Data Management System

## Overview
Each newsroom section (Participation, Events, Achievements, Media) now has its own modular folder structure. Cards are stored as individual JavaScript files that are automatically loaded into the newsroom.

## Folder Structure

```
data/
├── participation/
│   ├── 01-shilpi-iijs-2023.js
│   └── [add more files here]
├── events/
│   ├── 01-youngin-launch-2016.js
│   ├── 02-soultara-store-opening.js
│   └── [add more files here]
├── achievements/
│   ├── 01-iijs-creative-award-2017.js
│   ├── 02-ibja-best-chain-store-wholesaler.js
│   ├── 03-skyline-30000-customers.js
│   └── [add more files here]
└── media/
    ├── 01-tater-world-expansion-2024.js
    ├── 02-shilpi-jewels-media-feature.js
    ├── 03-soultara-luxury-market-article.js
    ├── 04-skyline-sustainability-initiative.js
    └── [add more files here]
```

## How to Add a New Card

### 1. Create a new file in the appropriate folder
Example: `data/participation/02-new-article.js`

### 2. Use this template:

```javascript
const card_participation_02 = {
  id:       "unique-article-id",
  category: "participation",
  title:    "Article Title",
  date:     "April 2025",
  summary:  "Brief 2-3 line description of the article.",
  image:    "images/path/to/image.jpg",
  link:     "https://external-link-to-article.com"
};
```

### 3. For Media cards, add a `tags` field:

```javascript
const card_media_05 = {
  id:       "unique-article-id",
  category: "media",
  title:    "Article Title",
  date:     "April 2025",
  summary:  "Brief 2-3 line description of the article.",
  image:    "images/path/to/image.jpg",
  link:     "https://external-link-to-article.com",
  tags:     "Tag1, Tag2"  // Comma-separated tags
};
```

### 4. Register the new file in `newsroom.html`

Add a new `<script>` tag in the "Load individual card files" section:

```html
<!-- Events -->
<script src="data/events/01-youngin-launch-2016.js"></script>
<script src="data/events/02-soultara-store-opening.js"></script>
<script src="data/events/03-your-new-event.js"></script>  <!-- Add here -->
```

### 5. That's it! 
The card will automatically appear on the newsroom page.

---

## Variable Naming Convention

Each file must follow this naming pattern for the JavaScript constant:

- **Participation**: `card_participation_01`, `card_participation_02`, etc.
- **Events**: `card_events_01`, `card_events_02`, etc.
- **Achievements**: `card_achievements_01`, `card_achievements_02`, etc.
- **Media**: `card_media_01`, `card_media_02`, etc.

The number should match the filename number.

---

## Field Descriptions

| Field | Required | Description |
|-------|----------|-------------|
| `id` | ✓ | Unique identifier for the card (use lowercase, hyphens) |
| `category` | ✓ | Must match folder name: "participation", "events", "achievements", or "media" |
| `title` | ✓ | Main headline of the card |
| `date` | ✓ | Publication/event date (e.g., "April 2025") |
| `summary` | ✓ | Brief excerpt (2-3 lines, truncated on display) |
| `image` | ✓ | Relative path to image file (shows 280px tall on media cards) |
| `link` | ✓ | External URL to the full article |
| `tags` | Media only | Comma-separated tags (e.g., "Press, Awards") |

---

## Tips

- **Numbering**: Use `01-`, `02-`, etc. at the start of filenames for easy organization
- **Images**: Use high-quality images (minimum 400px width for media cards)
- **Dates**: Use consistent format like "April 2025" or "12 April 2025"
- **Links**: Use full URLs with https://
- **Summary**: Keep it concise—it gets truncated to 2 lines on the card

---

## Data Flow

1. Individual card files are loaded via `<script>` tags in `newsroom.html`
2. Each file defines a JavaScript constant (e.g., `card_participation_01`)
3. `data-loader.js` aggregates all these cards into `TATER.news.articles`
4. The newsroom JavaScript renders cards by filtering articles by category

---

## Editing Existing Cards

Simply edit the corresponding `.js` file in its folder, and the changes will be reflected on the site immediately (after page refresh).

Example: To edit "Shilpi Jewels Showcases at IIJS 2023", edit:
- `data/participation/01-shilpi-iijs-2023.js`
