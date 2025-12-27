import { useEffect, useMemo, useState } from "react";
import SectionShell from "./SectionShell";
import Button from "@/components/Button";

function parseFields(text = "") {
  const t = String(text ?? "");
  const m = t.match(/Form fields:\s*(.*)$/i);
  const list = (m ? m[1] : t)
    .split(/,\s*/g)
    .map((s) => s.trim())
    .filter(Boolean);

  // Keep exact field labels if present; fall back to a standard set.
  return list.length
    ? list
    : ["Name", "Company", "Email", "Phone", "# of branches", "Product interest", "Message"];
}

export default function ContactSection({ sec }) {
  const heading = sec.heading || "";
  const sub = sec.subheading || "";
  const text = sec.text || "";
  const cta = sec.cta || "Submit";
  const fields = useMemo(() => parseFields(text), [text]);

  const requiredSet = useMemo(() => {
    return new Set(["name", "company", "email", "# of branches"]);
  }, []);

  const norm = (s) => String(s ?? "").trim().toLowerCase();

  const initialValues = useMemo(() => {
    const obj = {};
    fields.forEach((f) => {
      obj[f] = "";
    });
    return obj;
  }, [fields]);

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  // Keep state in sync if the sheet-driven fields change
  useEffect(() => {
    setValues((prev) => {
      const next = { ...initialValues };
      for (const k of Object.keys(prev || {})) {
        if (k in next) next[k] = prev[k];
      }
      return next;
    });
  }, [initialValues]);

  function isRequiredLabel(label) {
    return requiredSet.has(norm(label));
  }

  function validate(nextValues) {
    const nextErrors = {};

    for (const f of fields) {
      const v = String(nextValues?.[f] ?? "").trim();
      if (isRequiredLabel(f) && !v) nextErrors[f] = "Required";
    }

    // Basic email format check (only if Email field exists)
    const emailField = fields.find((f) => norm(f) === "email");
    if (emailField) {
      const email = String(nextValues?.[emailField] ?? "").trim();
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        nextErrors[emailField] = "Enter a valid email";
      }
    }

    return nextErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;

    setStatus("");
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSubmitting(true); // disable immediately to prevent double-click

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "website-contact",
          page: typeof window !== "undefined" ? window.location.href : "",
          heading,
          subheading: sub,
          fields: values,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || "Failed to send. Please try again.");
      }

      setStatus("Thanks! We'll reach out soon.");
      setValues(initialValues);
      setErrors({});
    } catch (err) {
      setStatus(String(err?.message || err || "Something went wrong."));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <SectionShell className="bg-slate-50">
      <div id="contact" className="scroll-mt-24 lg:scroll-mt-28 grid gap-10 lg:grid-cols-12 lg:items-start ">
        <div className="lg:col-span-5">
          {heading ? (
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {heading}
            </h2>
          ) : null}
          {sub ? <div className="mt-2 text-slate-600 whitespace-pre-line">{sub}</div> : null}
          {text ? (
            <div className="mt-4 text-sm text-slate-600 whitespace-pre-line">{text}</div>
          ) : null}
        </div>

        <div className="lg:col-span-7">
          <form
            className="rounded-lg bg-white p-6 shadow-soft ring-1 ring-slate-200"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {fields.map((f, idx) => {
                const isMessage = String(f).toLowerCase() === "message";
                const full = String(f);
                return (
                  <label key={idx} className={"grid gap-2 " + (isMessage ? "sm:col-span-2" : "")}>
                    <span className="text-xs font-semibold text-slate-700 whitespace-pre-line">
                      {full}
                      {isRequiredLabel(full) ? <span className="text-rose-600"> *</span> : null}
                    </span>

                    {isMessage ? (
                      <textarea
                        value={values[full] || ""}
                        onChange={(e) => {
                          const v = e.target.value;
                          setValues((p) => ({ ...p, [full]: v }));
                          if (errors[full]) setErrors((p) => ({ ...p, [full]: undefined }));
                        }}
                        className={
                          "min-h-[110px] rounded-lg border bg-white px-4 py-3 text-sm outline-none focus:border-slate-900 " +
                          (errors[full] ? "border-rose-400" : "border-slate-200")
                        }
                      />
                    ) : (
                      <input
                        value={values[full] || ""}
                        onChange={(e) => {
                          const v = e.target.value;
                          setValues((p) => ({ ...p, [full]: v }));
                          if (errors[full]) setErrors((p) => ({ ...p, [full]: undefined }));
                        }}
                        required={isRequiredLabel(full)}
                        type={
                          norm(full) === "email"
                            ? "email"
                            : norm(full) === "# of branches"
                              ? "number"
                              : "text"
                        }
                        inputMode={norm(full) === "# of branches" ? "numeric" : undefined}
                        min={norm(full) === "# of branches" ? 0 : undefined}
                        className={
                          "rounded-lg border bg-white px-4 py-3 text-sm outline-none focus:border-slate-900 " +
                          (errors[full] ? "border-rose-400" : "border-slate-200")
                        }
                      />
                    )}

                    {errors[full] ? (
                      <span className="text-xs text-rose-600">{errors[full]}</span>
                    ) : null}
                  </label>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <Button type="submit" disabled={submitting} aria-disabled={submitting}>
                {submitting ? "Sending…" : cta}
              </Button>
              {status ? (
                <div
                  className={
                    "text-xs " +
                    (status.toLowerCase().includes("fail") || status.toLowerCase().includes("wrong")
                      ? "text-rose-600"
                      : "text-slate-600")
                  }
                >
                  {status}
                </div>
              ) : (
                <div className="text-xs text-slate-500">{" "}</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </SectionShell>
  );
}
