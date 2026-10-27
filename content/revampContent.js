export const SITE_URL = "https://www.iripple.com";

export const NEW_NAV = [
  { label: "Why iRipple", path: "/why-iripple" },
  { label: "Our clients", path: "/clients" },
  { label: "Barter", path: "/barter" },
  { label: "Retina", path: "/retina" },
  { label: "Company", path: "/company" },
];

export const PROOF_POINTS = [
  { value: "25+", label: "years in retail technology" },
  { value: "400+", label: "retail brands served" },
  { value: "5,000+", label: "stores managed" },
  { value: "1M+", label: "daily transactions supported" },
];

// Recognizable client marks used as social proof across the new partnership story.
export const CLIENT_LOGOS = [
  { src: "/images/client-logos-color/gaisano.png", name: "Gaisano" },
  { src: "/images/client-logos-color/prince.png", name: "Prince Retail" },
  { src: "/images/client-logos-color/super-8.png", name: "Super 8" },
  { src: "/images/client-logos-color/mandaue-foam.png", name: "Mandaue Foam" },
  { src: "/images/client-logos-color/cw-home-depot.png", name: "CW Home Depot" },
  { src: "/images/client-logos-color/shakeys.png", name: "Shakey’s" },
  { src: "/images/client-logos-color/peri-peri.png", name: "Peri-Peri" },
  { src: "/images/client-logos-color/chatime.png", name: "Chatime" },
  { src: "/images/client-logos-color/bonchon.png", name: "Bonchon" },
  { src: "/images/client-logos-color/primer.png", name: "Primer Group" },
  { src: "/images/client-logos-color/jetti.png", name: "Jetti" },
  { src: "/images/client-logos-color/mydin.png", name: "Mydin" },
];

export const EXPANSION_STORIES = [
  { client: "Prince Retail", from: "4", to: "80+", type: "hypermarts" },
  { client: "Super 8", from: "0", to: "~80", type: "hypermarts" },
  { client: "Card Indo", from: "0", to: "~100", type: "convenience stores" },
];

export const TRANSITION_STORIES = [
  { client: "Shakey’s Group", scale: "~400 stores" },
  { client: "Jetti Stations", scale: "~200 locations" },
  { client: "Primer Group", scale: "~300 branches" },
];

export const TECH_EVOLUTION = [
  "Standalone POS",
  "Networked POS",
  "Cloud POS",
  "Mobile POS + e-commerce",
  "Data + intelligence",
  "AI",
];

export const ECOSYSTEM_CONNECTIONS = [
  { name: "Malls", detail: "SM, Robinsons, Ayala, Megaworld, and others" },
  { name: "Payments + QR Ph", detail: "Bank EFTs, QR integration, and special tenders" },
  { name: "ERP", detail: "JDA, SAP, NetSuite, Dynamics, and ERPNext" },
  { name: "Commerce", detail: "BetterDash, BoxMe, OmiSell, and other platforms" },
  { name: "Data + AI", detail: "Connected cloud and data environments" },
];

export const BARTER_PRODUCTS = [
  {
    slug: "pos",
    name: "Barter POS",
    short: "Power every transaction. Elevate every store.",
    description:
      "Barter POS is iRipple’s flagship point-of-sale system, built for speed, reliability, ease of use, and the real operating conditions of Philippine retail.",
    image: "/images/products/1.png",
    outcomes: ["High-volume transactions with minimal downtime", "A faster learning curve for frontline teams", "Real-time control across stores"],
    features: [
      "Fast, reliable transaction processing",
      "User-friendly interface across devices",
      "Real-time sales, inventory, and price synchronization",
      "Flexible payment types and integrations",
      "Security, audit trails, and BIR compliance",
      "Actionable real-time operational data",
    ],
  },
  {
    slug: "retail-management",
    name: "Barter Retail Management System",
    short: "Centralized control for multi-store operations.",
    description:
      "Give headquarters real-time control over inventory, pricing, promotions, purchasing, suppliers, transfers, and user access across every location.",
    image: "/images/products/2.png",
    outcomes: ["One operational view across locations", "Consistent chain-wide execution", "Stronger headquarters control as you grow"],
    features: [
      "Centralized product and price maintenance",
      "Reorder points, transfers, and stock-out visibility",
      "Store, group, or chain-wide price management",
      "Supplier orders, terms, deliveries, and records",
      "Audited store-to-store transfer workflows",
      "Central promotion planning and scheduling",
      "Roles, permissions, and user access controls",
    ],
  },
  {
    slug: "loyalty",
    name: "Barter Loyalty",
    short: "Build loyalty. Grow relationships.",
    description:
      "A customer loyalty and engagement platform that connects rewards to actual transactions, helping retailers drive repeat purchases and grow customer lifetime value.",
    image: "/images/products/4.png",
    outcomes: ["Stronger customer loyalty", "More repeat purchases and higher spend", "More effective, insight-led promotions"],
    features: [
      "Points and flexible reward options",
      "Targeted promotions, discounts, and bonuses",
      "Customer behavior and preference insights",
      "Digital cards, balances, and transaction inquiry",
      "Multi-store and multi-format program support",
      "Enterprise-grade security for customer data",
    ],
  },
  {
    slug: "mobile-inventory",
    name: "Barter Mobile Inventory",
    short: "Inventory in your hands. Control in real time.",
    description:
      "Give store teams a mobile, retail-ready way to manage stock, deliveries, transfers, counts, and item updates from the sales floor or stockroom—even when connectivity is limited.",
    image: "/images/products/5.png",
    outcomes: ["Faster inventory work in the field", "More accurate, timely stock data", "Better control without added paperwork"],
    features: [
      "Real-time stock, item, and availability lookup",
      "Receiving, delivery verification, and inventory updates",
      "Store transfers with clear movement records",
      "Cycle counting to reduce inventory gaps",
      "Price and item updates across stores",
      "Offline-first capture, barcode scanning, and synchronization",
    ],
  },
];

export const RETINA_PRODUCTS = [
  {
    slug: "business-intelligence",
    name: "Retina Business Intelligence",
    short: "See what matters. Decide with confidence.",
    description:
      "Turn connected retail data into easy-to-understand dashboards, tailored reports, alerts, and visualizations so teams can act faster and grow with confidence.",
    image: "/images/products/3.png",
    outcomes: ["One source of truth", "Real-time visibility", "Actionable insights for data-driven growth"],
    features: [
      "Interactive retail dashboards and scorecards",
      "Custom reports tailored to business KPIs",
      "Data integration across multiple systems",
      "Advanced analytics for trends and opportunities",
      "Drill-down from summaries to detailed records",
      "Automated alerts with secure role-based access",
    ],
  },
  {
    slug: "ai-analyst",
    name: "Retina AI Analyst",
    short: "Ask any question. Get instant insights.",
    description:
      "Let business users talk to connected retail data in plain language and receive accurate answers, useful visualizations, and actionable insights—without complex queries or technical skills.",
    image: "/images/2026_hero_image.png",
    outcomes: ["Answers in seconds", "Automatically visualized findings", "More time focused on decisions"],
    features: [
      "Natural-language retail questions",
      "Smart charts and tables generated automatically",
      "Secure connections to databases and business systems",
      "Actionable trends, patterns, and opportunities",
      "Enterprise-grade security and privacy",
      "Conversation history for continued analysis",
    ],
  },
  {
    slug: "pos-ai-fraud-detection",
    name: "Retina POS AI Fraud Detection",
    short: "Detect more. Prevent loss. Protect your profits.",
    description:
      "Use statistical and machine-learning models to surface suspicious POS behavior, give loss-prevention teams a unified investigation view, and move from detection to resolution faster.",
    image: "/images/tech-hero.png",
    outcomes: ["Detect high-risk activity earlier", "Investigate faster with better context", "Prevent loss and strengthen controls"],
    features: [
      "AI-powered suspicious transaction detection",
      "Unified views of transactions, users, and stores",
      "Dashboards for risk trends and hotspots",
      "Peer comparison across stores and cashiers",
      "Case assignment and investigation management",
      "Role-based access built on integrated POS data",
    ],
  },
  {
    slug: "data-warehousing",
    name: "Retina Data Warehousing",
    short: "A governed retail data foundation for dependable reporting and analytics.",
    description:
      "Bring information from retail systems into a consistent, analytics-ready foundation so teams can work from shared definitions and build with greater confidence.",
    image: "/images/home-hero-white.png",
    outcomes: ["More consistent business reporting", "A stronger analytics foundation", "Less fragmented retail data"],
    features: [
      "Retail source-system integration",
      "Centralized data models",
      "Scheduled data ingestion",
      "Quality and consistency checks",
      "Governed data access",
      "Analytics-ready datasets",
    ],
  },
];

export const PRODUCT_FAMILIES = {
  barter: {
    name: "Barter",
    promise: "Operate your business",
    description:
      "Keep checkout moving, manage stock and pricing across branches, reward returning customers, and put inventory tools in your store teams’ hands.",
    products: BARTER_PRODUCTS,
    accent: "barter",
  },
  retina: {
    name: "Retina",
    promise: "Understand your business",
    description:
      "See performance in dashboards, ask questions in plain language, investigate suspicious POS activity, and build a dependable data foundation.",
    products: RETINA_PRODUCTS,
    accent: "retina",
  },
};

export const RETAIL_FORMATS = [
  "Grocery and supermarkets",
  "Convenience stores",
  "Fashion and specialty retail",
  "Food and beverage",
  "Home depots and hardware",
  "Department stores",
  "Drugstores and pharmacies",
  "Gas stations",
];

export function getProduct(family, slug) {
  return PRODUCT_FAMILIES[family]?.products.find((product) => product.slug === slug);
}
