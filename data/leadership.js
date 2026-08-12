/* Founder and managing director leadership profiles. */

TATER.leadership = {

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
        initials: "KT",
        badge: "Visionary",
        badgeStyle: "",
        avatarStyle: "",
        name: "Shri Khyalilal Tater",
        role: "Chairman, TATER World Group",
        photo: "images/Leaders/Khyalila sir.png",
        linkedin: "",
        bio: [
          "A humble visionary guided by purpose, Shri Khyalilal Tater is the driving force behind TATER World's evolution into a trusted and respected enterprise. From his modest beginnings in Dhanin, Rajasthan, to building a diversified business in the heart of Mumbai, his journey is one of resilience, foresight, and determination.",
          "His efforts made TATER World synonymous with quality across real estate, jewellery, and beyond. With an appetite for innovation paired with a deep commitment to social good, he has moulded the organisation's DNA. Under his stewardship, growth was never just a business metric — it was a means to create lasting value for society."
        ],
        memoriam: false
      },
      {
        initials: "JT",
        badge: "In Memoriam",
        badgeStyle: "color:rgba(201,168,76,0.6);border-color:rgba(201,168,76,0.2)",
        avatarStyle: "background:rgba(201,168,76,0.06);border-color:rgba(201,168,76,0.15)",
        name: "Late Shri Jitendra Tater",
        role: "Visionary Leader & Real Estate Pioneer",
        photo: "images/Leaders/Jitendra Tater.png",
        linkedin: "",
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
     * sector   {string}  "jewellery" | "other" — used to group into tables on about page
     */
    mds: [
      {
        name: "Shilpin Tater",
        company: "Superb Realty",
        role: "Founder & Managing Director",
        sector: "realestate &amp; Finance",
        photo: "images/Leaders/Shilpin .png",
        linkedin: "https://www.linkedin.com/in/shilpin-tater-baa25013/",
        bio: [
          "Effortlessly astute, Mr. Shilpin Tater leads Tater World with pace and clarity. With over 18 years in real estate, he drives growth, strategy, and technology-led transformation across the organization.",

          "He has been instrumental in building Skyline Group into a trusted name in Mumbai’s property market as well as Superb Capital a VC firm investing and supporting future Entrepreneurs. Reimagining portfolios for modern buyers, he blends innovation, sustainability, and design. The launch of Superb Realty reflects his vision of future-ready, uncompromised urban living while carrying forward the legacy."
        ]
      },
      {
        name: "Nikita Tater",
        company: "Being CreARTive",
        role: "Director",
        sector: "design",
        photo: "images/Being_Creative/Nikita.png",
        linkedin: "",
        bio: [
          "Ms.Nikita Shilpin Tater is an interior designer and self-taught artist, known for her vibrant, expressive style, blending creativity with purpose while drawing inspiration from everyday life, motherhood, and her Mumbai roots.",
          "Her artistic journey began during the 2020 lockdown, leading to the creation of “being creARTive.” Her work has gained international recognition, showcased at Jehangir Art Gallery, Bikaner House, Jawahar Kala Kendra, and global platforms including Spain, New York, and Dubai, reflecting her distinctive, playful artistic voice."
        ]
      },
      {
        name: "Padamji Soni",
        company: "Shilpi Jewels",
        role: "Managing Director",
        sector: "jewellery",
        photo: "images/Jewellry/Shilpi/Padam .png",
        linkedin: "",
        bio: [
          "Mr. Padamji Soni, Managing Director of Shilpi Jewels, has built a globally trusted jewellery brand known for its quality, design excellence, and continuous innovation in gold studded jewellery.",
            "Through his customer-centric leadership and commitment to exceptional craftsmanship, he has driven consistent growth, strengthened industry relationships, and established new benchmarks within the jewellery sector."
        ]
      },
      {
        name: "Yogesh Soni",
        company: "Shilpi Jewels",
        role: "Executive Director",
        sector: "jewellery",
        photo: "images/Jewellry/Shilpi/Yogesh Soni.JPG",
        linkedin: "",
        bio: [
"Mr. Yogesh Soni, Executive Director of Shilpi Jewels, is a second-generation leader who oversees the brand’s operations with a sincere and dedicated approach, balancing heritage with evolving modern market needs.",
"His commitment to professional excellence, ethical growth, and operational reliability continues to strengthen Shilpi Jewels’ standing as a trusted industry partner."
]
      },
      {
        name: "Piyush Soni",
        company: "Shilpi Jewels",
        role: "Executive Director",
        sector: "jewellery",
        photo: "images/Jewellry/Shilpi/Piyush.png",
        linkedin: "",
        bio: [
          "Mr. Piyush Soni, Executive Director of Shilpi Jewels, is a dynamic second-generation leader who drives the brand with energy, passion, and a forward-thinking strategy, bringing modern agility to its established heritage.",
          "Committed to scaling operations while preserving exceptional craftsmanship and integrity, he continues to strengthen Shilpi Jewels’ reputation as a trusted name in the industry."
        ]
      },
      {
        name: "Vinod Tater",
        company: "Sejal Jewellery",
        role: "Managing Director",
        sector: "jewellery",
        photo: "images/Jewellry/Sejal_Jewellery/Vinod Tater.png",
        linkedin: "",
        bio: [
"Mr. Vinod Tater, Managing Director of Sejal Jewellery, has built a strong reputation across Mumbai’s jewellery landscape, leading the brand from its strategic wholesale presence in Zaveri Bazar to its premier retail store in Ghatkopar, bridging industry expertise with consumer trust.",
"Known for his transparent leadership and commitment to quality, he continues to strengthen Sejal Jewellery through ethical business practices and a dedication to delivering timeless craftsmanship to every client."        ]
      },
      {
        name: "Sanchit Tater",
        company: "Sejal Jewellery",
        role: "Executive Director",
        sector: "jewellery",
        photo: "images/Jewellry/Sejal_Jewellery/Sanchit Jain.png",
        linkedin: "",
        bio: [
            "Sanchit Tater, Executive Director of Sejal Jewellery, is a second-generation leader who brings a modern perspective to the brand’s foundational values of trust and transparency, seamlessly blending heritage with innovation across wholesale and retail operations.",
            "His unwavering commitment to integrity, operational excellence, and customer relationships continues to strengthen Sejal Jewellery’s legacy, serving both wholesale partners and retail clients with distinction."
        ]
      },
      {
        name: "Saurabh Khabia",
        company: "Sejal Jewellery",
        role: "Executive Director",
        sector: "jewellery",
        photo: "images/Jewellry/Sejal_Jewellery/Saurabh.png",
        linkedin: "",
        bio: [
           "Mr. Saurabh Khabia, Managing Partner of Sejal Jewellery, leads the firm’s wholesale operations with a strong focus on integrity, clarity, and dedicated leadership.",
           "With deep expertise in jewellery designing and manufacturing, he ensures every piece meets high technical standards, while his commitment to precision and quality continues to establish him as a trusted industry leader."
        ]
      },
      {
        name: "Rajneesh Mehta",
        company: "Touch 22",
        role: "Managing Director",
        sector: "jewellery",
        photo: "images/Jewellry/Touch_22/Rajnesh Mehta.png",
        linkedin: "",
        bio: [
          "Mr. Rajneesh Mehta, Managing Director of Touch 22, is a pioneer in the machine-made gold jewellery sector, leading the brand with a vision that combines cutting-edge technology with refined aesthetics to deliver precision, durability, and high-volume excellence.",
          "Focused on modernizing jewellery manufacturing, he ensures every piece meets exceptional standards of consistency and quality, while continuing to position Touch 22 as a benchmark for innovation in the contemporary luxury market."
        ]
      },
      {
        name: "Pramod Mehta",
        company: "Shine Shilpi",
        role: "Managing Director",
        sector: "jewellery",
        photo: "images/Jewellry/Shine_Shilpi/Pramod_mehta.png",
        linkedin: "",
        bio: [
          "Mr. Pramod Mehta, Managing director of ShineShilpi, is a respected name in the jewellery industry, known for his expertise in gold and platinum jewellery manufacturing, backed by deep industry knowledge and a strong understanding of evolving design preferences.",
          "With extensive experience and active involvement in industry associations, he has earned multiple prestigious recognitions, while his insights into diverse consumer preferences across Indian and global markets continue to drive innovation, quality excellence, and sustained growth in the jewellery manufacturing sector."
        ]
      },
      {
        name: "Ankita Tater Khabia",
        company: "Soultara",
        role: "Founder",
        sector: "jewellery",
        photo: "images/Jewellry/SOULTARA/Ankita Khabia.JPG",
        linkedin: "https://www.linkedin.com/in/ankita-khabia-41ba4224/",
        bio: [
          "Ms. Ankita Tater Khabia is an entrepreneur and creative strategist known for blending artistic vision with business excellence, founding SOULTARA to redefine modern silver jewellery through purpose-driven design and storytelling.",
          
      "SOULTARA is a 92.5 sterling silver jewellery brand that celebrates individuality and self-expression. It transforms traditional jewellery retail into a contemporary, design-led experience that empowers women with confidence, elegance, and everyday self-love."
        ]
      }
    ]
  };
