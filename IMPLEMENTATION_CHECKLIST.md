# Media Cards Redesign - Implementation Checklist

## ✅ Completed Tasks

### 1. Data Reorganization
- [x] Moved all media card data to individual files in `data/media/` folder
- [x] Moved all event card data to individual files in `data/events/` folder
- [x] Moved all achievement data to individual files in `data/achievements/` folder
- [x] Moved all participation data to individual files in `data/participation/` folder

### 2. Event Mapping Added
- [x] Updated `data/media/01-tater-world-expansion-2024.js` with eventId & eventName
- [x] Updated `data/media/02-shilpi-jewels-media-feature.js` with eventId & eventName
- [x] Updated `data/media/03-soultara-luxury-market-article.js` with eventId & eventName
- [x] Updated `data/media/04-skyline-sustainability-initiative.js` with eventId & eventName

### 3. UI Redesign for Media Cards
- [x] Added event name badge (gold pill) next to date badge
- [x] Removed summary/snippet text section from media cards
- [x] Removed divider line between image and button
- [x] Kept title/heading and image carousel
- [x] Updated button text to "View Event"
- [x] Added click handler to navigate to Events section

### 4. Navigation & Highlighting
- [x] "View Event" button navigates to Events section
- [x] Automatically filters to Events category
- [x] Highlights and scrolls to related event card
- [x] Pulsing gold glow animation on highlighted card

### 5. Documentation Created
- [x] `CARD_DATA_STRUCTURE.md` - Complete guide for creating new cards
- [x] `IMPLEMENTATION_CHECKLIST.md` - This file

---

## 📋 Current Card Structure

### Media Cards (with event mapping)
1. ✅ `01-tater-world-expansion-2024.js` → eventId: `tater-world-expansion-event`
2. ✅ `02-shilpi-jewels-media-feature.js` → eventId: `shilpi-media-event`
3. ✅ `03-soultara-luxury-market-article.js` → eventId: `soultara-store-opening`
4. ✅ `04-skyline-sustainability-initiative.js` → eventId: `skyline-sustainability-event`

### Event Cards
1. ✅ `01-youngin-launch-2016.js`
2. ✅ `02-soultara-store-opening.js` (connected to media #3)

---

## 🎯 Next Steps: Creating Your First New Card Pair

### When You're Ready to Add New Content:

1. **Create Event File**
   - File: `data/events/03-your-event-id.js`
   - Variable: `const card_events_03 = { ... }`
   - Copy template from `CARD_DATA_STRUCTURE.md`

2. **Create Media File**
   - File: `data/media/05-your-media-id.js`
   - Variable: `const card_media_05 = { ... }`
   - Set `eventId: "your-event-unique-id"` (matches event id)
   - Set `eventName: "Display Name"`

3. **Register in newsroom.html**
   - Add: `<script src="data/events/03-your-event-id.js"></script>`
   - Add: `<script src="data/media/05-your-media-id.js"></script>`

4. **Update data-loader.js** (if adding more than 5 media or 3 events)
   - Add: `if (typeof card_media_05 !== 'undefined') articles.push(card_media_05);`
   - Add: `if (typeof card_events_03 !== 'undefined') articles.push(card_events_03);`

5. **Test**
   - Open newsroom page
   - Filter to Media section
   - Click "View Event" on your new media card
   - Should navigate to Events and highlight your event

---

## 📚 File Locations Reference

**Main Pages:**
- `newsroom.html` - The newsroom page with media/events cards

**Data Files:**
- `data.js` - Contains company & leadership data (NOT articles anymore)
- `data-loader.js` - Loads and aggregates all card files

**Card Files:**
- `data/media/*.js` - Media/press coverage cards
- `data/events/*.js` - Event cards
- `data/achievements/*.js` - Achievement cards
- `data/participation/*.js` - Participation cards

**Documentation:**
- `CARD_DATA_STRUCTURE.md` - How to create new cards
- `IMPLEMENTATION_CHECKLIST.md` - This file

---

## 💡 Quick Tips

1. **ID Format** - Always use lowercase with hyphens: `my-event-id` ✅, not `MyEventID` ❌
2. **Event Mapping** - Media `eventId` must exactly match Event `id`
3. **Card Variables** - Follow pattern: `card_{category}_{number}`
   - Example: `card_media_05`, `card_events_03`
4. **Single vs Multiple Images**
   - Single: `image: "path.jpg"`
   - Multiple: `images: ["path1.jpg", "path2.jpg"]`
5. **Auto-Rotation** - Media carousel auto-rotates every 5 seconds when not hovered

---

## ❓ Troubleshooting

**Q: My new media card doesn't show the event badge**
- A: Make sure `eventId` and `eventName` fields are present in the card object

**Q: Clicking "View Event" doesn't navigate to the event**
- A: Check that `eventId` in media exactly matches `id` in event card

**Q: Data not showing up at all**
- A: Make sure script tag is added to newsroom.html in correct location
- A: Check browser console for JavaScript errors (F12 → Console tab)

**Q: Want to remove event mapping from a media card?**
- A: Remove `eventId` and `eventName` fields from the card object

---

## 🚀 You're Ready!

The system is fully set up and documented. Follow the guide in `CARD_DATA_STRUCTURE.md` whenever you need to:
- Add new media articles
- Create new events
- Link them together
- Customize the display

Happy creating! 🎉
