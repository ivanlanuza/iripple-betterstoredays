import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import PageRenderer from "@/components/PageRenderer";
import { PAGES } from "@/content/siteContent";

export default function Page() {
  {
    const page = PAGES["storeoperations"];
    return (
      <Layout>
        <Seo title={"Store Operations"} description={page.description} />
        <PageRenderer page={page} />
      </Layout>
    );
  }
}
