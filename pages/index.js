import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowRight, CheckCircle2 } from "lucide-react";
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
      <section className="home-hero">
        <div className="home-hero__visual" aria-hidden="true">
          <Image
            src="/images/iripple-partnership-hero-v2.png"
            alt=""
            className="home-hero__image"
            fill
            priority
            quality={75}
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
          <div className="home-hero__image-wash" />
          <div className="home-hero__signal">
            <span className="home-hero__signal-dot" />
            <span className="home-hero__ring home-hero__ring--one" />
            <span className="home-hero__ring home-hero__ring--two" />
            <span className="home-hero__ring home-hero__ring--three" />
          </div>
          <div className="home-hero__product home-hero__product--barter">
            <span>Barter</span>
            <small>Operate</small>
          </div>
          <div className="home-hero__product home-hero__product--retina">
            <span>Retina</span>
            <small>Understand</small>
          </div>
        </div>

        <Container className="home-hero__inner">
          <div className="home-hero__copy">
            <p className="home-hero__eyebrow"><span /> Enterprise retail, connected</p>
            <h1 className="home-hero__title">
              <span>Run retail.</span>
              <span className="home-hero__title-accent">See further.</span>
            </h1>
            <p className="home-hero__lede">Barter runs the day. Retina reveals what’s next. iRipple makes them work as one.</p>
            <div className="home-hero__actions">
              <Button href="/contact" variant="warm" className="home-hero__cta">Start a conversation <ArrowRight className="ml-2 h-4 w-4" /></Button>
              <a href="#platforms" className="home-hero__explore">See how it works <ArrowDownRight className="h-4 w-4" /></a>
            </div>
          </div>
        </Container>

        <div className="home-hero__edge" aria-hidden="true">
          <span>Built for Philippine retail</span>
          <span className="home-hero__edge-line" />
        </div>
      </section>
      <ProofStrip />
      <ClientLogoWall />
      <PartnershipSummary />

      <section id="platforms" className="bg-[#f3f6ff] py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center"><Eyebrow>Two platforms, one retail partner</Eyebrow><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl"><span className="block">Operate with Barter.</span><span className="mt-2 block">Understand with Retina.</span></h2></div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[PRODUCT_FAMILIES.barter, PRODUCT_FAMILIES.retina].map((family) => <div key={family.name} className={`rounded-[2rem] p-7 sm:p-9 ${family.name === "Barter" ? "bg-[#203888] text-white" : "bg-white text-slate-950"}`}><Eyebrow light={family.name === "Barter"}>{family.name} platform</Eyebrow><h3 className="mt-4 text-3xl font-semibold tracking-tight">{family.promise}</h3><p className={`mt-4 leading-7 ${family.name === "Barter" ? "text-blue-100" : "text-slate-600"}`}>{family.description}</p><ul className="mt-7 space-y-3">{family.products.map((product) => <li key={product.name} className="flex items-center gap-3 text-sm"><CheckCircle2 className={`h-4 w-4 ${family.name === "Barter" ? "text-blue-200" : "text-[#882038]"}`} />{product.name}</li>)}</ul><Link href={`/${family.name.toLowerCase()}`} className={`mt-8 inline-flex items-center text-sm font-semibold ${family.name === "Barter" ? "text-white" : "text-[#203888]"}`}>Explore {family.name} <ArrowRight className="ml-2 h-4 w-4" /></Link></div>)}
          </div>
        </Container>
      </section>

      <PartnerCta />
    </Layout>
  );
}
