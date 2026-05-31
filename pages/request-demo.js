import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Container from "@/components/Container";
import Button from "@/components/Button";

const INDUSTRIES = [
  "Grocery and Supermarket",
  "Department Store",
  "Hardware Retail",
  "Fashion and Apparel",
  "Specialty Retail",
  "Convenience Store",
  "Other",
];

const BRANCH_OPTIONS = ["1-3", "4-10", "11-30", "31-100", "100-500", "500+"];

const INITIAL = {
  email: "",
  name: "",
  mobile: "",
  industryType: "",
  numberOfBranches: "",
  interest: "",
};

function isEmail(s = "") {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s).trim());
}

export default function RequestDemoPage() {
  const router = useRouter();
  const [values, setValues] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const p = String(router.query.product || "").trim();
    if (!p) return;
    setValues((prev) => {
      if (prev.interest.trim()) return prev;
      return { ...prev, interest: `Interested in ${p}` };
    });
  }, [router.query.product]);

  const requiredMissing =
    !values.email.trim() ||
    !values.name.trim() ||
    !values.industryType.trim() ||
    !values.numberOfBranches.trim() ||
    !values.interest.trim();

  const invalid = !isEmail(values.email) || values.name.trim().length > 25;
  const canSubmit = !submitting && !requiredMissing && !invalid;
  const ctaHeader = String(router.query.cta || "").trim();
  const pageHeading = ctaHeader || "Request for Demo";

  async function onSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;

    if (values.name.trim().length > 25) {
      setValues(INITIAL);
      setStatus("Name cannot exceed 25 characters. Please try again.");
      return;
    }

    setSubmitting(true);
    setStatus("");

    try {
      const payload = {
        source: "request-demo",
        page: typeof window !== "undefined" ? window.location.href : "",
        fields: {
          Email: values.email.trim(),
          Name: values.name.trim(),
          Mobile: values.mobile.trim(),
          "Industry Type": values.industryType.trim(),
          "Number of branches": values.numberOfBranches.trim(),
          Interest: values.interest.trim(),
          "Referring URL": typeof document !== "undefined" ? (document.referrer || "") : "",
        },
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Unable to submit request.");

      setValues(INITIAL);
      setStatus("Thank you. Your demo request has been submitted.");
    } catch (err) {
      setStatus(String(err?.message || "Something went wrong."));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Layout>
      <Seo
        title="Request for Demo"
        description="Request a product demo from iRipple retail technology specialists."
      />

      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Request for Demo</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{pageHeading}</h1>
          <p className="mt-5 max-w-3xl text-slate-200">
            Share your retail context and we will schedule a focused demo aligned to your operations.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <form onSubmit={onSubmit} className="max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 sm:col-span-2">
                <span className="text-sm font-semibold text-slate-800">Email <span className="text-rose-600">*</span></span>
                <input
                  type="email"
                  value={values.email}
                  onChange={(e) => setValues((p) => ({ ...p, email: e.target.value }))}
                  className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-800">Name <span className="text-rose-600">*</span></span>
                <input
                  type="text"
                  value={values.name}
                  maxLength={25}
                  onChange={(e) => setValues((p) => ({ ...p, name: e.target.value }))}
                  className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-800">Mobile</span>
                <input
                  type="text"
                  value={values.mobile}
                  onChange={(e) => setValues((p) => ({ ...p, mobile: e.target.value }))}
                  className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-800">Industry Type <span className="text-rose-600">*</span></span>
                <select
                  value={values.industryType}
                  onChange={(e) => setValues((p) => ({ ...p, industryType: e.target.value }))}
                  className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
                >
                  <option value="">Select industry</option>
                  {INDUSTRIES.map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-800">Number of branches <span className="text-rose-600">*</span></span>
                <select
                  value={values.numberOfBranches}
                  onChange={(e) => setValues((p) => ({ ...p, numberOfBranches: e.target.value }))}
                  className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
                >
                  <option value="">Select branch count</option>
                  {BRANCH_OPTIONS.map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 sm:col-span-2">
                <span className="text-sm font-semibold text-slate-800">Interest <span className="text-rose-600">*</span></span>
                <textarea
                  value={values.interest}
                  onChange={(e) => setValues((p) => ({ ...p, interest: e.target.value }))}
                  className="min-h-[130px] rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
                />
              </label>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Button type="submit" disabled={!canSubmit} aria-disabled={!canSubmit}>
                {submitting ? "Submitting..." : "Request for Demo"}
              </Button>
              {values.name.trim().length > 25 ? (
                <p className="text-xs text-rose-600">Name cannot exceed 25 characters.</p>
              ) : null}
            </div>
            {status ? <p className="mt-3 text-sm text-slate-700">{status}</p> : null}
          </form>
        </Container>
      </section>
    </Layout>
  );
}
