# Quick Start: Adding a New Card

## 3-Step Process

### Step 1: Create the File
Create a new file in the appropriate folder with this naming pattern:
- **Participation**: `data/participation/XX-article-title.js`
- **Events**: `data/events/XX-article-title.js`
- **Achievements**: `data/achievements/XX-article-title.js`
- **Media**: `data/media/XX-article-title.js`

Replace `XX` with the next number (01, 02, 03, etc.)

---

### Step 2: Add the Card Data

Paste and fill in this template. Update the `card_CATEGORY_XX` variable name to match your file number:

```javascript
const card_participation_02 = {
  id:       "unique-id-for-card",
  category: "participation",
  title:    "Your Article Title Here",
  date:     "April 2025",
  summary:  "Write a 2-3 line summary here. This text will be truncated on the card display.",
  image:    "images/path/to/your/image.jpg",
  link:     "https://full-url-to-article.com"
};
```

**For Media cards only, add the `tags` field:**
```javascript
tags:     "Tag1, Tag2"
```

---

### Step 3: Register in newsroom.html

Open `newsroom.html` and find the section labeled:
```html
<!-- Load individual card files -->
```

Add your new script tag in the appropriate section:

```html
<!-- Participation -->
<script src="data/participation/01-shilpi-iijs-2023.js"></script>
<script src="data/participation/02-your-new-card.js"></script>  <!-- Add here -->
```

---

## ✅ Done!
Refresh the newsroom page and your new card will appear automatically.

---

## Example: Adding a Media Card

### Create file: `data/media/05-new-article.js`

```javascript
const card_media_05 = {
  id:       "new-media-article-2025",
  category: "media",
  title:    "TATER World Featured in Forbes Magazine",
  date:     "April 2025",
  summary:  "TATER World's diversified portfolio and innovative approach to sustainable business practices were highlighted in Forbes' latest issue on Indian conglomerates.",
  image:    "images/photos/media-cover.jpg",
  link:     "https://www.forbes.com/article",
  tags:     "Press, Feature"
};
```

### Add to newsroom.html:
```html
<!-- Media -->
<script src="data/media/01-tater-world-expansion-2024.js"></script>
<script src="data/media/02-shilpi-jewels-media-feature.js"></script>
<script src="data/media/03-soultara-luxury-market-article.js"></script>
<script src="data/media/04-skyline-sustainability-initiative.js"></script>
<script src="data/media/05-new-article.js"></script>  <!-- Add here -->
```

Done! The new media card will appear on the newsroom page.
