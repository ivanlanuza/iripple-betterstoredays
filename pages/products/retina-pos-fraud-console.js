import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Container from "@/components/Container";
import Button from "@/components/Button";

export default function RetinaPosFraudConsolePage() {
  return (
    <Layout>
      <Seo
        title="Retina POS Fraud Console"
        description="AI loss prevention that turns raw POS transaction logs into high-confidence fraud signals and actionable investigations."
      />

      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
            Retina AI Suite
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold sm:text-5xl">
            Retina POS Fraud Console
          </h1>
          <p className="mt-5 max-w-3xl text-slate-200">
            Prevent hidden POS leakage with AI forensics. Retina identifies
            high-risk behaviors, explains why they matter, and helps teams act
            quickly.
          </p>
          <div className="mt-8">
            <Button href="/request-demo?product=Retina POS Fraud Console">
              Request for Demo
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto mt-10 w-[70vw] max-w-[1600px]">
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-slate-950 shadow-soft ring-1 ring-slate-200">
            <iframe
              title="Retina_AI_POS_Fraud_Console"
              src="https://player.vimeo.com/video/1197904649?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <Container>
          <div className="px-4 pt-4 sm:px-10">
            <p className="text-md leading-relaxed text-slate-700 sm:text-md">
              Retina AI POS Fraud Console helps retail teams catch hidden POS
              leakage faster by turning raw transaction data into clear,
              prioritized fraud signals with a structured investigation trail.
              It is built for loss prevention, audit, store operations, and
              compliance teams that need faster reviews, fewer false positives,
              and clearer accountability. Watch the explainer video above to see
              how Retina AI POS Fraud Console works.
            </p>
            <p className="mt-4 text-md leading-relaxed text-slate-700 sm:text-md"></p>
          </div>
        </Container>

        <Container className="mt-8">
          <div className="flex justify-center">
            <Button
              href="/request-demo?product=Retina POS Fraud Console"
              className="px-7 py-3 text-base"
            >
              Request for Demo
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
