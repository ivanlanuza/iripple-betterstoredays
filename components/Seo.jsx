import Head from "next/head";
import { SITE } from "@/content/siteContent";

export default function Seo({ title, description }) {
  const full = title ? `${title} | ${SITE.name}` : SITE.name;
  const image = "https://www.iripple.com/images/iripple-logo.png";
  return (
    <Head>
      <title>{full}</title>
      {description ? <meta name="description" content={description} /> : null}
      <meta property="og:title" content={full} />
      {description ? <meta property="og:description" content={description} /> : null}
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="iRipple logo" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={full} />
      {description ? <meta name="twitter:description" content={description} /> : null}
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
