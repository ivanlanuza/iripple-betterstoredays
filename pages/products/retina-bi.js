import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import PageRenderer from "@/components/PageRenderer";
import { PAGES } from "@/content/siteContent";

export default function Page() {
  {
    const page = PAGES["retina-bi"];
    return (
      <Layout>
        <Seo
          title={"Retina Business Intelligence"}
          description={page.description}
        />
        <PageRenderer page={page} />
      </Layout>
    );
  }
}
