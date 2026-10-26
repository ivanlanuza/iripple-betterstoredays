import Head from "next/head";
import { useRouter } from "next/router";
import { SITE } from "@/content/siteContent";
import { SITE_URL } from "@/content/revampContent";

export default function Seo({ title, description, image = `${SITE_URL}/images/about-hero.png`, noindex = false, schema }) {
  const router = useRouter();
  const full = title ? `${title} | ${SITE.name}` : SITE.name;
  const path = (router.asPath || "/").split(/[?#]/)[0];
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;
  return (
    <Head>
      <title>{full}</title>
      {description ? <meta name="description" content={description} /> : null}
      <meta property="og:title" content={full} />
      {description ? <meta property="og:description" content={description} /> : null}
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="iRipple enterprise retail technology" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="iRipple" />
      <link rel="canonical" href={canonical} />
      {noindex ? <meta name="robots" content="noindex,follow" /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={full} />
      {description ? <meta name="twitter:description" content={description} /> : null}
      <meta name="twitter:image" content={image} />
      {schema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /> : null}
    </Head>
  );
}
