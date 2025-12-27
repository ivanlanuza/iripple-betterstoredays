import Head from "next/head";
import { SITE } from "@/content/siteContent";

export default function Seo({ title, description }) {
  const full = title ? `${title} | ${SITE.name}` : SITE.name;
  return (
    <Head>
      <title>{full}</title>
      {description ? <meta name="description" content={description} /> : null}
      <meta property="og:title" content={full} />
      {description ? <meta property="og:description" content={description} /> : null}
    </Head>
  );
}
