/* ============================================================
   nav.js â€” TATER World Shared Navigation + Mega Menu
   ============================================================
   Depends on: split TATER data files (must be loaded before this file)

   Dynamic sections rendered from TATER data:
   â€¢ Business mega menu â€” company cards per sector
   â€¢ Community mega menu â€” organization cards
   â€¢ Newsroom mega menu â€” category cards
   â€¢ Footer â€” business links column
   ============================================================ */

(function () {

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const isCSRPage = currentPage === 'csr-social.html';

  /* â”€â”€ HELPER: Arrow SVG â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  const arrowSm = `<svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const arrowMd = `<svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12M8 1l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  /* â”€â”€ HELPER: Menu card â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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

  /* â”€â”€ BUILD: Business mega menu cards from TATER.companies â”€â”€ */
  function buildBusinessMegaContent() {
    return TATER.sectors.map(sector => {
      const companies = TATER.companies.filter(c => c.sector === sector.id);
      const links = companies.map(c => 
        `<a href="businesses.html#${c.id}" class="mega-brand-link">${c.name}</a>`
      ).join('');
      return `
        <div class="mega-sector-column">
          <div class="mega-sector-label">${sector.label}</div>
          <div class="mega-brands-container">
            ${links}
          </div>
        </div>
      `;
    }).join('');
  }

  /* â”€â”€ BUILD: Community mega menu cards from founder biography â”€â”€â”€â”€â”€ */
  function buildCommunityMegaContent() {
    return `
      <div class="mega-sector-column">
        <div class="mega-sector-label">Founder's Journey</div>
        <div class="mega-brands-container">
          <a href="founder_bio.html" class="mega-brand-link">Founder's Biography & Family</a>
          <a href="founder_bio.html" class="mega-brand-link">Business Leadership</a>
          <a href="founder_bio.html" class="mega-brand-link">Leadership Positions</a>
        </div>
      </div>
      <div class="mega-sector-column">
        <div class="mega-sector-label">Community Engagement</div>
        <div class="mega-brands-container">
          <a href="founder_bio.html#bjm" class="mega-brand-link">Bharat Jain Mahamandal</a>
          <a href="founder_bio.html#jito" class="mega-brand-link">JITO — Trade Organisation</a>
          <a href="founder_bio.html#sashan-sevak" class="mega-brand-link">Sashan Sevak Recognition</a>
        </div>
      </div>
      <div class="mega-sector-column">
        <div class="mega-sector-label">Social Impact Areas</div>
        <div class="mega-brands-container">
          <a href="founder_bio.html#impact" class="mega-brand-link">Education & Empowerment</a>
          <a href="founder_bio.html#impact" class="mega-brand-link">Healthcare Initiatives</a>
          <a href="founder_bio.html#impact" class="mega-brand-link">Community Development</a>
          <a href="founder_bio.html#impact" class="mega-brand-link">Knowledge & Leadership</a>

        </div>
      </div>
    `;
  }


  /* â”€â”€ BUILD: CSR mega menu cards from TATER.csrInitiatives â”€â”€â”€â”€â”€ */
  function buildCSROtherOrgLinks() {
    const initiatives = TATER.csrInitiatives || [];
    return initiatives
      .filter(initiative => initiative.name !== 'Tater World Foundation')
      .map(initiative => {
        const id = initiative.name.toLowerCase().replace(/\s+/g, '-');
        return `<a href="csr-social.html#${id}" class="mega-brand-link">${initiative.name}</a>`;
      }).join('');
  }

  function buildCSRInitiativeLinks() {
    const initiatives = TATER.csrInitiatives || [];
    const foundation = initiatives.find(initiative => initiative.name === 'Tater World Foundation');
    return foundation
      ? `<a href="csr-social.html#${foundation.name.toLowerCase().replace(/\s+/g, '-')}" class="mega-brand-link">${foundation.name}</a>`
      : '';
  }
  function buildNewsroomMegaContent() {
    const links = TATER.news.categories.map(cat => 
      `<a href="newsroom.html#${cat.id}" class="mega-brand-link">${cat.menuTitle}</a>`
    ).join('');
    return `<div class="mega-brands-container">${links}</div>`;
  }

  /* â”€â”€ BUILD: Footer business links from TATER.companies â”€â”€â”€ */
  function buildFooterBusinessLinks() {
    return TATER.companies.map(c =>
      `<li><a href="businesses.html#${c.id}">${c.name}</a></li>`
    ).join('');
  }

  /* â”€â”€ BUILD: Footer community links from TATER.csr â”€â”€â”€â”€â”€â”€â”€â”€ */
  function buildFooterCommunityLinks() {
    return TATER.csr.organizations.map(org =>
      `<li><a href="founder_bio.html#${org.id}">${org.name}</a></li>`
    ).join('');
  }

  /* â”€â”€ NAV HTML â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  const NAV_HTML = `
<nav id="navbar">
  <a href="/" class="nav-logo nav-logo-img">
    <img src="images/logos/Tater_World_gold_logo.png" alt="TATER World" class="nav-logo-image" loading="eager" decoding="async"/>
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
    <li class="nav-item" data-menu="menu-csr">
      <button class="nav-link" tabindex="0">
       Our Community
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

  <button type="button" class="hamburger" id="hamburger" aria-label="Menu" aria-expanded="false" aria-controls="mobile-nav">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- â”€â”€ MEGA: OUR STORY â€” luxury editorial layout â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
<div class="mega-menu story-mega" id="menu-story">
  <div class="story-mega-inner">
    <div class="story-mega-left">
      <div class="mega-aside-tag">Our Story</div>
      <h3>Five Decades of <em>Excellence</em></h3>
      <p>From a modest beginning in Mumbai to a multi-generational conglomerate — the TATER World story is one of trust, resilience, and vision.</p>
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
        <span class="sni-desc">Key milestones from 1981 to today — a timeline of growth, resilience, and vision</span>
        <span class="sni-arrow">${arrowMd}</span>
      </a>
      <a href="about.html#values" class="story-nav-item">
        <span class="sni-num">04</span>
        <span class="sni-label">What Defines Us</span>
        <span class="sni-desc">The four pillars — Trust, Momentum, Growth, and Future — that shape TATER World</span>
        <span class="sni-arrow">${arrowMd}</span>
      </a>
    </div>
  </div>
</div>

<!-- â”€â”€ MEGA: OUR BUSINESS (dynamic from TATER.companies) â”€ -->
<div class="mega-menu" id="menu-business">
  <div class="mega-inner">
    <div class="mega-aside">
      <div class="mega-aside-tag">Our Business</div>
      <h3>Four Sectors, One <em>Legacy</em></h3>
      <p>From the artistry of fine jewellery to the architecture of modern urban living, our businesses share a single commitment: lasting quality.</p>
      <a href="businesses.html" class="mega-view-all">View all businesses ${arrowMd}</a>
    </div>
    <div class="mega-content" id="mega-business-content"></div>
  </div>
</div>

<!-- â”€â”€ MEGA: CSR and SOCIAL (dynamic from TATER.csr) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
<div class="mega-menu" id="menu-csr">
  <div class="mega-inner">
    <div class="mega-aside">
      <div class="mega-aside-tag">CSR &amp; Social Responsibility</div>
      <h3>From Vision to <em>Impact</em></h3>
      <p>Leadership, Education & Community Welfare — Guided by strong values of compassion and responsibility, exploring community leadership initiatives, education programs, and social impact.</p>
      <a href="csr-social.html" class="mega-view-all">Explore CSR initiatives ${arrowMd}</a>
    </div>
    <div class="mega-content community-mega-content" id="mega-csr-content">
      <div class="mega-sector-column">
        <div class="mega-sector-label">Other Organisation</div>
        <div class="mega-brands-container" id="mega-csr-other-content"></div>
      </div>
      <div class="mega-sector-column">
        <div class="mega-sector-label">CSR Initiatives</div>
        <div class="mega-brands-container" id="mega-csr-initiative-content"></div>
      </div>
    </div>
  </div>
</div>

<!-- â”€â”€ MEGA: NEWSROOM (dynamic from TATER.news) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
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

<!-- â”€â”€ MEGA: QUICK LINKS (static) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
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
          <li><a href="https://www.instagram.com/shilpi_jewels/" target="_blank" rel="noopener noreferrer">Shilpi Jewellers</a></li>
          <li><a href="https://superbrealty.in/" target="_blank" rel="noopener noreferrer">Superb Realty</a></li>
          <li><a href="https://www.skylinegroup.info/" target="_blank" rel="noopener noreferrer">Skyline</a></li>
          <li><a href="https://touch22.catalog.to/" target="_blank" rel="noopener noreferrer">TOUCH 22</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- â”€â”€ OVERLAY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
<div id="nav-overlay"></div>

<!-- â”€â”€ MOBILE NAV â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ -->
<div id="mobile-nav">
  <a class="mobile-nav-link ${currentPage === 'index.html' ? 'active' : ''}" href="/">Home</a>
  <a class="mobile-nav-link ${currentPage === 'about.html' ? 'active' : ''}" href="about.html">Our Story</a>
  <a class="mobile-nav-link ${currentPage === 'businesses.html' ? 'active' : ''}" href="businesses.html">Our Business</a>
  <a class="mobile-nav-link ${currentPage === 'founder_bio.html' ? 'active' : ''}" href="founder_bio.html">Founder's Bio</a>
  <a class="mobile-nav-link ${isCSRPage ? 'active' : ''}" href="csr-social.html">CSR and Social</a>
  <a class="mobile-nav-link ${currentPage === 'newsroom.html' ? 'active' : ''}" href="newsroom.html">Newsroom</a>
  <a class="mobile-nav-link nav-cta ${currentPage === 'contact.html' ? 'active' : ''}" href="contact.html" style="color:var(--gold);margin-top:1rem;border:1px solid rgba(201,168,76,0.3);padding:1rem;text-align:center">Contact Us</a>
</div>
`;

  /* â”€â”€ FOOTER HTML (dynamic from TATER data) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  const FOOTER_HTML = `
<footer>
  <div class="footer-main">
    <div class="footer-brand">
      <img src="images/logos/Tater_World_gold_logo.png" alt="TATER World" class="footer-logo-img" loading="eager" decoding="async"/>
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
        <li><a href="founder_bio.html">Founder's Bio</a></li>
        <li><a href="csr-social.html">CSR & Social</a></li>
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
        <li><a href="https://www.instagram.com/shilpi_jewels/" target="_blank" rel="noopener noreferrer">Shilpi Jewellers</a></li>
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

  /* â”€â”€ INJECT NAV + FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  // Inject immediately - TATER data should already be loaded
  document.getElementById('nav-root').innerHTML = NAV_HTML;
  document.getElementById('footer-root').innerHTML = FOOTER_HTML;

  /* â”€â”€ INJECT DYNAMIC MEGA MENU CONTENT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  document.getElementById('mega-business-content').innerHTML = buildBusinessMegaContent();
  document.getElementById('mega-csr-other-content').innerHTML = buildCSROtherOrgLinks();
  document.getElementById('mega-csr-initiative-content').innerHTML = buildCSRInitiativeLinks();
  document.getElementById('mega-newsroom-content').innerHTML = buildNewsroomMegaContent();

  /* â”€â”€ MEGA MENU LOGIC â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
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
        'menu-community': 'founder_bio.html',
        'menu-csr': 'csr-social.html',
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

  /* â”€â”€ NEWSROOM MEGA MENU LINK HANDLER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  // Close dropdown when clicking a newsroom category link
  document.getElementById('mega-newsroom-content').addEventListener('click', (e) => {
    if (e.target.closest('.mega-brand-link')) {
      scheduleHide();
    }
  });

  /* â”€â”€ SCROLL BEHAVIOUR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  /* â”€â”€ MOBILE HAMBURGER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  document.getElementById('hamburger').addEventListener('click', () => {
    const mobileNav = document.getElementById('mobile-nav');
    const hamburger = document.getElementById('hamburger');
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  /* â”€â”€ SCROLL REVEAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
    });
  }, { threshold: 0.08 });

  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }, 100);

})();

