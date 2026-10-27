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
        <Link href="/clients" className="mt-12 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[#203888] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#203888]">Explore our client wall <ArrowRight className="h-4 w-4" /></Link>
      </Container>
    </section>
  );
}

export function PartnershipSummary() {
  return (
    <section className="relative overflow-hidden bg-[#203888] py-16 text-white sm:py-20">
      <div className="ripple-lines ripple-lines-light" aria-hidden="true" />
      <Container className="relative grid gap-10 sm:grid-cols-[.6fr_1.4fr] sm:items-center lg:gap-20">
        <div className="border-b border-white/20 pb-8 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-10">
          <p className="text-7xl font-semibold tracking-[-.06em] sm:text-8xl lg:text-9xl">25<span className="text-blue-200">+</span></p>
          <p className="mt-3 max-w-44 text-sm leading-6 text-blue-100">years of growing alongside retailers</p>
        </div>
        <div>
          <Eyebrow light>Your next chapter, together</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">Grow. Adapt. Keep moving.</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-blue-100">From your next store to your next system, we bring the people and technology to see it through.</p>
          <p className="mt-5 text-sm font-medium text-blue-200">Expansion. Technology. Compliance. A partner for every step.</p>
          <Link href="/why-iripple" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold !text-[#203888] transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            See the partnership in action <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
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
          <Eyebrow>A partner through change</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">With you as your business grows.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">We help retailers expand, modernize their systems, and stay compliant—with a team that knows their business.</p>
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
        <div className="mt-12" role="figure" aria-label="Comparison of enterprise technology depth and Philippine retail understanding. iRipple combines deep technology with deep local understanding.">
          <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-2 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-4">
            <div className="grid grid-rows-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500 sm:text-xs">
              <div className="flex items-center justify-center"><span className="rotate-180 [writing-mode:vertical-rl]">Deep technology</span></div>
              <div className="flex items-center justify-center"><span className="rotate-180 [writing-mode:vertical-rl]">Limited technology</span></div>
            </div>
            <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-300 sm:rounded-[2rem]">
              {cells.map((cell) => (
                <div key={cell.label} className={`flex min-h-52 flex-col justify-center p-4 sm:min-h-64 sm:p-8 lg:p-10 ${cell.active ? "relative bg-[#203888] text-white" : "bg-slate-50 text-slate-400"} [&:nth-child(odd)]:border-r [&:nth-child(-n+2)]:border-b border-slate-300`}>
                  {cell.active ? <><p className="text-3xl font-semibold tracking-tight sm:text-5xl">iRipple</p><p className="mt-4 text-base font-semibold leading-snug text-white sm:text-2xl">Enterprise technology.<br />Philippine retail expertise.</p><p className="mt-4 text-xs text-blue-200 sm:text-sm">Both. In one partner.</p></> : <><p className="text-xs font-medium sm:text-sm">{cell.label}</p><p className="mt-3 text-sm leading-relaxed sm:text-lg">{cell.line1}<br />{cell.line2}</p></>}
                </div>
              ))}
            </div>
          </div>
          <div className="ml-12 grid grid-cols-2 gap-4 pt-4 text-center text-[10px] font-semibold uppercase tracking-wider text-slate-500 sm:ml-20 sm:text-xs">
            <p>Limited local understanding</p>
            <p>Deep local understanding</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
