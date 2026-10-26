import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Braces, Building2, Cable, History, RefreshCw, Scale } from "lucide-react";
import Container from "@/components/Container";
import { Eyebrow } from "@/components/marketing/Marketing";
import {
  CLIENT_LOGOS,
  EXPANSION_STORIES,
  TECH_EVOLUTION,
  TRANSITION_STORIES,
} from "@/content/revampContent";

export function ClientLogoWall({ compact = false }) {
  return (
    <section className={`${compact ? "py-16" : "py-20 sm:py-24"} border-y border-slate-200 bg-white`}>
      <Container>
        <div className={compact ? "text-center" : "max-w-3xl"}>
          <Eyebrow>Trusted by progressive retailers</Eyebrow>
          <h2 className={`${compact ? "mt-3 text-2xl" : "mt-4 text-3xl sm:text-4xl"} font-semibold tracking-tight text-slate-950`}>
            Proven in the company we keep.
          </h2>
          {!compact ? <p className="mt-4 text-lg leading-8 text-slate-600">Leading retailers across formats and markets have trusted iRipple with the technology behind their operations.</p> : null}
        </div>
        <div className="mt-12 grid grid-cols-2 items-center gap-x-10 gap-y-14 lg:grid-cols-3">
          {CLIENT_LOGOS.map((client) => (
            <div key={client.name} className="flex h-28 items-center justify-center px-4" title={client.name}>
              <Image src={client.src} alt={`${client.name} logo`} width={320} height={130} className="max-h-24 w-auto max-w-full object-contain" sizes="(min-width: 1024px) 300px, (min-width: 640px) 240px, 160px" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function PartnershipSummary() {
  const points = [
    "Growth",
    "Enterprise transitions",
    "New technology",
    "Regulatory change",
    "Connected ecosystems",
    "Market disruption",
  ];

  return (
    <section className="bg-[#203888] py-16 text-white sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div>
          <Eyebrow light>A partner through change</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Retail never stands still. Neither do we.</h2>
          <p className="mt-4 max-w-xl leading-7 text-blue-100">For more than 25 years, iRipple has helped retailers keep moving through the changes that matter most.</p>
          <Link href="/why-iripple" className="mt-7 inline-flex items-center text-sm font-semibold text-white">
            Why retailers choose iRipple <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {points.map((point) => <div key={point} className="rounded-2xl border border-white/15 bg-white/[.07] px-4 py-5 text-sm font-semibold">Through {point.toLowerCase()}</div>)}
        </div>
      </Container>
    </section>
  );
}

export function PartnershipProof() {
  return (
    <section className="bg-[#f8f6f1] py-20 sm:py-28">
      <Container>
        <div className="max-w-5xl">
          <Eyebrow>Partnership under pressure</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">When retail changes, the question is who stays with you.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">A true partner helps you move forward without handing the consequences back to your team.</p>
        </div>

        <article className="mt-12 overflow-hidden rounded-[2rem] bg-[#203888] text-white">
          <div className="grid lg:grid-cols-[.85fr_1.15fr]">
            <div className="p-7 sm:p-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-blue-100"><Building2 className="h-5 w-5" /></div>
              <p className="mt-7 text-sm font-semibold uppercase tracking-[.16em] text-blue-200">First: scale without losing control</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">Growth should feel like momentum—not a reset.</h3>
              <p className="mt-5 max-w-md leading-7 text-blue-100">We help retailers expand operations and migrate enterprise systems while protecting day-to-day continuity.</p>
            </div>
            <div className="border-t border-white/15 p-7 sm:p-10 lg:border-l lg:border-t-0">
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-blue-200"><Building2 className="h-4 w-4" /> Retailers who expanded with us</div>
                  <dl className="mt-5 space-y-4">
                    {EXPANSION_STORIES.map((story) => <div key={story.client} className="flex items-end justify-between gap-4 border-b border-white/15 pb-3"><dt className="text-sm text-blue-100">{story.client}</dt><dd className="text-xl font-semibold">{story.from} <ArrowRight className="inline h-4 w-4 text-blue-200" /> {story.to}</dd></div>)}
                  </dl>
                </div>
                <div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-blue-200"><History className="h-4 w-4" /> Enterprise migrations delivered</div>
                  <dl className="mt-5 space-y-4">
                    {TRANSITION_STORIES.map((story) => <div key={story.client} className="flex items-end justify-between gap-4 border-b border-white/15 pb-3"><dt className="text-sm text-blue-100">{story.client}</dt><dd className="text-xl font-semibold">{story.scale}</dd></div>)}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="mt-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
          <div className="p-7 sm:p-10">
            <div className="flex items-center gap-3 text-[#203888]"><Braces className="h-5 w-5" /><p className="text-sm font-semibold uppercase tracking-[.16em]">Then: keep the foundation moving</p></div>
            <h3 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">Technology evolves. The responsibility to make it work stays.</h3>
            <div className="mt-8 flex flex-wrap items-center gap-2 text-sm font-medium text-slate-700">
              {TECH_EVOLUTION.map((stage, index) => <span key={stage} className="flex items-center gap-2"><span className="rounded-full bg-[#f3f6ff] px-3 py-2">{stage}</span>{index < TECH_EVOLUTION.length - 1 ? <ArrowRight className="h-4 w-4 text-[#203888]" /> : null}</span>)}
            </div>
          </div>
          <div className="grid border-t border-slate-200 lg:grid-cols-[.85fr_.85fr_1.3fr]">
            <div className="p-7 sm:p-9">
              <Cable className="h-5 w-5 text-[#203888]" />
              <h4 className="mt-5 text-xl font-semibold">Connect the entire ecosystem.</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">Malls, payments, ERPs, commerce platforms, cloud, data, and AI—built to connect.</p>
            </div>
            <div className="border-t border-slate-200 p-7 sm:p-9 lg:border-l lg:border-t-0">
              <RefreshCw className="h-5 w-5 text-[#203888]" />
              <h4 className="mt-5 text-xl font-semibold">Keep learning with the market.</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">We have kept serving through financial crises, COVID-19, and every next shift.</p>
            </div>
            <div className="border-t border-slate-200 bg-[#fff0f1] p-7 sm:p-9 lg:border-l lg:border-t-0">
              <Scale className="h-5 w-5 text-[#882038]" />
              <p className="mt-5 text-sm font-semibold uppercase tracking-[.16em] text-[#882038]">The difference that matters</p>
              <h4 className="mt-3 text-2xl font-semibold tracking-tight">Compliance is part of the service.</h4>
              <p className="mt-3 leading-7 text-slate-600">Our dedicated team monitors Philippine and BIR requirements, then proactively adjusts the system—not as another change request.</p>
            </div>
          </div>
        </article>

        <article className="mt-6 rounded-[2rem] border border-blue-100 bg-[#f3f6ff] p-7 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.16em] text-[#203888]">The result</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">A partner built for the long run.</h3>
            </div>
            <p className="text-lg leading-8 text-slate-600">More than 25 years of enterprise retail experience, client relationships that span decades, and a team that stays accountable when the operating environment gets harder.</p>
          </div>
        </article>
      </Container>
    </section>
  );
}

export function AdvantageMatrix() {
  const cells = [
    { label: "Global platforms", line1: "Strong technology.", line2: "Less local context." },
    { label: "iRipple", line1: "Local depth +", line2: "enterprise technology.", active: true },
    { label: "Generic software", line1: "Software first.", line2: "Limited enterprise fit." },
    { label: "Local vendors", line1: "Strong local context.", line2: "More limited technology depth." },
  ];
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl"><Eyebrow>Our advantage is in the intersection</Eyebrow><h2 className="mt-4 text-4xl font-semibold tracking-tight">Deep Philippine retail understanding + serious enterprise technology depth.</h2></div>
        <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-slate-200 sm:grid-cols-2">
          {cells.map((cell) => <div key={cell.label} className={`min-h-56 border-slate-200 p-7 sm:p-9 ${cell.active ? "bg-[#eaf0ff]" : "bg-white"} [&:nth-child(odd)]:sm:border-r [&:nth-child(-n+2)]:border-b`}><p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-500">{cell.label}</p><p className={`mt-7 text-2xl font-semibold tracking-tight ${cell.active ? "text-[#203888]" : "text-slate-900"}`}>{cell.line1}<br />{cell.line2}</p>{cell.active ? <p className="mt-6 text-sm font-semibold text-[#203888]">The space we choose to own.</p> : null}</div>)}
        </div>
      </Container>
    </section>
  );
}
