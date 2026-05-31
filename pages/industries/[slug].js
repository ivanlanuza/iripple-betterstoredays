import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { INDUSTRY_LIST, INDUSTRY_PAGES } from "@/lib/industryContent";

export async function getStaticPaths() {
  return {
    paths: INDUSTRY_LIST.map((item) => ({ params: { slug: item.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      industry: INDUSTRY_PAGES[params.slug],
    },
  };
}

export default function IndustryPage({ industry }) {
  return (
    <Layout>
      <Seo
        title={`${industry.name} Solutions`}
        description={`${industry.name} retail solutions from iRipple's enterprise operating platform for Philippine retailers.`}
      />

      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Industry Solutions</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">{industry.name}</h1>
          <p className="mt-5 max-w-3xl text-slate-200">{industry.summary}</p>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <article className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold text-slate-900">Industry Playbook Overview</h2>
            <p className="mt-3 text-sm text-slate-700">{industry.overview}</p>
          </article>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-900">Industry Challenges</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {industry.challenges.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-900">Recommended Solutions</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {industry.solutions.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-semibold text-slate-900">Operational Priorities</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {industry.priorities.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-semibold text-slate-900">Recommended KPIs</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {industry.kpis.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-semibold text-slate-900">Relevant Products</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {industry.products.map((item) => (
                  <span key={item} className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-semibold text-slate-900">Customer Examples</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {industry.examples.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <Container>
          <h2 className="text-3xl font-semibold">{industry.cta}</h2>
          <p className="mt-3 max-w-2xl text-slate-200">
            Talk with iRipple about your current operating model, key bottlenecks, and a practical
            roadmap aligned to your growth priorities.
          </p>
          <div className="mt-6">
            <Button href={`/request-demo?product=${encodeURIComponent(industry.name)} Demo`}>
              Request for Demo
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
