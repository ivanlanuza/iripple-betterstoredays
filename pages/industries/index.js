import Link from "next/link";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Container from "@/components/Container";
import { INDUSTRY_LIST } from "@/lib/industryContent";

export default function IndustriesIndex() {
  return (
    <Layout>
      <Seo
        title="Industry Solutions"
        description="Retail operating playbooks for Philippine grocery, department store, hardware, apparel, specialty, and convenience formats."
      />
      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
            Industry Solutions
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold sm:text-5xl">
            Retail Operating Playbooks by Format
          </h1>
          <p className="mt-5 max-w-2xl text-slate-200">
            Explore format-specific priorities, recommended solutions, and
            executive-level outcomes for Philippine retail operations.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {INDUSTRY_LIST.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-slate-400 hover:bg-white"
              >
                <div className="text-xs uppercase tracking-wide text-slate-500">
                  Industry
                </div>
                <h2 className="mt-2 text-xl font-semibold text-slate-900">
                  {industry.name}
                </h2>
                <p className="mt-4 text-sm text-slate-700">
                  {industry.summary}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
}
