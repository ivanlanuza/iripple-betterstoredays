import Link from "next/link";
import { ArrowRight, Check, Database, Eye, HeartHandshake, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Seo from "@/components/Seo";
import Layout from "@/components/Layout";
import { PROOF_POINTS } from "@/content/revampContent";

export function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow ${light ? "text-blue-200" : "text-[#203888]"}`}>{children}</p>;
}

export function ProofStrip() {
  return (
    <section className="border-y border-slate-200 bg-white" aria-label="iRipple at a glance">
      <Container className="grid grid-cols-2 divide-x divide-slate-200 py-7 lg:grid-cols-4">
        {PROOF_POINTS.map((item) => (
          <div key={item.label} className="px-4 py-3 text-center sm:px-7">
            <div className="text-3xl font-semibold tracking-tight text-[#203888] sm:text-4xl">{item.value}</div>
            <div className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">{item.label}</div>
          </div>
        ))}
      </Container>
    </section>
  );
}

export function PartnerCta({ heading = "Let’s build what comes next for your retail business.", body = "Tell us where you are today and what needs to change. We’ll help you identify the right starting point." }) {
  return (
    <section className="bg-[#203888] py-16 text-white sm:py-20">
      <Container className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] px-6 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
        <div className="ripple-lines ripple-lines-light" aria-hidden="true" />
        <div className="relative max-w-2xl">
          <Eyebrow light>Start a conversation</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{heading}</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-blue-100">{body}</p>
        </div>
        <div className="relative mt-8 shrink-0 lg:mt-0">
          <Button href="/contact" variant="warm">Talk to a retail technology specialist <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </div>
      </Container>
    </section>
  );
}

export function ProductCard({ product, family }) {
  return (
    <Link href={`/${family}/${product.slug}`} className="group flex h-full flex-col rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_15px_50px_rgba(32,56,136,0.06)] transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_60px_rgba(32,56,136,0.12)]">
      <div className={`mb-7 flex h-11 w-11 items-center justify-center rounded-2xl ${family === "barter" ? "bg-[#eaf0ff] text-[#203888]" : "bg-[#fff0f1] text-[#882038]"}`}>
        {family === "barter" ? <Layers3 className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-slate-950">{product.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{product.short}</p>
      <span className="mt-6 inline-flex items-center text-sm font-semibold text-[#203888]">Explore capability <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" /></span>
    </Link>
  );
}

export function FamilyPage({ family }) {
  return (
    <Layout>
      <Seo title={`${family.name} — ${family.promise}`} description={family.description} />
      <section className={`relative overflow-hidden py-20 sm:py-28 ${family.accent === "barter" ? "bg-[#f3f6ff]" : "bg-[#fff7f5]"}`}>
        <div className="ripple-lines" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <Eyebrow>{family.name} retail platform</Eyebrow>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-6xl">{family.promise}.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{family.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Talk to a specialist</Button>
              <Button href="#capabilities" variant="secondary">See the capabilities</Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className={`absolute inset-10 rounded-full blur-3xl ${family.accent === "barter" ? "bg-blue-300/35" : "bg-rose-300/30"}`} />
            <div className="relative space-y-3 rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-[0_25px_80px_rgba(32,56,136,.14)] backdrop-blur">
              {family.products.map((product, index) => (
                <div key={product.name} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4">
                  <span className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-semibold ${family.accent === "barter" ? "bg-[#eaf0ff] text-[#203888]" : "bg-[#fff0f1] text-[#882038]"}`}>0{index + 1}</span>
                  <span className="font-medium text-slate-800">{product.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section id="capabilities" className="py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>One platform, four capabilities</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Start where the need is. Build toward a connected retail operation.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">{family.products.map((product) => <ProductCard key={product.slug} family={family.name.toLowerCase()} product={product} />)}</div>
        </Container>
      </section>
      <ProofStrip />
      <PartnerCta />
    </Layout>
  );
}

export function CapabilityPage({ family, product }) {
  const familyKey = family.name.toLowerCase();
  return (
    <Layout>
      <Seo title={product.name} description={product.short} />
      <section className="relative overflow-hidden bg-[#f8f6f1] py-16 sm:py-24">
        <div className="ripple-lines" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>{family.name} · {family.promise}</Eyebrow>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl">{product.name}</h1>
            <p className="mt-5 text-xl leading-8 text-slate-700">{product.short}</p>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">{product.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Discuss your requirements</Button>
              <Button href={`/${familyKey}`} variant="secondary">Explore {family.name}</Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-[0_25px_80px_rgba(32,56,136,.14)]">
            <img src={product.image} alt={`${product.name} capability`} className="aspect-[4/3] w-full rounded-[1.4rem] object-cover" />
          </div>
        </Container>
      </section>
      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <Eyebrow>Business impact</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Designed around the work your teams need to get done.</h2>
            <div className="mt-8 space-y-4">
              {product.outcomes.map((outcome) => <div key={outcome} className="flex items-start gap-3"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eaf0ff] text-[#203888]"><Check className="h-4 w-4" /></span><span className="text-slate-700">{outcome}</span></div>)}
            </div>
          </div>
          <div className="rounded-[2rem] bg-[#203888] p-7 text-white sm:p-10">
            <Eyebrow light>Core capabilities</Eyebrow>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.features.map((feature) => <div key={feature} className="flex min-h-24 items-start gap-3 rounded-2xl border border-white/15 bg-white/[0.07] p-4"><Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-200" /><span className="text-sm leading-6 text-blue-50">{feature}</span></div>)}
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-[#f3f6ff] py-16">
        <Container className="grid gap-5 sm:grid-cols-3">
          {[{ icon: HeartHandshake, title: "Partnered implementation", text: "A team that works with yours from discovery through rollout and beyond." }, { icon: ShieldCheck, title: "Enterprise-minded", text: "Built around dependable operations, clear controls, and the realities of scale." }, { icon: Database, title: "Connected by design", text: `Part of ${family.name}, with a path toward a more connected retail technology foundation.` }].map(({ icon: Icon, title, text }) => <div key={title} className="rounded-3xl border border-blue-100 bg-white p-6"><Icon className="h-6 w-6 text-[#203888]" /><h3 className="mt-5 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div>)}
        </Container>
      </section>
      <PartnerCta heading={`See how ${product.name} can fit your retail operation.`} />
    </Layout>
  );
}

export function Feature({ icon: Icon = Sparkles, title, children }) {
  return <div className="rounded-3xl border border-slate-200 bg-white p-6"><Icon className="h-6 w-6 text-[#203888]" /><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{children}</p></div>;
}
