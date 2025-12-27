import SectionShell from "./SectionShell";

export default function QuoteSection({ sec }) {
  const heading = sec.heading || "";
  const text = sec.text || "";

  // Keep exact quotes as provided; split by blank lines.
  const quotes = String(text ?? "").split(/\n\n+/g).map((q) => q.trim()).filter(Boolean);

  return (
    <SectionShell className="bg-slate-50">
      {heading ? (
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {heading}
        </h2>
      ) : null}

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {(quotes.length ? quotes : [""]).map((q, idx) => (
          <figure key={idx} className="rounded-lg bg-white p-8 shadow-soft ring-1 ring-slate-200">
            <blockquote className="text-slate-700 whitespace-pre-line">{q}</blockquote>
          </figure>
        ))}
      </div>
    </SectionShell>
  );
}
