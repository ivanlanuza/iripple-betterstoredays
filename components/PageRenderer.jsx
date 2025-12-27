import Container from "@/components/Container";
import HeroSection from "@/components/sections/HeroSection";
import StatsBarSection from "@/components/sections/StatsBarSection";
import CardsSection from "@/components/sections/CardsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import ValuesGridSection from "@/components/sections/ValuesGridSection";
import ProductGridSection from "@/components/sections/ProductGridSection";
import NavCardsSection from "@/components/sections/NavCardsSection";
import LogoStripSection from "@/components/sections/LogoStripSection";
import ContactSection from "@/components/sections/ContactSection";
import StepsSection from "@/components/sections/StepsSection";
import QuoteSection from "@/components/sections/QuoteSection";
import CtaBandSection from "@/components/sections/CtaBandSection";
import OpenRolesSection from "@/components/sections/OpenRolesSection";
import CredibilitySection from "@/components/sections/CredibilitySection";

function kindOf(sec) {
  const name = (sec.section || "").toLowerCase();

  if (name.includes("hero")) return "hero";
  if (name.includes("proof")) return "stats";
  if (name.includes("timeline")) return "timeline";
  if (name.includes("values grid")) return "valuesGrid";
  if (name.includes("product cards") || name.includes("product highlights")) return "productGrid";
  if (name.includes("navigation cards")) return "navCards";
  if (name.includes("clients") || (sec.notes || "").toLowerCase().includes("logo strip")) return "logos";
  if (name.includes("contact")) return "contact";
  if (name.includes("hiring process")) return "steps";
  if (name.includes("open roles")) return "openRoles";
  if (name.includes("credibility")) return "credibility";
  if (name.includes("life at")) return "quote";
  if (name.includes("cta")) return "cta";
  // default
  return "cards";
}

export default function PageRenderer({ page }) {
  const sections = (page?.sections || []).filter((s) => {
    const has = (v) => String(v ?? "").trim().length > 0;
    return has(s.section) || has(s.heading) || has(s.subheading) || has(s.text) || has(s.cta);
  });

  return (
    <div>
      {sections.map((sec, idx) => {
        const kind = kindOf(sec);
        const key = `${page.id}-${idx}`;

        if (kind === "hero") return <HeroSection key={key} sec={sec} idx={idx} />;
        if (kind === "stats") return <StatsBarSection key={key} sec={sec} />;
        if (kind === "timeline") return <TimelineSection key={key} sec={sec} />;
        if (kind === "valuesGrid") return <ValuesGridSection key={key} sec={sec} />;
        if (kind === "productGrid") return <ProductGridSection key={key} sec={sec} />;
        if (kind === "navCards") return <NavCardsSection key={key} sec={sec} />;
        if (kind === "logos") return <LogoStripSection key={key} sec={sec} />;
        if (kind === "contact") return <ContactSection key={key} sec={sec} />;
        if (kind === "steps") return <StepsSection key={key} sec={sec} />;
        if (kind === "quote") return <QuoteSection key={key} sec={sec} />;
        if (kind === "cta") return <CtaBandSection key={key} sec={sec} />;
        if (kind === "openRoles") return <OpenRolesSection key={key} sec={sec} />;
        if (kind === "credibility") return <CredibilitySection key={key} sec={sec} fallbackText={(page?.sections || []).find((s) => (s.section||"").toLowerCase().includes("proof"))?.text || ""} />;

        return <CardsSection key={key} sec={sec} />;
      })}
    </div>
  );
}
