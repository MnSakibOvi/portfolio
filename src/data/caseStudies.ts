export type CaseStudyBlock = {
  title: string;
  body: string;
};

export type CaseStudy = {
  slug: string;
  projectId: string;
  title: string;
  program: string;
  role: string;
  stack: string;
  liveUrl: string | null;
  background: string;
  challenges: string[];
  solutionBlocks: CaseStudyBlock[];
  results: string[];
  closing: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "switchboard",
    projectId: "switchboard",
    title: "Switchboard In A Box",
    program: "Action Websites",
    role: "Software Engineer · End-to-end ownership · Cross-functional lead",
    stack:
      "nopCommerce · Kingdom · Schneider API · Xero · eWay · ElasticSearch",
    liveUrl: "https://www.switchboardinabox.com.au/",
    background:
      "Switchboard is a wholesale electrical storefront whose catalog is dominated by Schneider Electric - more than 60,000 SKUs that change often. Buyers need accurate specs, prices, and availability. What began as a platform upgrade quickly became a full rebuild of catalog sync, legacy migration, pricing control, and accounting automation so the business could run the catalog without depending on engineers for every update.",
    challenges: [
      "Schneider sync was rigid - fixed vendor dates, little progress visibility, and almost no admin control when a job stalled or failed.",
      "Vendor feeds were incomplete - missing images, attributes, and related products - while duplicate categories made navigation messy.",
      "Pricing across 60k+ SKUs was largely manual with no safe stage-and-review path before go-live.",
      "Legacy products, carts, orders, and customers had to move without breaking relationships when IDs changed.",
      "Xero invoicing and product sync needed automation without breaching daily API limits.",
    ],
    solutionBlocks: [
      {
        title: "Product Sync command center",
        body: "I built a single admin hub for catalog work - Schneider sync, Excel import, category fixes, price uploads, and retry of failed jobs - with live progress, counts, and cancel. Admins could see what was running instead of guessing whether a job was stuck.",
      },
      {
        title: "Configurable Schneider sync engine",
        body: "Replaced hardcoded vendor cutoffs with an admin-chosen start date, queue-based change detection, API fetch with PDS fallback, and the ability to pause, clear, or patch the queue. Teams could fix a bad SKU without replaying the whole catalog.",
      },
      {
        title: "Bulk enrichment and category cleanup",
        body: "Excel templates filled gaps the feed never provided - attributes, assets, related products - keyed by SKU, with import reports. Category trees (multi-level) could be imported and merged so near-duplicate names stopped fragmenting the menu.",
      },
      {
        title: "Price import with staged markup",
        body: "SKU-level price files land in a staging area for filter and review, then publish with supplier cost-code markup (and optional discount). Nothing hits the storefront until it has been checked.",
      },
      {
        title: "Catalog health reporting",
        body: "Live diagnostic reports - sellable products, missing images or prices, SKU mismatches, orphans, uncategorized items - exportable to Excel so issues are caught before customers see them.",
      },
      {
        title: "Legacy remapping and Xero automation",
        body: "SKU-based remapping carried categories, ~70M specification combinations, carts, and orders onto new product IDs; guest noise was filtered so real customers survived. Checkout creates Xero invoices within tier limits, with capped daily product sync so accounting stays reliable.",
      },
    ],
    results: [
      "Unified admin control of 60,000+ SKUs - sync, enrichment, pricing, categories, and recovery in one place.",
      "Migrated legacy catalog and order history with SKU remapping, including tens of millions of specification records.",
      "Automated invoicing and bounded Xero sync (thousands of product updates per day within account limits).",
      "Reduced engineer dependency for day-to-day catalog operations and cut time-to-fix for bad data.",
    ],
    closing:
      "I owned delivery end to end and coordinated QA, UI engineering, and developers from requirements through production support.",
  },
  {
    slug: "ausgrid",
    projectId: "ausgrid",
    title: "Ausgrid Staff Club",
    program: "Action Websites",
    role: "Software Engineer · End-to-end ownership · Cross-functional lead",
    stack: "nopCommerce 4.90 · Kingdom · Apollo ClubSystem · PayPal · MFA",
    liveUrl: "https://www.ausgridstaffclub.org.au/",
    background:
      "Ausgrid Staff Club is a membership-only benefits store for employees - renewals, purchase limits, events, reservations, and secure checkout. The business was moving off a long-running legacy staff-club system onto nopCommerce 4.90 with Apollo ClubSystem, Core, Reservation, and OrderWorkFlow plugins. The goal was business parity with the old club rules, implemented in modern Nop 4.90 patterns rather than cloning legacy UI.",
    challenges: [
      "Legacy membership and associate flows had to work on 4.90 without copying old postback-style screens.",
      "Purchase limits (daily through yearly) needed hard enforcement in cart and checkout, not soft policy text.",
      "Family Events, multi-ticket, and eVoucher products needed correct storefront capture plus admin reporting/export.",
      "Reservations and deferred Make Payment rules had to match club operations staff already knew.",
      "Security expectations rose - MFA for Google and Microsoft - alongside PayPal Commerce and OPC checkout.",
      "HR membership admin was heavy; Excel import and renewals had to cut that load dramatically.",
    ],
    solutionBlocks: [
      {
        title: "Membership lifecycle on Apollo ClubSystem",
        body: "Owned membership request/approval, associate members, and MSN+DOB activation so employees and families could join and renew through the new storefront with catalog-priced invoicing for associate renewals.",
      },
      {
        title: "Purchase limits and cart enforcement",
        body: "Implemented limit rules across day/week/month/year windows with cart-level enforcement so members could not bypass staff-club caps at checkout.",
      },
      {
        title: "Family Events and ticket operations",
        body: "Delivered Family Event / MultiTicket / eVoucher flows and exports - Apollo product-type identity, ClubSystem selectors, and OrderWorkFlow sales/export paths - so event staff get usable attendee data without legacy Sold Products clones.",
      },
      {
        title: "Reservations and deferred payment",
        body: "Wired Apollo Reservations with deferred Make Payment behavior so accommodation-style and club reservation rules survived the cutover.",
      },
      {
        title: "Secure checkout and production cutover",
        body: "Integrated MFA (Google + Microsoft), PayPal Commerce, and OPC, then led release and post-go-live support with QA, UI engineering, and developers through production issues.",
      },
    ],
    results: [
      "Member-only staff club live on nopCommerce 4.90 with Apollo ClubSystem.",
      "Associate renewals automated with catalog-priced invoicing.",
      "HR membership admin effort cut sharply via Excel import (~95% reduction vs prior process).",
      "Reservations, rewards, family events, and MFA shipped as part of the modernized club experience.",
    ],
    closing:
      "I led end-to-end delivery on the Ausgrid modernization and coordinated QA, UI engineering, and developers from discovery through go-live and support.",
  },
  {
    slug: "realty-shop",
    projectId: "realty-shop",
    title: "Realty Shop",
    program: "Action Websites",
    role: "Software Engineer · End-to-end ownership · Cross-functional lead",
    stack: "nopCommerce 4.90 · Theme.Shop · PayPal · UPS · Lucene · Plesk",
    liveUrl: "https://www.realtyshop.com.au/",
    background:
      "Realty Shop sells real-estate marketing products - signs, flags, paddles, catalogues - and needed a clean move to nopCommerce 4.90 with a custom theme that preserved years of Unishop customizations. Delivery covered theme porting, storefront widgets, payments and shipping, search, and a careful Plesk staging-to-production cutover.",
    challenges: [
      "Unishop customizations on an older baseline had to land on a Shop theme for 4.90 without losing storefront behavior.",
      "Product pages needed richer media (including video) and flexible merchandising widgets.",
      "Header/footer contact, mobile navigation, and catalogue menus had to match how the live business sells.",
      "PayPal Commerce, UPS, pickup, Lucene search, and analytics had to wire cleanly on the new stack.",
      "Cutover on Plesk required staging validation then a low-drama production swap.",
    ],
    solutionBlocks: [
      {
        title: "Unishop to Shop theme port",
        body: "Led the theme migration by reconciling Unishop deltas against Shop on 4.90 - layout, navigation, and storefront chrome - so the new theme felt like Realty Shop, not a stock demo.",
      },
      {
        title: "Theme.Shop plugin and widgets",
        body: "Built and configured Theme.Shop capabilities - product video URL, sort options, Smart Tabs, Widget Push, Admin Layout Changer, RealtyCommon - so merchandisers could control page content without code changes for every tweak.",
      },
      {
        title: "Checkout, shipping, and discovery",
        body: "Connected PayPal Commerce, UPS, pickup options, Lucene search, and analytics so the upgraded store could take orders and find products the day it went live.",
      },
      {
        title: "Mobile nav and catalogue UX",
        body: "Brought mobile offcanvas/accordion behaviour in line with how production catalogues are browsed - including default-expanded product trees where the business expected them.",
      },
      {
        title: "Plesk staging to production cutover",
        body: "Owned the release path - validate on staging, cut over on Plesk, then support post-release fixes with QA and UI partners until the live site was stable.",
      },
    ],
    results: [
      "Production store live on nopCommerce 4.90 with the custom Shop theme.",
      "Video-capable product pages and merchandising widgets in admin control.",
      "Clean Plesk staging → production cutover with post-release hardening.",
      "Mobile navigation parity for catalogue browsing.",
    ],
    closing:
      "I owned Realty Shop delivery end to end and worked with QA, UI engineering, and developers through cutover and production support.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((c) => c.slug);
}
