# MediaCard Component - Updated Structure & Styling

## Overview
The MediaCard component has been refactored with a **fixed container, content-adapts** approach. The card maintains consistent dimensions while all content (title, image, snippet) truncates and adapts to fit.

---

## Card Structure

### 1. **CARD WRAPPER** (.media-card)
```
Background: #FAF7F2 (warm off-white)
Border: 1px solid #e5e0d8
Border-radius: 16px
Width: 100% of grid column
Height: Auto (determined by content)
Overflow: hidden
```

**Hover State:**
- Border color → #8B6914
- Box shadow → 0 12px 32px rgba(0,0,0,0.15)

---

### 2. **TITLE SECTION** (.media-card-title-bar)
```
Padding: 20px 24px
Background: #FAF7F2
Font: Cormorant Garamond, serif
Font-size: 20px
Font-weight: 500
Color: #1a1410
Line-height: 1.4
Text clamping: 2 lines max (webkit-line-clamp: 2)
Text truncation: ellipsis
```

**Responsive:**
- Tablet (640-1024px): 18px font-size, 20px horizontal padding
- Mobile (<640px): 17px font-size, 16px horizontal padding

---

### 3. **IMAGE SECTION** (.media-card-image-wrapper + .media-card-image)
```
Container padding: 0 24px 16px 24px (creates inset effect)
Image border-radius: 12px
Image height: 220px (desktop)
Image object-fit: cover
Image object-position: center
Gap below image: 16px (to metadata row)
```

**Responsive Heights:**
- Tablet (640-1024px): 180px height, 14px side margin
- Mobile (<640px): 160px height, 12px side margin

**Image Hover:**
- Scale: 1.03 (subtle zoom on hover)

---

### 4. **METADATA ROW** (.media-card-metadata)
```
Padding: 0 24px 16px 24px
Display: flex
Justify-content: space-between
Align-items: center
```

**Date Pill** (.media-card-date-pill)
```
Padding: 8px 16px
Border: 1px solid #c8b89a
Border-radius: 999px (full pill)
Font-size: 13px
Font-weight: 600
Color: #1a1410
Background: transparent
Text-transform: uppercase
Letter-spacing: 0.04em
White-space: nowrap
```

**Tags Pill** (.media-card-tags-pill)
```
Same as date pill
Max-width: 220px
Text-align: right
Text overflow: ellipsis
```

---

### 5. **DIVIDER** (.media-card-divider)
```
Height: 1px
Background: #e5e0d8
Margin: 0 24px (inset, not full-width)
```

**Responsive:**
- Tablet: Margin 0 20px
- Mobile: Margin 0 16px

---

### 6. **SNIPPET SECTION** (.media-card-snippet)
```
Padding: 16px 24px 8px 24px
Font-size: 14px
Font-weight: 300
Line-height: 1.6
Color: #555
Text clamping: 3 lines max (webkit-line-clamp: 3)
Text truncation: ellipsis
```

**Responsive:**
- Tablet: 20px horizontal padding
- Mobile: 16px horizontal padding

---

### 7. **READ MORE BUTTON** (.media-card-button-wrapper + .media-card-read-more)
```
Container padding: 0 24px 24px 24px
Button padding: 8px 16px
Border: 1px solid #8B6914
Border-radius: 8px
Font-size: 12px
Font-weight: 700
Color: #8B6914
Background: transparent
Letter-spacing: 0.08em
Text-transform: uppercase
Cursor: pointer
Text: "READ MORE →"
```

**Hover State:**
- Background: rgba(139, 105, 20, 0.08)
- Border color: #6B5410
- Text color: #6B5410

**Responsive:**
- Tablet: 20px horizontal padding
- Mobile: 16px horizontal padding

---

## Grid Layout

### Desktop (≥1024px)
```
Grid columns: 2 (for media cards)
Gap: 1.5rem (24px)
```

### Tablet (640px – 1024px)
```
Grid columns: 2 (for media cards)
Gap: 1.25rem (20px)
```

### Mobile (<640px)
```
Grid columns: 1 (single column)
Gap: 1rem (16px)
```

---

## Key Design Principles

### 1. **Fixed Container, Adaptive Content**
- Card dimensions are fixed and responsive per breakpoint
- Text, images, buttons fit/truncate within the card
- Nothing stretches the card

### 2. **Visual Hierarchy**
- Title (prominent, 2-line max)
- Image (prominent, fixed heights)
- Metadata (secondary, pill badges)
- Snippet (tertiary, 3-line max)
- CTA button (action item)

### 3. **Whitespace Management**
- Consistent padding throughout: 24px (desktop), 20px (tablet), 16px (mobile)
- 16px gaps between major sections (image-to-metadata, divider spacing)
- Margins create breathing room

### 4. **Color Palette**
- Card bg: #FAF7F2 (warm off-white)
- Border: #e5e0d8 (subtle neutral)
- Text: #1a1410 (dark brown)
- Secondary text: #555 (mid-gray)
- Accent: #8B6914 (warm gold/brown)
- Hover border: #8B6914

---

## CSS Classes Summary

```
.media-card                     // Card wrapper
.media-card-title-bar           // Title section
.media-card-title               // Title text
.media-card-image-wrapper       // Image container with padding
.media-card-image               // Image element
.media-card-image.placeholder   // Empty state
.media-card-metadata            // Date + tags row
.media-card-date-pill           // Date badge
.media-card-tags-pill           // Tags badge
.media-card-divider             // Separator line
.media-card-snippet             // Snippet section
.media-card-snippet-text        // Snippet text
.media-card-button-wrapper      // Button container
.media-card-read-more           // CTA button
```

---

## Responsive Behavior

All elements respond gracefully to three breakpoints:

| Breakpoint | Width | Columns | Gap | Title Font | Image Height |
|-----------|-------|---------|-----|------------|--------------|
| Mobile | <640px | 1 | 16px | 17px | 160px |
| Tablet | 640-1024px | 2 | 20px | 18px | 180px |
| Desktop | >1024px | 2 | 24px | 20px | 220px |

---

## Implementation Notes

- All padding and spacing are applied via explicit pixel values (not CSS variables) for maximum control
- Border-radius uses 16px for card, 12px for image, 8px for button
- Font weights: 300 (light), 500 (title), 600 (badges), 700 (button)
- Transitions: 0.4s ease (default), 0.3s ease (button/text)
- Hover effects are subtle (scale 1.03, shadow 12px)
