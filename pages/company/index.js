import Image from "next/image";
import { ArrowRight, Compass, Heart, Users } from "lucide-react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Eyebrow, PartnerCta, ProofStrip } from "@/components/marketing/Marketing";
import { ClientLogoWall } from "@/components/marketing/ClientProof";

const chapters = [
  {
    years: "2000–2005",
    title: "From a garage to a clear retail focus",
    text: "College classmates Victor Javier and Hubert Dy established iRipple in the Philippines on November 21, 2000. Working from a garage, they began by creating custom business applications. In 2002, they made a defining choice: focus entirely on the retail industry. That decision led to Barter POS and began iRipple’s long practice of building around the realities of store operations.",
    highlights: ["Founded in the Philippines", "Retail specialization begins", "Barter POS is created"],
  },
  {
    years: "2006–2010",
    title: "Earning trust at scale—and looking beyond the Philippines",
    text: "iRipple grew with major Philippine retailers including Suysing, Super 8, GABC—home of Penshoppe—and Primer. The experience established the company as a serious local retail technology provider. In 2009, iRipple launched Imonggo, a web-based software-as-a-service POS for the international small and medium retail market. Imonggo would go on to serve retailers across 169 countries. That same year, iRipple became publicly listed on the Philippine Stock Exchange.",
    highlights: ["Major local retail deployments", "Imonggo launches globally", "Public listing in 2009"],
  },
  {
    years: "2011–2015",
    title: "Regional expansion, with deeper roots at home",
    text: "The success of Imonggo opened more opportunities outside the Philippines. Mydin in Malaysia, LME in Thailand, and Agmark in Papua New Guinea joined iRipple’s growing client community. At home, iRipple continued expanding with retailers such as Prince Retail Group and Bonchon. In 2015, the company bought back its public shares and returned to being a 100% privately owned Philippine corporation—giving it greater freedom to invest for the long term.",
    highlights: ["Expansion across Asia-Pacific", "Continued Philippine growth", "Returns to private ownership"],
  },
  {
    years: "2016–2020",
    title: "Broadening from systems to a retail technology ecosystem",
    text: "iRipple expanded into hardware, giving retailers one partner for their software and hardware needs. Fernan Lukban, now iRipple’s Chairman, joined in 2016, followed by CEO Ivan Lanuza in 2019. Retina Business Intelligence also joined the portfolio, expanding iRipple from running retail operations to helping leaders understand them. Loyalty, business intelligence, and mobile inventory capabilities followed, while clients such as Jetti and CW Home Depot brought the company into new retail formats. In 2019, Fernan, Victor, Ivan, and Hubert also founded MySuki, focused on digitizing the FMCG supply chain.",
    highlights: ["Hardware joins the offering", "Retina joins the portfolio", "New formats and adjacent ventures"],
  },
  {
    years: "2021–2025",
    title: "Building through disruption",
    text: "Even through the pandemic and its operational headwinds, iRipple continued investing in its products and local presence. CMG and the Celine Group, Asian Home Appliances, and the Shakey’s Group became part of its expanding client base. iRipple also developed Barter XI, a full retail management solution designed to support larger and more complex enterprise operations.",
    highlights: ["Growth through the pandemic", "More enterprise retail partners", "Barter XI is developed"],
  },
  {
    years: "Today",
    title: "Two platforms, one enduring partnership",
    text: "More than 25 years after its founding, iRipple brings its capabilities together under two platforms. Barter helps retailers operate their business—from checkout and merchandise management to loyalty and mobile inventory. Retina helps them understand the business through intelligence, AI-assisted analysis, fraud detection, and a dependable data foundation. The portfolio has evolved, but the commitment remains the same: understand the operation, build technology that lasts, and stay engaged through what comes next.",
    highlights: ["Barter for retail operations", "Retina for retail intelligence", "Partnership beyond go-live"],
  },
];

export default function CompanyPage() {
  return (
    <Layout>
      <Seo
        title="Company"
        description="For more than 25 years, iRipple has helped retailers navigate change with local understanding, enterprise technology, and lasting partnership."
      />

      <section className="relative overflow-hidden bg-[#f8f6f1] py-20 sm:py-28">
        <div className="ripple-lines" aria-hidden="true" />
        <Container className="relative grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <Eyebrow>About iRipple</Eyebrow>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
              Built through 25 years of real retail change.
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-600">
              iRipple began with two founders, a garage, and a belief that technology could make business work better. Since choosing retail as its focus in 2002, the company has grown alongside retailers—store by store, market by market, and transition by transition.
            </p>
            <Button href="/company/careers" variant="secondary" className="mt-8">
              Build with us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <Image
            src="/images/history-hero.png"
            alt="The evolution of iRipple retail technology"
            width={600}
            height={400}
            className="rounded-[2rem] border-8 border-white shadow-[0_25px_80px_rgba(32,56,136,.16)]"
            sizes="(min-width: 1024px) 42vw, 90vw"
          />
        </Container>
      </section>

      <ProofStrip />
      <ClientLogoWall />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>Our journey</Eyebrow>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">Retail changes. Our commitment stays.</h2>
              <p className="mt-5 leading-7 text-slate-600">
                Each chapter added new technology, new markets, and new ways to serve—but always kept the retailer’s operation at the center.
              </p>
            </div>

            <div className="relative space-y-5 before:absolute before:bottom-8 before:left-[1.18rem] before:top-8 before:w-px before:bg-blue-100 sm:before:left-[2rem]">
              {chapters.map((chapter, index) => (
                <article key={chapter.years} className="relative rounded-[1.75rem] border border-slate-200 bg-white p-6 pl-14 shadow-[0_12px_45px_rgba(32,56,136,.05)] sm:p-8 sm:pl-20">
                  <span className="absolute left-3 top-8 flex h-5 w-5 items-center justify-center rounded-full bg-white ring-4 ring-[#eaf0ff] sm:left-[1.4rem]">
                    <span className={`h-2.5 w-2.5 rounded-full ${index === chapters.length - 1 ? "bg-[#882038]" : "bg-[#203888]"}`} />
                  </span>
                  <p className="text-sm font-semibold tracking-wide text-[#203888]">{chapter.years}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{chapter.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{chapter.text}</p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${chapter.years} highlights`}>
                    {chapter.highlights.map((highlight) => (
                      <li key={highlight} className="rounded-full bg-[#f3f6ff] px-3 py-1.5 text-xs font-medium text-[#203888]">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#203888] py-20 text-white">
        <Container className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow light>What the journey taught us</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Technology changes. Partnership carries the work through.</h2>
          </div>
          <p className="text-lg leading-8 text-blue-100">
            Retailers have moved from single systems to connected operations, cloud platforms, mobile work, business intelligence, and AI. The strongest results still come from the same foundation: understand the business, design for real operating conditions, and keep showing up after go-live.
          </p>
        </Container>
      </section>

      <section className="bg-[#f3f6ff] py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>What guides us</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Clear purpose. Practical values.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { icon: Compass, title: "Make technology useful", text: "Simplify retail, strengthen daily execution, and give people clearer information to act." },
              { icon: Heart, title: "Care about the outcome", text: "Treat the retailer’s operation, people, and customers with the care the work deserves." },
              { icon: Users, title: "Grow through partnership", text: "Share context, solve problems together, and keep learning through every transition." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl bg-white p-7">
                <Icon className="h-6 w-6 text-[#882038]" />
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <PartnerCta heading="Let’s write the next chapter—together." />
    </Layout>
  );
}
