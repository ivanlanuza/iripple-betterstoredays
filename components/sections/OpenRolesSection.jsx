// Edit this list to add/remove open roles
const OPEN_ROLES = [
  {
    title: "Account Manager",
    team: "Client Engagement Team",
    location: "Greater Manila (Hybrid)",
    type: "Full-time",
  },
  {
    title: "C# SoftwareDeveloper",
    team: "Engineering Team",
    location: "Greater Manila (Hybrid)",
    type: "Full-time",
  },
  {
    title: "JavaScript Developer (Electron)",
    team: "Engineering Team",
    location: "Greater Manila (Hybrid)",
    type: "Full-time",
  },
];

import SectionShell from "./SectionShell";

export default function OpenRolesSection({ sec }) {
  const title = sec.heading || sec.section || "";

  const roles = (sec?.roles?.length ? sec.roles : OPEN_ROLES).map((r, i) => {
    const title = r.title || r.role || "";
    const team = r.team || "";
    const location = r.location || "";
    const type = r.type || "";
    const meta = [team, location, type].filter(Boolean).join(" • ");

    return {
      title,
      meta,
      key: r.key || `${title}-${location}-${type}-${i}`,
    };
  });

  return (
    <SectionShell className="bg-slate-50">
      {title ? (
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl whitespace-pre-line">
          {title}
        </h2>
      ) : null}

      {!roles.length ? (
        <div className="mt-4 text-sm text-slate-600">No open roles at the moment.</div>
      ) : null}

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" style={{ display: roles.length ? undefined : "none" }}>
        {roles.map((c) => (
          <div
            key={c.key}
            className="rounded-lg bg-white p-6 shadow-soft ring-1 ring-slate-200"
          >
            <div className="text-base font-semibold text-slate-900 whitespace-pre-line">
              {c.title}
            </div>
            <div className="mt-2 text-sm text-slate-600 whitespace-pre-line">{c.meta}</div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
