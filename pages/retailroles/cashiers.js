import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import PageRenderer from "@/components/PageRenderer";
import { PAGES } from "@/content/siteContent";

export default function Page() {
  {
    const page = PAGES["cashiers"];
    return (
      <Layout>
        <Seo
          title={"Cashiers and Frontliners"}
          description={page.description}
        />
        <PageRenderer page={page} />
      </Layout>
    );
  }
}
