import Link from "next/link";
import { ArrowRight, BarChart3, Check, ChevronRight, Database, Eye, MessagesSquare, ShieldCheck } from "lucide-react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Eyebrow, PartnerCta, ProofStrip } from "@/components/marketing/Marketing";
import { RETINA_PRODUCTS } from "@/content/revampContent";
import { RETINA_MODULES } from "@/content/retinaContent";

const MODULE_ICONS = {
  "business-intelligence": BarChart3,
  "ai-analyst": MessagesSquare,
  "pos-ai-fraud-detection": ShieldCheck,
  "data-warehousing": Database,
};

function ModuleLink({ slug, children, className = "" }) {
  return (
    <Link href={`/retina/${slug}`} className={`group inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[#882038] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#882038] ${className}`}>
      {children}<ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

function ModuleNav({ active }) {
  return (
    <nav aria-label="Retina modules" className="border-y border-slate-200 bg-white">
      <Container className="flex flex-wrap items-center gap-x-6 gap-y-3 py-5">
        <Link href="/retina" className="text-sm font-semibold text-[#882038]">Retina Platform</Link>
        <span aria-hidden="true" className="hidden h-5 w-px bg-slate-200 sm:block" />
        {RETINA_PRODUCTS.map((product) => (
          <Link key={product.slug} href={`/retina/${product.slug}`} aria-current={product.slug === active ? "page" : undefined} className={`rounded-sm text-sm transition hover:text-[#882038] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#882038] ${product.slug === active ? "font-semibold text-[#882038] underline decoration-2 underline-offset-8" : "text-slate-500"}`}>
            {RETINA_MODULES[product.slug].navLabel}
          </Link>
        ))}
      </Container>
    </nav>
  );
}

export function RetinaOverview() {
  return (
    <Layout>
      <Seo title="Retina Platform — Retail intelligence" description="Understand performance, ask questions of your data, investigate suspicious POS activity, and build a dependable data foundation with Retina from iRipple." />
      <section className="relative overflow-hidden bg-[#f8f6f1] py-16 sm:py-24">
        <div className="ripple-lines" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <Eyebrow>Retina Platform · Understand your business</Eyebrow>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-.05em] sm:text-6xl">See the whole business.<br /><span className="text-[#882038]">Act on what matters.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">See performance clearly, ask better questions, and investigate activity that needs attention. Retina brings business intelligence, AI analysis, fraud detection, and data warehousing into one retail intelligence platform.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Discuss your data and decisions <ArrowRight className="ml-2 h-4 w-4" /></Button>
              <Button href="#modules" variant="secondary">Explore the modules</Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#882038] p-7 text-white shadow-[0_25px_80px_rgba(136,32,56,.15)] sm:p-9">
            <div className="ripple-lines ripple-lines-light" aria-hidden="true" />
            <div className="relative">
              <Eye className="h-7 w-7 text-rose-200" />
              <p className="mt-5 text-3xl font-semibold tracking-tight">Your retail data.<br />Four ways to put it to work.</p>
              <div className="mt-8 divide-y divide-white/15">
                {RETINA_PRODUCTS.map((product) => {
                  const detail = RETINA_MODULES[product.slug];
                  const Icon = MODULE_ICONS[product.slug];
                  return (
                    <Link key={product.slug} href={`/retina/${product.slug}`} className="group flex items-center gap-4 py-5">
                      <Icon className="h-6 w-6 shrink-0 text-rose-200" />
                      <div className="min-w-0"><p className="text-xs text-rose-200">{detail.role}</p><p className="mt-1 font-semibold">{detail.label}</p></div>
                      <ChevronRight className="ml-auto h-5 w-5 shrink-0 text-rose-200 transition-transform group-hover:translate-x-1" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <ModuleNav />
      <section id="modules" className="scroll-mt-24 py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl"><Eyebrow>From information to action</Eyebrow><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Give each question the right tool.</h2></div>
          <div className="mt-12 divide-y divide-slate-200 border-t border-slate-200">
            {RETINA_PRODUCTS.map((product, index) => {
              const detail = RETINA_MODULES[product.slug];
              const Icon = MODULE_ICONS[product.slug];
              return (
                <article key={product.slug} className="grid gap-7 py-10 sm:py-12 lg:grid-cols-[.2fr_1fr_1fr] lg:gap-10">
                  <div className="flex items-center gap-4 lg:block"><span className="text-sm font-semibold text-slate-400">0{index + 1}</span><Icon className="h-7 w-7 text-[#882038] lg:mt-6" /></div>
                  <div><p className="text-sm font-semibold text-[#882038]">{detail.label}</p><h3 className="mt-3 max-w-md text-2xl font-semibold tracking-tight sm:text-3xl">{detail.headline}</h3><ModuleLink slug={product.slug} className="mt-6">Explore {detail.navLabel}</ModuleLink></div>
                  <div><p className="leading-7 text-slate-600">{detail.summary}</p><ul className="mt-5 space-y-3">{detail.overviewPoints.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-slate-700"><Check className="mt-1 h-4 w-4 shrink-0 text-[#882038]" />{point}</li>)}</ul></div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
      <section className="bg-[#fff0f1] py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div><Database className="h-7 w-7 text-[#882038]" /><Eyebrow>Start with data your teams can use</Eyebrow><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Better decisions start with a dependable foundation.</h2></div>
          <div><p className="text-lg leading-8 text-slate-600">Connect business systems, use consistent data definitions, and give the right people access. Retina helps teams move from separate reports to a shared understanding of the business.</p><ModuleLink slug="data-warehousing" className="mt-6">Explore the data foundation</ModuleLink></div>
        </Container>
      </section>
      <ProofStrip />
      <PartnerCta heading="Put your retail data to work with Retina." body="Tell us what your teams need to see, ask, or investigate. We’ll discuss the right modules and the data needed to support them." />
    </Layout>
  );
}

export function RetinaModulePage({ slug }) {
  const detail = RETINA_MODULES[slug];
  const Icon = MODULE_ICONS[slug];
  return (
    <Layout>
      <Seo title={detail.label} description={detail.summary} />
      <section className="relative overflow-hidden bg-[#f8f6f1] py-16 sm:py-24">
        <div className="ripple-lines" aria-hidden="true" />
        <Container className="relative grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <Eyebrow>{detail.label}</Eyebrow>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-.045em] sm:text-5xl lg:text-6xl">{detail.headline}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{detail.summary}</p>
            <p className="mt-5 text-sm font-medium text-[#882038]">{detail.audience}</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button href="/contact">Discuss {detail.navLabel}<ArrowRight className="ml-2 h-4 w-4" /></Button><Button href="#capabilities" variant="secondary">Explore capabilities</Button></div>
          </div>
          <div className="rounded-[2rem] border border-rose-100 bg-white p-7 shadow-[0_25px_80px_rgba(136,32,56,.08)] sm:p-9">
            <div className="flex items-center gap-3 text-[#882038]"><Icon className="h-6 w-6" /><p className="text-sm font-semibold">{detail.role}</p></div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight">{detail.workflowHeading}</h2>
            <ol className="mt-7">
              {detail.workflow.map((step, index) => (
                <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
                  <div className="flex flex-col items-center"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff0f1] text-xs font-semibold text-[#882038]">0{index + 1}</span>{index < detail.workflow.length - 1 ? <span aria-hidden="true" className="mt-2 w-px flex-1 bg-rose-100" /> : null}</div>
                  <div><h3 className="font-semibold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{step.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>
      <ModuleNav active={slug} />
      <section id="capabilities" className="scroll-mt-24 py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl"><Eyebrow>What your team can do</Eyebrow><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{detail.capabilitiesHeading}</h2></div>
          <div className="mt-12 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {detail.capabilities.map((capability, index) => <article key={capability.title} className="border-t border-slate-200 py-7"><p className="text-xs font-semibold text-[#882038]">0{index + 1}</p><h3 className="mt-4 text-xl font-semibold tracking-tight">{capability.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{capability.text}</p></article>)}
          </div>
        </Container>
      </section>
      <section className="relative overflow-hidden bg-[#882038] py-14 text-white sm:py-20">
        <div className="ripple-lines ripple-lines-light" aria-hidden="true" />
        <Container className="relative grid gap-6 lg:grid-cols-2 lg:items-center"><div><Eye className="h-7 w-7 text-rose-200" /><h2 className="mt-5 text-3xl font-semibold tracking-tight">{detail.emphasis}</h2></div><p className="text-lg leading-8 text-rose-100">{detail.emphasisText}</p></Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2"><div><Eyebrow>Part of the Retina Platform</Eyebrow><h2 className="mt-4 text-3xl font-semibold tracking-tight">Build a fuller understanding of your business.</h2></div><p className="text-lg leading-8 text-slate-600">{detail.connection}</p></div>
          <div className="mt-10 grid gap-7 sm:grid-cols-3">
            {RETINA_PRODUCTS.filter((item) => item.slug !== slug).map((item) => {
              const RelatedIcon = MODULE_ICONS[item.slug];
              const related = RETINA_MODULES[item.slug];
              return <div key={item.slug} className="border-t border-slate-200 pt-6"><RelatedIcon className="h-6 w-6 text-[#882038]" /><h3 className="mt-4 font-semibold">{related.label}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{related.overviewBenefit}</p><ModuleLink slug={item.slug} className="mt-4">Explore module</ModuleLink></div>;
            })}
          </div>
        </Container>
      </section>
      <PartnerCta heading={detail.cta} body="Walk us through the decisions your teams need to make. We’ll discuss your requirements, data sources, and an implementation plan." />
    </Layout>
  );
}
