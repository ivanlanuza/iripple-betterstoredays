import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/Button";

const initial = { name: "", email: "", mobile: "", company: "", industry: "", branches: "", interest: "", website: "" };
const industries = ["Grocery and supermarkets", "Convenience stores", "Fashion and specialty retail", "Food and beverage", "Home depots and hardware", "Department stores", "Drugstores and pharmacies", "Gas stations", "Other"];

export default function ContactForm() {
  const startedAt = useRef(0);
  const [values, setValues] = useState(initial);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const update = (key) => (event) => setValues((current) => ({ ...current, [key]: event.target.value }));

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(event) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setStatus({ type: "", message: "" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "request-demo",
          page: window.location.href,
          website: values.website,
          startedAt: startedAt.current,
          fields: { Name: values.name.trim(), Email: values.email.trim(), Mobile: values.mobile.trim(), Company: values.company.trim(), "Industry Type": values.industry, "Number of branches": values.branches, Interest: values.interest.trim() },
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "We could not submit your request.");
      setValues(initial);
      startedAt.current = Date.now();
      setStatus({ type: "success", message: "Thank you. An iRipple specialist will get in touch with you." });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Something went wrong. Please try again." });
    } finally { setSubmitting(false); }
  }

  const inputClass = "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#203888] focus:ring-2 focus:ring-blue-100";
  return (
    <form onSubmit={onSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_80px_rgba(32,56,136,.10)] sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-800">Name <span className="text-[#882038]">*</span><input required autoComplete="name" maxLength={80} value={values.name} onChange={update("name")} className={inputClass} /></label>
        <label className="text-sm font-semibold text-slate-800">Work email <span className="text-[#882038]">*</span><input required type="email" autoComplete="email" maxLength={150} value={values.email} onChange={update("email")} className={inputClass} /></label>
        <label className="text-sm font-semibold text-slate-800">Company<input autoComplete="organization" maxLength={120} value={values.company} onChange={update("company")} className={inputClass} /></label>
        <label className="text-sm font-semibold text-slate-800">Mobile<input type="tel" autoComplete="tel" maxLength={30} value={values.mobile} onChange={update("mobile")} className={inputClass} /></label>
        <label className="text-sm font-semibold text-slate-800">Retail format <span className="text-[#882038]">*</span><select required value={values.industry} onChange={update("industry")} className={inputClass}><option value="">Select a retail format</option>{industries.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label className="text-sm font-semibold text-slate-800">Number of branches <span className="text-[#882038]">*</span><select required value={values.branches} onChange={update("branches")} className={inputClass}><option value="">Select branch count</option>{["1–3", "4–10", "11–30", "31–100", "101–500", "500+"].map((item) => <option key={item}>{item}</option>)}</select></label>
        <label className="text-sm font-semibold text-slate-800 sm:col-span-2">What would you like to improve? <span className="text-[#882038]">*</span><textarea required maxLength={1500} rows="5" value={values.interest} onChange={update("interest")} className={inputClass} placeholder="Tell us about your operation, priorities, or current challenge." /></label>
        <label className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">Website<input tabIndex="-1" autoComplete="off" value={values.website} onChange={update("website")} /></label>
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={submitting}>{submitting ? "Sending…" : "Start the conversation"}</Button>
        <p className="max-w-sm text-xs leading-5 text-slate-500">By submitting, you allow iRipple to use these details to respond to your inquiry. See our <Link href="/privacy" className="underline hover:text-slate-800">privacy notice</Link>.</p>
      </div>
      <div aria-live="polite">{status.message ? <p className={`mt-5 flex items-start gap-2 rounded-xl px-4 py-3 text-sm ${status.type === "success" ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-800"}`}>{status.type === "success" ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> : null}{status.message}</p> : null}</div>
    </form>
  );
}
