# Event Cards - Quick Cheatsheet 🚀

## 📝 Single Image Event Card
```javascript
const card_events_03 = {
  id:       "event-id",
  category: "events",
  title:    "Event Title",
  date:     "Month Year",
  summary:  "Event description...",
  image:    "path/image.jpg",
  link:     "https://example.com"
};
```

## 🎬 Multi-Image Event Card (with Carousel)
```javascript
const card_events_03 = {
  id:       "event-id",
  category: "events",
  title:    "Event Title",
  date:     "Month Year",
  summary:  "Event description... (supports long text with automatic truncation)",
  images:   ["img1.jpg", "img2.jpg", "img3.jpg"],  // ← Multiple images
  link:     "https://example.com"
};
```

---

## 🎯 When to Use What

| Scenario | Use |
|----------|-----|
| Single photo | `image: "path.jpg"` |
| Multiple photos | `images: ["p1.jpg", "p2.jpg"]` |
| Short description | Use `summary` normally |
| Long description | Use `summary` (auto-truncates if >5 lines) |

---

## ✨ Features At a Glance

| Feature | Behavior | Trigger |
|---------|----------|---------|
| **Auto-Rotate** | Images change every 5 sec | Automatically starts |
| **Pause** | Stop rotation | Hover over image |
| **Resume** | Continue rotation | Move mouse away |
| **Manual Control** | Click < > or dots | User interaction |
| **Truncation** | Show 5 lines only | Text > 5 lines |
| **Expand** | Show full text | Click "Read More" |
| **Collapse** | Back to 5 lines | Click "Read Less" |

---

## 🔧 In newsroom.html

### Register Event Files (line ~700)
```html
<script src="data/events/03-your-event.js"></script>
```

### Update data-loader.js (if >2 events)
```javascript
if (typeof card_events_03 !== 'undefined') articles.push(card_events_03);
```

---

## 📐 Image Specifications

- **Height**: 400px (full width)
- **Format**: JPG, PNG
- **Size**: Keep under 500KB
- **Ratio**: 3:2 (600×400px ideal)
- **Count**: 1-5+ images per carousel

---

## 🎨 CSS Classes (Don't Edit)

| Class | Purpose |
|-------|---------|
| `.event-card` | Main card wrapper |
| `.event-card-image-wrapper` | Image container |
| `.event-card-carousel` | Carousel wrapper |
| `.carousel-nav` | Navigation buttons |
| `.carousel-dots` | Dot indicators |
| `.event-card-body` | Text content |
| `.truncated` | Text truncation state |

---

## ⚙️ JavaScript Behavior

```javascript
// Auto-rotation
5000ms (5 seconds) default timer

// Text detection
5 lines = truncation threshold

// Expansion
400ms animation duration

// Pause trigger
mouseenter on image

// Resume trigger
mouseleave from image
```

---

## 💾 File Locations

**Event Card Files:**
```
data/events/
├── 01-youngin-launch-2016.js
├── 02-soultara-store-opening.js
└── 03-your-new-event.js          ← Create here
```

**Code:**
```
newsroom.html
└── Lines 928-1050: Event card logic
└── Lines 224-275: Event card CSS
```

---

## ✅ Before You Go Live

- [ ] Images exist and paths correct
- [ ] Image file sizes reasonable (<500KB)
- [ ] Single `image` OR `images` array (not both)
- [ ] Summary filled (even if long)
- [ ] Event `id` is unique
- [ ] Script tag added to newsroom.html
- [ ] data-loader.js updated if new number
- [ ] Tested carousel (prev/next/dots/auto)
- [ ] Tested text truncation (5+ line summary)
- [ ] No JavaScript errors (F12 → Console)

---

## 🎬 Creating Template

**Copy & Paste Start:**
```javascript
const card_events_XX = {
  id:       "unique-id",
  category: "events",
  title:    "Your Event Title",
  date:     "Month Year",
  summary:  "Event description. If this text exceeds 5 lines, it will automatically truncate with a 'Read More' link for users to expand it and see the full details of the event.",
  images:   [
    "images/event-photo-1.jpg",
    "images/event-photo-2.jpg",
    "images/event-photo-3.jpg"
  ],
  link:     "https://example.com"
};
```

Replace:
- `XX` → Your event number (01, 02, 03, etc.)
- `unique-id` → Your event ID (e.g., "soultara-store-opening")
- `Your Event Title` → Actual event name
- `Month Year` → Event date
- `summary` → Event description
- Image paths → Your image locations
- `link` → Relevant URL

---

## 🚀 Deploy Checklist

- [ ] All images uploaded to correct folder
- [ ] Event card file created in `data/events/`
- [ ] Script tag added to newsroom.html
- [ ] data-loader.js updated
- [ ] Tested in browser
- [ ] No console errors
- [ ] Carousel works
- [ ] Text expansion works
- [ ] Links work
- [ ] Ready for production!

---

## 📞 Troubleshooting

| Issue | Solution |
|-------|----------|
| Images don't show | Check file paths, use relative paths |
| Carousel not working | Need 2+ images, check `images` array |
| "Read More" missing | Summary needs to exceed 5 lines |
| Text won't expand | Open console (F12), check for errors |
| Style looks wrong | Clear browser cache (Ctrl+Shift+Delete) |

---

## 🎁 Bonus Tips

💡 **Multiple images?** Use carousel (more engaging)  
💡 **Long description?** Use full text (auto-truncates)  
💡 **Professional look?** Use 400px height images  
💡 **Better UX?** Let users control carousel on hover  
💡 **Mobile friendly?** Responsive design included  

---

## 📚 Full Documentation

- **EVENT_CARDS_GUIDE.md** - Detailed guide
- **EVENT_CARDS_IMPLEMENTATION.md** - Technical specs
- **VISUAL_CHANGES.md** - Before/after comparison
- **EVENT_CARDS_SUMMARY.md** - Complete summary

---

**You're ready to create amazing event cards!** 🎉

