import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Search, X } from "lucide-react";
import Container from "@/components/Container";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Eyebrow, PartnerCta, ProofStrip } from "@/components/marketing/Marketing";
import { clientDisplayName, LEADING_CLIENTS } from "@/content/clientNames";
import { SITE_URL } from "@/content/revampContent";

function ClientMark({ client }) {
  const { width, height, bounds } = client;
  const aspect = bounds.width / bounds.height;
  // Balance the visible artwork, rather than the PNG canvas. Wordmarks get
  // more width; compact symbols get more height, with a comparable visual area.
  const wide = aspect > 7;
  const displayWidth = Math.round(Math.min(wide ? 312 : 168, 82 * aspect, Math.sqrt(6800 * aspect)));

  return (
    <li title={client.name} className={`flex h-32 items-center justify-center border-b border-slate-100 px-5 sm:h-36 sm:px-6 ${wide ? "col-span-2" : ""}`}>
      <div className="relative max-w-full overflow-hidden w-[calc(var(--mark-width)*.82)] sm:w-[var(--mark-width)]" style={{ "--mark-width": `${displayWidth}px`, aspectRatio: aspect }}>
        <Image
          src={client.src}
          alt={client.name}
          width={width}
          height={height}
          unoptimized
          loading="lazy"
          className="absolute !max-w-none"
          style={{
            width: `${width / bounds.width * 100}%`,
            height: "auto",
            left: `${-bounds.left / bounds.width * 100}%`,
            top: `${-bounds.top / bounds.height * 100}%`,
          }}
        />
      </div>
    </li>
  );
}

export default function ClientsPage({ clients }) {
  const [query, setQuery] = useState("");
  const visibleClients = useMemo(() => {
    const search = query.trim().toLocaleLowerCase();
    return search ? clients.filter((client) => `${client.name} ${client.slug}`.toLocaleLowerCase().includes(search)) : clients;
  }, [clients, query]);
  const searching = Boolean(query.trim());

  return (
    <Layout>
      <Seo
        title="Our clients — Retail partnerships"
        description="Meet a selection of the brands and businesses that work with iRipple. Retail technology partnerships across stores, formats, and markets."
        schema={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Our clients", url: `${SITE_URL}/clients`, description: "A selection of brands and businesses that work with iRipple." }}
      />

      <section className="relative overflow-hidden bg-[#f8f6f1] py-16 sm:py-24">
        <div className="ripple-lines" aria-hidden="true" />
        <Container className="relative">
          <Eyebrow>Our clients · Our strongest proof</Eyebrow>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-.05em] sm:text-6xl lg:text-7xl">The brands you know.<br /><span className="text-[#203888]">The partner they trust.</span></h1>
          <div className="mt-8 grid gap-7 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <p className="max-w-2xl text-lg leading-8 text-slate-600">Across stores, formats, and markets, we help retailers run their operations, understand their performance, and move through change—with people who stay alongside them.</p>
            <a href="#client-wall" className="group inline-flex items-center gap-3 justify-self-start rounded-sm text-sm font-semibold text-[#203888] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#203888] lg:justify-self-end">Meet the companies we keep <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" /></a>
          </div>
        </Container>
      </section>

      <ProofStrip />

      <section id="client-wall" className="scroll-mt-24 bg-white pb-20 pt-16 sm:pb-24 sm:pt-20" aria-labelledby="client-wall-heading">
        <Container>
          <div className="grid gap-8 border-b border-slate-200 pb-9 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Eyebrow>In good company</Eyebrow>
              <h2 id="client-wall-heading" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">The names behind the partnerships.</h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-600">A selection of the brands and businesses we work with. Every logo represents a relationship.</p>
            </div>
            <div className="w-full lg:w-64">
              <label htmlFor="client-search" className="sr-only">Find a brand or business</label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-3.5 h-4 w-4 text-slate-400" aria-hidden="true" />
                <input id="client-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a brand" className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-11 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#203888] focus:outline-none focus:ring-2 focus:ring-blue-100 [&::-webkit-search-cancel-button]:appearance-none" aria-controls="client-logos" />
                {query ? <button type="button" onClick={() => setQuery("")} aria-label="Clear brand search" className="absolute right-2 top-1.5 flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#203888]"><X className="h-4 w-4" /></button> : null}
              </div>
              <p role="status" aria-live="polite" aria-atomic="true" className="mt-3 pl-4 text-xs text-slate-500">{searching ? `${visibleClients.length} of ${clients.length} logos` : `${clients.length} featured logos`}</p>
            </div>
          </div>

          <ul id="client-logos" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6" aria-label="Client logos">
            {visibleClients.map((client) => <ClientMark key={client.slug} client={client} />)}
          </ul>
          {visibleClients.length === 0 ? <div className="py-20 text-center"><h3 className="text-xl font-semibold">No matching brand found.</h3><p className="mt-3 text-slate-500">Try another name or browse the full wall.</p><button type="button" onClick={() => setQuery("")} className="mt-6 rounded-full bg-[#203888] px-5 py-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#203888]">Show all logos</button></div> : null}
          <p className="mt-8 text-xs leading-6 text-slate-400">Brand names and logos belong to their respective owners.</p>
        </Container>
      </section>

      <section className="bg-[#f8f6f1] py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div><Eyebrow>Partnership beyond go-live</Eyebrow><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">The relationship matters long after the rollout.</h2></div>
          <div><p className="text-lg leading-8 text-slate-600">New stores. New systems. New regulations. We keep working with our clients as their businesses grow and their needs change.</p><Link href="/why-iripple" className="mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[#203888] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#203888]">See what partnership means at iRipple <ArrowRight className="h-4 w-4" /></Link></div>
        </Container>
      </section>

      <PartnerCta heading="Build your next chapter with iRipple." body="Tell us where your business is heading. We’ll bring the retail experience, technology, and people to help you get there." />
    </Layout>
  );
}

export async function getStaticProps() {
  const fs = await import("node:fs/promises");
  const path = await import("node:path");
  const sharp = (await import("sharp")).default;
  const directory = path.join(process.cwd(), "public", "partner-icons");
  const files = (await fs.readdir(directory)).filter((file) => /\.png$/i.test(file));
  const clients = [];

  // Read artwork bounds at build time. The supplied PNGs stay untouched and
  // only the resulting layout metadata is shipped to the browser.
  for (let offset = 0; offset < files.length; offset += 12) {
    const batch = await Promise.all(files.slice(offset, offset + 12).map(async (file) => {
      const source = path.join(directory, file);
      const metadata = await sharp(source).metadata();
      const { info } = await sharp(source).trim({ background: "#ffffff", threshold: 20, lineArt: true }).toBuffer({ resolveWithObject: true });
      const left = Math.max(0, -(info.trimOffsetLeft || 0));
      const top = Math.max(0, -(info.trimOffsetTop || 0));
      // Leave a small safety margin around anti-aliased edges and fine print.
      const padding = Math.max(2, Math.ceil(Math.max(info.width, info.height) * .018));
      const cropLeft = Math.max(0, left - padding);
      const cropTop = Math.max(0, top - padding);
      const slug = file.replace(/\.png$/i, "");
      return {
        slug,
        name: clientDisplayName(slug),
        src: `/partner-icons/${file}`,
        width: metadata.width,
        height: metadata.height,
        bounds: {
          left: cropLeft,
          top: cropTop,
          width: Math.min(metadata.width, left + info.width + padding) - cropLeft,
          height: Math.min(metadata.height, top + info.height + padding) - cropTop,
        },
      };
    }));
    clients.push(...batch);
  }

  const order = new Map(LEADING_CLIENTS.map((slug, index) => [slug, index]));
  clients.sort((a, b) => (order.get(a.slug) ?? LEADING_CLIENTS.length) - (order.get(b.slug) ?? LEADING_CLIENTS.length) || a.name.localeCompare(b.name, "en"));
  return { props: { clients } };
}
