import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Container from "@/components/Container";
import Button from "@/components/Button";

const examples = [
  "Why are sales down this week?",
  "Which stores are underperforming?",
  "What products are frequently out of stock?",
  "Which promotions delivered margin growth?",
];

const outputs = [
  "Direct answers in plain English",
  "Relevant charts and summaries",
  "Outlier and risk highlights",
  "Actionable recommendations",
];

export default function RetinaAiAnalystPage() {
  return (
    <Layout>
      <Seo
        title="Retina AI Analyst"
        description="Your AI retail analyst that answers business questions instantly using your own retail data."
      />

      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Retina AI Suite</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold sm:text-5xl">Retina AI Analyst</h1>
          <p className="mt-5 max-w-3xl text-slate-200">
            Ask your retail data anything. Retina AI Analyst turns questions into fast, validated
            answers so leaders can act in seconds, not days.
          </p>
          <div className="mt-8">
            <Button href="/request-demo?product=Retina AI Analyst">Request for Demo</Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-900">The Problem</h2>
              <p className="mt-4 text-sm text-slate-700">
                Retail teams have data, but insights are delayed by manual analysis, report queues,
                and static dashboards.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-900">The Shift</h2>
              <p className="mt-4 text-sm text-slate-700">
                Instead of waiting for reports, decision-makers ask a question directly and receive
                immediate business answers.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-slate-100 py-16">
        <Container>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Questions You Can Ask</h2>
          <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            {examples.map((item) => (
              <li key={item} className="rounded-xl bg-white px-4 py-3 ring-1 ring-slate-200">{item}</li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">What You Get</h2>
          <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            {outputs.map((item) => (
              <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">{item}</li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/request-demo?product=Retina AI Analyst">Request for Demo</Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
