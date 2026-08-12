# TATER World Website

Static corporate website for the TATER World group. The site is built with plain HTML, CSS, and JavaScript and is organized around shared data files for company, leadership, CSR, and newsroom content.

## Project Structure

- `index.html` - homepage
- `about.html` - company story and leadership
- `businesses.html` - company and sector cards
- `csr-social.html` - community and CSR content
- `contact.html` - contact and company links
- `founder_bio.html` - founder biography and community work
- `newsroom.html` - news, events, achievements, and media cards
- `styles.css` - shared site styling
- `nav.js` - navigation, mega menus, and footer rendering
- `data/` - structured content used across the site
- `images/` - logos, photos, and page assets

## How The Site Works

- The shared data files in `data/` populate most pages.
- `data/init.js` initializes the `TATER` namespace.
- `data/site.js` contains brand-wide content and values.
- `data/companies.js` contains the business sector and company cards.
- `data/leadership.js`, `data/founder.js`, and `data/csr.js` contain people and community data.
- `data/news.js` powers the newsroom content.
- `nav.js` renders the shared header, mega menu, and footer links.

## Editing Content

- To update company information, edit `data/companies.js`.
- To update leadership or founder details, edit `data/leadership.js` and `data/founder.js`.
- To update CSR/community content, edit `data/csr.js`.
- To update news and cards, edit `data/news.js` and the files inside `data/`.
- To adjust layout or styling, edit `styles.css` or the page-specific styles inside each HTML file.

## Local Preview

This project does not require a build step.

1. Open the HTML file directly in a browser, or
2. Use any local static server if you want cleaner page loading for assets and scripts.

## Notes

- Keep file paths relative to the repository root.
- The site uses shared scripts, so changes in `data/*.js` often affect multiple pages.
- Prefer editing the source data files rather than hardcoding content inside page markup.

