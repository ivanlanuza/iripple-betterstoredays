import Link from "next/link";
import {
  Activity,
  BarChart3,
  BrainCircuit,
  Building2,
  CircleAlert,
  Landmark,
  ShieldAlert,
  ShoppingCart,
  Store,
  Warehouse,
} from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { INDUSTRY_LIST } from "@/lib/industryContent";

const trustStats = [
  { value: "25+", label: "Years Retail Experience" },
  { value: "400+", label: "Retail Brands" },
  { value: "4,000+", label: "Stores" },
  { value: "1M+", label: "Daily Transactions" },
];

const differentiators = [
  {
    title: "Retail-Focused",
    body: "25+ years solving frontline, store, and head office retail challenges.",
    stat: "2+ decades of retail operations depth",
    icon: ShoppingCart,
  },
  {
    title: "Built for the Philippines",
    body: "Aligned with local retail operating realities, processes, and compliance requirements.",
    stat: "Built for Philippine business conditions",
    icon: Landmark,
  },
  {
    title: "Proven at Scale",
    body: "Used by leading enterprises running multi-format, multi-branch retail networks.",
    stat: "Trusted by hundreds of brands",
    icon: Building2,
  },
  {
    title: "Enterprise-Ready",
    body: "Designed for high-volume, mission-critical operations where uptime and control matter.",
    stat: "Operational resilience across thousands of stores",
    icon: ShieldAlert,
  },
];

const problems = [
  {
    title: "Inventory Inaccuracy, Stockouts, and Overstocking",
    impact:
      "Poor inventory accuracy causes replenishment errors, missed sales opportunities, and avoidable carrying costs.",
    outcome:
      "Improve stock confidence and keep inventory healthier across branches.",
    icon: Warehouse,
  },
  {
    title: "POS Fraud and Shrinkage",
    impact:
      "Unusual voids, refunds, and discount abuse silently erode revenue.",
    outcome: "Catch high-risk behaviors early and reduce avoidable loss.",
    icon: ShieldAlert,
  },
  {
    title: "Slow Checkout",
    impact: "Long lines reduce conversion and weaken customer experience.",
    outcome: "Increase throughput and protect peak-hour revenue.",
    icon: Store,
  },
  {
    title: "Multi-Store Complexity",
    impact: "Decisions become fragmented when each branch operates in silos.",
    outcome: "Centralize control across stores with consistent execution.",
    icon: Building2,
  },
  {
    title: "Poor Business Visibility",
    impact:
      "Delayed and fragmented data slows response to fast-changing conditions.",
    outcome: "Enable faster, informed decisions across the organization.",
    icon: BarChart3,
  },
  {
    title: "Retail Expansion Challenges",
    impact: "Growth exposes process gaps and operational inconsistencies.",
    outcome: "Scale operations without multiplying complexity.",
    icon: Activity,
  },
];

const customers = [
  "/images/client-logos/01.png",
  "/images/client-logos/02.png",
  "/images/client-logos/03.png",
  "/images/client-logos/04.png",
  "/images/client-logos/05.png",
  "/images/client-logos/06.png",
  "/images/client-logos/07.png",
  "/images/client-logos/08.png",
  "/images/client-logos/09.png",
  "/images/client-logos/10.png",
  "/images/client-logos/11.png",
  "/images/client-logos/12.png",
];

const caseStudies = [
  {
    name: "Large Grocery Network",
    industry: "Grocery and Supermarket",
    challenge:
      "Store-level stock visibility was delayed and inconsistent across branches.",
    solution:
      "Unified POS, inventory, and purchasing workflows in one operating platform.",
    outcome:
      "Faster replenishment cycles and tighter inventory control during peak demand.",
  },
  {
    name: "Department Store Group",
    industry: "Department Store",
    challenge:
      "Complex promotions and high-traffic checkouts strained frontline operations.",
    solution:
      "Enterprise POS rollout with centralized pricing, promotion, and branch governance.",
    outcome:
      "Improved checkout speed and stronger campaign execution across locations.",
  },
  {
    name: "Nationwide Hardware Retailer",
    industry: "Hardware Retail",
    challenge:
      "Multi-branch purchasing and receiving lacked standardization and oversight.",
    solution:
      "Connected purchasing, inventory, and analytics workflows across stores.",
    outcome:
      "Higher inventory discipline and more confident branch expansion planning.",
  },
];

const industries = INDUSTRY_LIST;

export default function Home() {
  return (
    <Layout>
      <Seo
        title="The Retail Operating System for Philippine Retailers"
        description="Trusted by Philippine retailers for over 25 years, iRipple powers POS, inventory, purchasing, loyalty, business intelligence, and AI."
      />

      <section className="relative flex min-h-[90vh] items-end overflow-hidden bg-slate-950 text-white">
        <img
          src="/images/2026_hero_image.png"
          alt="Retail operations team in a modern store environment"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/65" />

        <Container className="relative z-10 pb-16 pt-28 sm:pb-20 lg:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
            The Retail Operating System for Philippine Retailers
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Have Better Store Days.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Trusted by Philippine retailers for over 25 years, iRipple powers
            point-of-sale, inventory, purchasing, loyalty, business
            intelligence, and AI helping retailers operate more profitable
            stores.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href={`/request-demo?cta=${encodeURIComponent("Book a Retail Operations Review")}`}
              className="border border-white/20 bg-slate-900 text-white hover:bg-slate-800"
            >
              Book a Retail Operations Review
            </Button>
            <Button
              href="#customer-success"
              variant="secondary"
              className="border border-white/20 bg-white/10 text-white ring-0 hover:bg-white/20"
            >
              See Customer Success Stories
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur sm:grid-cols-4">
            {trustStats.map((item) => (
              <div key={item.label}>
                <div className="text-2xl font-semibold">{item.value}</div>
                <div className="text-xs uppercase tracking-wide text-slate-300">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-white py-16">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Why iRipple
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Why Leading Retailers Choose iRipple
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <Icon className="h-6 w-6 text-slate-700" />
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    {item.body}
                  </p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {item.stat}
                  </p>
                </article>
              );
            })}
          </div>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Trusted by Leading Retail Brands
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
              {customers.map((logo, idx) => (
                <div
                  key={logo}
                  className="flex h-16 items-center justify-center rounded-xl border border-slate-200 bg-gray-100 p-3"
                >
                  <img
                    src={logo}
                    alt={`iRipple customer logo ${idx + 1}`}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-100 py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Retail Problems We Solve
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Built Around Operational Outcomes
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {problems.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"
                >
                  <Icon className="h-5 w-5 text-slate-600" />
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-700">
                    <span className="font-semibold">Operational impact:</span>{" "}
                    {item.impact}
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    <span className="font-semibold">Business outcome:</span>{" "}
                    {item.outcome}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                Enterprise POS Platform
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                The POS Trusted by Philippine Retailers
              </h2>
              <p className="mt-5 text-slate-700">
                Every retail transaction begins at the point of sale. For over
                25 years, iRipple POS has powered supermarkets, department
                stores, hardware retailers, specialty retailers, and
                multi-branch operations across the Philippines.
              </p>
              <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                {[
                  "Fast checkout",
                  "Reliable performance",
                  "Real-time inventory updates",
                  "Promotions and pricing",
                  "Multi-store management",
                  "Enterprise scalability",
                  "Offline resiliency",
                ].map((point) => (
                  <li key={point} className="rounded-xl bg-slate-100 px-3 py-2">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-700 p-5 text-slate-100 shadow-xl">
              <div className="rounded-2xl bg-white/10 p-4">
                <div className="text-xs uppercase tracking-wide text-slate-300">
                  POS Snapshot
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-white/10 p-3">
                    <div className="text-xs text-slate-300">
                      Peak Hour Throughput
                    </div>
                    <div className="mt-1 text-lg font-semibold">
                      Stable Checkout Speed
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <div className="text-xs text-slate-300">Store Uptime</div>
                    <div className="mt-1 text-lg font-semibold">
                      Offline Resilient
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3 sm:col-span-2">
                    <div className="text-xs text-slate-300">
                      Operating Model
                    </div>
                    <div className="mt-1 text-lg font-semibold">
                      One POS Core, Multi-Store Enterprise Control
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="customer-success" className="bg-slate-950 py-16 text-white">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
            Customer Success Stories
          </p>
          <h2 className="mt-3 max-w-5xl text-3xl font-semibold sm:text-4xl">
            Trusted by Retailers Running Demanding Operations
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {customers.map((logo, idx) => (
              <div
                key={logo}
                className="rounded-xl border border-white/15 bg-gray-100 p-4"
              >
                <img
                  src={logo}
                  alt={`Customer logo ${idx + 1}`}
                  className="mx-auto h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-white/15 bg-white/5 p-6"
              >
                <div className="text-xs uppercase tracking-wide text-slate-300">
                  {item.industry}
                </div>
                <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
                <p className="mt-4 text-sm text-slate-200">
                  <span className="font-semibold text-white">Challenge:</span>{" "}
                  {item.challenge}
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  <span className="font-semibold text-white">Solution:</span>{" "}
                  {item.solution}
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  <span className="font-semibold text-white">
                    Business outcome:
                  </span>{" "}
                  {item.outcome}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                Industry Solutions
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Retail Solutions by Format
              </h2>
            </div>
            <Link
              href="/industries"
              className="text-sm font-semibold text-slate-900 hover:text-slate-700"
            >
              View All Industries
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-slate-400 hover:bg-white"
              >
                <div className="text-xs uppercase tracking-wide text-slate-500">
                  Industry Playbook
                </div>
                <div className="mt-2 text-xl font-semibold text-slate-900">
                  {industry.name}
                </div>
                <div className="mt-4 text-sm text-slate-700 group-hover:text-slate-900">
                  {industry.summary}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-100 py-16">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Retail Operating System
          </p>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold text-slate-900 sm:text-4xl">
            One Connected Platform. One Source of Truth.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-700">
            iRipple connects core retail workflows so every team works from the
            same operational data, from the checkout counter to executive
            planning.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-6">
            {[
              "POS",
              "Inventory and Purchasing",
              "Business Intelligence",
              "Customer Loyalty",
              "Concessionaire Management",
              "Retina AI",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800"
              >
                <div className="text-xs text-slate-500">Step {index + 1}</div>
                <div className="mt-2">{item}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              Retina AI Spotlight
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              AI Built on Real Retail Operations
            </h2>
            <p className="mt-4 text-slate-700">
              Retina is the next evolution of the iRipple platform, built on top
              of millions of transactions processed through iRipple retail
              operations.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="inline-flex rounded-full bg-slate-900/10 p-2 text-slate-700">
                <CircleAlert className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                Your AI Loss Prevention Analyst
              </h3>
              <p className="mt-3 text-sm text-slate-700">
                AI-powered fraud detection continuously analyzes POS
                transactions and flags suspicious refund behavior, excessive
                voids, discount abuse, cashier anomalies, and other loss
                prevention risks.
              </p>
              <div className="mt-5 rounded-xl bg-white p-4 text-sm ring-1 ring-slate-200">
                <div className="font-semibold text-slate-900">
                  Sample Alert Feed
                </div>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>
                    High void rate detected in Store 14 between 6:00-8:00 PM.
                  </li>
                  <li>
                    Unusual refund pattern flagged for cashier profile C-102.
                  </li>
                  <li>
                    Discount override frequency exceeded policy threshold in
                    Branch 22.
                  </li>
                </ul>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="inline-flex rounded-full bg-slate-900/10 p-2 text-slate-700">
                <BrainCircuit className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                Your AI Retail Analyst
              </h3>
              <p className="mt-3 text-sm text-slate-700">
                An AI assistant trained on retail operations and your own data,
                so executives and operators can ask better questions and act
                faster.
              </p>
              <div className="mt-5 rounded-xl bg-white p-4 text-sm ring-1 ring-slate-200">
                <div className="font-semibold text-slate-900">
                  Example Questions
                </div>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>Why are sales down this week in NCR stores?</li>
                  <li>Which locations are underperforming versus target?</li>
                  <li>
                    What products are frequently out of stock by category?
                  </li>
                  <li>Which cashiers show unusual transaction patterns?</li>
                </ul>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
            AI Vision
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">
            The Future of Retail AI in the Philippines
          </h2>
          <p className="mt-4 max-w-3xl text-slate-200">
            iRipple embeds practical AI across the retail operating system to
            improve forecasting, fraud detection, inventory optimization,
            executive decision support, and operational intelligence.
          </p>
        </Container>
      </section>

      <section id="contact" className="bg-white py-16">
        <Container>
          <div className="rounded-3xl bg-slate-900 px-6 py-10 text-white sm:px-10">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Ready for Better Store Days?
            </h2>
            <p className="mt-4 max-w-2xl text-slate-200">
              See how leading retailers use iRipple to improve operations,
              reduce losses, and scale with confidence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={`/request-demo?cta=${encodeURIComponent("Book a Retail Operations Review")}`}
                className="border border-white/20 bg-slate-900 text-white hover:bg-slate-800"
              >
                Book a Retail Operations Review
              </Button>
              <Button
                href={`/request-demo?cta=${encodeURIComponent("Talk to a Retail Technology Specialist")}`}
                variant="ghost"
                className="border border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                Talk to a Retail Technology Specialist
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
