export const profile = {
  name: "Nazmus Sakib",
  /** Header / favicon-style wordmark */
  brand: "M N Sakib",
  title: "Software Engineer",
  focus: "ASP.NET Core · nopCommerce · AIDLC Enabled",
  tagline:
    "Software Engineer building enterprise .NET / nopCommerce platforms - plugins, ERP APIs, payments, and production cutovers - with forward-deploy style ownership from requirements through go-live.",
  availability: "Open to Software Engineer roles",
  location: "Dhaka, Bangladesh",
  email: "mnsakib.tech@outlook.com",
  emailSecondary: "mnsakib1812@gmail.com",
  linkedin: "https://linkedin.com/in/m-n-sakib",
  github: "https://github.com/MnSakibOvi",
  /** Optional: add /resume.pdf to public/ when ready */
  resumeUrl: null as string | null,
};

export const summary = {
  lead: "Software Engineer at Brain Station 23 focused on enterprise ASP.NET Core platforms. I work close to production and stakeholders - designing services and APIs, integrating external systems, diagnosing live issues, and owning releases - with AIDLC-enabled engineering practices.",
  bullets: [
    "Enterprise .NET: modular services, background jobs, migrations, multi-tenant / multi-store configuration",
    "System integrations: REST/Web APIs, ERP and third-party sync, OAuth, webhooks, scheduled pipelines",
    "Data & reliability: SQL Server / T-SQL, large-scale data flows, SignalR progress jobs, production debugging",
    "Safe upgrades and cutovers on live systems with regression-minded delivery",
    "AIDLC Enabled - structured AI-assisted development with human review gates across design → build → verify",
    "Forward-deploy mindset: clarify the problem, ship to production, support go-live, close the feedback loop",
  ],
  stack: [
    "C# / .NET",
    "ASP.NET Core",
    "SQL Server",
    "REST / Web API",
    "Azure",
    "System integration",
    "FluentMigrator",
    "AIDLC Enabled",
  ],
};

export const experience = [
  {
    role: "Software Engineer",
    company: "Brain Station 23 PLC",
    period: "Jan 2025 - Present",
    location: "Dhaka, Bangladesh",
    points: [
      "Own ASP.NET Core / nopCommerce features for AU and EU programs - plugins, APIs, checkout, and storefront",
      "Integrate ERP and third-party systems (inventory, pricing, orders) with production-safe sync and cutovers",
      "Work forward-deploy style with stakeholders: clarify requirements, ship, validate in prod, iterate fast",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Brain Station 23 PLC",
    period: "Aug 2024 - Dec 2024",
    location: "Dhaka, Bangladesh",
    points: [
      "Shipped nopCommerce plugins, payment/shipping hooks, and storefront features on live stores",
      "Contributed to platform upgrades (4.4 → 4.7, 4.6 → 4.9) with migration and regression focus",
    ],
  },
  {
    role: "Trainee Software Engineer",
    company: "Brain Station 23 PLC",
    period: "Mar 2024 - Aug 2024",
    location: "Dhaka, Bangladesh",
    points: [
      "Intensive ASP.NET Core, nopCommerce plugin architecture, SQL, and enterprise delivery practices",
    ],
  },
];

export type ProjectLink = { label: string; href: string };

export type Project = {
  id: string;
  name: string;
  program: "Action Websites" | "Intelisale" | "Jim2Commerce" | "AmTab";
  role: string;
  /** Problem / context for the engineering work */
  challenge: string;
  summary: string;
  url: string | null;
  stack: string;
  /** Measurable or product impact */
  outcomes: string[];
  /** What I personally built / contributed */
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

/** End-to-end ownership positioning for hiring managers */
export const deliveryCycle = {
  headline: "End-to-end ownership on enterprise platforms.",
  pitch:
    "On the programs I lead, I own the delivery lifecycle from discovery through production: requirements, estimation, implementation, release, and ongoing product support.",
  stages: [
    { title: "Requirements", detail: "Clarify scope with stakeholders" },
    { title: "Estimation", detail: "Plan effort and delivery risks" },
    { title: "Implementation", detail: "Build, integrate, and verify" },
    { title: "Release", detail: "Ship safely to production" },
    { title: "Support", detail: "Resolve live product issues" },
  ],
};

export const projects: Project[] = [
  {
    id: "switchboard",
    name: "Switchboard In A Box",
    program: "Action Websites",
    role: "Software Engineer · End-to-end ownership",
    challenge:
      "Migrate and keep a 60,000+ SKU electrical catalog in sync (Schneider API), with complex pricing and Xero accounting on nopCommerce.",
    summary:
      "Led end-to-end engineering on a wholesale storefront - ProductSync, pricing pipeline, payments, and SEO - as primary delivery owner.",
    url: "https://www.switchboardinabox.com.au/",
    stack:
      "nopCommerce · Kingdom · Schneider API · Xero · eWay · ElasticSearch",
    outcomes: [
      "Migrated 60,000+ SKUs from legacy with intact product/customer history",
      "Live Schneider API sync for catalog freshness",
      "Xero invoicing at checkout reduced manual finance ops",
      "Pricing + GST rules for customer segments",
    ],
    solutions: [
      "Built ProductSync hub - Schneider API + PDS fallback, Excel import, SignalR progress/cancel/retry",
      "Data-quality reporting - missing images, prices, category gaps (Excel export)",
      "SKU remap migration for catalog, roles, orders, and carts",
      "Xero OAuth - checkout invoicing + capped daily catalog sync",
      "Integrated eWay / PayPal, OPC, ElasticSearch, and technical SEO",
    ],
  },
  {
    id: "ausgrid",
    name: "Ausgrid Staff Club",
    program: "Action Websites",
    role: "Software Engineer · End-to-end ownership",
    challenge:
      "Ship membership-only commerce for employee benefits - renewals, purchase limits, events, reservations, and MFA on nopCommerce 4.90.",
    summary:
      "Owned integration of Apollo ClubSystem with Kingdom theme: membership lifecycle, limits, reservations, rewards, and secure checkout.",
    url: "https://www.ausgridstaffclub.org.au/",
    stack: "nopCommerce 4.90 · Kingdom · Apollo ClubSystem · PayPal · MFA",
    outcomes: [
      "Launched member-only staff club storefront",
      "Automated associate renewals with catalog-priced invoicing",
      "Reduced HR membership admin via Excel import (~95%)",
      "Added reservations and rewards for member engagement",
    ],
    solutions: [
      "Membership request/approval, associate members, MSN+DOB activation",
      "Purchase limits (daily-yearly) with cart enforcement",
      "Family Events / MultiTicket / eVoucher flows and exports",
      "Apollo Reservations + deferred Make Payment rules",
      "MFA (Google + Microsoft); PayPal Commerce + OPC",
    ],
  },
  {
    id: "ozzie-tabs",
    name: "Ozzie Tabs",
    program: "Action Websites",
    role: "Software Engineer · End-to-end ownership",
    challenge:
      "Custom shipping bands, tier pricing, and product media rules on a retail nopCommerce storefront.",
    summary:
      "Implemented specialty retail plugins - shipping, pricing, attribute/PDF rules - and multi-gateway checkout.",
    url: "https://www.ozzietabs.com.au/",
    stack: "nopCommerce · Kingdom · Stripe · PayPal · UPS · GTM",
    outcomes: [
      "Quantity-band shipping with free-shipping thresholds",
      "Segment tier pricing for higher AOV",
      "Richer PDP UX via combination-driven media",
      "Checkout supporting Stripe, PayPal, and Purchase Orders",
    ],
    solutions: [
      "Ozzie Shipping - category bands, mixed-cart free shipping, subtotal rules",
      "AdditionalFeatureOzzieTabs - % tiers, role/category exclusions, carousel",
      "Attribute display rules on cart, checkout, and PDF invoices",
      "OPC + Stripe Payment Element + PayPal + PO; GTM via SEO slots",
    ],
  },
  {
    id: "realty-shop",
    name: "Realty Shop",
    program: "Action Websites",
    role: "Software Engineer · End-to-end ownership",
    challenge:
      "Launch nopCommerce 4.90 with a custom theme port and production cutover on Plesk.",
    summary:
      "Owned Unishop → Shop theme migration, custom widgets, and staging-to-production deployment.",
    url: "https://www.realtyshop.com.au/",
    stack: "nopCommerce 4.90 · Theme.Shop · PayPal · UPS · Lucene · Plesk",
    outcomes: [
      "Production store live on nopCommerce 4.90",
      "Video-capable product pages",
      "Clean Plesk staging → production cutover",
      "Mobile nav parity with offcanvas menu",
    ],
    solutions: [
      "Unishop → Shop theme port (3-way delta from 4.40 customizations)",
      "Theme.Shop plugin - widgets, product video URL, sort options",
      "Smart Tabs, Widget Push, Admin Layout Changer, RealtyCommon",
      "PayPal Commerce, UPS, pickup, Lucene, analytics wiring",
    ],
  },
  {
    id: "intelisale",
    name: "Intelisale Multi-Store Platform",
    program: "Intelisale",
    role: "Developer · Platform feature delivery",
    challenge:
      "Feature work across a multi-brand nopCommerce ecosystem - eProcurement, regional payments, loyalty, and a 4.4 → 4.7 upgrade.",
    summary:
      "Contributed as a developer on an omnichannel platform powering Würth, Enmon, Tehnounion, Tri-O, Marquise, Iskra, and related stores.",
    url: "https://intelisale.com/",
    stack:
      "nopCommerce 4.7 · .NET 8 · Elastic / Azure / Athena · Multi-store B2B & B2C",
    outcomes: [
      "Supported 10+ regional storefronts on one platform",
      "Participated in 4.4 → 4.7 modernization with live continuity",
      "Shipped work across B2C + B2B eProcurement surfaces",
      "Touchpoints on regional payments, shipping, and loyalty/wallet",
    ],
    solutions: [
      "Plugins/themes work across Pavilion, Emporium, Marquise brands",
      "eProcurement cart, company users/groups, coupons, delivery fields",
      "Regional payment and shipping (incl. Wolt) integrations",
      "Loyalty/wallet/cashback features; Ajax filters; OPC / Web API touchpoints",
      "Upgrade-related admin/public view and plugin adjustments",
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
    role: "Developer · Platform feature delivery",
    challenge:
      "ERP-style sync, payments, abandoned cart, and search hardening for the Malta storefront.",
    summary:
      "Developer contributions on ERP APIs, Braintree/PayPal, Solr search, and scheduled admin tasks.",
    url: "https://intelisale.com/",
    stack:
      "nopCommerce · Braintree · PayPal · Solr / Nop-Accelerate · ERP APIs",
    outcomes: [
      "Customer / order / price / stock sync paths in production",
      "Abandoned cart reminder flows",
      "Special pricing and regional checkout hardening",
      "Solr / Nop-Accelerate product discovery",
    ],
    solutions: [
      "ERP-style sync APIs - customer, order, price, stock",
      "Braintree and PayPal payment work",
      "Schedule tasks - indexing, category cleanup, admin search",
      "Special pricing rules and multi-currency checkout fixes",
    ],
  },
  {
    id: "jim2",
    name: "Jim2Commerce Portal",
    program: "Jim2Commerce",
    role: "Software Engineer · End-to-end ownership",
    challenge:
      "ERP-backed B2B commerce on Jim2 - live pricing/stock, quotes, approvals, SSO, and partner product feeds.",
    summary:
      "Owned client-facing delivery on Jim2Commerce: CustomPlugins (feeds), SAML SSO packaging, and multi-store configuration against the Jim2 sync platform.",
    url: "https://jim2.com.au/products/jim2commerce-portal/",
    stack: "nopCommerce 4.60 · Jim2 ERP · HappenPay · SAML SSO · Multi-store",
    outcomes: [
      "Live ERP-connected catalog and pricing for trade buyers",
      "Quote / approval paths mirrored with Jim2",
      "Partner feeds (manufacturer + Google Merchant) per store",
      "Enterprise IdP login via SAML SSO",
    ],
    solutions: [
      "OnSite Safety CustomPlugin - manufacturer + GMC XML feeds, multi-store paths",
      "Scheduled + on-demand feed generation with ACL-safe product selection",
      "miniOrange SAML SSO plugin integration (Azure AD / SAML IdPs)",
      "Worked within Jim2 sync, live pricing, bulk/refill, HappenPay, freight surfaces",
      "CustomPlugins pattern without forking Jim2.BE core",
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
    role: "Developer · Feature and theme delivery",
    challenge:
      "Upgrade B2B furniture commerce - Prisma 4.9 theme, Azure Blob design libraries, quotes/ERP, and accessibility tooling.",
    summary:
      "Developer on AmTabFeatures: theme upgrade, Trademarks, Materials Library on Azure Blob, onboarding/checkout QA, Select2 consolidation.",
    url: null,
    stack: "nopCommerce 4.90 · Prisma · Azure Blob · Avalara · PayPal · UPS",
    outcomes: [
      "Prisma theme running on nopCommerce 4.90",
      "Design assets served from Azure Blob for architects",
      "Quote lifecycle wired to ERP quote IDs",
      "ADA alt-text admin for catalog imagery",
    ],
    solutions: [
      "Prisma 4.9 upgrade - buildability, runtime fixes, public QA",
      "Trademarks admin/public; Materials Library Dropzone + Blob UX",
      "Custom services upgrade for Sales, PriceList, Onboarding",
      "Quick View / bundling / mega-menu fixes; Select2 consolidation",
      "2FA widget upgrade; PayPal / Avalara / Azure Blob integrations",
    ],
  },
];

export const skills = {
  core: [
    "C# / .NET",
    "ASP.NET Core MVC & Razor",
    "nopCommerce plugin architecture",
    "SQL Server / T-SQL",
    "JavaScript",
    "REST & Web API",
  ],
  domains: [
    "Multi-store B2B / B2C",
    "ERP sync (Jim2, Xero, Schneider)",
    "Payments, shipping, tax gateways",
    "SSO / SAML (miniOrange, MFA)",
    "ElasticSearch / Solr",
    "FluentMigrator & schedule tasks",
    "Azure Blob / SignalR jobs",
    "XML feeds & technical SEO",
  ],
  soft: [
    "AIDLC Enabled (AI-assisted SDLC)",
    "Forward-deploy ownership",
    "Production debugging & cutover",
    "Stakeholder-facing delivery",
    "Git, code review, mentoring",
    "Competitive problem solving",
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
  period: "Jan 2020 - Dec 2023",
  gpa: "3.65 / 4.00",
};

export const highlights = [
  { label: "Production stores", value: "15+" },
  { label: "Catalog scale", value: "60k+" },
  { label: "CP solves", value: "1300+" },
  { label: "Students mentored", value: "300+" },
];

export const contestAchievements = {
  stats: [
    { value: "Champion", label: "DIU Intra-University 2021" },
    { value: "1300+", label: "Problems solved" },
    { value: "200+", label: "Individual contests" },
    { value: "100+", label: "Team contests" },
  ],
  highlights: [
    "Champion - DIU Intra-University Programming Contest 2021",
    "14th overall / Department champion (Software Engineering)",
    "ICPC Asia Dhaka Regional participant (team)",
    "900+ problems solved on Codeforces; 1,300+ across online judges",
    "100+ team contests (online & onsite)",
  ],
  platforms: [
    { name: "Codeforces", handle: "mn_sakib_ovi", note: "900+ solves" },
    { name: "UVA", handle: "mn_sakib_ovi", note: "~200 solves" },
    { name: "LightOJ", handle: "mn_sakib_ovi", note: "65+ solves" },
    { name: "Vjudge", handle: "mn_sakib_ovi", note: "~200 solves" },
  ],
  icpcTeams: [
    {
      team: "DIU_AristocratiC",
      year: "2020",
      event: "ICPC Asia Dhaka Preliminary",
    },
    { team: "DIU_HEXA", year: "2021", event: "ICPC Asia Dhaka Preliminary" },
    { team: "DIU_Aim3rs", year: "2022", event: "ICPC Asia Dhaka Preliminary" },
  ],
};

export const mentoring = {
  role: "Trainer @ DIU ACM",
  org: "Daffodil International University ACM Chapter",
  period: "2021 - 2023",
  camps: [
    "Take-off Advance Camp - Spring 2022",
    "Take-off Advance Camp - Fall 2022",
    "Take-off Advance Camp - Spring 2023",
  ],
  courses: [
    "C Khoon - Intro to C & Problem Solving (Fall 2021)",
    "C Khoon - Intermediate Algorithms (Spring 2022)",
    "C Khoon - Advanced Competitive Programming (Fall 2022)",
  ],
  impact: [
    "Official mentor for DIU ACM students in ICPC and campus contests",
    "Trained 300+ students across camps and C Khoon courses",
    "Focus: data structures, algorithms, contest strategy, debugging",
    "Mentees improved contest performance and problem-solving consistency",
  ],
};

/** Problem setting / contest committee (judging & prep) */
export const judging = {
  role: "Contest Preparation Committee",
  summary:
    "Designed problems, test data, and judging criteria for university programming contests - a signal of rigorous problem-solving standards.",
  contests: [
    "DIU Take-off Programming Contest - Fall 2022",
    "Unlock The Algorithm Programming Contest - Fall 2022",
    "DIU Take-off Programming Contest - Spring 2023",
    "DIU CodeTrap Programming Contest - Spring 2023",
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
