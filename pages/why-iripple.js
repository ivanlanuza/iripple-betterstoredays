import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Eyebrow, PartnerCta, ProofStrip } from "@/components/marketing/Marketing";
import { AdvantageMatrix, ClientLogoWall, PartnershipProof } from "@/components/marketing/ClientProof";

export default function WhyIRipplePage() {
  return (
    <Layout>
      <Seo title="Why iRipple" description="Deep Philippine retail understanding, enterprise technology capability, and a team that stays engaged beyond go-live." />

      <section className="relative overflow-hidden bg-[#f8f6f1] py-20 sm:py-28">
        <div className="ripple-lines" aria-hidden="true" />
        <Container className="relative max-w-4xl text-center">
          <Eyebrow>Why iRipple</Eyebrow>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">Built for the complexity of real-world retail.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">Enterprise retail needs technology that works—and a partner who understands local realities, can engineer for enterprise complexity, and stays close to the outcome through every transition.</p>
        </Container>
      </section>

      <ProofStrip />
      <PartnershipProof />

      <AdvantageMatrix />

      <section className="bg-[#203888] py-20 text-white">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow light>How we work</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Masipag. May malasakit. Tumatagal.</h2>
            <p className="mt-5 text-lg leading-8 text-blue-100">We work hard, care about the outcome, and build relationships that last.</p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/15 bg-white/[.07] p-6"><h3 className="font-semibold">Listen to the operation</h3><p className="mt-2 text-sm leading-6 text-blue-100">Start with how people actually work, where friction lives, and what the business must protect.</p></div>
            <div className="rounded-3xl border border-white/15 bg-white/[.07] p-6"><h3 className="font-semibold">Engineer the right path</h3><p className="mt-2 text-sm leading-6 text-blue-100">Bring architects, engineers, developers, and problem solvers together around the retailer’s real requirements.</p></div>
            <div className="rounded-3xl border border-white/15 bg-white/[.07] p-6"><h3 className="font-semibold">Stay through change</h3><p className="mt-2 text-sm leading-6 text-blue-100">Keep improving as the organization, technology landscape, regulations, and market evolve.</p></div>
          </div>
        </Container>
      </section>

      <ClientLogoWall />
      <PartnerCta />
    </Layout>
  );
}
