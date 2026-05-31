import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Container from "@/components/Container";
import Button from "@/components/Button";

const capabilities = [
  "Prioritizes high-risk transactions using multi-layer AI scoring",
  "Highlights unusual voids, refunds, discounts, and cashier outliers",
  "Compares behavior against peer baselines to reduce false positives",
  "Creates structured cases with clear ownership and audit trail",
];

const teams = [
  "Loss Prevention Leaders",
  "Internal Audit Teams",
  "Store Operations Leadership",
  "Compliance and Governance Teams",
];

export default function RetinaPosFraudConsolePage() {
  return (
    <Layout>
      <Seo
        title="Retina POS Fraud Console"
        description="AI loss prevention that turns raw POS transaction logs into high-confidence fraud signals and actionable investigations."
      />

      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Retina AI Suite</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold sm:text-5xl">Retina POS Fraud Console</h1>
          <p className="mt-5 max-w-3xl text-slate-200">
            Prevent hidden POS leakage with AI forensics. Retina identifies high-risk behaviors,
            explains why they matter, and helps teams act quickly.
          </p>
          <div className="mt-8">
            <Button href="/request-demo?product=Retina POS Fraud Console">Request for Demo</Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-900">Why It Matters</h2>
              <p className="mt-4 text-sm text-slate-700">
                Retail margins are thin. Prevented fraud directly protects net income and is often
                faster to recover than creating equivalent new sales.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-900">How It Works</h2>
              <p className="mt-4 text-sm text-slate-700">
                Retina converts raw POS logs into ranked risk signals, then routes cases through a
                disciplined review and resolution workflow.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-slate-100 py-16">
        <Container>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Core Capabilities</h2>
          <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            {capabilities.map((item) => (
              <li key={item} className="rounded-xl bg-white px-4 py-3 ring-1 ring-slate-200">{item}</li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Built For</h2>
          <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            {teams.map((item) => (
              <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">{item}</li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/request-demo?product=Retina POS Fraud Console">Request for Demo</Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
