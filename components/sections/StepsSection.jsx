import SectionShell from "./SectionShell";
import { splitBlocks } from "@/lib/text";
import Button from "@/components/Button";

export default function StepsSection({ sec }) {
  const heading = sec.heading || "";
  const text = sec.text || "";
  const cta = sec.cta || "";

  // Supports formats like: "Apply → 2) Initial call → ..."
  const steps = String(text)
    .split(/→/g)
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <SectionShell>
      {heading ? (
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {heading}
        </h2>
      ) : null}

      {steps.length ? (
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <li key={idx} className="rounded-lg bg-white p-6 shadow-soft ring-1 ring-slate-200">
              <div className="text-xs font-semibold text-slate-500">{String(idx + 1).padStart(2, "0")}</div>
              <div className="mt-2 text-sm font-semibold text-slate-900 whitespace-pre-line">{s}</div>
            </li>
          ))}
        </ol>
      ) : (
        <div className="mt-6 text-sm text-slate-600 whitespace-pre-line">{text}</div>
      )}

      {cta ? (
        <div className="mt-8">
          <Button href="/#contact">{cta}</Button>
        </div>
      ) : null}
    </SectionShell>
  );
}
