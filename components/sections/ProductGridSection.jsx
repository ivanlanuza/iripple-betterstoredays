import SectionShell from "./SectionShell";
import Button from "@/components/Button";
import { splitBlocks, splitTitleBody } from "@/lib/text";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import { NAV } from "@/content/siteContent";

function guessLink(title = "") {
  const raw = String(title ?? "");
  const t = raw.toLowerCase();

  // Explicit disambiguation for similarly-named products
  if (t.includes("barter pos")) return "/products/barter-pos";
  if (t.includes("barter retail management system")) return "/products/barter-rms";
  if (t.includes("retina business intelligence")) return "/products/retina-bi";
  if (t.includes("myrewards customer loyalty")) return "/products/myrewards-loyalty";
  if (t.includes("atlas concessionaire app")) return "/products/atlas-inventory-app";

  // Normalize to improve matching (handles punctuation / extra spaces)
  const norm = (s) => String(s ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

  const nt = norm(raw);

  // Prefer the longest matching label to avoid partial collisions (e.g., "Barter")
  const hit = (NAV.products || [])
    .slice()
    .sort((a, b) => String(b.label || "").length - String(a.label || "").length)
    .find((p) => {
      const nl = norm(p.label);
      return nl && (nt.includes(nl) || nl.includes(nt));
    });

  return hit?.path || "/products";
}

export default function ProductGridSection({ sec }) {
  const heading = sec.heading || "";
  const sub = sec.subheading || "";
  const text = sec.text || "";
  const cta = sec.cta || "";
  const blocks = splitBlocks(text);

  // If there's no card content, treat as CTA block.
  const hasCards = blocks.length >= 2;

  return (
    <SectionShell className="bg-slate-50">
      {(heading || sub) ? (
        <div className="max-w-2xl">
          {heading ? (
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {heading}
            </h2>
          ) : null}
          {sub ? <div className="mt-2 text-slate-600 whitespace-pre-line">{sub}</div> : null}
        </div>
      ) : null}

      {hasCards ? (
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {blocks.map((b, idx) => {
            const { title, body } = splitTitleBody(b);
            return (
              <div
                key={idx}
                className="group rounded-lg bg-white p-6 shadow-soft ring-1 ring-slate-200"
              >
                <div className="grid gap-6 sm:grid-cols-12 sm:items-center">
                  <div className="sm:col-span-7">
                    {title ? (
                      <div className="text-base font-semibold text-slate-900 whitespace-pre-line">
                        {title}
                      </div>
                    ) : null}
                    {body ? (
                      <div className="mt-3 text-sm text-slate-600 whitespace-pre-line">
                        {body}
                      </div>
                    ) : null}
                    <div className="mt-5">
                      <Button href={guessLink(title)} variant="secondary">
                        {cta || "Learn more"}
                      </Button>
                    </div>
                  </div>
                  <div className="sm:col-span-5">
                    <PlaceholderMedia
                      src={`/images/products/${(idx) + 1}.png`}
                      className="aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-soft ring-1 ring-slate-200">
          <div className="text-xl font-semibold text-slate-900 whitespace-pre-line">{heading}</div>
          <div className="mt-3 text-slate-600 whitespace-pre-line">{text}</div>
          {cta ? (
            <div className="mt-6">
              <Button href="/#contact">{cta}</Button>
            </div>
          ) : null}
        </div>
      )}
    </SectionShell>
  );
}
