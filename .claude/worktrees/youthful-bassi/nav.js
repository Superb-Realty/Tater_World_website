/* ============================================================
   nav.js - TATER World Shared Navigation + Mega Menu
   ============================================================
   Depends on: data.js (must be loaded before this file)

   Dynamic sections rendered from TATER (data.js):
   • Business mega menu - company cards per sector
   • Community mega menu - organization cards
   • Newsroom mega menu - category cards
   • Footer - business links column
   ============================================================ */

(function () {

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  /* ── HELPER: Arrow SVG ──────────────────────────────────── */
  const arrowSm = `<svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const arrowMd = `<svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12M8 1l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  /* ── HELPER: Menu card ──────────────────────────────────── */
  function menuCard({ href, visualClass, visualStyle, visualExtra, megaIcon, logo, name, desc, cta }) {
    // If logo provided, display transparent PNG directly on the gradient panel
    const logoHtml = logo
      ? `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:1rem">
           <img src="${logo}" alt="${name}" loading="lazy"
             style="max-height:400px;max-width:130px;object-fit:contain;display:block;filter:drop-shadow(0 2px 8px rgba(0,0,0,0.5))"/>
         </div>`
      : (megaIcon ? `<div class="vis-geo" style="font-size:3rem;opacity:0.1">${megaIcon}</div>` : '');
    return `
      <a href="${href}" class="menu-card">
        <div class="menu-card-visual ${visualClass || ''}" ${visualStyle ? `style="${visualStyle}"` : ''}>
          ${visualExtra || ''}${logoHtml}
        </div>
        <div class="menu-card-body">
          <div class="menu-card-name">${name}</div>
          <div class="menu-card-desc">${desc}</div>
          <div class="menu-card-arrow">${cta || 'View'} ${arrowSm}</div>
        </div>
      </a>
    `;
  }

  /* ── BUILD: Business mega menu cards from TATER.companies ── */
  function buildBusinessMegaContent() {
    return TATER.sectors.map(sector => {
      const companies = TATER.companies.filter(c => c.sector === sector.id);
      const links = companies.map(c => 
        `<a href="businesses.html#${c.id}" class="mega-brand-link">${c.name}</a>`
      ).join('');
      return `
        <div class="mega-sector-label">${sector.icon} &nbsp; ${sector.label}</div>
        <div class="mega-brands-container">
          ${links}
        </div>
      `;
    }).join('');
  }

  /* ── BUILD: Community mega menu cards from TATER.csr ───── */
  function buildCommunityMegaContent() {
    const links = TATER.csr.organizations.map(org => 
      `<a href="community.html#${org.id}" class="mega-brand-link">${org.name}</a>`
    ).join('');
    return `<div class="mega-brands-container">${links}</div>`;
  }

  /* ── BUILD: Newsroom mega menu cards from TATER.news ───── */
  function buildNewsroomMegaContent() {
    const links = TATER.news.categories.map(cat => 
      `<a href="newsroom.html#${cat.id}" class="mega-brand-link">${cat.menuTitle}</a>`
    ).join('');
    return `<div class="mega-brands-container">${links}</div>`;
  }

  /* ── BUILD: Footer business links from TATER.companies ─── */
  function buildFooterBusinessLinks() {
    return TATER.companies.map(c =>
      `<li><a href="businesses.html#${c.id}">${c.name}</a></li>`
    ).join('');
  }

  /* ── BUILD: Footer community links from TATER.csr ──────── */
  function buildFooterCommunityLinks() {
    return TATER.csr.organizations.map(org =>
      `<li><a href="community.html#${org.id}">${org.name}</a></li>`
    ).join('');
  }

  /* ── NAV HTML ─────────────────────────────────────────────── */
  const NAV_HTML = `
<nav id="navbar">
  <a href="index.html" class="nav-logo nav-logo-img">
    <img src="images/logos/tater-world.png" alt="TATER World" class="nav-logo-image"/>
    <span class="nav-logo-fallback">TATER <span>World</span></span>
  </a>

  <ul class="nav-items">
    <li class="nav-item" data-menu="menu-story">
      <button class="nav-link ${currentPage === 'about.html' ? 'active' : ''}" tabindex="0">
        Our Story
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </button>
    </li>
    <li class="nav-item" data-menu="menu-business">
      <button class="nav-link ${currentPage === 'businesses.html' ? 'active' : ''}" tabindex="0">
        Our Business
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </button>
    </li>
    <li class="nav-item" data-menu="menu-community">
      <button class="nav-link ${currentPage === 'community.html' ? 'active' : ''}" tabindex="0">
        Community
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </button>
    </li>
    
    <li class="nav-item" data-menu="menu-newsroom">
      <button class="nav-link ${currentPage === 'newsroom.html' ? 'active' : ''}" tabindex="0">
        Newsroom
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </button>
    </li>
    <li class="nav-item">
      <a href="contact.html" class="nav-link nav-cta ${currentPage === 'contact.html' ? 'active' : ''}">Contact Us</a>
    </li>
  </ul>

  <div class="hamburger" id="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </div>
</nav>

<!-- ── MEGA: OUR STORY - luxury editorial layout ─────────── -->
<div class="mega-menu story-mega" id="menu-story">
  <div class="story-mega-inner">
    <div class="story-mega-left">
      <div class="mega-aside-tag">Our Story</div>
      <h3>Five Decades of <em>Excellence</em></h3>
      <p>From a modest beginning in Mumbai to a multi-generational conglomerate - the TATER World story is one of trust, resilience, and vision.</p>
      <a href="about.html" class="mega-view-all">Explore our story ${arrowMd}</a>
    </div>
    <div class="story-mega-right">
      <a href="about.html#about-us" class="story-nav-item">
        <span class="sni-num">01</span>
        <span class="sni-label">Who We Are</span>
        <span class="sni-desc">The foundation of our five-decade journey across jewellery, real estate, and beyond</span>
        <span class="sni-arrow">${arrowMd}</span>
      </a>
      <a href="about.html#leadership" class="story-nav-item">
        <span class="sni-num">02</span>
        <span class="sni-label">Our Leadership</span>
        <span class="sni-desc">The founders, visionaries, and managing directors driving TATER World forward</span>
        <span class="sni-arrow">${arrowMd}</span>
      </a>
      <a href="about.html#milestone" class="story-nav-item">
        <span class="sni-num">03</span>
        <span class="sni-label">Our Journey</span>
        <span class="sni-desc">Key milestones from 1981 to today - a timeline of growth, resilience, and vision</span>
        <span class="sni-arrow">${arrowMd}</span>
      </a>
      <a href="about.html#values" class="story-nav-item">
        <span class="sni-num">04</span>
        <span class="sni-label">Vision &amp; Values</span>
        <span class="sni-desc">The six principles that define how we think, build, and create lasting value</span>
        <span class="sni-arrow">${arrowMd}</span>
      </a>
    </div>
  </div>
</div>

<!-- ── MEGA: OUR BUSINESS (dynamic from TATER.companies) ─ -->
<div class="mega-menu" id="menu-business">
  <div class="mega-inner">
    <div class="mega-aside">
      <div class="mega-aside-tag">Our Business</div>
      <h3>Two Sectors, One <em>Legacy</em></h3>
      <p>From the artistry of fine jewellery to the architecture of modern urban living, our businesses share a single commitment: lasting quality.</p>
      <a href="businesses.html" class="mega-view-all">View all businesses ${arrowMd}</a>
    </div>
    <div class="mega-content" id="mega-business-content"></div>
  </div>
</div>

<!-- ── MEGA: COMMUNITY (dynamic from TATER.csr) ─────────── -->
<div class="mega-menu" id="menu-community">
  <div class="mega-inner">
    <div class="mega-aside">
      <div class="mega-aside-tag">Community &amp; CSR</div>
      <h3>Impact Beyond <em>Business</em></h3>
      <p>Shri Khyalilal Tater's leadership extends far beyond commerce - into education, healthcare, and the spiritual fabric of the Jain community.</p>
      <a href="community.html" class="mega-view-all">Explore community work ${arrowMd}</a>
    </div>
    <div class="mega-content" id="mega-community-content"></div>
  </div>
</div>

<!-- ── MEGA: NEWSROOM (dynamic from TATER.news) ──────────── -->
<div class="mega-menu" id="menu-newsroom">
  <div class="mega-inner">
    <div class="mega-aside">
      <div class="mega-aside-tag">Newsroom</div>
      <h3>Stay <em>Informed</em></h3>
      <p>Updates, achievements, and events from across the TATER World family of companies and community associations.</p>
      <a href="newsroom.html" class="mega-view-all">Visit newsroom ${arrowMd}</a>
    </div>
    <div class="mega-content" id="mega-newsroom-content"></div>
  </div>
</div>

<!-- ── MEGA: QUICK LINKS (static) ─────────────────────────── -->
<div class="mega-menu" id="menu-quicklinks">
  <div class="mega-inner">
    <div class="mega-aside">
      <div class="mega-aside-tag">Quick links</div>
      <h3>Partner websites</h3>
      <p>Click to visit each brand website directly.</p>
    </div>
    <div class="mega-content">
      <div class="mega-cards">
        <ul class="quicklinks-list">
          <li><a href="https://shineshilpi.com/" target="_blank" rel="noopener noreferrer">Shine Shilpi Jewellers</a></li>
          <li><a href="https://shilpijewellers.in/" target="_blank" rel="noopener noreferrer">Shilpi Jewellers</a></li>
          <li><a href="https://superbrealty.in/" target="_blank" rel="noopener noreferrer">Superb Realty</a></li>
          <li><a href="https://www.skylinegroup.info/" target="_blank" rel="noopener noreferrer">Skyline</a></li>
          <li><a href="https://touch22.catalog.to/" target="_blank" rel="noopener noreferrer">TOUCH 22</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- ── OVERLAY ────────────────────────────────────────────── -->
<div id="nav-overlay"></div>

<!-- ── MOBILE NAV ─────────────────────────────────────────── -->
<div id="mobile-nav">
  <a class="mobile-nav-link ${currentPage === 'index.html' ? 'active' : ''}" href="index.html">Home</a>
  <a class="mobile-nav-link ${currentPage === 'about.html' ? 'active' : ''}" href="about.html">Our Story</a>
  <a class="mobile-nav-link ${currentPage === 'businesses.html' ? 'active' : ''}" href="businesses.html">Our Business</a>
  <a class="mobile-nav-link ${currentPage === 'community.html' ? 'active' : ''}" href="community.html">Community</a>
  <a class="mobile-nav-link ${currentPage === 'newsroom.html' ? 'active' : ''}" href="newsroom.html">Newsroom</a>
  <a class="mobile-nav-link nav-cta ${currentPage === 'contact.html' ? 'active' : ''}" href="contact.html" style="color:var(--gold);margin-top:1rem;border:1px solid rgba(201,168,76,0.3);padding:1rem;text-align:center">Contact Us</a>
</div>
`;

  /* ── FOOTER HTML (dynamic from TATER data) ──────────────── */
  const FOOTER_HTML = `
<footer>
  <div class="footer-main">
    <div class="footer-brand">
      <img src="images/logos/tater-world.png" alt="TATER World" class="footer-logo-img"/>
      <p class="footer-tagline">"${TATER.site.tagline}"</p>
    </div>
    <div>
      <div class="footer-col-title">Our Story</div>
      <ul class="footer-links">
        <li><a href="about.html#about-us">Who We Are</a></li>
        <li><a href="about.html#leadership">Our Leadership</a></li>
        <li><a href="about.html#milestone">Our Journey</a></li>
        <li><a href="about.html#values">Vision &amp; Values</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Our Business</div>
      <ul class="footer-links">
        ${buildFooterBusinessLinks()}
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Community</div>
      <ul class="footer-links">
        ${buildFooterCommunityLinks()}
      </ul>
      <div class="footer-col-title" style="margin-top:1.5rem">Connect</div>
      <ul class="footer-links">
        <li><a href="newsroom.html">Newsroom</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Quick links</div>
      <ul class="footer-links">
        <li><a href="https://shineshilpi.com/" target="_blank" rel="noopener noreferrer">Shine Shilpi Jewellers</a></li>
        <li><a href="https://shilpijewellers.in/" target="_blank" rel="noopener noreferrer">Shilpi Jewellers</a></li>
        <li><a href="https://superbrealty.in/" target="_blank" rel="noopener noreferrer">Superb Realty</a></li>
        <li><a href="https://www.skylinegroup.info/" target="_blank" rel="noopener noreferrer">Skyline</a></li>
        <li><a href="https://touch22.catalog.to/" target="_blank" rel="noopener noreferrer">TOUCH 22</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">${TATER.site.copyright}</span>
    <span class="footer-copy" style="opacity:0.5">Est. ${TATER.site.founded} &nbsp;·&nbsp; ${TATER.site.sectorsFooter}</span>
  </div>
</footer>
`;

  /* ── INJECT NAV + FOOTER ──────────────────────────────────── */
  document.getElementById('nav-root').innerHTML = NAV_HTML;
  document.getElementById('footer-root').innerHTML = FOOTER_HTML;

  /* ── INJECT DYNAMIC MEGA MENU CONTENT ────────────────────── */
  document.getElementById('mega-business-content').innerHTML = buildBusinessMegaContent();
  document.getElementById('mega-community-content').innerHTML = buildCommunityMegaContent();
  document.getElementById('mega-newsroom-content').innerHTML = buildNewsroomMegaContent();

  /* ── MEGA MENU LOGIC ──────────────────────────────────────── */
  let hideTimer = null;
  let currentMenu = null;

  function showMenu(menuId) {
    clearTimeout(hideTimer);
    if (currentMenu && currentMenu !== menuId) {
      document.getElementById(currentMenu).classList.remove('visible');
    }
    currentMenu = menuId;
    document.getElementById(menuId).classList.add('visible');
    document.getElementById('nav-overlay').classList.add('visible');
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('open', item.dataset.menu === menuId);
    });
  }

  function scheduleHide() {
    hideTimer = setTimeout(() => {
      if (currentMenu) {
        document.getElementById(currentMenu).classList.remove('visible');
        currentMenu = null;
      }
      document.getElementById('nav-overlay').classList.remove('visible');
      document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('open'));
    }, 120);
  }

  document.querySelectorAll('.nav-item[data-menu]').forEach(item => {
    const menuId = item.dataset.menu;
    item.addEventListener('mouseenter', () => showMenu(menuId));
    item.addEventListener('mouseleave', scheduleHide);
    item.querySelector('button')?.addEventListener('click', () => {
      // Navigation mapping for nav items
      const navLinks = {
        'menu-story': 'about.html',
        'menu-business': 'businesses.html',
        'menu-community': 'community.html',
        'menu-newsroom': 'newsroom.html'
      };
      
      if (navLinks[menuId]) {
        window.location.href = navLinks[menuId];
      } else {
        // Fallback: toggle menu if no navigation link
        const menu = document.getElementById(menuId);
        if (menu.classList.contains('visible')) { scheduleHide(); } else { showMenu(menuId); }
      }
    });
  });

  document.querySelectorAll('.mega-menu').forEach(menu => {
    menu.addEventListener('mouseenter', () => clearTimeout(hideTimer));
    menu.addEventListener('mouseleave', scheduleHide);
  });

  document.getElementById('nav-overlay').addEventListener('click', scheduleHide);

  /* ── SCROLL BEHAVIOUR ──────────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  /* ── MOBILE HAMBURGER ──────────────────────────────────────── */
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobile-nav').classList.toggle('open');
  });

  /* ── SCROLL REVEAL ─────────────────────────────────────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
    });
  }, { threshold: 0.08 });

  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }, 100);

})();
