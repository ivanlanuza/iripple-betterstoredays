import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import PageRenderer from "@/components/PageRenderer";
import { PAGES } from "@/content/siteContent";

export default function Page() {
  {
    const page = PAGES["barter-pos"];
    return (
      <Layout>
        <Seo title={"Barter POS"} description={page.description} />
        <PageRenderer page={page} />
      </Layout>
    );
  }
}
