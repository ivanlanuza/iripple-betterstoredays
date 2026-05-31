import SectionShell from "./SectionShell";
import Button from "@/components/Button";
import { useRouter } from "next/router";

export default function CtaBandSection({ sec }) {
  const router = useRouter();
  const heading = sec.heading || "";
  const sub = sec.subheading || "";
  const text = sec.text || "";
  const cta = sec.cta || "";
  const isProductPage = router.pathname.startsWith("/products");

  // Some sheets put CTA label in Text column.
  const buttonLabel = isProductPage ? "Request for Demo" : cta || text || "";
  const href = isProductPage
    ? `/request-demo?product=${encodeURIComponent(heading || "Product Demo")}`
    : `/request-demo?cta=${encodeURIComponent(buttonLabel || "Request for Demo")}`;

  return (
    <SectionShell>
      <div className="rounded-2xl bg-slate-900 px-8 py-10 text-white shadow-soft">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            {heading ? (
              <div className="text-2xl font-semibold tracking-tight whitespace-pre-line">
                {heading}
              </div>
            ) : null}
            {sub ? <div className="mt-2 text-slate-200 whitespace-pre-line">{sub}</div> : null}
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            {buttonLabel ? (
              <Button href={href} variant="secondary">
                {buttonLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
