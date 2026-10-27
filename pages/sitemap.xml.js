const routes = [
  "", "/why-iripple", "/clients", "/barter", "/barter/pos", "/barter/retail-management", "/barter/loyalty", "/barter/mobile-inventory",
  "/retina", "/retina/business-intelligence", "/retina/ai-analyst", "/retina/pos-ai-fraud-detection", "/retina/data-warehousing",
  "/company", "/company/careers", "/contact", "/privacy",
  "/products", "/products/barter-pos", "/products/barter-rms", "/products/myrewards-loyalty", "/products/atlas-inventory-app",
  "/products/retina-bi", "/products/retina-ai-analyst", "/products/retina-pos-fraud-console", "/industries", "/about", "/careers",
];

function Sitemap() { return null; }

export async function getServerSideProps({ res }) {
  const lastmod = new Date().toISOString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>https://www.iripple.com${route}</loc><lastmod>${lastmod}</lastmod></url>`).join("\n")}
</urlset>`;
  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=43200");
  res.write(xml);
  res.end();
  return { props: {} };
}

export default Sitemap;
