# Event Cards - Before & After Visual Guide

## 📊 Event Card Transformation

### BEFORE ❌
```
┌─────────────────────────────────┐
│  [Image 200px height]           │ ← Small image
├─────────────────────────────────┤
│ EVENTS                          │
│ Event Title Here                │
│ Short summary text goes here.   │ ← No truncation
│                                 │
│ Date │              Learn More  │
└─────────────────────────────────┘
```

### AFTER ✅
```
┌─────────────────────────────────┐
│  [Image 400px height]           │ ← Larger image
│  [< • • • >]                    │ ← Carousel controls
│  (Auto-rotates every 5 sec)     │
├─────────────────────────────────┤
│ EVENTS                          │
│ Event Title Here                │
│ This is a longer summary text   │
│ that might exceed 5 lines, so   │
│ it gets truncated with a Read   │
│ More link.                      │
│ ▼ Read More ↓                   │ ← Expandable
│                                 │
│ Date │              Learn More  │
└─────────────────────────────────┘
```

---

## 🎬 User Interactions

### Image Carousel Flow
```
1. Page loads
   └─ First image displays
   └─ Auto-rotation starts (5sec timer)

2. Mouse hovers over image
   └─ Auto-rotation pauses
   └─ User can click < > or dots

3. Mouse leaves image
   └─ Auto-rotation resumes

4. User clicks "Learn More" button
   └─ External link opens (unchanged)
```

### Text Expansion Flow
```
1. Text is loaded
   └─ System checks if > 5 lines
   
2. If short (≤5 lines)
   └─ Display fully
   └─ NO "Read More" link
   
3. If long (>5 lines)
   └─ Truncate to 5 lines
   └─ Show "▼ Read More ↓" link
   
4. User clicks "Read More"
   └─ Card expands
   └─ Full text revealed
   └─ Link changes to "▲ Read Less ↑"
   
5. User clicks "Read Less"
   └─ Card collapses
   └─ Text truncates back to 5 lines
   └─ Link changes back to "▼ Read More ↓"
```

---

## 🔄 Carousel Interaction Map

```
        User hovers
            ↓
     ┌─────────────┐
     │ Image Auto- │
     │   Rotates   │ ← Auto-advances every 5 seconds
     │  Every 5sec │
     └──────┬──────┘
            │
            ↓ (User hovers)
     ┌─────────────────┐
     │ Rotation Pauses │ ← Manual control active
     │                 │
     │ < • • • > [✓]   │ ← User can navigate
     └────────┬────────┘
              │
              ↓ (User leaves)
     ┌─────────────┐
     │  Resumes    │
     │  Auto-      │
     │  Rotation   │ ← Back to auto-advance
     └─────────────┘
```

---

## 💾 Data Structure Comparison

### BEFORE
```javascript
const card_events_01 = {
  id:       "youngin-launch-2016",
  category: "events",
  title:    "Event Title",
  date:     "June 2016",
  summary:  "Short summary...",
  image:    "images/logos/youngin.png",    // Single image only
  link:     "https://www.taterworld.com"
};
```

### AFTER - Single Image (unchanged format)
```javascript
const card_events_01 = {
  id:       "youngin-launch-2016",
  category: "events",
  title:    "Event Title",
  date:     "June 2016",
  summary:  "Longer summary that can span multiple lines...", // ← Supports truncation
  image:    "images/logos/youngin.png",    // ← Still works as before
  link:     "https://www.taterworld.com"
};
```

### AFTER - Multiple Images (NEW)
```javascript
const card_events_03 = {
  id:       "new-event-2025",
  category: "events",
  title:    "Event Title",
  date:     "Month Year",
  summary:  "Longer summary that can span multiple lines and will be truncated if needed...", // ← New!
  images:   [          // ← NEW: Array of images for carousel
    "images/event-1.jpg",
    "images/event-2.jpg",
    "images/event-3.jpg"
  ],
  link:     "https://example.com"
};
```

---

## 📏 Size Comparison

| Element | Before | After | Change |
|---------|--------|-------|--------|
| Image height | 200px | 400px | **+200px** ↑ |
| Card padding | 3rem | 3rem | No change |
| Line height | 1.85 | 1.85 | No change |
| Text limit | Full | 5 lines | **Truncated** |
| Controls | None | < • > | **New** |

---

## 🎯 Feature Matrix

| Feature | Participation | Events | Media | Achievements |
|---------|---|---|---|---|
| **Carousel** | ❌ | ✅ **NEW** | ✅ | ❌ |
| **Large Image** | ❌ | ✅ **NEW** | ✅ | ❌ |
| **Text Truncation** | ❌ | ✅ **NEW** | ✅ | ❌ |
| **Expandable Text** | ❌ | ✅ **NEW** | ✅ | ❌ |

---

## 🖼️ Responsive Behavior

### Desktop (1024px+)
```
┌─────────────────────────────┐
│  [Image 400px] [carousel]   │
│  Title & Category           │
│  [Text with Read More]      │
│  Date │       Learn More    │
└─────────────────────────────┘
```

### Tablet (640px - 1023px)
```
┌──────────────────┐
│ [Image 400px]    │
│ [carousel]       │
│ Title & Cat.     │
│ [Text & Link]    │
│ Date │ Learn More│
└──────────────────┘
```

### Mobile (<640px)
```
┌────────────────┐
│[Image 300px]   │
│ [carousel]     │
│ Title & Cat.   │
│ [Text & Link]  │
│Date│Learn More│
└────────────────┘
```

---

## 🎨 Styling Hierarchy

```
.news-card                    ← Base card styling
├── .event-card              ← ✨ NEW: Larger event-specific
│   ├── .event-card-image-wrapper     ← Image container
│   │   └── .event-card-carousel      ← Carousel wrapper
│   │       ├── .event-card-image     ← Image frames
│   │       ├── .carousel-nav         ← Navigation buttons
│   │       └── .carousel-dots        ← Dot indicators
│   └── .event-card-body             ← Text with truncation
│       ├── (default)                 ← Full text visible
│       └── .truncated                ← 5-line limit
└── [Other cards unchanged]
```

---

## ✨ Key Improvements

### Visual Enhancement
- 📸 **2x larger images** (400px vs 200px)
- 🎬 **Carousel controls** for multiple images
- 📍 **Dot indicators** showing current position
- 🎨 **Professional appearance** with better proportions

### User Experience
- ⚡ **Auto-rotation** for engagement
- 🖱️ **Manual controls** for user preference
- 📖 **Expandable text** without page reload
- 🎯 **Smart truncation** only when needed

### Code Quality
- ♻️ **Reuses carousel logic** from media cards
- 🔧 **Minimal changes** to existing structure
- 📝 **Well-documented** with comprehensive guides
- 🎭 **Backwards compatible** with existing cards

