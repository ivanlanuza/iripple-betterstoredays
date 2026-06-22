import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Container from "@/components/Container";
import Button from "@/components/Button";

const PRODUCT_NAME = "Retina POS Fraud Console";
const MEETING_HREF = `/request-demo?product=${encodeURIComponent(PRODUCT_NAME)}&cta=${encodeURIComponent("Schedule a Meeting")}`;

const proofPoints = [
  "Spot suspicious POS behavior earlier instead of waiting for losses to pile up.",
  "Give loss prevention and audit teams a cleaner, faster path from alert to case.",
  "Turn raw transactions into explainable fraud signals leaders can act on with confidence.",
];

const videoHighlights = [
  {
    title: "See the hidden patterns",
    body: "Watch how suspicious returns, voids, discounts, and cashier activity can be surfaced from everyday POS data.",
  },
  {
    title: "Understand why each case matters",
    body: "Retina does not just flag activity. It helps teams understand why a pattern deserves attention.",
  },
  {
    title: "Move from review to response",
    body: "The workflow is built to help your team investigate faster, align stakeholders, and take action sooner.",
  },
];

export default function PosFraudCampaign202606Page() {
  return (
    <Layout>
      <Seo
        title="Retina POS Fraud Console Campaign"
        description="A focused look at how Retina POS Fraud Console helps retail teams expose hidden POS leakage faster and turn suspicious behavior into actionable investigations."
      />

      <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
        <div className="absolute inset-0">
          <div className="absolute left-[-8rem] top-[-4rem] h-64 w-64 rounded-full bg-rose-500/20 blur-3xl" />
          <div className="absolute bottom-[-6rem] right-[-5rem] h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
        </div>

        <Container className="relative">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
            Retail Loss Prevention Briefing
          </p>
          <h1 className="mt-3 max-w-5xl text-4xl font-semibold sm:text-5xl">
            POS Fraud is happening in your stores. Catch them with Retina.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-200">
            Retina POS Fraud Console helps IT and Audit teams turn everyday POS
            activity into high-confidence fraud signals with a clearer path to
            investigation and action.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={MEETING_HREF} className="sm:min-w-[180px]">
              Schedule a Meeting
            </Button>
            <Button
              href="#video"
              variant="secondary"
              className="sm:min-w-[180px]"
            >
              Watch the Walkthrough
            </Button>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {proofPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-slate-100 backdrop-blur"
              >
                {point}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="video" className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-rose-600">
              See It in Action
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Watch how Retina transforms raw POS activity into prioritized,
              explainable fraud investigations.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              This walkthrough shows the kind of visibility retail teams can
              gain when fraud detection is no longer dependent on scattered
              spreadsheets, manual sampling, or late escalations. It is built to
              help you spot risk earlier, investigate faster, and respond with
              more confidence.
            </p>
          </div>
        </Container>

        <Container className="mt-12">
          <div className="grid gap-5 lg:grid-cols-3">
            {videoHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-slate-50 p-6 shadow-soft ring-1 ring-slate-200"
              >
                <div className="text-lg font-semibold text-slate-900">
                  {item.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>

        <div className="mx-auto mt-10 w-[90vw] max-w-[1600px] md:w-[70vw]">
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
          <div className="mx-auto mt-8 max-w-4xl text-center">
            <p className="text-lg leading-relaxed text-slate-700">
              For retail leaders, this is where the conversation gets
              interesting: not just finding suspicious activity, but building a
              repeatable process for surfacing high-risk behaviors, explaining
              why they matter, and helping teams act before leakage compounds.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              If this reflects the kind of blind spots your team is trying to
              eliminate, the next step is a focused meeting. We can walk through
              how Retina POS Fraud Console fits your current review process and
              where it can deliver the fastest impact.
            </p>
          </div>
        </Container>

        <Container className="mt-12">
          <div className="rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-soft">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="text-2xl font-semibold tracking-tight">
                  Ready to pressure-test your current POS fraud detection
                  process?
                </div>
                <div className="mt-2 text-slate-200">
                  Schedule a meeting and we will walk through the use case with
                  your retail context in mind.
                </div>
              </div>
              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <Button href={MEETING_HREF} variant="secondary">
                  Schedule a Meeting
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
