import SectionShell from "./SectionShell";
import { splitBlocks, splitTitleBody } from "@/lib/text";

export default function TimelineSection({ sec }) {
  const heading = sec.heading || "";
  const sub = sec.subheading || "";
  const blocks = splitBlocks(sec.text || "");

  return (
    <SectionShell className="bg-slate-50">
      {heading ? (
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {heading}
        </h2>
      ) : null}
      {sub ? <div className="mt-2 text-slate-600 whitespace-pre-line max-w-2xl">{sub}</div> : null}

      <div className="mt-10 space-y-8">
        {blocks.map((b, idx) => {
          const { title, body } = splitTitleBody(b);
          return (
            <div key={idx} className="relative">
              {/* Thread line */}
              <div
                aria-hidden
                className={
                  "absolute left-4 top-10 w-px bg-slate-200 " +
                  (idx === blocks.length - 1 ? "h-[calc(100%-2.5rem)]" : "h-full")
                }
              />

              <div className="relative pl-12">
                {/* Title bubble */}
                <div className="relative inline-flex items-center gap-3 rounded-lg bg-white px-4 py-2 shadow-soft ring-1 ring-slate-200">
                  <span className="absolute -left-8 top-1/2 h-3 w-3 -translate-y-1/2 rounded-lg bg-slate-900 ring-4 ring-slate-50" />
                  <div className="text-sm font-semibold text-slate-900 whitespace-pre-line">{title}</div>
                </div>

                {/* Connector */}
                {body ? (
                  <div aria-hidden className="ml-2 mt-4 h-6 w-px bg-slate-200" />
                ) : null}

                {/* Body card */}
                {body ? (
                  <div className="relative mt-0 rounded-lg bg-white p-6 shadow-soft ring-1 ring-slate-200 lg:w-2/3">
                    <div className="text-sm text-slate-600 whitespace-pre-line">{body}</div>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
