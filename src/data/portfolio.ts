export const profile = {
  name: "Nazmus Sakib",
  title: "Software Engineer · Enterprise E-Commerce",
  tagline:
    "Delivering scalable, revenue-driving commerce platforms for enterprises across Australia, Europe, and Asia.",
  location: "Dhaka, Bangladesh",
  email: "mnsakib.tech@outlook.com",
  emailSecondary: "mnsakib1812@gmail.com",
  linkedin: "https://linkedin.com/in/m-n-sakib",
  github: "https://github.com/MnSakibOvi",
};

export const summary = {
  lead: "Results-driven Software Engineer specializing in ASP.NET Core and nopCommerce, with end-to-end ownership of multi-store B2B & B2C platforms — from client discovery through production go-live.",
  bullets: [
    "End-to-end project ownership with direct client engagement",
    "Enterprise catalogs at 60,000+ SKUs with ERP sync",
    "Payments, shipping, loyalty, SSO, and multi-store architecture",
    "Platform migrations delivered with zero downtime",
  ],
  stack: [
    "C#",
    "ASP.NET Core",
    "nopCommerce",
    "SQL Server",
    "JavaScript",
    "Azure",
    "ERP Integration",
    "REST APIs",
  ],
};

export const experience = [
  {
    role: "Software Engineer",
    company: "Brain Station 23 PLC",
    period: "Jan 2025 – Present",
    location: "Dhaka, Bangladesh",
    points: [
      "Lead end-to-end delivery of enterprise e-commerce for Australian and European clients",
      "Architect ERP-integrated solutions with real-time inventory, pricing, and orders",
      "Own client requirements, solution design, QA, and production deployment",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Brain Station 23 PLC",
    period: "Aug 2024 – Dec 2024",
    location: "Dhaka, Bangladesh",
    points: [
      "Shipped nopCommerce / ASP.NET Core features across live client stores",
      "Contributed to major platform upgrades (4.4 → 4.7, 4.6 → 4.9)",
    ],
  },
  {
    role: "Trainee Software Engineer",
    company: "Brain Station 23 PLC",
    period: "Mar 2024 – Aug 2024",
    location: "Dhaka, Bangladesh",
    points: [
      "Intensive training in ASP.NET Core, nopCommerce, and enterprise delivery practices",
    ],
  },
];

export type ProjectLink = { label: string; href: string };

export type Project = {
  id: string;
  name: string;
  program: "Action Websites" | "Intelisale" | "Jim2Commerce" | "AmTab";
  role: string;
  challenge: string;
  summary: string;
  url: string | null;
  stack: string;
  outcomes: string[];
  solutions: string[];
  stores?: ProjectLink[];
};

export const projectPrograms = [
  "All",
  "Action Websites",
  "Intelisale",
  "Jim2Commerce",
  "AmTab",
] as const;

export const projects: Project[] = [
  {
    id: "switchboard",
    name: "Switchboard In A Box",
    program: "Action Websites",
    role: "Software Engineer · Full ownership",
    challenge:
      "Migrate and synchronize 60,000+ electrical products with Schneider API, manage complex pricing, and integrate Xero accounting.",
    summary:
      "Electrical wholesale catalog (Schneider-heavy) delivered end-to-end — client discovery through production — with ProductSync, pricing, payments, and SEO.",
    url: "https://www.switchboardinabox.com.au/",
    stack: "nopCommerce · Kingdom · Schneider API · Xero · eWay · ElasticSearch",
    outcomes: [
      "Migrated 60,000+ SKU catalog from legacy with zero data loss",
      "Real-time Schneider Electric API sync for live product data",
      "Xero invoicing automation — saved 20+ hours weekly",
      "Pricing engine with markup rules, customer segments, and GST",
      "Admin dashboard with sync monitoring and data-quality reports",
    ],
    solutions: [
      "ProductSync hub — Schneider API + PDS fallback, Excel import, mega-menu rebuild, SignalR progress/cancel/retry",
      "Reporting suite — ready-for-sale, missing images, no prices, orphans, category gaps (Excel export)",
      "Legacy catalog/customer migration with SKU remap, roles, orders, and carts",
      "Xero OAuth — checkout invoicing + daily catalog sync with API caps",
      "Payments — eWay, PayPal Commerce, OPC, guest payment, Buy Now",
      "ElasticSearch, Smart Mega Menu, Quick View, PDF invoices, technical SEO",
    ],
  },
  {
    id: "ausgrid",
    name: "Ausgrid Staff Club",
    program: "Action Websites",
    role: "Software Engineer · Full ownership",
    challenge:
      "Build secure membership-only commerce for employee benefits, family events, rewards, and facility reservations.",
    summary:
      "Member-only staff club on nopCommerce 4.90 + Apollo — membership lifecycle, purchase limits, reservations, POS rewards, and MFA.",
    url: "https://www.ausgridstaffclub.org.au/",
    stack: "nopCommerce 4.90 · Kingdom · Apollo ClubSystem · PayPal · MFA",
    outcomes: [
      "Launched employee-exclusive benefit platform for Ausgrid workforce",
      "Automated membership renewals with invoicing and payment",
      "Rewards program to drive employee engagement",
      "Facility reservation system for accommodation and events",
      "HR Excel import — ~95% less manual membership admin",
    ],
    solutions: [
      "Membership request/approval, associate members, MSN+DOB activation",
      "Recurring associate renewals at current catalog price",
      "Purchase limits (daily/weekly/monthly/yearly) with cart warnings",
      "Family Events, MultiTicket, eVoucher fulfillment, attendee export",
      "Apollo Reservations + deferred Make Payment / unpaid-cart rules",
      "Apollo POS + My Rewards Points; MFA (Google + Microsoft)",
    ],
  },
  {
    id: "ozzie-tabs",
    name: "Ozzie Tabs",
    program: "Action Websites",
    role: "Software Engineer · Full ownership",
    challenge:
      "Create a flexible retail storefront with custom shipping logic, tiered pricing, and rich product visualization.",
    summary:
      "Specialty retail on Kingdom theme — quantity-band shipping, % tier pricing, combination-driven media, Stripe/PayPal/PO.",
    url: "https://www.ozzietabs.com.au/",
    stack: "nopCommerce · Kingdom · Stripe · PayPal · UPS · GTM",
    outcomes: [
      "Shipping calculator with quantity bands and free-shipping thresholds",
      "Tiered pricing by customer segment to lift average order value",
      "Richer product UX — carousels and combination-driven image swap",
      "Multi-gateway checkout: Stripe, PayPal, Purchase Orders",
    ],
    solutions: [
      "Ozzie Shipping — category quantity bands, mixed-cart free shipping, subtotal rules",
      "AdditionalFeatureOzzieTabs — % tiers, role/category exclusions, carousel (max 5)",
      "Attribute display rules on cart, checkout, and custom PDF invoices",
      "OPC + Stripe Payment Element + PayPal + Purchase Order",
      "Pickup / UPS / weight shipping; Google Tag Manager via theme SEO slots",
    ],
  },
  {
    id: "realty-shop",
    name: "Realty Shop",
    program: "Action Websites",
    role: "Software Engineer · Full ownership",
    challenge:
      "Full store launch with custom theme migration and video-enhanced product catalog.",
    summary:
      "nopCommerce 4.90 launch — Unishop → Shop theme port, custom widgets, Plesk staging/production cutover, payments & shipping.",
    url: "https://www.realtyshop.com.au/",
    stack: "nopCommerce 4.90 · Theme.Shop · PayPal · UPS · Lucene · Plesk",
    outcomes: [
      "Production store live on nopCommerce 4.90 with modern theme",
      "Video-enhanced product pages for stronger engagement",
      "Full hosting/DB cutover on Plesk staging → production",
      "Mobile-optimized navigation with offcanvas parity",
    ],
    solutions: [
      "Unishop → Shop theme port (3-way delta from 4.40 customizations)",
      "Theme.Shop plugin — homepage widgets, product video URL, sort options",
      "Smart Tabs, Widget Push, Admin Layout Changer, RealtyCommon layer",
      "PayPal Commerce, UPS, pickup, Lucene search, analytics",
      "Mobile offcanvas menu parity with live store",
    ],
  },
  {
    id: "intelisale",
    name: "Intelisale Multi-Store Platform",
    program: "Intelisale",
    role: "Developer",
    challenge:
      "Power 10+ international brands on one nopCommerce ecosystem — B2B eProcurement, regional payments, loyalty, and a 4.4 → 4.7 upgrade with zero downtime.",
    summary:
      "Enterprise omnichannel platform for Würth, Enmon, Tehnounion, Tri-O, Marquise, Iskra, and related regional shops across the Balkans.",
    url: "https://intelisale.com/",
    stack: "nopCommerce 4.7 · .NET 8 · Elastic / Azure / Athena · Multi-store B2B & B2C",
    outcomes: [
      "Multi-million dollar revenue platforms across 10+ regional storefronts",
      "Platform modernization 4.4 → 4.7 with business continuity",
      "Unified B2C storefronts + B2B eProcurement on one architecture",
      "8+ regional payment gateways with local compliance",
      "Loyalty/wallet programs driving retention and repeat purchase",
    ],
    solutions: [
      "Multi-brand themes (Pavilion, Emporium_Enmon, Emporium_Trio, Marquise, …)",
      "eProcurement — iframe cart, company users/groups, coupons, delivery fields",
      "Payments — Banca Intesa, Monri, Halkbank, OTP, NBS IPS, WSPay, COD, pay-by-link",
      "Shipping — Intelisale courier/pickup + Wolt Delivery with OPC rules",
      "Loyalty/wallet/cashback (Marquise & Kremen), QR/festival wallet",
      "Ajax filters, campaign mode, Elastic search, OPC, Web API, push notifications",
      "Lookbooks, store locator, Infobip SMS, MFA, Facebook Pixel, Seq logging",
    ],
    stores: [
      { label: "Würth Serbia", href: "https://eshop.wurth.rs/" },
      { label: "Würth Macedonia", href: "https://eshop.wurth.com.mk/" },
      { label: "Würth Bosnia", href: "https://eshop.wurth.ba/" },
      { label: "Würth Montenegro", href: "https://eshop.wurth.me/" },
      { label: "Enmon Bosnia", href: "https://www.enmon.ba/" },
      { label: "Enmon Macedonia", href: "https://www.enmon.mk/" },
      { label: "Enmon Croatia", href: "https://www.enmon.hr/" },
      { label: "Tehnounion", href: "https://tehnounion.rs/" },
      { label: "Tri-O Partner", href: "https://www.tri-o.rs/" },
      { label: "Iskra Rakija", href: "https://iskrarakija.rs/" },
    ],
  },
  {
    id: "wurth-malta",
    name: "Würth Malta",
    program: "Intelisale",
    role: "Developer",
    challenge:
      "Harden Malta storefront operations with ERP-style sync, multi-currency checkout, and enterprise search.",
    summary:
      "Intelisale brand store focused on ERP APIs (customer/order/price/stock), Braintree/PayPal, abandoned cart, and Solr search.",
    url: "https://intelisale.com/",
    stack: "nopCommerce · Braintree · PayPal · Solr / Nop-Accelerate · ERP APIs",
    outcomes: [
      "Real-time ERP sync for customers, orders, pricing, and inventory",
      "Abandoned cart recovery with automated reminders",
      "Special pricing and multi-currency checkout for Malta ops",
      "Enterprise product discovery via Solr / Nop-Accelerate",
    ],
    solutions: [
      "ERP-style sync APIs — customer / order / price / stock",
      "Braintree and PayPal payment flows",
      "Scheduled tasks — page indexing, category cleanup, admin customer search",
      "Special pricing engine with role-based rules",
      "Multi-currency / regional checkout hardening",
    ],
  },
  {
    id: "jim2",
    name: "Jim2Commerce Portal",
    program: "Jim2Commerce",
    role: "Software Engineer · Full ownership",
    challenge:
      "Deliver ERP-backed B2B commerce with live Jim2 catalogue, stock, pricing, quotes, approvals, and enterprise SSO.",
    summary:
      "Happen’s B2B portal on nopCommerce 4.60 — bidirectional Jim2 sync, HappenPay, SAML SSO, bulk/refill ordering, and partner feeds (e.g. OnSite Safety).",
    url: "https://jim2.com.au/products/jim2commerce-portal/",
    stack: "nopCommerce 4.60 · Jim2 ERP · HappenPay · SAML SSO · Multi-store",
    outcomes: [
      "ERP-connected commerce — less manual data entry and order processing",
      "Live per-customer pricing and stock to prevent overselling",
      "Quote-to-order and multi-level approval workflows",
      "Org purchasing with budgets / PackName hierarchies",
      "Partner product feeds for multi-channel distribution",
    ],
    solutions: [
      "Jim2 sync spine — stock, categories, customers, promo ACL, prices, order status",
      "Live GetLivePrice2 on catalog, PDP, cart, and bulk grids",
      "Bulk & refill ordering; quote lifecycle with PreOrder for redirect gateways",
      "Order approval — CardFile/Company/customer approvers with token email",
      "HappenPay (card, till/EFTPOS, 3DS); pay-by-link & invoice pay",
      "miniOrange SAML SSO (Azure AD / Okta / ADFS)",
      "OnSite Safety feeds (e.g. 3M) + Google Merchant Centre multi-store feeds",
      "FormBuilder, Finder widget, Jim2 Freight, allowances / PackName budgets",
    ],
    stores: [
      {
        label: "OnSite Safety Australia",
        href: "https://onsitesafetyaustralia.com.au",
      },
    ],
  },
  {
    id: "amtab",
    name: "AmTab B2B Furniture Commerce",
    program: "AmTab",
    role: "Developer",
    challenge:
      "Modernize B2B furniture commerce with design asset libraries, quote/ERP workflows, and a Prisma theme upgrade to 4.90.",
    summary:
      "Custom AmTabFeatures platform — Azure Blob design resources, trademarks, quote lifecycle, ERP import, and ADA alt-text tooling.",
    url: null,
    stack: "nopCommerce 4.90 · Prisma · Azure Blob · Avalara · PayPal · UPS",
    outcomes: [
      "Platform upgraded to nopCommerce 4.90 with Prisma theme port",
      "Design resource system on Azure Blob for architects and designers",
      "Quote → production → invoiced lifecycle with ERP quote IDs",
      "Product support assets — 2D/3D/Revit, lookbooks, flipbooks",
    ],
    solutions: [
      "Seven Spikes Prisma upgrade — buildability, runtime fixes, public QA",
      "Materials / Symbol / Design Resource libraries on Azure Blob",
      "Quote CRM via Azure containers; vendor onboarding with 2FA",
      "Spaces, galleries, AmTab TV, trademarks, DIF & swatch requests",
      "ERP scheduled import; SharePoint picture import; ADA alt-text admin",
      "PayPal Commerce, Avalara tax, UPS / pickup, custom 2FA widget upgrade",
    ],
  },
];

export const skills = {
  core: ["C#", "ASP.NET Core", "nopCommerce", "SQL Server", "JavaScript"],
  domains: [
    "Multi-store B2B / B2C",
    "ERP sync (Jim2, Xero)",
    "Payments & shipping",
    "SSO / SAML",
    "Elastic / Solr search",
    "SEO & product feeds",
  ],
  soft: [
    "Client communication",
    "Requirements ownership",
    "Mentoring",
    "Problem solving",
  ],
};

/** Flat list for hero skill chips (all skills, unique) */
export const allSkills = [
  ...skills.core,
  ...summary.stack.filter((s) => !skills.core.includes(s)),
  ...skills.domains,
  ...skills.soft,
];

export const education = {
  degree: "BSc in Software Engineering",
  school: "Daffodil International University",
  period: "Jan 2020 – Dec 2023",
  gpa: "3.65 / 4.00",
};

export const highlights = [
  { label: "Live client stores", value: "15+" },
  { label: "Catalog scale", value: "60k+" },
  { label: "CP solves", value: "1300+" },
  { label: "CGPA", value: "3.65" },
];

export const contestAchievements = {
  stats: [
    { value: "Champion", label: "DIU Intra-University 2021" },
    { value: "Top 10", label: "Bangladesh · Codeforces" },
    { value: "200+", label: "Individual contests" },
    { value: "1300+", label: "Problems solved" },
  ],
  highlights: [
    "Champion — DIU Intra-University Programming Contest 2021",
    "14th overall / Department champion (Software Engineering)",
    "ICPC Asia Dhaka Regional participant (team)",
    "Codeforces Pupil · peak rating 1294",
    "100+ team contests (online & onsite)",
  ],
  platforms: [
    { name: "Codeforces", handle: "mn_sakib_ovi", note: "Pupil · 1294" },
    { name: "UVA", handle: "mn_sakib_ovi", note: "~200 solves" },
    { name: "LightOJ", handle: "mn_sakib_ovi", note: "65+ solves" },
    { name: "Vjudge", handle: "mn_sakib_ovi", note: "~200 solves" },
  ],
  icpcTeams: [
    { team: "DIU_AristocratiC", year: "2020", event: "ICPC Asia Dhaka Preliminary" },
    { team: "DIU_HEXA", year: "2021", event: "ICPC Asia Dhaka Preliminary" },
    { team: "DIU_Aim3rs", year: "2022", event: "ICPC Asia Dhaka Preliminary" },
  ],
};

export const mentoring = {
  role: "Trainer @ DIU ACM",
  org: "Daffodil International University ACM Chapter",
  period: "2021 – 2023",
  camps: [
    "Take-off Advance Camp — Spring 2022",
    "Take-off Advance Camp — Fall 2022",
    "Take-off Advance Camp — Spring 2023",
  ],
  courses: [
    "C Khoon — Intro to C & Problem Solving (Fall 2021)",
    "C Khoon — Intermediate Algorithms (Spring 2022)",
    "C Khoon — Advanced Competitive Programming (Fall 2022)",
  ],
  impact: [
    "Official mentor for DIU ACM students in ICPC and campus contests",
    "Unofficial mentor for many more developing DSA & CP skills",
    "Focus: data structures, algorithms, contest strategy, debugging",
    "Mentees progressed to Specialist / Expert on Codeforces",
  ],
};

/** Problem setting / contest committee (judging & prep) */
export const judging = {
  role: "Contest Preparation Committee",
  summary:
    "Problem setting and contest preparation for university programming contests — designing statements, test data, and judging criteria.",
  contests: [
    "DIU Take-off Programming Contest — Fall 2022",
    "Unlock The Algorithm Programming Contest — Fall 2022",
    "DIU Take-off Programming Contest — Spring 2023",
    "DIU CodeTrap Programming Contest — Spring 2023",
  ],
};

export const research = {
  title: "Making Fair and Creative AI Writers",
  focus: [
    "Large Language Models (LLM)",
    "Dynamic Task Learning",
    "Bias Mitigation in LLMs",
  ],
  contributions: [
    "Investigated bias mitigation techniques in large language models",
    "Explored dynamic task learning for improved AI writing quality",
    "Contributed to fairness and creativity in AI-generated content",
  ],
  status: "Academic research · BSc Software Engineering",
};
