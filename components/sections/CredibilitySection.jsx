import SectionShell from "./SectionShell";
import { splitBlocks } from "@/lib/text";

export default function CredibilitySection({ sec, fallbackText = "" }) {
  const heading = sec.heading || sec.section || "";
  const text = sec.text || fallbackText || "";

  const stats = splitBlocks(text).slice(0, 5).map((line) => {
    const parts = String(line).trim().split(/\s+/);
    const big = parts[0] || "";
    const label = String(line).trim().slice(big.length).trim();
    return { big, label };
  });

  return (
    <SectionShell>
      {heading ? (
        <div className="text-xl font-semibold text-slate-900 whitespace-pre-line">{heading}</div>
      ) : null}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200"
          >
            <div className="text-xl font-bold tracking-tight text-slate-900">
              {s.big}
            </div>
            <div className="mt-1 text-sm text-slate-600 whitespace-pre-line">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex h-14 items-center justify-center rounded-2xl bg-white ring-1 ring-slate-200 text-xs font-semibold text-slate-500"
          >
            Logo
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
