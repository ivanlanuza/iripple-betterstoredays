import Image from "next/image";
import SectionShell from "./SectionShell";

export default function LogoStripSection({ sec }) {
  const heading = sec.heading || "";

  const logos = Array.from({ length: 12 }).map((_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return {
      src: `/images/client-logos/${n}.png`,
      alt: `Client logo ${n}`,
      key: n,
    };
  });

  return (
    <SectionShell  className="bg-gray-100 -mt-12">
      {heading ? (
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl bg-gray-100">
          {heading}
        </h2>
      ) : null}

      <div className="mt-0 grid grid-cols-2 gap-16 sm:grid-cols-3 lg:grid-cols-4 bg-gray-100">
        {logos.map((l) => (
          <div
            key={l.key}
            className="relative flex items-center justify-center animate-pulse duration-100 "
          >
            <Image
              src={l.src}
              alt={l.alt}
              width={160}
              height={160}
              className="h-16 w-auto object-contain"
              priority={false}
            />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
