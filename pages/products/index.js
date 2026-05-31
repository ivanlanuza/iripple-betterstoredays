import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Container from "@/components/Container";
import Button from "@/components/Button";

const products = [
  {
    id: "barter-pos",
    name: "Barter POS",
    category: "Enterprise Point-of-Sale",
    summary:
      "The transaction core for fast, reliable checkout and enterprise-grade store operations.",
    href: "/products/barter-pos",
  },
  {
    id: "barter-rms",
    name: "Barter RMS",
    category: "Retail Management System",
    summary:
      "Centralized control for inventory, purchasing, pricing, and multi-branch retail governance.",
    href: "/products/barter-rms",
  },
  {
    id: "barter-loyalty",
    name: "Barter Loyalty",
    category: "Customer Loyalty Platform",
    summary:
      "Retention and repeat-purchase engine that ties loyalty behavior to store and category performance.",
    href: "/products/myrewards-loyalty",
  },
  {
    id: "barter-atlas",
    name: "Barter Atlas",
    category: "Concessionaire and Inventory Operations",
    summary:
      "Branch-floor inventory and concessionaire execution workflows for tighter daily operations.",
    href: "/products/atlas-inventory-app",
  },
  {
    id: "retina-bi",
    name: "Retina Business Intelligence",
    category: "Retail Analytics",
    summary:
      "Executive and operational visibility across sales, inventory, productivity, and store performance.",
    href: "/products/retina-bi",
  },
  {
    id: "retina-pos-fraud-console",
    name: "Retina POS Fraud Console",
    category: "AI Loss Prevention",
    summary:
      "AI-powered transaction anomaly detection for voids, refunds, discount abuse, and cashier risk signals.",
    href: "/products/retina-pos-fraud-console",
  },
  {
    id: "retina-ai-analyst",
    name: "Retina AI Analyst",
    category: "AI Decision Support",
    summary:
      "Conversational retail analyst trained on operational and transactional data to guide daily priorities.",
    href: "/products/retina-ai-analyst",
  },
];

export default function ProductsPage() {
  return (
    <Layout>
      <Seo
        title="Products"
        description="Explore iRipple's full retail operating platform, including Barter core products and Retina AI solutions."
      />

      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">iRipple Platform</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">All Products</h1>
          <p className="mt-5 max-w-3xl text-slate-200">
            Barter and Retina work together as one retail operating system for Philippine retailers.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article key={product.id} id={product.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {product.category}
                </div>
                <h2 className="mt-2 text-xl font-semibold text-slate-900">{product.name}</h2>
                <p className="mt-4 text-sm text-slate-700">{product.summary}</p>
                <div className="mt-6">
                  <Button href={`/request-demo?product=${encodeURIComponent(product.name)}`}>
                    Request for Demo
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
}
