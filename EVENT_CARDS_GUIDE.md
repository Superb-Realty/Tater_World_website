# Event Cards - Image Carousel & Expandable Text Guide

## ✨ New Event Card Features

### 1. **Image Carousel**
Event cards now support multiple images with automatic carousel functionality:
- **Auto-rotation** every 5 seconds
- **Navigation buttons** (< >) to manually control
- **Dot indicators** showing current position
- **Responsive** design with smooth transitions

### 2. **Larger Card Size**
- Increased image height from 200px to 400px
- Cards expand vertically to accommodate larger images
- Better visual impact for event photography

### 3. **Expandable Text**
- Text truncated to 5 lines if exceeds that length
- **"Read More ↓"** link appears when text is truncated
- Click to expand and show full text (text becomes **"Read Less ↑"**)
- Smooth expansion animation
- Card grows to fit full text content

---

## 📋 Creating an Event Card with Images

### Single Image (Default)
```javascript
const card_events_03 = {
  id:       "my-event-id",
  category: "events",
  title:    "Event Title",
  date:     "Month Year",
  summary:  "Event description...",
  image:    "path/to/single-image.jpg",  // Single image
  link:     "https://example.com"
};
```

### Multiple Images (Carousel)
```javascript
const card_events_03 = {
  id:       "my-event-id",
  category: "events",
  title:    "Event Title",
  date:     "Month Year",
  summary:  "Event description...",
  images:   [
    "path/to/image1.jpg",
    "path/to/image2.jpg",
    "path/to/image3.jpg",
    "path/to/image4.jpg"
  ],  // Multiple images - carousel will be enabled
  link:     "https://example.com"
};
```

---

## 🎯 Key Fields

```javascript
{
  id:       "unique-event-id",        // Required: Unique identifier
  category: "events",                  // Required: Always "events"
  title:    "Event Title",             // Required: Display name
  date:     "Month Year",              // Required: Event date
  summary:  "Description...",          // Required: Can be long (supports truncation)
  image:    "path/to/image.jpg",       // Use for single image
  images:   ["img1.jpg", "img2.jpg"],  // Use for multiple images (carousel)
  link:     "https://..."              // Optional: External link
}
```

---

## 💡 Best Practices

### Text Length
- **Short descriptions (under 5 lines)**: Display fully without truncation
- **Long descriptions**: Automatically truncated with "Read More" link
- **Recommended**: 2-4 sentences for better UX

### Images
- **Image format**: JPG or PNG
- **Recommended size**: 600x400px or larger
- **Aspect ratio**: 3:2 (standard)
- **File size**: Keep under 500KB for fast loading
- **Carousel**: Works best with 2-4 images

### Example: Complete Event Card with Carousel
```javascript
const card_events_03 = {
  id:       "shilpi-store-launch-2025",
  category: "events",
  title:    "Shilpi Jewels Opens New Delhi Showroom",
  date:     "April 2025",
  summary:  "Shilpi Jewels inaugurated its new flagship showroom in New Delhi, featuring exclusive gold jewelry collections and a modern luxury retail experience. The grand opening celebration brought together industry leaders, retailers, and community members to witness the brand's expansion into the capital city. This milestone marks Shilpi's commitment to reaching new markets while maintaining its legacy of quality and craftsmanship.",
  images:   [
    "images/shilpi-opening-1.jpg",
    "images/shilpi-opening-2.jpg",
    "images/shilpi-opening-3.jpg",
    "images/shilpi-opening-4.jpg"
  ],
  link:     "https://www.shilpijewels.com"
};
```

---

## 🔧 How It Works

### Image Carousel
1. **Auto-rotation** - Images change every 5 seconds
2. **Pause on hover** - Auto-rotation pauses when you hover over the image
3. **Manual control** - Use < > buttons or dots to navigate
4. **Resume on leave** - Auto-rotation resumes when mouse leaves

### Text Expansion
1. **Automatic detection** - System checks if text exceeds 5 lines
2. **Conditional link** - "Read More" only shows if text is truncated
3. **Smooth animation** - Text expands/collapses with smooth transition
4. **Visual feedback** - Link changes to "Read Less" when expanded

---

## 🎨 Styling Notes

- **Image height**: 400px (increased from 200px for better visibility)
- **Background gradient**: Dark blue gradient on missing images
- **Carousel controls**: Semi-transparent dark buttons that brighten on hover
- **Dots indicator**: Small circles below image showing position
- **Text color**: Gold (#8B6914) for "Read More/Less" links
- **Transition speed**: 400ms for smooth text expansion

---

## 📝 Usage Examples

### Event with 1 Image
```javascript
const card_events_04 = {
  id:       "skyline-project-launch",
  category: "events",
  title:    "Skyline Group Launches Premium Residential Project",
  date:     "May 2025",
  summary:  "Skyline Group unveiled its latest premium residential development in Mumbai, featuring luxury apartments and modern amenities.",
  image:    "images/skyline-project.jpg",
  link:     "https://www.skylinegroup.in"
};
```

### Event with Carousel (5 Images)
```javascript
const card_events_05 = {
  id:       "touch22-collection-launch",
  category: "events",
  title:    "Touch 22 Launches New Collection at IIJS",
  date:     "August 2025",
  summary:  "Touch 22 presented its latest machine-made gold and CZ jewelry collection at India International Jewelry Show. The launch featured innovative designs blending tradition with contemporary aesthetics, attracting retailers and industry professionals. The collection showcases the brand's commitment to precision craftsmanship and trend-forward design.",
  images:   [
    "images/touch22-collection-1.jpg",
    "images/touch22-collection-2.jpg",
    "images/touch22-collection-3.jpg",
    "images/touch22-collection-4.jpg",
    "images/touch22-collection-5.jpg"
  ],
  link:     "https://www.touch22.com"
};
```

---

## ✅ Checklist for New Event Cards

- [ ] Event has unique `id`
- [ ] `category` is set to `"events"`
- [ ] `title` is descriptive
- [ ] `date` is in "Month Year" format
- [ ] `summary` is filled (will support truncation if long)
- [ ] `image` or `images` path is correct
- [ ] Image files exist in the correct folder
- [ ] File registered in `newsroom.html`
- [ ] Updated `data-loader.js` if needed
- [ ] Tested in browser

---

## 🚀 Quick Tips

- **Carousel works on hover** - Pause auto-rotation, use buttons to navigate
- **Text expands smoothly** - No jarring jumps, smooth 400ms transition
- **Responsive design** - Works on mobile, tablet, and desktop
- **No manual limits** - Add as many images as you want to carousel
- **Truncation is automatic** - No need to manually truncate text

