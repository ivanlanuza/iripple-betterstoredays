export default function PlaceholderMedia({
  src = "/images/placeholder-1.svg",
  alt = "",
  className = "",
}) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-2xl shadow-soft ring-1 ring-slate-200 " +
        className
      }
      aria-hidden={alt ? undefined : true}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}
