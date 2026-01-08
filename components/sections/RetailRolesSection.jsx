import SectionShell from "./SectionShell";
import Button from "@/components/Button";
import { splitBlocks, splitTitleBody } from "@/lib/text";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import { NAV } from "@/content/siteContent";
import {
  UserCircle,
  Megaphone,
  Boxes,
  BarChart3,
  Monitor,
  Store
} from "lucide-react";

function guessLink(title = "") {
  const raw = String(title ?? "");
  const t = raw.toLowerCase();

  // Explicit disambiguation for similarly-named products
  if (t.includes("cashiers")) return "/retailroles/cashiers";
  if (t.includes("merchandisers")) return "/retailroles/merchandisers";
  if (t.includes("it managers")) return "/retailroles/itmanagers";
  if (t.includes("executives")) return "/retailroles/executives";
  if (t.includes("store operations")) return "/retailroles/storeoperations";
  if (t.includes("marketing")) return "/retailroles/marketingcreatives";

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

function guessIcon(title = "") {
  const t = String(title ?? "").toLowerCase();

  if (t.includes("cashier") || t.includes("frontliner")) return UserCircle;
  if (t.includes("marketing")) return Megaphone;
  if (t.includes("inventory") || t.includes("merchandiser") || t.includes("warehouse")) return Boxes;
  if (t.includes("executive") || t.includes("manager")) return BarChart3;
  if (t.includes("it")) return Monitor;
  if (t.includes("store")) return Store;

  return UserCircle;
}

export default function RetailRolesSection({ sec }) {
  const heading = sec.heading || "";
  const sub = sec.subheading || "";
  const text = sec.text || "";
  const cta = sec.cta || "";
  const blocks = splitBlocks(text);

  // If there's no card content, treat as CTA block.
  const hasCards = blocks.length >= 2;

  return (
    <SectionShell className="relative overflow-hidden bg-white border-t border-slate-200">
    
    {/* Decorative blue splashes */}
    <div className="pointer-events-none absolute -top-32 -left-40 h-[28rem] w-[28rem] rounded-full bg-blue-200/30 blur-[120px]" />
    <div className="pointer-events-none absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-blue-300/25 blur-[140px]" />
    <div className="pointer-events-none absolute bottom-[-8rem] left-1/3 h-[24rem] w-[24rem] rounded-full bg-sky-200/30 blur-[120px]" />

    {/* Section content */}
    <div className="relative z-10">
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
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {blocks.map((b, idx) => {
            const { title, body } = splitTitleBody(b);
            return (
              <div
                key={idx}
                className="group rounded-lg bg-white p-6 shadow-soft ring-1 ring-slate-200"
              >
                <div className="grid gap-6 sm:grid-cols-12 sm:items-center">
                  <div className="sm:col-span-12">
                    {title ? (() => {
                      const Icon = guessIcon(title);
                      return (
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-md bg-blue-50 ring-1 ring-blue-200">
                            <Icon className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="text-base mt-2 font-semibold text-slate-900 whitespace-pre-line">
                            {title}
                          </div>
                        </div>
                      );
                    })() : null}
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
    </div>
    </SectionShell>
  );
}
