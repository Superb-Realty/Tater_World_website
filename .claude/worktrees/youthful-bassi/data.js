/* ================================================================
   data.js - TATER World Content Management System
   ================================================================

   This file is the single source of truth for all website content.
   The HTML pages read from this file and render themselves - you
   never need to touch HTML to update content.

   HOW TO:
   ─────────────────────────────────────────────────────────────────

   ADD A NEW COMPANY
     1. Add an object to TATER.companies (follow the schema below)
     2. Add a CSS class for its card visual in styles.css
        (e.g. .vis-mynewbrand { background: ... })
     3. That's it - businesses page, nav menu, homepage strip,
        and footer all update automatically.

   ADD A NEW SECTOR
     1. Add an object to TATER.sectors array
     2. Companies with that sector id will auto-appear under it

   ADD / EDIT A TEAM MEMBER
     → Edit TATER.leadership.mds array

   ADD / EDIT A MILESTONE
     → Edit TATER.milestones (keep in chronological order)

   ADD A NEWS ARTICLE
     → Push an object to TATER.news.articles
       { id, category, title, date, summary }
       category must match one of the category ids in TATER.news.categories

   UPDATE HERO STATS
     → Edit TATER.stats array

   ================================================================ */

const TATER = {

  /* ── SITE CONFIG ──────────────────────────────────────────── */
  site: {
    name:          "TATER World",
    tagline:       "A Legacy of Trust, A Future of Excellence",
    founded:       1980,
    location:      "Mumbai, India",
    copyright:     "© 2025 TATER World. All rights reserved. Mumbai, India.",
    sectorsFooter: "Jewellery · Real Estate · Education",
    vision:        "To build strong, sustainable, future oriented, high growth, integrated businesses that creates compelling value for all stake holders and result in significant wealth creation at all levels of the economic paradigm.",
    mission:       "To be a diversified integrated Group encompassing multiple business streams and deliver sustainable and profitable growth in multiples across each and every vertical we operate in.",
    brandPillars: [
      { word: "Trust",    desc: "Defines the Tater Conduct - the foundation every relationship and decision is built upon." },
      { word: "Momentum", desc: "Defines the Tater Attitude - a relentless drive that keeps the group growing across every cycle." },
      { word: "Growth",   desc: "The single strongest deliverable - measurable, sustainable, and shared with every stakeholder." },
      { word: "Future",   desc: "The source of all inspiration - every brand is built with tomorrow in mind." }
    ]
  },

  /* ── HERO STATS (shown on homepage) ──────────────────────── */
  stats: [
    { num: "45", sup: "+",  label: "Years of Legacy"  },
    { num: "8",  sup: "",   label: "Business Brands"   },
    { num: "2",  sup: "",   label: "Sectors"            },
    { num: "3",  sup: "rd", label: "Generation"         }
  ],

  /* ── SECTORS ─────────────────────────────────────────────── */
  /*
   * SECTOR SCHEMA:
   * ──────────────
   * id          {string}  Unique key. Used as URL anchor and to group companies.
   * label       {string}  Display name
   * number      {string}  "01", "02" etc. - shown on businesses page
   * icon        {string}  Emoji icon
   * panelClass  {string}  CSS class on the homepage sector panel (add to styles.css)
   * panelCount  {string}  Short line shown on homepage panel
   * mdLabel     {string}  Heading for the MD table on the about page
   */
  sectors: [
    {
      id:         "realestate",
      label:      "Real Estate",
      number:     "01",
      icon:       "🏢",
      panelClass: "sector-realty",
      panelCount: "2 brands · Residential & Commercial · Since 2001",
      mdLabel:    "🏢 Real Estate & Others - Managing Directors"
    },
    {
      id:         "jewellery",
      label:      "Jewellery",
      number:     "02",
      icon:       "✦",
      panelClass: "sector-jewellery",
      panelCount: "5 brands · Wholesale & Retail · Since 1983",
      mdLabel:    "✦ Jewellery - Managing Directors"
    },
  ],

  /* ── COMPANIES ───────────────────────────────────────────── */
  /*
   * COMPANY SCHEMA:
   * ───────────────
   * id            {string}    Unique key. Used as URL anchor (e.g. #shilpi-jewels)
   * name          {string}    Display name
   * sector        {string}    Must match a sector id above
   * yearDisplay   {string}    Year shown on visual panel (e.g. "1983" or "T22")
   * tagline       {string}    Short line under the year on the visual panel
   * shortDesc     {string}    1-line description for nav mega menu
   * megaIcon      {string|null} Unicode icon shown in nav card (null = no icon)
   * description   {string[]}  Paragraphs shown on businesses page
   * chips         {string[]}  Tags shown at the bottom of the company card
   * visualClass   {string}    CSS class for the visual panel (define in styles.css)
   * dark          {boolean}   true = navy background card variant
   * cardType      {string}    "jewellery" = 300px visual, "realestate" = 380px visual
   * visualExtra   {string}    Extra HTML inside the visual panel (decorative elements)
   * logo          {string|null} Path to logo PNG (e.g. "images/logos/shilpi.png")
   * photo         {string|null} Path to background photo for the visual panel
   */
  companies: [
    {
      id:          "shilpi-jewels",
      name:        "Shilpi Jewels",
      sector:      "jewellery",
      yearDisplay: "1983",
      tagline:     "Wholesale · Gold Jewellery",
      shortDesc:   "Gold jewellery wholesale, since 1983",
      megaIcon:    "◆",
      description: [
        "Shilpi Jewels, established in 1983, is a multi-award-winning gold jewellery wholesale brand renowned across India for exceptional craftsmanship, design innovation, reliability, and enduring retailer relationships spanning traditional and contemporary collections.",
      ],
      chips:       ["Gold Jewellery", "Wholesale", "IIJS Award Winner", "Global Exports"],
      visualClass: "vis-shilpi",
      dark:        false,
      cardType:    "jewellery",
      logo:        "images/logos/shilpi.png",
      photo:       "images/photos/shilpi-stall.jpeg",
      visualExtra: `<div class="vis-shilpi-inner"></div>`
    },
    {
      id:          "sejal",
      name:        "Sejal Jewellery",
      sector:      "jewellery",
      yearDisplay: "1994",
      tagline:     "Retail & Wholesale · Gold",
      shortDesc:   "Timeless gold collections, since 1994",
      megaIcon:    "✦",
      description: [
        "Sejal Jewellery, led by Mr. Vinod Tater, is a trusted Mumbai gold jewellery brand since 1993, blending timeless craftsmanship, retail excellence, antique wholesale expertise, and a strong bullion market presence."
      ],
      chips:       ["Gold Jewellery", "Retail & Wholesale", "Antique Jewellery", "Bullion"],
      visualClass: "vis-sejal",
      dark:        false,
      cardType:    "jewellery",
      logo:        "images/logos/sejal.png",
      photo:       null,
      visualExtra: `<div class="vis-lines"></div>`
    },
    {
      id:          "touch22",
      name:        "Touch 22",
      sector:      "jewellery",
      yearDisplay: "2010",
      tagline:     "Gold & CZ Jewellery · Machine-Made",
      shortDesc:   "Machine-made gold & CZ jewellery for the modern market",
      megaIcon:    "⬡",
      description: [
        "Touch 22, led by Mr. Rajnesh Mehta, blends precision machine-made gold jewellery with stylish CZ collections, delivering accessible, trend-forward designs that bridge tradition, technology, and evolving retail preferences in modern jewellery markets."
      ],
      chips:       ["Gold Jewellery", "CZ Jewellery", "Machine-Made", "Wholesale"],
      visualClass: "vis-touch",
      dark:        true,
      cardType:    "jewellery",
      logo:        "images/logos/touch22.png",
      photo:       null,
      visualExtra: `<div class="vis-lines"></div>`
    },
    {
      id:          "shine-shilpi",
      name:        "Shine Shilpi",
      sector:      "jewellery",
      yearDisplay: "2022",
      tagline:     "Wholesale · Gold & Platinum",
      shortDesc:   "Premium wholesale, gold & platinum",
      megaIcon:    "✧",
      description: [
        "Shine Shilpi, led by Mr. Pramod Mehta, advances the Shilpi legacy through intricately crafted wholesale jewellery, blending trust, quality, innovation, and superior finishing across both gold and platinum collections."
      ],
      chips:       ["Gold Jewellery", "Platinum", "Wholesale", "Intricate Detailing"],
      visualClass: "vis-shine",
      dark:        false,
      cardType:    "jewellery",
      logo:        "images/logos/shine-shilpi.png",
      photo:       "images/photos/shine-house.jpeg",
      visualExtra: `<div class="vis-lines"></div>`,
      website:     "https://www.soultara.com"

    },
    {
      id:          "soultara",
      name:        "Soultara",
      sector:      "jewellery",
      yearDisplay: "2020",
      tagline:     "Retail · Gold & Diamond",
      shortDesc:   "Exclusive gold & diamond retail collections",
      megaIcon:    "💎",
      description: [
        "Soultara, a premium retail brand, offers exclusive gold and diamond jewellery collections, blending modern elegance with timeless craftsmanship."
      ],
      chips:       ["Gold Jewellery", "Diamond", "Retail", "Exclusive Designs"],
      visualClass: "vis-soultara",
      dark:        false,
      cardType:    "jewellery",
      logo:        "images/logos/soultara.png",
      photo:       "images/photos/soultara-store.jpeg",
      visualExtra: `<div class="vis-lines"></div>`,
      website:     "https://www.soultara.com"
    },
    {
      id:          "skyline",
      name:        "Skyline Group",
      sector:      "realestate",
      yearDisplay: "1995",
      tagline:     "Residential & Commercial · Mumbai",
      shortDesc:   "Mumbai residential & commercial, since 1995",
      megaIcon:    null,
      description: [
        "Skyline Group, founded by late Mr. Jitendra Tater, has delivered 20 Mumbai projects across 20 lakh sq. ft., serving 30,000+ customers, with 8 ongoing developments reflecting strong foundations and solid fundamentals."
      ],
      chips:       ["20 Completed Projects", "20L sq. ft. Delivered", "30k+ Customers"],
      visualClass: "vis-skyline",
      dark:        true,
      cardType:    "realestate",
      logo:        "images/logos/skyline.png",
      photo:       null,
      visualExtra: `<div class="vis-skyline-art">
        <div class="skyline-block" style="height:36px"></div>
        <div class="skyline-block" style="height:55px"></div>
        <div class="skyline-block" style="height:42px"></div>
        <div class="skyline-block" style="height:65px"></div>
        <div class="skyline-block" style="height:48px"></div>
        <div class="skyline-block" style="height:70px"></div>
        <div class="skyline-block" style="height:38px"></div>
        <div class="skyline-block" style="height:52px"></div>
        <div class="skyline-block" style="height:34px"></div>
        <div class="skyline-block" style="height:58px"></div>
        <div class="skyline-block" style="height:44px"></div>
        <div class="skyline-block" style="height:30px"></div>
        <div class="skyline-block" style="height:62px"></div>
        <div class="skyline-block" style="height:40px"></div>
      </div>`
    },
    {
      id:          "superb-realty",
      name:        "Superb Realty",
      sector:      "realestate",
      yearDisplay: "2025",
      tagline:     "Premium · Future-Ready · Mumbai",
      shortDesc:   "Premium future-ready living, Mumbai 2025",
      megaIcon:    null,
      description: [
        "Superb Realty, led by Mr. Shilpin Tater, is TATER World’s premium real estate brand, developing residential and commercial spaces in Mumbai, focused on lifestyle, connectivity, innovation, and long-term investment value."
      ],
      chips:       ["Premium Residential", "Commercial", "Future-Ready","Wellness driven"],
      visualClass: "vis-superb",
      dark:        true,
      cardType:    "realestate",
      logo:        "images/logos/Superb R1_1.png",
      photo:       null,
      visualExtra: `<div class="vis-lines"></div><div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0.08"><svg width="120" height="120" viewBox="0 0 80 80" fill="none"><rect x="10" y="30" width="60" height="40" stroke="white" stroke-width="1"/><path d="M40 10L70 30H10L40 10Z" stroke="white" stroke-width="1"/><rect x="30" y="50" width="20" height="20" stroke="white" stroke-width="1"/></svg></div>`
    },
  ],

  /* ── LEADERSHIP ──────────────────────────────────────────── */
  leadership: {

    /*
     * FOUNDER SCHEMA:
     * ───────────────
     * initials    {string}   Shown in the avatar circle
     * badge       {string}   e.g. "Founder", "In Memoriam"
     * badgeStyle  {string}   Inline CSS for the badge (optional)
     * avatarStyle {string}   Inline CSS for the avatar (optional)
     * name        {string}   Full name
     * role        {string}   Title / role line
     * bio         {string[]} Paragraphs of biography
     * memoriam    {boolean}  Applies muted "in memoriam" styling to the card
     */
    founders: [
      {
        initials:    "KT",
        badge:       "Founder",
        badgeStyle:  "",
        avatarStyle: "",
        name:        "Shri Khyalilal Tater",
        role:        "Founder, TATER World Group",
        photo:       "images/Leaders/Khyalila sir.png",
        bio: [
          "A humble visionary guided by purpose, Shri Khyalilal Tater is the driving force behind TATER World's evolution into a trusted and respected enterprise. From his modest beginnings in Dhanin, Rajasthan, to building a diversified business in the heart of Mumbai, his journey is one of resilience, foresight, and determination.",
          "His efforts made TATER World synonymous with quality across real estate, jewellery, and beyond. With an appetite for innovation paired with a deep commitment to social good, he has moulded the organisation's DNA. Under his stewardship, growth was never just a business metric - it was a means to create lasting value for society."
        ],
        memoriam: false
      },
      {
        initials:    "JT",
        badge:       "In Memoriam",
        badgeStyle:  "color:rgba(201,168,76,0.6);border-color:rgba(201,168,76,0.2)",
        avatarStyle: "background:rgba(201,168,76,0.06);border-color:rgba(201,168,76,0.15)",
        name:        "Late Shri Jitendra Tater",
        role:        "Visionary Leader & Real Estate Pioneer",
        photo:       "images/Leaders/Jitendra Tater.png",
        bio: [
          "A visionary, a mentor, and the force behind TATER World's foray into real estate. Late Shri Jitendra Tater will always be remembered for his principled leadership and transformative vision.",
          "With a rare blend of pragmatism and purpose, he transformed a modest jewellery business into a diversified conglomerate and established Skyline Group in 1995, expanding the family legacy beyond jewellery. His values continue to guide TATER World's beliefs and aspirations, shaping a future built on innovation, responsibility, and community upliftment."
        ],
        memoriam: true
      }
    ],

    /*
     * MD SCHEMA:
     * ──────────
     * name     {string}  Full name
     * company  {string}  Company or companies
     * role     {string}  Title
     * sector   {string}  "jewellery" | "other" - used to group into tables on about page
     */
    mds: [
      { name: "Shilpin Tater",  company: "Superb Realty",   role: "Founder & Managing Director", sector: "realestate", photo: "images/Leaders/Shilpin .png" },
      { name: "Nikita Tater",   company: "Being Creative",  role: "Director",                    sector: "design",     photo: "images/Being_Creative/Nikita.png" },
      { name: "Padamji Soni",   company: "Shilpi Jewels",   role: "Managing Director",           sector: "jewellery",  photo: "images/Jewellry/Shilpi/Padam .png"         },
      { name: "Yogesh Soni",    company: "Shilpi Jewels",   role: "Managing Director",           sector: "jewellery",  photo: "images/Jewellry/Shilpi/Yogesh Soni.JPG"         },
      { name: "Piyush Soni",    company: "Shilpi Jewels",   role: "Managing Director",           sector: "jewellery",  photo: "images/Jewellry/Shilpi/Piyush.png"              },
      { name: "Vinod Tater",    company: "Sejal Jewellery", role: "Managing Director",           sector: "jewellery",  photo: "images/Jewellry/Sejal_Jewellery/Vinod Tater.png" },
      { name: "Sanchit Tater",  company: "Sejal Jewellery", role: "Managing Director",           sector: "jewellery",  photo: "images/Jewellry/Sejal_Jewellery/Sanchit Jain.png" },
      { name: "Saurabh Khabia", company: "Sejal Jewellery", role: "Managing Director",           sector: "jewellery",  photo: "images/Jewellry/Sejal_Jewellery/Saurabh.png" },
      { name: "Rajnesh Mehta",  company: "Touch 22",        role: "Managing Director",           sector: "jewellery",  photo: "images/Jewellry/Touch_22/Rajnesh Mehta.png"    },
      { name: "Pramod Mehta",   company: "Shine Shilpi",    role: "Managing Director",           sector: "jewellery",  photo: "images/Jewellry/Shine_Shilpi/Pramod_mehta.png"  },
      { name: "Ankita Khabia",  company: "Soultara",        role: "Managing Director",           sector: "jewellery",  photo: "images/Jewellry/SOULTARA/Ankita Khabia.JPG" }
    ]
  },

  /* ── VALUES (Six Pillars) ─────────────────────────────────── */
  values: [
    { num: "01", title: "Integrity First",           desc: "With a 50-year reputation to uphold, we understand that trust is built over decades but can be lost in a moment. We operate with absolute transparency, uncompromising honesty, and total ethical clarity." },
    { num: "02", title: "Excellence in Execution",   desc: "From the precision of a quality piece to the structural integrity of a skyline, we don't just \"do\" work; we master it. We hold ourselves to the highest standards." },
    { num: "03", title: "Ownership Mindset",         desc: "At TATER World, leadership is not a title; it is a choice. We empower our people to take initiative and treat the company's legacy as their own." },
    { num: "04", title: "Long-Term Relationships",   desc: "We prioritize people over profits. We don't chase one-off transactions; we cultivate lifelong partnerships built on deep-rooted trust and mutual respect." },
    { num: "05", title: "Hyper-Growth & Innovation", desc: "Our 50-year history is a foundation, not a finish line. We maintain a relentless drive for scale and improvement, blending tradition with cutting-edge technology." },
    { num: "06", title: "Social Responsibility",     desc: "We believe our success is measured by the impact we leave behind. Our commitment extends beyond our projects to the communities we serve." }
  ],

  /* ── MILESTONES (Timeline on About page) ─────────────────── */
  /* Add new milestones in chronological order */
  milestones: [
    { year: "1981",  event: "Prashant Jewellers",  desc: "Shri Khyalilal Tater moves from Dhanin, Rajasthan to Mumbai and establishes <strong>Prashant Jewellers</strong> - laying the cornerstone of the TATER legacy with hard work, integrity, and quiet determination." },
    { year: "1983",  event: "Shilpi Jewels",               desc: "Co-founded with brother-in-law Mr. Padam Kumar Soni, this flagship wholesale powerhouse becomes a premier industry name for contemporary and traditional gold jewellery, winning national recognition for design excellence." },
    { year: "1994",  event: "Sejal Jewellery",             desc: "The group opens its second major retail outlet, <strong>Sejal Jewellery</strong>, in Ghatkopar, Mumbai - expanding beyond wholesale to serve the city's discerning retail jewellery buyers directly." },
    { year: "1995",  event: "Skyline Group",               desc: "Mr. Jitendra Tater formally launches real estate operations under <strong>Skyline Group</strong>, transitioning the TATER name from crafting fine jewellery to crafting the horizons of Mumbai." },
    { year: "2010",  event: "Touch 22",                    desc: "Founded in 2010, TOUCH22, led by Rajneesh Mehta, blends craftsmanship and innovation to create elegant gold studded jewellery, earning global trust through quality, trendsetting designs, and strong client relationships." },
    // { year: "2013",  event: "TATER World - One Identity",  desc: "The diverse family of brands is unified under the <strong>TATER World</strong> identity - a single group name reflecting shared values of trust, momentum, growth, and future across all verticals." },
    // { year: "2016",  event: "Youngin' - Education Sector", desc: "TATER World enters early childhood education with the launch of <strong>Youngin'</strong> International Pre-School & Child Care, opening centres in Vikhroli and Ghatkopar and expanding to Nagpur." },
    { year: "2022",  event: "Shine Shilpi",                desc: "Mr. Pramod Mehta carries forward the Shilpi name with <strong>Shine Shilpi</strong> - solidifying TATER's status as top-tier wholesale with superior finishing and intricate detailing in gold and platinum." },
    { year: "2022",  event: "Being Creative",              desc: "Being Creative write up" },
    { year: "2024",  event: "SOULTARA",                    desc: "Ms. Ankita Khabia launches <strong>Soultara</strong>, the group's contemporary fine jewellery brand - designed for the modern woman and marking TATER World's entry into the conscious luxury space." },
    { year: "2025",  event: "Superb Realty",             desc: "Mr. Shilpin Tater launches <strong>Superb Realty</strong>, redefining premium living by merging his grandfather's craftsmanship and father's strategic vision with a fresh perspective on innovation and connectivity." }
  ],

  /* ── CSR & COMMUNITY ─────────────────────────────────────── */
  csr: {
    /*
     * INITIATIVE SCHEMA:
     * icon, title, desc, dark (boolean - true = navy bg tile)
     */
    initiatives: [
      { icon: "📚", title: "Education",   desc: "Jivisha School, scholarships & educational empowerment",      dark: false },
      { icon: "⚕️", title: "Healthcare",  desc: "Dialysis centre, ambulances & medical assistance",            dark: false },
      { icon: "🤝", title: "Community",   desc: "Terapanth Bhawan, Kandivali & spiritual development",         dark: false },
      { icon: "★", title: "Recognition", desc: "Honoured as \"Sashan Sevak\" by Terapanth Guru",              dark: true  }
    ],

    /*
     * ORGANIZATION SCHEMA (Community mega menu + community page)
     * id, name, icon, menuDesc, visualClass
     */
    organizations: [
      {
        id:          "bjm",
        name:        "Bharat Jain Mahamandal",
        icon:        "☸",
        menuDesc:    "Vice President & Advisor - Jain community welfare",
        visualClass: "vis-bjm"
      },
      {
        id:          "jito",
        name:        "JITO",
        icon:        "⬡",
        menuDesc:    "Jain International Trade Organisation - Chairman, Director",
        visualClass: "vis-jito"
      },
      {
        id:          "impact",
        name:        "Social Impact",
        icon:        "❋",
        menuDesc:    "Education, healthcare & community development",
        visualClass: "vis-impact"
      }
    ]
  },

  /* ── NEWSROOM ─────────────────────────────────────────────── */
  news: {
    /*
     * CATEGORY SCHEMA:
     * id, label, title, placeholder (shown when no articles),
     * menuTitle, menuDesc, menuBg (CSS gradient string), menuIcon,
     * accentBorder (top border style for the card)
     */
    categories: [
      {
        id:           "participation",
        label:        "Participation",
        title:        "Group Participations & Industry Presence",
        placeholder:  "Updates on TATER World's presence across jewellery trade events and real estate showcases - coming soon.",
        menuTitle:    "Our Participation",
        menuDesc:     "Industry events and group presence",
        menuBg:       "linear-gradient(135deg,#0a1020,#142038,#1e3050)",
        menuIcon:     "◉",
        accentBorder: "2px solid var(--gold)"
      },
      {
        id:           "events",
        label:        "Events",
        title:        "Upcoming Events & Community Occasions",
        placeholder:  "From launches to community celebrations - this section will be updated with live events from the group.",
        menuTitle:    "Events",
        menuDesc:     "Launches, exhibitions & community occasions",
        menuBg:       "linear-gradient(135deg,#100a08,#2a1a10,#4a2a10)",
        menuIcon:     "★",
        accentBorder: "2px solid rgba(201,168,76,0.4)"
      },
      {
        id:           "achievements",
        label:        "Achievements",
        title:        "Milestones, Awards & Recognitions",
        placeholder:  "Celebrating the achievements that reflect our five-decade commitment to excellence across everything we build.",
        menuTitle:    "Achievements",
        menuDesc:     "Awards, milestones & recognitions",
        menuBg:       "linear-gradient(135deg,#0a1008,#162214,#204020)",
        menuIcon:     "🏅",
        accentBorder: "2px solid rgba(201,168,76,0.2)"
      }
    ],

    /*
     * ARTICLE SCHEMA:
     * {
     *   id        {string}   Unique identifier
     *   category  {string}   Must match: "participation", "events", or "achievements"
     *   title     {string}   Card title
     *   date      {string}   Display date (e.g., "12 March 2026")
     *   summary   {string}   Short description
     *   image     {string}   Path to image/photo (relative path)
     *   link      {string}   External URL or internal link
     * }
     */
    articles: [
      {
        id:       "iijs-creative-award-2017",
        category: "achievements",
        title:    "Shilpi Jewels Wins IIJS Creative Award 2017",
        date:     "August 2017",
        summary:  "Shilpi Jewels was recognized at the India International Jewellery Show (IIJS) 2017, winning the prestigious Creative Award - a recognition of the brand's outstanding design innovation and craftsmanship in the gold jewellery wholesale category.",
        image:    "images/Newsroom_photos/Participation/Khyalilal_sir.jpg",
        link:     "https://www.shilpijewels.com"
      },
      {
        id:       "ibja-best-chain-store-wholesaler",
        category: "achievements",
        title:    "Shilpi Jewels Honoured as Best Chain Store Wholesaler of India",
        date:     "January 2017",
        summary:  "The Indian Bullion and Jewellers Association (IBJA) recognized Shilpi Jewels as the Best Chain Store Wholesaler of India - a milestone that underscores the brand's industry leadership and the trust it has earned from retailers nationwide.",
        image:    "images/Jewellry/Shilpi/shilpi-stall.jpeg",
        link:     "https://www.shilpijewels.com"
      },
            {
        id:       "ibja-best-chain-store-wholesaler",
        category: "achievements",
        title:    "Shilpi Jewels Honoured as Best Chain Store Wholesaler of India",
        date:     "January 2017",
        summary:  "The Indian Bullion and Jewellers Association (IBJA) recognized Shilpi Jewels as the Best Chain Store Wholesaler of India - a milestone that underscores the brand's industry leadership and the trust it has earned from retailers nationwide.",
        image:    "images/photos/Jewellery_Card_holder.png",
        link:     "https://www.shilpijewels.com"
      },
            {
        id:       "ibja-best-chain-store-wholesaler",
        category: "achievements",
        title:    "Shilpi Jewels Honoured as Best Chain Store Wholesaler of India",
        date:     "January 2017",
        summary:  "The Indian Bullion and Jewellers Association (IBJA) recognized Shilpi Jewels as the Best Chain Store Wholesaler of India - a milestone that underscores the brand's industry leadership and the trust it has earned from retailers nationwide.",
        image:    "images/Jewellry/Shilpi/shilpi-stall.jpeg",
        link:     "https://www.shilpijewels.com"
      },
      {
        id:       "youngin-launch-2016",
        category: "events",
        title:    "TATER World Launches Youngin' - Entering Early Childhood Education",
        date:     "June 2016",
        summary:  "TATER World expanded into a third sector with the launch of Youngin' International Pre-School & Child Care, opening its first centres in Vikhroli and Ghatkopar, Mumbai. The brand reflects the group's long-term commitment to community building and value creation.",
        image:    "images/logos/youngin.png",
        link:     "https://www.taterworld.com"
      },
      {
        id:       "skyline-30000-customers",
        category: "achievements",
        title:    "Skyline Group Crosses 30,000 Satisfied Customers",
        date:     "January 2020",
        summary:  "A landmark milestone for TATER World's real estate arm - Skyline Group has now served over 30,000 families across Mumbai, with 20 completed projects and 20,00,000 sq. ft. of possession handed over across key localities.",
        image:    "images/photos/skyline-project.jpg",
        link:     "https://www.skylinegroup.in"
      },
      {
        id:       "shilpi-iijs-2023",
        category: "participation",
        title:    "Shilpi Jewels Showcases at IIJS 2023",
        date:     "August 2023",
        summary:  "Shilpi Jewels participated in the India International Jewellery Show 2023, presenting their latest collections and networking with retailers across India's jewellery wholesale market.",
        image:    "images/Newsroom_photos/Participation/Khyalilal_sir.jpg",
        link:     "https://www.shilpijewels.com"
      },
      {
        id:       "soultara-store-opening",
        category: "events",
        title:    "Soultara Opens New Flagship Store in Mumbai",
        date:     "March 2024",
        summary:  "Soultara, TATER World's premium retail jewellery brand, inaugurated its new flagship store downtown, featuring exclusive gold and diamond collections in an elegant luxury retail environment.",
        image:    "images/Jewellry/SOULTARA/soultara-store.jpeg",
        link:     "https://www.soultara.com"
      }
    ]
  }

};
