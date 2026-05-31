export const INDUSTRY_PAGES = {
  "grocery-supermarket": {
    name: "Grocery and Supermarket",
    summary:
      "Improve basket conversion, reduce stock friction, and protect margin across high-frequency store operations.",
    overview:
      "Grocery and supermarket operators need fast checkout, reliable replenishment, and tight control over shrink. The playbook focuses on daily execution discipline across category, branch, and head office.",
    challenges: [
      "Frequent stockouts in high-velocity categories",
      "Inconsistent price and promotion execution across branches",
      "Checkout bottlenecks during peak trading windows",
      "Weak visibility into shrink and frontline exceptions",
    ],
    solutions: [
      "Enterprise POS for high-throughput checkout and promotion governance",
      "Unified inventory and purchasing workflows for daily replenishment discipline",
      "Cross-store visibility for category, branch, and cashier performance",
      "Retina AI fraud and exception monitoring for loss prevention",
    ],
    priorities: [
      "Protect in-stock rate in top-selling categories",
      "Standardize promo execution across all branches",
      "Improve queue speed during peak hours",
    ],
    kpis: ["In-stock rate", "Basket size", "Queue time", "Shrink rate"],
    products: ["Barter POS", "Barter RMS", "Retina BI", "Retina POS Fraud Console", "Retina AI Analyst"],
    examples: [
      "Reduced stockout incidents in top-selling SKUs through tighter replenishment timing",
      "Improved promotion compliance across stores during nationwide campaigns",
    ],
    cta: "Plan a Grocery Operations Review",
  },
  "department-store": {
    name: "Department Store",
    summary:
      "Coordinate multi-department retail complexity with stronger control over pricing, promotions, and store execution.",
    overview:
      "Department stores manage high SKU breadth and complex campaigns across many categories. The playbook helps standardize execution while improving visibility from floor to leadership.",
    challenges: [
      "High SKU breadth with varying replenishment cycles",
      "Cross-department campaign execution gaps",
      "Slow escalation of performance issues from branch to head office",
      "Inconsistent transaction controls in high-volume counters",
    ],
    solutions: [
      "POS standardization for stable performance during high-footfall periods",
      "Centralized pricing and campaign governance across departments",
      "Integrated reporting to compare departments, stores, and teams",
      "AI-assisted anomaly detection in transaction behavior",
    ],
    priorities: [
      "Improve cross-department promo execution",
      "Raise counter productivity in peak periods",
      "Tighten exception handling in high-volume lanes",
    ],
    kpis: ["Department sales growth", "Promo compliance", "Checkout throughput", "Exception rate"],
    products: ["Barter POS", "Barter RMS", "Retina BI", "Retina POS Fraud Console", "Retina AI Analyst"],
    examples: [
      "Faster visibility into underperforming departments for early intervention",
      "Higher consistency in markdown and promotion implementation",
    ],
    cta: "Review Department Store Strategy",
  },
  "hardware-retail": {
    name: "Hardware Retail",
    summary:
      "Strengthen inventory reliability, branch control, and category profitability in operationally complex hardware environments.",
    overview:
      "Hardware retail depends on wide assortments, varying demand cycles, and strong branch discipline. This playbook targets inventory reliability and profitable assortment control.",
    challenges: [
      "Large catalog depth with uneven demand and replenishment",
      "Receiving and transfer process inconsistency across branches",
      "Difficulty identifying dead stock and slow-moving lines",
      "Store expansion creating execution variance",
    ],
    solutions: [
      "POS and inventory synchronization for accurate movement tracking",
      "Purchasing controls with clearer reorder and transfer discipline",
      "Analytics for assortment profitability and stock performance",
      "Operational dashboards for branch-level accountability",
    ],
    priorities: [
      "Improve stock discipline for high-value items",
      "Reduce receiving and transfer errors",
      "Control slow-moving category exposure",
    ],
    kpis: ["Inventory accuracy", "Transfer cycle time", "Stock aging", "Category gross margin"],
    products: ["Barter POS", "Barter RMS", "Retina BI", "Barter Atlas", "Retina AI Analyst"],
    examples: [
      "Improved stock discipline for high-value, low-velocity items",
      "Better transfer visibility between large and regional branches",
    ],
    cta: "Map Hardware Retail Priorities",
  },
  "fashion-apparel": {
    name: "Fashion and Apparel",
    summary:
      "Increase sell-through and reduce markdown pressure with sharper inventory, promotion, and customer visibility.",
    overview:
      "Fashion and apparel operators need quick reads on size-color performance and faster decisions on transfers, markdowns, and campaigns. The playbook improves sell-through control.",
    challenges: [
      "Size-color-level inventory imbalance across stores",
      "Seasonal buying risk and markdown pressure",
      "Inconsistent omni-channel campaign execution",
      "Delayed insight into style and category performance",
    ],
    solutions: [
      "POS-driven demand visibility by style, size, and branch",
      "Inventory planning and transfers aligned to sell-through signals",
      "Loyalty and campaign analytics for repeat customer growth",
      "Executive dashboards for margin and inventory health tracking",
    ],
    priorities: [
      "Increase full-price sell-through",
      "Reduce late-season markdown exposure",
      "Improve regional assortment decisions",
    ],
    kpis: ["Sell-through rate", "Markdown rate", "Repeat purchase rate", "GMROI"],
    products: ["Barter POS", "Barter RMS", "MyRewards", "Retina BI", "Retina AI Analyst"],
    examples: [
      "Reduced overstock in slow-moving seasonal lines",
      "Faster response to top-performing collections by region",
    ],
    cta: "Design a Fashion Operations Playbook",
  },
  "specialty-retail": {
    name: "Specialty Retail",
    summary:
      "Run focused category businesses with tighter execution, stronger customer retention, and clearer branch-level performance.",
    overview:
      "Specialty retailers win through category focus and service quality. The playbook supports consistent execution while scaling branch networks.",
    challenges: [
      "Niche assortment planning with volatile demand patterns",
      "Store teams operating with limited shared visibility",
      "Weak loyalty utilization and low repeat purchase signals",
      "Difficulty scaling operations while preserving service quality",
    ],
    solutions: [
      "Unified POS and inventory model for category-focused operations",
      "Role-based operational dashboards for store and head office teams",
      "Loyalty integration for customer behavior insight and retention",
      "AI-guided exception and performance monitoring",
    ],
    priorities: [
      "Increase repeat purchase among core customers",
      "Improve branch consistency during expansion",
      "Tighten category-level inventory control",
    ],
    kpis: ["Repeat purchase rate", "Average transaction value", "Category stock health", "Branch compliance"],
    products: ["Barter POS", "Barter RMS", "MyRewards", "Retina BI", "Retina AI Analyst"],
    examples: [
      "Improved repeat purchase visibility for high-value categories",
      "More consistent execution across expanding branch networks",
    ],
    cta: "Build a Specialty Retail Plan",
  },
  "convenience-store": {
    name: "Convenience Store",
    summary:
      "Protect speed, availability, and consistency in high-frequency convenience formats.",
    overview:
      "Convenience retail runs on speed, service-level consistency, and branch discipline. The playbook focuses on throughput, availability, and rapid issue escalation.",
    challenges: [
      "High transaction volume with strict speed expectations",
      "Frequent replenishment demands across fast-moving products",
      "Operational variance in dispersed branch networks",
      "Limited time for frontline issue diagnosis",
    ],
    solutions: [
      "Fast, resilient POS for peak-hour queue management",
      "Daily stock visibility and replenishment control workflows",
      "Multi-branch KPI monitoring with rapid escalation paths",
      "AI-assisted detection of unusual transaction behavior",
    ],
    priorities: [
      "Protect checkout speed during rush windows",
      "Keep top convenience SKUs always available",
      "Standardize branch execution and response times",
    ],
    kpis: ["Checkout time", "Top-SKU availability", "Daily sales per branch", "Exception response time"],
    products: ["Barter POS", "Barter RMS", "Retina BI", "Retina POS Fraud Console", "Retina AI Analyst"],
    examples: [
      "Higher service-level consistency across urban branch clusters",
      "Improved in-stock performance on top convenience categories",
    ],
    cta: "Optimize Convenience Operations",
  },
};

export const INDUSTRY_LIST = Object.entries(INDUSTRY_PAGES).map(([slug, value]) => ({
  slug,
  ...value,
}));
