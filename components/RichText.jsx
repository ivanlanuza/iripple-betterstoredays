export default function RichText({ text = "", className = "" }) {
  const t = String(text ?? "");
  if (!t.trim()) return null;

  return (
    <div className={"prose prose-slate max-w-none " + className}>
      <p className="whitespace-pre-line leading-relaxed">{t}</p>
    </div>
  );
}
