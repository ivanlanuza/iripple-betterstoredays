import SectionShell from "./SectionShell";
import { splitBlocks } from "@/lib/text";

export default function StatsBarSection({ sec }) {
  const heading = sec.heading || "";
  const text = sec.text || "";
  const stats = splitBlocks(text).map((line) => {
    const parts = String(line).trim().split(/\s+/);
    const big = parts[0] || "";
    const label = String(line).trim().slice(big.length).trim();
    return { big, label };
  });

  return (
    <SectionShell className="bg-gray-100">
      <div className="flex items-end justify-between gap-6">
        {heading ? (
          <h2 className="text-xl font-semibold text-slate-900">{heading}</h2>
        ) : (
          <div />
        )}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className="rounded-lg bg-white p-5 shadow-soft ring-1 ring-slate-200"
          >
            <div className="text-2xl font-bold tracking-tight text-slate-900">
              {s.big}
            </div>
            <div className="mt-1 text-sm text-slate-600 whitespace-pre-line">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
