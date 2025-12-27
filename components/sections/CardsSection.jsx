import SectionShell from "./SectionShell";
import RichText from "@/components/RichText";
import { splitBlocks, splitTitleBody } from "@/lib/text";
import PlaceholderMedia from "@/components/PlaceholderMedia";

export default function CardsSection({ sec }) {
  const heading = sec.heading || "";
  const sub = sec.subheading || "";
  const text = sec.text || "";
  const blocks = splitBlocks(text); 
  var mediaSrc = sec.media || `/images/placeholder-1.svg`;

  const showCards = blocks.length >= 2;

  return (
    <SectionShell>
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

      {showCards ? (
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {blocks.map((b, idx) => {
            const { title, body } = splitTitleBody(b);
            return (
              <div
                key={idx}
                className="rounded-lg bg-white p-6 shadow-soft ring-1 ring-slate-200"
              >
                {title ? (
                  <div className="text-base font-semibold text-slate-900 whitespace-pre-line">
                    {title}
                  </div>
                ) : null}
                {body ? (
                  <div className="mt-3 text-sm text-slate-600 whitespace-pre-line">
                    {body}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            {text ? <RichText text={text} /> : null}
          </div>
          <div className="lg:col-span-5">
            <PlaceholderMedia src={mediaSrc} className="aspect-[4/3]" />
          </div>
        </div>
      )}
    </SectionShell>
  );
}
