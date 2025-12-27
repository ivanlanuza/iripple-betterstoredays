import SectionShell from "./SectionShell";
import { splitBlocks, splitTitleBody } from "@/lib/text";
import Button from "@/components/Button";

const linkMap = {
  "History": "/about/history",
  "Core Values": "/about/core-values",
  "Mission and Vision": "/about/mission-vision",
  "Mission & Vision": "/about/mission-vision",
};

export default function NavCardsSection({ sec }) {
  const blocks = splitBlocks(sec.text || "");
  const items = blocks.map((b) => splitTitleBody(b));

  return (
    <SectionShell className="bg-slate-50">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, idx) => (
          <div
            key={idx}
            className="rounded-lg bg-white p-6 shadow-soft ring-1 ring-slate-200"
          >
            <div className="text-base font-semibold text-slate-900 whitespace-pre-line">
              {it.title}
            </div>
            {it.body ? (
              <div className="mt-3 text-sm text-slate-600 whitespace-pre-line">
                {it.body}
              </div>
            ) : null}
            <div className="mt-5">
              <Button href={linkMap[it.title] || "/about"} variant="secondary">
                Learn more
              </Button>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
