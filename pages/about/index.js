import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import PageRenderer from "@/components/PageRenderer";
import Container from "@/components/Container";
import { PAGES } from "@/content/siteContent";

export default function Page() {
  {
    const page = PAGES["about"];
    return (
      <Layout>
        <Seo title={"About Us"} description={page.description} />
        <section className="bg-slate-950 py-14 text-white sm:py-16">
          <Container>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">About iRipple</p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Built for Better Store Days</h1>
          </Container>
        </section>
        <div className="bg-gradient-to-b from-slate-100 via-white to-slate-100 py-8">
          <PageRenderer page={page} />
        </div>
      </Layout>
    );
  }
}
