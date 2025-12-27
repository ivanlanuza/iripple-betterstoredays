import SectionShell from "./SectionShell";
import Button from "@/components/Button";
import PlaceholderMedia from "@/components/PlaceholderMedia";
import RichText from "@/components/RichText";

export default function HeroSection({ sec, idx = 0 }) {
  const heading = sec.heading || "";
  const sub = sec.subheading || "";
  const text = sec.text || "";
  const cta = sec.cta || "";
  var mediaSrc = sec.media || `/images/placeholder-${(idx % 6) + 1}.svg`;

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-slate-100 blur-3xl" />
        <div className="absolute -bottom-32 right-10 h-96 w-96 rounded-full bg-slate-50 blur-3xl" />
      </div>

      <SectionShell className="py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            {sub ? (
              <div className="mb-3 inline-flex rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold tracking-wide text-slate-700">
                {sub}
              </div>
            ) : null}

            {heading ? (
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                {heading}
              </h1>
            ) : null}

            {text ? <div className="mt-6"><RichText text={text} /></div> : null}

            {cta ? (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/#contact">{cta}</Button>
                <Button href="/products" variant="secondary">See Products</Button>
              </div>
            ) : null}
          </div>

          <div className="lg:col-span-6">
            <PlaceholderMedia src={mediaSrc} className="aspect-[4/3]" alt={sec.media || ""} />
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
