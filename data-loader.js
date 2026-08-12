/**
 * data-loader.js
 * AUTOMATIC card discovery and loading
 *
 * HOW IT WORKS:
 * 1. Drop any .js file in /data/{category}/
 * 2. Export it as: var card_category_number = { category: "...", title: "...", ... }
 * 3. Add <script> tag in newsroom.html
 * 4. It renders automatically! ✅
 *
 * No manual updates needed — collectAllCards() scans window for all card objects
 */

// Function to collect all card objects from window
function collectAllCards() {
  const articles = [];
  const cardPattern = /^card_/;  // All cards start with "card_"

  // Scan window object for all card variables
  for (let key in window) {
    // Skip if not a card variable
    if (!cardPattern.test(key)) continue;

    const card = window[key];

    // Validate it's a proper card object
    if (card && typeof card === 'object' && card.category && card.title) {
      // Avoid duplicates
      if (!articles.some(a => a.id === card.id)) {
        articles.push(card);
      }
    }
  }

  return articles;
}

// Function to parse date string to comparable format
function parseDate(dateStr) {
  // Handle formats like "March 2026", "January 2026", etc.
  const months = {
    'january': 1, 'february': 2, 'march': 3, 'april': 4,
    'may': 5, 'june': 6, 'july': 7, 'august': 8,
    'september': 9, 'october': 10, 'november': 11, 'december': 12
  };
  
  const parts = dateStr.toLowerCase().split(/\s+/);
  const month = months[parts[0]] || 0;
  const year = parseInt(parts[1]) || 0;
  
  return year * 100 + month; // Returns comparable number (e.g., 202603 for March 2026)
}

// Function to populate articles
function populateArticles() {
  // Collect all dynamically loaded cards
  const articles = collectAllCards();

  // Sort by category, then by date (newest first) within each category
  const categoryOrder = ['participation', 'events', 'achievements', 'media'];
  articles.sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a.category);
    const bIndex = categoryOrder.indexOf(b.category);
    
    // First sort by category
    if (aIndex !== bIndex) {
      return aIndex - bIndex;
    }
    
    // Within same category, sort by date (newest first)
    const aDate = parseDate(a.date || '');
    const bDate = parseDate(b.date || '');
    return bDate - aDate; // Descending order (newest first)
  });

  // Assign to TATER.news
  if (TATER && TATER.news) {
    TATER.news.articles = articles;
  }
}

// Execute immediately after all scripts are loaded (data-loader.js is loaded last in newsroom.html)
// This ensures articles are available before DOMContentLoaded listeners fire
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', populateArticles);
} else {
  // If DOM is already ready, populate immediately
  populateArticles();
}

// Also bind to load event as backup to ensure cards are there
window.addEventListener('load', populateArticles);
