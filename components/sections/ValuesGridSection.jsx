import SectionShell from "./SectionShell";
import { splitBlocks, splitTitleBody } from "@/lib/text";

export default function ValuesGridSection({ sec }) {
  const heading = sec.heading || "";
  const text = sec.text || "";

  const blocks = splitBlocks(text);
  // allow cluster headers to appear as simple rows
  const items = blocks.map((b) => splitTitleBody(b));

  return (
    <SectionShell>
      {heading ? (
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {heading} 
        </h2>
      ) : null}
      {sec.subheading ? <div className="mt-2 text-slate-600 whitespace-pre-line">{sec.subheading}</div> : null}

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {items.map((it, idx) => {
          const isCluster = !it.body && !String(it.title).includes("—");
          return (
            <div
              key={idx}
              className={
                "rounded-lg p-6 ring-1 " +
                (isCluster
                  ? "bg-slate-900 text-white ring-slate-900"
                  : "bg-white text-slate-900 shadow-soft ring-slate-200")
              }
            >
              <div className={"text-base font-semibold whitespace-pre-line " + (isCluster ? "text-white" : "text-slate-900")}>
                {it.title}
              </div>
              {it.body ? (
                <div className={"mt-3 text-sm whitespace-pre-line " + (isCluster ? "text-slate-200" : "text-slate-600")}>
                  {it.body}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
