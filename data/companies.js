/* Business sectors and company profiles. */

TATER.sectors = [
     {
      id: "realestate",
      label: "Real Estate",
      number: "01",
      icon: "△",
      panelClass: "sector-realty",
      panelCount: "Residential & Commercial",
      mdLabel: " Real Estate & Others — Managing Directors"
    },
    {
      id: "jewellery",
      label: "Jewellery",
      number: "02",
      icon: "◇",
      panelClass: "sector-jewellery",
      panelCount: "Wholesale & Retail",
      mdLabel: "◇ Jewellery — Managing Directors"
    },

    {
      id: "finance",
      label: "Finance",
      number: "03",
      icon: "⊕",
      panelClass: "sector-finance",
      panelCount: "Venture Capital & Investments",
      mdLabel: " Finance — Managing Directors"
    },
    {
      id: "emerging",
      label: "Emerging Sectors",
      number: "04",
      icon: "✺",
      panelClass: "sector-emerging",
      panelCount: "Coming soon...",
      mdLabel: " Emerging Sectors — Managing Directors"
    },
  ];

TATER.companies = [
    {
      id: "shilpi-jewels",
      name: "Shilpi Jewels",
      sector: "jewellery",
      yearDisplay: "1983",
      tagline: "Wholesale · Gold Jewellery",
      shortDesc: "Gold jewellery wholesale, since 1983",
      megaIcon: "◈",
      description: [
        "Shilpi Jewels, led by Padam Soni and Piyush Soni, is a multi-award-winning gold jewellery wholesale brand, established in 1983, known for its craftsmanship, design innovation, and strong retailer relationships across India."      

],
      chips: ["Gold Jewellery", "Wholesale"],
      visualClass: "vis-shilpi",
      dark: false,
      cardType: "jewellery",
      logo: "images/logos/shilpi.png",
      photo: "images/photos/shilpi-stall.jpeg",
      visualExtra: `<div class="vis-shilpi-inner"></div>`,
      website: "https://www.instagram.com/shilpi_jewels/"
    },
    {
      id: "sejal",
      name: "Sejal Jewellery",
      sector: "jewellery",
      yearDisplay: "1994",
      tagline: "Retail & Wholesale · Gold",
      shortDesc: "Timeless gold collections, since 1994",
      megaIcon: "◇",
      description: [
"Sejal Jewellery, led by Vinod Tater, is a trusted gold jewellery brand since 1995, built on a legacy of trust and craftsmanship, offering finely crafted pieces that blend timeless elegance with modern sensibilities and enduring traditions."],
      chips: ["Retail & Wholesale", "Antique Jewellery"],
      visualClass: "vis-sejal",
      dark: false,
      cardType: "jewellery",
      logo: "images/logos/sejal.png",
      photo: null,
      visualExtra: `<div class="vis-lines"></div>`,
      website: "https://www.instagram.com/sejal.jewellery/"
    },
    {
      id: "touch22",
      name: "Touch 22",
      sector: "jewellery",
      yearDisplay: "2010",
      tagline: "Gold & CZ Jewellery · Machine-Made",
      shortDesc: "Machine-made gold & CZ jewellery for the modern market",
      megaIcon: "⬡",
      description: [
        "Touch 22, led by Rajneesh Mehta, blends precision machine-made gold jewellery with stylish CZ collections, delivering accessible, trend-forward designs that bridge tradition, technology, and evolving retail preferences."
      ],
      chips: ["CZ Jewellery", "Manufacturer"],
      visualClass: "vis-touch",
      dark: true,
      cardType: "jewellery",
      logo: "images/logos/touch22.png",
      photo: null,
      visualExtra: `<div class="vis-lines"></div>`,
      website: "https://touch22.catalog.to/"
    },
    {
      id: "shine-shilpi",
      name: "Shine Shilpi",
      sector: "jewellery",
      yearDisplay: "2022",
      tagline: "Wholesale · Gold & Platinum",
      shortDesc: "Premium wholesale, gold & platinum",
      megaIcon: "✸",
      description: ["ShineShilpi, led by Pramod Mehta, is a premier B2B jewellery powerhouse offering a responsible supply chain across gold, platinum, and silver jewellery through its exclusive Shine Collections, while driving global standards in craftsmanship, quality, and integrity."],
      chips: ["Gold, Platinum & Silver Jewellery", "Wholesale Supplier"],
      visualClass: "vis-shine",
      dark: false,
      cardType: "jewellery",
      logo: "images/logos/shine-shilpi.png",
      photo: "images/photos/shine-house.jpeg",
      visualExtra: `<div class="vis-lines"></div>`,
      website: "https://shineshilpi.com/"
    },
    {
      id: "soultara",
      name: "Soultara",
      sector: "jewellery",
      yearDisplay: "2025",
      tagline: "Retail · Gold & Diamond",
      shortDesc: "ExcluSterling Silver jewellery retail collections",
      megaIcon: "◉",
      description: [
        "SOULTARA, led by Ankita Khabia, is a contemporary jewellery brand offering 92.5 sterling silver pieces that transform everyday adornment into a ritual of self-love, celebrating the modern woman’s individuality through elegant, versatile, and expressive designs."
      ],
      chips: ["92.5 Sterling Silver", "Contemporary Design", "E-Commerce"],
      visualClass: "vis-soultara",
      dark: false,
      cardType: "jewellery",
      logo: "images/logos/SOULTARA.png",
      photo: "images/photos/soultara-store.jpeg",
      visualExtra: `<div class="vis-lines"></div>`,
      website: "https://www.instagram.com/soultara.me/"
    },
    {
      id: "skyline",
      name: "Skyline Group",
      sector: "realestate",
      yearDisplay: "1995",
      tagline: "Residential & Commercial · Mumbai",
      shortDesc: "Mumbai residential & commercial, since 1995",
      megaIcon: "△",
      description: [
        `Skyline Group, founded by Late Jitendra Tater, has delivered 20 projects in Mumbai across 50 lakh sq. ft., serving 30,000+ customers, with 3 ongoing developments reflecting strong foundations and solid fundamentals.`
      ],
      chips: ["Residential Projects", "Commercial Spaces", "Mumbai Redevelopment"],
      visualClass: "vis-skyline",
      dark: true,
      cardType: "realestate",
      logo: "images/logos/skyline.png",
      photo: null,
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
      </div>`,
      website: "https://www.skylinegroup.info/"
    },
    {
      id: "superb-realty",
      name: "Superb Realty",
      sector: "realestate",
      yearDisplay: "2025",
      tagline: "Premium · Future-Ready · Mumbai",
      shortDesc: "Premium future-ready living, Mumbai 2025",
      megaIcon: "◫",
      description: [
        "Superb Realty, led by Shilpin Tater, is TATER World’s premium real estate brand, developing future ready residential and commercial spaces in Mumbai, guided by its four pillars, technology, wellness, design, and sustainability."
      ],
      chips: ["Premium Residential", "A-Grade Commercial"],
      visualClass: "vis-superb",
      dark: true,
      cardType: "realestate",
      logo: "images/logos/Superb R1_1.png",
      photo: null,
      visualExtra: `<div class="vis-lines"></div><div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0.08"><svg width="120" height="120" viewBox="0 0 80 80" fill="none"><rect x="10" y="30" width="60" height="40" stroke="white" stroke-width="1"/><path d="M40 10L70 30H10L40 10Z" stroke="white" stroke-width="1"/><rect x="30" y="50" width="20" height="20" stroke="white" stroke-width="1"/></svg></div>`,
      website: "https://superbrealty.in/"
    },
    {
      id: "superb-capital",
      name: "Superb Capital",
      sector: "finance",
      yearDisplay: "2021",
      tagline: "Venture Capital · Investment Fund",
      shortDesc: "Venture capital and strategic investments",
      megaIcon: "⊕",
      description: [
        "Superb Capital is TATER World's venture capital and investment platform led by Shilpin Tater, identifying and backing high-growth startups and emerging businesses across key sectors with strategic expertise and long-term value creation."
      ],
      chips: ["Venture Capital", "Growth Investments", "Strategic Backing"],
      visualClass: "vis-superb-capital",
      dark: false,
      cardType: "finance",
      logo: "images/logos/superb_capital.png",
      photo: null,
      visualExtra: `<div class="vis-lines"></div>`,
      website: "https://www.superbcapital.in/"

    },
    {
      id: "being-creative",
      name: "Being CreARTive",
      sector: "emerging",
      yearDisplay: "2020",
      tagline: "Abstract Art · Interior Design",
      shortDesc: "Abstract art house & interior design, founded 2020",
      megaIcon: "✺",
      description: [
        "Being creARTive, founded in 2020 by Nikita Tater, is a contemporary art brand known for its vibrant and expressive style, with works showcased at leading galleries in India and international exhibitions across Spain, New York, and Dubai.",
         ],
      chips: ["Contemporary Art", "Acrylic Mosaic"],
      visualClass: "vis-being-creative",
      dark: false,
      cardType: "emerging",
      logo: "images/logos/being-creative.png",
      photo: null,
      visualExtra: `<div class="vis-lines"></div>`,
      website: "https://www.instagram.com/nikitaterart/⁠"

    },
  ];
