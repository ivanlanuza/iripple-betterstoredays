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
      <div className="absolute inset-0 z-10">
        {/* Decorative blue splashes */}
        <div className="absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-zinc-200/30 blur-[140px]" />
        <div className="absolute top-24 -left-32 h-[28rem] w-[28rem] rounded-full bg-slate-600/30 blur-[120px]" />
        <div className="absolute -bottom-40 right-0 h-[32rem] w-[32rem] rounded-full bg-zinc-200/25 blur-[140px]" />
      </div>

      <SectionShell className="relative bg-transparent py-16 sm:py-20">
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
