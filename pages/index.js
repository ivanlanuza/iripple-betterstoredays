import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart3, CheckCircle2, Layers3 } from "lucide-react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Eyebrow, PartnerCta, ProofStrip } from "@/components/marketing/Marketing";
import { ClientLogoWall, PartnershipSummary } from "@/components/marketing/ClientProof";
import { PRODUCT_FAMILIES, SITE_URL } from "@/content/revampContent";

export default function HomePage() {
  const schema = { "@context": "https://schema.org", "@type": "Organization", name: "iRipple", url: SITE_URL, logo: `${SITE_URL}/images/iripple-logo.png`, email: "sales@iripple.com", address: { "@type": "PostalAddress", streetAddress: "2305 East Tektite Towers, Exchange Road, Ortigas CBD", addressLocality: "Pasig City", addressCountry: "PH" } };
  return (
    <Layout>
      <Seo description="iRipple is an enterprise retail technology partner helping retailers operate and understand their business through Barter and Retina." schema={schema} />
      <section className="relative overflow-hidden bg-[#f8f6f1] py-16 sm:py-24 lg:py-28">
        <div className="ripple-lines" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <Eyebrow>Enterprise retail needs more than software</Eyebrow>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">Your enterprise retail technology partner.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">iRipple helps retailers operate and understand their business through two connected platforms—Barter and Retina—backed by people who stay engaged through growth, regulation, new technology, and disruption.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact">Talk to a retail technology specialist <ArrowRight className="ml-2 h-4 w-4" /></Button>
              <Button href="#platforms" variant="secondary">Explore Barter and Retina</Button>
            </div>
            <p className="mt-7 flex items-center gap-2 text-sm font-medium text-slate-600"><CheckCircle2 className="h-4 w-4 text-[#882038]" /> Built for the Philippines. Ready for what comes next.</p>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-full bg-blue-200/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-[0_30px_90px_rgba(32,56,136,.18)]">
              <Image
                src="/images/iripple-partnership-hero-v2.png"
                alt="Retail and technology professionals reviewing operations together in a modern store"
                className="aspect-[3/2] w-full rounded-[1.4rem] object-cover"
                width={1536}
                height={1024}
                priority
                quality={75}
                sizes="(min-width: 1024px) 42vw, (min-width: 640px) 70vw, 100vw"
              />
              <div className="grid grid-cols-2 gap-3 p-3 pb-1 pt-4">
                <div className="rounded-2xl bg-[#eaf0ff] p-4"><Layers3 className="h-5 w-5 text-[#203888]" /><div className="mt-3 text-sm font-semibold">Barter</div><div className="mt-1 text-xs text-slate-600">Operate your business</div></div>
                <div className="rounded-2xl bg-[#fff0f1] p-4"><BarChart3 className="h-5 w-5 text-[#882038]" /><div className="mt-3 text-sm font-semibold">Retina</div><div className="mt-1 text-xs text-slate-600">Understand your business</div></div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <ProofStrip />
      <ClientLogoWall />
      <PartnershipSummary />

      <section id="platforms" className="bg-[#f3f6ff] py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center"><Eyebrow>Two platforms, one retail partner</Eyebrow><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Operate with Barter. Understand with Retina.</h2><p className="mt-5 text-lg leading-8 text-slate-600">A simpler product portfolio, connected around the work retailers do every day and the decisions that shape what comes next.</p></div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[PRODUCT_FAMILIES.barter, PRODUCT_FAMILIES.retina].map((family) => <div key={family.name} className={`rounded-[2rem] p-7 sm:p-9 ${family.name === "Barter" ? "bg-[#203888] text-white" : "bg-white text-slate-950"}`}><Eyebrow light={family.name === "Barter"}>{family.name} platform</Eyebrow><h3 className="mt-4 text-3xl font-semibold tracking-tight">{family.promise}</h3><p className={`mt-4 leading-7 ${family.name === "Barter" ? "text-blue-100" : "text-slate-600"}`}>{family.description}</p><ul className="mt-7 space-y-3">{family.products.map((product) => <li key={product.name} className="flex items-center gap-3 text-sm"><CheckCircle2 className={`h-4 w-4 ${family.name === "Barter" ? "text-blue-200" : "text-[#882038]"}`} />{product.name}</li>)}</ul><Link href={`/${family.name.toLowerCase()}`} className={`mt-8 inline-flex items-center text-sm font-semibold ${family.name === "Barter" ? "text-white" : "text-[#203888]"}`}>Explore {family.name} <ArrowRight className="ml-2 h-4 w-4" /></Link></div>)}
          </div>
        </Container>
      </section>

      <PartnerCta />
    </Layout>
  );
}
