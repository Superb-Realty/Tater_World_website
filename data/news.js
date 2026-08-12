/* Newsroom categories and fallback article data. */

TATER.news = {
    /*
     * CATEGORY SCHEMA:
     * id, label, title, placeholder (shown when no articles),
     * menuTitle, menuDesc, menuBg (CSS gradient string), menuIcon,
     * accentBorder (top border style for the card)
     */
    categories: [
      {
        id: "participation",
        label: "Participation",
        title: "Group Participations & Industry Presence",
        placeholder: "Updates on TATER World's presence across jewellery trade events and real estate showcases.",
        menuTitle: "Our Participation",
        menuDesc: "Industry events and group presence",
        menuBg: "linear-gradient(135deg,#0a1020,#142038,#1e3050)",
        menuIcon: "◉",
        accentBorder: "2px solid var(--gold)"
      },
      {
        id: "events",
        label: "Events",
        title: "Upcoming Events & Community Occasions",
        placeholder: "From launches to community celebrations — this section will be updated with live events from the group.",
        menuTitle: "Events",
        menuDesc: "Launches, exhibitions & community occasions",
        menuBg: "linear-gradient(135deg,#100a08,#2a1a10,#4a2a10)",
        menuIcon: "★",
        accentBorder: "2px solid rgba(201,168,76,0.4)"
      },
      {
        id: "achievements",
        label: "Achievements",
        title: "Milestones, Awards & Recognitions",
        placeholder: "Celebrating the achievements that reflect our five-decade commitment to excellence across everything we build.",
        menuTitle: "Achievements",
        menuDesc: "Awards, milestones & recognitions",
        menuBg: "linear-gradient(135deg,#0a1008,#162214,#204020)",
        menuIcon: "🏅",
        accentBorder: "2px solid rgba(201,168,76,0.2)"
      },
      {
        id: "media",
        label: "Media",
        title: "Press & Media Coverage",
        placeholder: "Featured articles and press releases about TATER World — coming soon.",
        menuTitle: "Media",
        menuDesc: "Press releases and media coverage",
        menuBg: "linear-gradient(135deg,#0a0f20,#1a1f38,#2a2f50)",
        menuIcon: "📰",
        accentBorder: "2px solid rgba(201,168,76,0.3)"
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
        id: "iijs-creative-award-2017",
        category: "achievements",
        title: "Shilpi Jewels Wins IIJS Creative Award 2017",
        date: "August 2017",
        summary: "Shilpi Jewels was recognized at the India International Jewellery Show (IIJS) 2017, winning the prestigious Creative Award — a recognition of the brand's outstanding design innovation and craftsmanship in the gold jewellery wholesale category.",
        image: "images/Newsroom_photos/Participation/Khyalilal_sir.jpg",
        link: "https://www.shilpijewels.com"
      },
      {
        id: "ibja-best-chain-store-wholesaler",
        category: "achievements",
        title: "Shilpi Jewels Honoured as Best Chain Store Wholesaler of India",
        date: "January 2017",
        summary: "The Indian Bullion and Jewellers Association (IBJA) recognized Shilpi Jewels as the Best Chain Store Wholesaler of India — a milestone that underscores the brand's industry leadership and the trust it has earned from retailers nationwide.",
        image: "images/Jewellry/Shilpi/shilpi-stall.jpeg",
        link: "https://www.shilpijewels.com"
      },
      {
        id: "ibja-best-chain-store-wholesaler",
        category: "achievements",
        title: "Shilpi Jewels Honoured as Best Chain Store Wholesaler of India",
        date: "January 2017",
        summary: "The Indian Bullion and Jewellers Association (IBJA) recognized Shilpi Jewels as the Best Chain Store Wholesaler of India — a milestone that underscores the brand's industry leadership and the trust it has earned from retailers nationwide.",
        image: "images/photos/Jewellery_Card_holder.png",
        link: "https://www.shilpijewels.com"
      },
      {
        id: "ibja-best-chain-store-wholesaler",
        category: "achievements",
        title: "Shilpi Jewels Honoured as Best Chain Store Wholesaler of India",
        date: "January 2017",
        summary: "The Indian Bullion and Jewellers Association (IBJA) recognized Shilpi Jewels as the Best Chain Store Wholesaler of India — a milestone that underscores the brand's industry leadership and the trust it has earned from retailers nationwide.",
        image: "images/Jewellry/Shilpi/shilpi-stall.jpeg",
        link: "https://www.shilpijewels.com"
      },
      {
        id: "youngin-launch-2016",
        category: "events",
        title: "TATER World Launches Youngin' — Entering Early Childhood Education",
        date: "June 2016",
        summary: "TATER World expanded into a third sector with the launch of Youngin' International Pre-School & Child Care, opening its first centres in Vikhroli and Ghatkopar, Mumbai. The brand reflects the group's long-term commitment to community building and value creation.",
        image: "images/logos/youngin.png",
        link: "https://www.taterworld.com"
      },
      {
        id: "skyline-30000-customers",
        category: "achievements",
        title: "Skyline Group Crosses 30,000 Satisfied Customers",
        date: "January 2020",
        summary: "A landmark milestone for TATER World's real estate arm — Skyline Group has now served over 30,000 families across Mumbai, with 20 completed projects and 20,00,000 sq. ft. of possession handed over across key localities.",
        image: "images/photos/skyline-project.jpg",
        link: "https://www.skylinegroup.in"
      },
      {
        id: "shilpi-iijs-2023",
        category: "participation",
        title: "Shilpi Jewels Showcases at IIJS 2023",
        date: "August 2023",
        summary: "Shilpi Jewels participated in the India International Jewellery Show 2023, presenting their latest collections and networking with retailers across India's jewellery wholesale market.",
        image: "images/Newsroom_photos/Participation/Khyalilal_sir.jpg",
        link: "https://www.shilpijewels.com"
      },
      {
        id: "soultara-store-opening",
        category: "events",
        title: "Soultara Opens New Flagship Store in Mumbai",
        date: "March 2024",
        summary: "Soultara, TATER World's premium retail jewellery brand, inaugurated its new flagship store downtown, featuring exclusive gold and diamond collections in an elegant luxury retail environment.",
        image: "images/Jewellry/SOULTARA/soultara-store.jpeg",
        link: "https://www.soultara.com"
      },
      {
        id: "tater-world-expansion-2024",
        category: "media",
        title: "TATER World Expands Real Estate Portfolio with Superb Realty Launch",
        date: "February 2024",
        summary: "Mumbai-based diversified conglomerate TATER World officially launched Superb Realty, marking a new milestone in premium residential and commercial real estate development. The expansion reflects the group's commitment to innovation and sustainable growth.",
        image: "images/Jewellry/SOULTARA/soultara-store.jpeg",
        link: "https://www.taterworld.com",
        tags: "Real Estate, Expansion",
        eventId: "tater-world-expansion-event",
        eventName: "Superb Realty Launch"
      },
      {
        id: "shilpi-jewels-media-feature",
        category: "media",
        title: "Shilpi Jewels Featured in National Business Magazine",
        date: "January 2024",
        summary: "Shilpi Jewels, the flagship wholesale jewellery brand of TATER World, was featured in a comprehensive article highlighting five decades of craftsmanship, innovation, and industry leadership in India's jewellery wholesale sector.",
        image: "images/Jewellry/Shilpi/shilpi-stall.jpeg",
        link: "https://www.shilpijewels.com",
        tags: "Jewellery, Awards",
        eventId: "shilpi-media-event",
        eventName: "Shilpi Showcase"
      },
      {
        id: "soultara-luxury-market-article",
        category: "media",
        title: "Soultara Enters Conscious Luxury: A New Wave in Indian Jewellery",
        date: "December 2023",
        summary: "Industry analyst highlight Soultara's entry into the conscious luxury segment as a strategic move in India's evolving premium jewellery market. The brand's unique positioning blends tradition, ethics, and contemporary design.",
        image: "images/photos/Jewellery_Card_holder.png",
        link: "https://www.soultara.com",
        tags: "Luxury, Jewellery",
        eventId: "soultara-store-opening",
        eventName: "Soultara Launch Event"
      },
      {
        id: "skyline-sustainability-initiative",
        category: "media",
        title: "Skyline Group Launches Sustainability Initiative in Urban Development",
        date: "November 2023",
        summary: "Skyline Group announces a comprehensive sustainability framework for all future projects, emphasizing green building practices, community engagement, and long-term environmental responsibility in Mumbai's real estate sector.",
        image: "images/photos/skyline-project.jpg",
        link: "https://www.skylinegroup.in",
        tags: "Sustainability, Real Estate",
        eventId: "skyline-sustainability-event",
        eventName: "Skyline Initiative"
      }
    ]
  };
