import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Container from "@/components/Container";
import Button from "@/components/Button";

export default function RetinaAiAnalystPage() {
  return (
    <Layout>
      <Seo
        title="Retina AI Analyst"
        description="Your AI retail analyst that answers business questions instantly using your own retail data."
      />

      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
            Retina AI Suite
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold sm:text-5xl">
            Retina AI Analyst
          </h1>
          <p className="mt-5 max-w-3xl text-slate-200">
            Ask your retail data anything. Retina AI Analyst turns questions
            into fast, validated answers so leaders can act in seconds, not
            days.
          </p>
          <div className="mt-8">
            <Button href="/request-demo?product=Retina AI Analyst">
              Request for Demo
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto mt-10 w-[90vw] md:w-[70vw] max-w-[1600px]">
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-slate-950 shadow-soft ring-1 ring-slate-200">
            <iframe
              title="Retina_AI_Analyst"
              src="https://player.vimeo.com/video/1197904650?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
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
              Retina AI Analyst gives retail teams a faster way to turn data
              into decisions by answering business questions in plain English
              with validated, actionable insights. Instead of waiting on manual
              analysis or report queues, leaders can quickly understand what is
              happening across stores, products, promotions, and inventory.
              Watch the explainer video above to see how Retina AI Analyst
              works.
            </p>
          </div>
        </Container>

        <Container className="mt-12">
          <div className="rounded-2xl bg-slate-900 px-8 py-10 text-white shadow-soft">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="text-2xl font-semibold tracking-tight">
                  Ready to get your questions answered faster?
                </div>
                <div className="mt-2 text-slate-200">
                  See how Retina AI Analyst can turn your retail data into
                  faster answers and sharper decisions.
                </div>
              </div>
              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <Button
                  href="/request-demo?product=Retina AI Analyst"
                  variant="secondary"
                >
                  Request for Demo
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
