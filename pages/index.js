import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import PageRenderer from "@/components/PageRenderer";
import { PAGES } from "@/content/siteContent";

export default function Page() {
  {
    const page = PAGES["home"];
    return (
      <Layout>
        <Seo title={undefined} description={page.description} />

        {/* Page background with subtle blue splashes */}
        <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50">
          {/* Decorative blue accents (stronger + more visible) */}
          <div className="pointer-events-none absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-blue-400/40 blur-[120px]" />
          <div className="pointer-events-none absolute top-32 -right-48 h-[40rem] w-[40rem] rounded-full bg-blue-500/30 blur-[140px]" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-blue-300/40 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-[-10rem] right-1/4 h-[32rem] w-[32rem] rounded-full bg-sky-400/30 blur-[140px]" />

          {/* Main content */}
          <div className="relative z-10">
            <PageRenderer page={page} />
          </div>
        </div>
      </Layout>
    );
  }
}
