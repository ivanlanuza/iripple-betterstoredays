import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Gift, Layers3, PackageCheck, ScanLine, ShieldCheck, Smartphone, Store } from "lucide-react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Eyebrow, PartnerCta, ProofStrip } from "@/components/marketing/Marketing";
import { BARTER_PRODUCTS } from "@/content/revampContent";
import { BARTER_MODULES } from "@/content/barterContent";

const MODULE_ICONS = { pos: ScanLine, "retail-management": Store, loyalty: Gift, "mobile-inventory": Smartphone };

function ModuleLink({ slug, children, className = "" }) {
  return <Link href={`/barter/${slug}`} className={`group inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[#203888] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#203888] ${className}`}>{children}<ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" /></Link>;
}

function ModuleNav({ active }) {
  return (
    <nav aria-label="Barter modules" className="border-y border-slate-200 bg-white">
      <Container className="flex flex-wrap items-center gap-x-6 gap-y-3 py-5">
        <Link href="/barter" className="text-sm font-semibold text-[#203888]">Barter Platform</Link>
        <span aria-hidden="true" className="hidden h-5 w-px bg-slate-200 sm:block" />
        {BARTER_PRODUCTS.map((product) => <Link key={product.slug} href={`/barter/${product.slug}`} aria-current={product.slug === active ? "page" : undefined} className={`rounded-sm text-sm transition hover:text-[#203888] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#203888] ${product.slug === active ? "font-semibold text-[#203888] underline decoration-2 underline-offset-8" : "text-slate-500"}`}>{product.slug === "retail-management" ? "Retail Management" : product.slug === "mobile-inventory" ? "Mobile Inventory" : product.slug === "pos" ? "POS" : "Loyalty"}</Link>)}
      </Container>
    </nav>
  );
}

export function BarterOverview() {
  return (
    <Layout>
      <Seo title="Barter Platform — Retail operations" description="Fast checkout, central control across stores, customer loyalty, and mobile inventory. Run your retail operation with the Barter Platform from iRipple." />
      <section className="relative overflow-hidden bg-[#f8f6f1] py-16 sm:py-24">
        <div className="ripple-lines" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <Eyebrow>Barter Platform · Operate your business</Eyebrow>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-.05em] sm:text-6xl">Run every store.<br /><span className="text-[#203888]">Control the whole business.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Keep checkout moving, stock under control, and customers coming back. Barter brings POS, retail management, loyalty, and mobile inventory into one retail operations platform.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button href="/contact">Discuss your retail operation <ArrowRight className="ml-2 h-4 w-4" /></Button><Button href="#modules" variant="secondary">Explore the modules</Button></div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#203888] p-7 text-white shadow-[0_25px_80px_rgba(32,56,136,.15)] sm:p-9">
            <div className="ripple-lines ripple-lines-light" aria-hidden="true" />
            <div className="relative"><Layers3 className="h-7 w-7 text-blue-200" /><p className="mt-5 text-3xl font-semibold tracking-tight">One retail operation.<br />Four ways to strengthen it.</p>
              <div className="mt-8 divide-y divide-white/15">
                {BARTER_PRODUCTS.map((product) => { const detail = BARTER_MODULES[product.slug]; const Icon = MODULE_ICONS[product.slug]; return <Link key={product.slug} href={`/barter/${product.slug}`} className="group flex items-center gap-4 py-5"><Icon className="h-6 w-6 shrink-0 text-blue-200" /><div className="min-w-0"><p className="text-xs text-blue-200">{detail.role}</p><p className="mt-1 font-semibold">{detail.label}</p></div><ChevronRight className="ml-auto h-5 w-5 shrink-0 text-blue-200 transition-transform group-hover:translate-x-1" /></Link>; })}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <ModuleNav />
      <section id="modules" className="scroll-mt-24 py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl"><Eyebrow>From checkout to head office</Eyebrow><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Give every team the tools to do its part.</h2></div>
          <div className="mt-12 divide-y divide-slate-200 border-t border-slate-200">
            {BARTER_PRODUCTS.map((product, index) => { const detail = BARTER_MODULES[product.slug]; const Icon = MODULE_ICONS[product.slug]; return (
              <article key={product.slug} className="grid gap-7 py-10 sm:py-12 lg:grid-cols-[.2fr_1fr_1fr] lg:gap-10">
                <div className="flex items-center gap-4 lg:block"><span className="text-sm font-semibold text-slate-400">0{index + 1}</span><Icon className="h-7 w-7 text-[#203888] lg:mt-6" /></div>
                <div><p className="text-sm font-semibold text-[#203888]">{detail.label}</p><h3 className="mt-3 max-w-md text-2xl font-semibold tracking-tight sm:text-3xl">{detail.headline}</h3><ModuleLink slug={product.slug} className="mt-6">Explore {product.slug === "retail-management" ? "Barter RMS" : product.name}</ModuleLink></div>
                <div><p className="leading-7 text-slate-600">{detail.summary}</p><ul className="mt-5 space-y-3">{detail.overviewPoints.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-slate-700"><Check className="mt-1 h-4 w-4 shrink-0 text-[#203888]" />{point}</li>)}</ul></div>
              </article>
            ); })}
          </div>
        </Container>
      </section>
      <section className="bg-[#f3f6ff] py-16 sm:py-20"><Container className="grid gap-10 lg:grid-cols-2 lg:items-center"><div><ShieldCheck className="h-7 w-7 text-[#203888]" /><Eyebrow>Built for Philippine retail</Eyebrow><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">The local detail matters.<br />So does the team behind it.</h2></div><div><p className="text-lg leading-8 text-slate-600">Security, audit trails, and BIR requirements are part of the operating reality. Our dedicated compliance team monitors regulatory changes and proactively adjusts the system as part of the service.</p><Link href="/why-iripple" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#203888]">Meet the partner behind Barter <ArrowRight className="h-4 w-4" /></Link></div></Container></section>
      <ProofStrip />
      <PartnerCta heading="Build a stronger retail operation with Barter." body="Tell us about your stores, your teams, and the work you want to improve. We’ll help you identify the right modules and plan the next step." />
    </Layout>
  );
}

export function BarterModulePage({ slug }) {
  const product = BARTER_PRODUCTS.find((item) => item.slug === slug);
  const detail = BARTER_MODULES[slug];
  const Icon = MODULE_ICONS[slug];
  return (
    <Layout>
      <Seo title={product.name} description={detail.summary} />
      <section className="relative overflow-hidden bg-[#f8f6f1] py-16 sm:py-24">
        <div className="ripple-lines" aria-hidden="true" />
        <Container className="relative grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div><Eyebrow>{detail.label}</Eyebrow><h1 className="mt-5 text-4xl font-semibold tracking-[-.045em] sm:text-5xl lg:text-6xl">{detail.headline}</h1><p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{detail.summary}</p><p className="mt-5 text-sm font-medium text-[#203888]">{detail.audience}</p><div className="mt-8 flex flex-wrap gap-3"><Button href="/contact">Discuss {slug === "retail-management" ? "Barter RMS" : product.name} <ArrowRight className="ml-2 h-4 w-4" /></Button><Button href="#capabilities" variant="secondary">Explore capabilities</Button></div></div>
          <div className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-[0_25px_80px_rgba(32,56,136,.08)] sm:p-9"><div className="flex items-center gap-3 text-[#203888]"><Icon className="h-6 w-6" /><p className="text-sm font-semibold">{detail.role}</p></div><h2 className="mt-5 text-2xl font-semibold tracking-tight">{detail.workflowHeading}</h2><ol className="mt-7">{detail.workflow.map((step, index) => <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0"><div className="flex flex-col items-center"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eaf0ff] text-xs font-semibold text-[#203888]">0{index + 1}</span>{index < detail.workflow.length - 1 ? <span aria-hidden="true" className="mt-2 w-px flex-1 bg-blue-100" /> : null}</div><div><h3 className="font-semibold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{step.text}</p></div></li>)}</ol></div>
        </Container>
      </section>
      <ModuleNav active={slug} />
      <section id="capabilities" className="scroll-mt-24 py-16 sm:py-24"><Container><div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div><Eyebrow>What your team can do</Eyebrow><h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">{detail.capabilitiesHeading}</h2></div><p className="max-w-md leading-7 text-slate-600">{product.description}</p></div><div className="mt-12 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">{detail.capabilities.map((capability, index) => <article key={capability.title} className="border-t border-slate-200 py-7"><p className="text-xs font-semibold text-[#203888]">0{index + 1}</p><h3 className="mt-4 text-xl font-semibold tracking-tight">{capability.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{capability.text}</p></article>)}</div></Container></section>
      <section className="relative overflow-hidden bg-[#203888] py-14 text-white sm:py-20"><div className="ripple-lines ripple-lines-light" aria-hidden="true" /><Container className="relative grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center"><div><PackageCheck className="h-7 w-7 text-blue-200" /><h2 className="mt-5 text-3xl font-semibold tracking-tight">{detail.emphasis}</h2></div><p className="text-lg leading-8 text-blue-100">{detail.emphasisText}</p></Container></section>
      <section className="py-16 sm:py-24"><Container><div className="grid gap-6 lg:grid-cols-2"><div><Eyebrow>Part of the Barter Platform</Eyebrow><h2 className="mt-4 text-3xl font-semibold tracking-tight">Keep the rest of the operation connected.</h2></div><p className="text-lg leading-8 text-slate-600">{detail.connection}</p></div><div className="mt-10 grid gap-7 sm:grid-cols-3">{BARTER_PRODUCTS.filter((item) => item.slug !== slug).map((item) => { const RelatedIcon = MODULE_ICONS[item.slug]; return <div key={item.slug} className="border-t border-slate-200 pt-6"><RelatedIcon className="h-6 w-6 text-[#203888]" /><h3 className="mt-4 font-semibold">{item.name}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{BARTER_MODULES[item.slug].overviewBenefit}</p><ModuleLink slug={item.slug} className="mt-4">Explore module</ModuleLink></div>; })}</div></Container></section>
      <PartnerCta heading={detail.cta} body="Walk us through your operation. We’ll discuss your requirements, the fit for your teams, and an implementation plan." />
    </Layout>
  );
}
