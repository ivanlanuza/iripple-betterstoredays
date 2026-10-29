import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, BarChart3, Check, ChevronRight, Database, Eye, HeartHandshake, Layers3, Monitor, Package, Pause, Play, ShieldCheck, Sparkles, Store } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import AnimatedRipple from "@/components/marketing/AnimatedRipple";
import { CLIENT_LOGOS, PRODUCT_FAMILIES, PROOF_POINTS, SITE_URL } from "@/content/revampContent";
import styles from "@/styles/AnimatedHome.module.css";

const PRODUCT_ICONS = [Monitor, Layers3, HeartHandshake, Package];
const RETINA_ICONS = [BarChart3, Sparkles, ShieldCheck, Database];
const PARTNERSHIP_WORDS = "Grow. Adapt. Keep moving.".split(" ");

function Action({ href, children, secondary = false, light = false }) {
  return <Link href={href} className={`${styles.action} ${secondary ? styles.actionSecondary : ""} ${light ? styles.actionLight : ""}`}><span>{children}</span><span className={styles.actionArrow}><ArrowUpRight size={19} aria-hidden="true" /></span></Link>;
}

function ProofNumber({ value, paused }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setDisplay(value); return; }
    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const target = Number(value.replace(/[^0-9]/g, ""));
      const suffix = value.replace(/[0-9,]/g, "");
      const start = performance.now();
      const count = (now) => {
        const progress = Math.min((now - start) / 1400, 1);
        setDisplay(`${Math.round(target * (1 - (1 - progress) ** 3)).toLocaleString("en-US")}${suffix}`);
        if (progress < 1) frame = requestAnimationFrame(count);
      };
      frame = requestAnimationFrame(count);
    }, { threshold: 0.5 });
    observer.observe(ref.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value, paused]);
  return <span ref={ref} aria-label={value}><span aria-hidden="true">{display}</span></span>;
}

function LogoRibbon({ clients, reverse = false }) {
  return <div className={`${styles.logoRibbon} ${reverse ? styles.logoRibbonReverse : ""}`}><div className={styles.logoTrack}>{[0, 1].map((copy) => <div className={styles.logoSet} key={copy} aria-hidden={copy === 1 ? true : undefined}>{clients.map((client) => <div className={styles.logo} key={client.name}><Image src={client.src} alt={copy ? "" : client.name} width={140} height={70} sizes="140px" className={client.compact ? styles.logoCompact : undefined} /></div>)}</div>)}</div></div>;
}

function RetailNetwork() {
  return <div className={styles.network} aria-hidden="true">
    <svg className={styles.networkLines} viewBox="0 0 520 320" fill="none"><path d="M260 160L95 75M260 160L425 75M260 160L95 245M260 160L425 245" /><path className={styles.networkSignal} d="M95 75L260 160L425 245M425 75L260 160L95 245" /></svg>
    <div className={styles.networkHub}><Layers3 size={32} /><strong>Barter</strong><span>Retail Management</span></div>
    {[{ icon: Monitor, label: "Point of sale" }, { icon: Package, label: "Inventory" }, { icon: HeartHandshake, label: "Loyalty" }, { icon: Store, label: "Every branch" }].map(({ icon: Icon, label }, index) => <div key={label} className={`${styles.networkNode} ${styles[`networkNode${index}`]}`}><Icon size={21} /><span>{label}</span><i /></div>)}
    <div className={styles.networkCaption}><span className={styles.statusDot} /> Connected by design</div>
  </div>;
}

function IntelligenceVisual() {
  return <div className={styles.intelligence} aria-hidden="true">
    <div className={styles.intelligenceTop}><span><Eye size={17} /> Retina</span><span>Business intelligence</span></div>
    <div className={styles.chartTitle}><span>See what matters.</span><strong>Decide with confidence.</strong></div>
    <div className={styles.chart}><div className={styles.chartGrid} />{[35, 54, 43, 68, 59, 80, 72, 93, 85, 100].map((height, index) => <div className={styles.chartBar} style={{ "--bar-height": `${height}%`, "--bar-delay": `${index * -0.32}s` }} key={index}><span /></div>)}<svg viewBox="0 0 420 140" preserveAspectRatio="none"><path d="M0 120C25 120 24 95 49 100S80 125 100 90S130 95 150 70S180 85 200 54S225 68 250 44S275 55 300 30S330 45 350 18S390 25 420 3" /></svg></div>
    <div className={styles.insight}><Sparkles size={19} /><div><strong>Ask any question.</strong><span>Get instant insights.</span></div><ArrowUpRight size={20} /></div>
    <p className={styles.illustrationLabel}>Illustrative platform visualization</p>
  </div>;
}

function PlatformSection({ familyKey, index }) {
  const family = PRODUCT_FAMILIES[familyKey];
  const retina = familyKey === "retina";
  const icons = retina ? RETINA_ICONS : PRODUCT_ICONS;
  return <article className={`${styles.platform} ${retina ? styles.platformRetina : ""}`} data-reveal>
    <div className={styles.platformCopy}>
      <div className={styles.sectionMeta}><span>0{index}</span><span>{family.name} platform</span><span className={styles.metaLine} /></div>
      <h3>{family.promise.split(" ")[0]}<br /><em>{family.promise.split(" ").slice(1).join(" ")}</em></h3>
      <p>{family.description}</p>
      <div className={styles.productLinks}>{family.products.map((product, productIndex) => { const Icon = icons[productIndex]; return <Link href={`/${familyKey}/${product.slug}`} key={product.slug}><Icon size={17} aria-hidden="true" /><span>{product.name}</span><ChevronRight size={16} aria-hidden="true" /></Link>; })}</div>
      <Action href={`/${familyKey}`} secondary>Explore {family.name}</Action>
    </div>
    <div className={styles.platformVisual}>{retina ? <IntelligenceVisual /> : <RetailNetwork />}</div>
  </article>;
}

export default function HomePage() {
  const schema = { "@context": "https://schema.org", "@type": "Organization", name: "iRipple", url: SITE_URL, logo: `${SITE_URL}/images/iripple-logo.png`, email: "sales@iripple.com", address: { "@type": "PostalAddress", streetAddress: "2305 East Tektite Towers, Exchange Road, Ortigas CBD", addressLocality: "Pasig City", addressCountry: "PH" } };
  const rootRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mode, setMode] = useState("barter");

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => { setPaused(preference.matches); setReducedMotion(preference.matches); };
    sync();
    preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!("IntersectionObserver" in window)) return;
    root.classList.add(styles.enhanced);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add(styles.visible); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    root.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    let frame;
    const update = () => {
      frame = undefined;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll-progress", max > 0 ? window.scrollY / max : 0);
      const reading = root.querySelector("[data-reading]");
      const words = reading.querySelectorAll("span");
      const progress = (window.innerHeight * 0.84 - reading.getBoundingClientRect().top) / (window.innerHeight * 0.48);
      words.forEach((word, index) => { word.style.opacity = paused ? 1 : Math.max(0.22, Math.min(1, progress * words.length - index)); });
    };
    const onScroll = () => { if (frame === undefined) frame = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => { observer.disconnect(); cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [paused]);

  return <Layout>
    <Seo title="Enterprise Retail. Together." description="Technology built for scale, expertise grounded in retail, and a team that stays with you through every next step." schema={schema} />
    <div ref={rootRef} className={styles.page} data-motion={paused ? "paused" : "running"}>
      <div className={styles.readingProgress} aria-hidden="true" />
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroTop}><p className={styles.eyebrow}><span className={styles.statusDot} /> iRipple · Enterprise retail technology partner</p><span className={styles.heroLocation}>Built for Philippine retail <ArrowUpRight size={14} /></span></div>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <h1 className={styles.heroTitle}><span className={styles.titleLine}><span>Enterprise Retail.</span></span><span className={styles.titleAccent}><span>Together<span className={styles.titlePeriod}>.</span></span></span></h1>
              <p className={styles.heroLede}>Technology built for scale, expertise grounded in retail, and a team that stays with you through every next step.</p>
              <div className={styles.heroActions}><Action href="/contact">Start a conversation</Action><Link href="/why-iripple" className={styles.textLink}>Why iRipple <ArrowRight size={17} /></Link></div>
            </div>
            <div className={styles.scene}>
              <div className={styles.sceneGrid} aria-hidden="true" />
              <div className={styles.sceneOrbit} aria-hidden="true" /><div className={styles.sceneOrbitInner} aria-hidden="true" />
              <AnimatedRipple paused={paused} mode={mode} />
              <div className={`${styles.sceneTag} ${styles.sceneTagTechnology}`}><span className={styles.tagIcon}><Layers3 size={18} /></span><span><strong>Technology</strong><small>Enterprise-ready</small></span><span className={styles.tagSpark} /></div>
              <div className={`${styles.sceneTag} ${styles.sceneTagPartnership}`}><span className={styles.tagIcon}><HeartHandshake size={18} /></span><span><strong>Partnership</strong><small>Built to last</small></span><Check size={15} /></div>
              <span className={styles.sceneCoordinate} aria-hidden="true">{mode === "barter" ? "01 — POINT OF SALE" : "02 — RETAIL INTELLIGENCE"}</span>
              <p className="sr-only" aria-live="polite">{mode === "barter" ? "Barter: an animated dotted checkout terminal with a cash drawer, card reader, and receipt printer." : "Retina: an animated dotted laptop displaying retail charts and business intelligence."}</p>
              <div className={styles.sceneControls} role="group" aria-label="Explore the animated retail platforms"><button type="button" aria-pressed={mode === "barter"} onClick={() => setMode("barter")}><span /> Barter <small>Operate</small></button><button type="button" aria-pressed={mode === "retina"} onClick={() => setMode("retina")}><span /> Retina <small>Understand</small></button></div>
            </div>
          </div>
          <div className={styles.heroBottom}><span>Technology. Expertise. Partnership.</span><a href="#retail-in-motion" className={styles.scrollLink}>Keep moving <span><ArrowDown size={15} /></span></a><span className={styles.heroBottomRight}>Your next chapter, together.</span></div>
        </div>
      </section>

      <section id="retail-in-motion" className={styles.proof} aria-label="iRipple at a glance"><div className={`${styles.container} ${styles.proofGrid}`}>{PROOF_POINTS.map((item) => <div key={item.label} className={styles.proofItem}><strong><ProofNumber value={item.value} paused={paused} /></strong><p>{item.label}</p></div>)}</div></section>

      <section className={styles.clients}>
        <div className={`${styles.container} ${styles.sectionHeading}`} data-reveal><div><p className={styles.eyebrow}>iRipple in retail</p><h2>Retail stores using<br />our solutions<span>.</span></h2></div><Link href="/clients" className={styles.textLink}>See more stores using iRipple <ArrowUpRight size={19} /></Link></div>
        <div className={styles.ribbons}><LogoRibbon clients={CLIENT_LOGOS.slice(0, 12)} /><LogoRibbon clients={CLIENT_LOGOS.slice(12)} reverse /></div>
      </section>

      <section className={styles.partnership}>
        <div className={styles.partnershipRings} aria-hidden="true"><span /><span /><span /><span /></div>
        <div className={styles.container}>
          <div className={styles.partnershipTop}><p className={styles.eyebrow}>Your next chapter, together</p><span>25+ years of growing alongside retailers</span></div>
          <h2 className={styles.readingTitle} data-reading>{PARTNERSHIP_WORDS.map((word, index) => <span key={index}>{word}{" "}</span>)}</h2>
          <div className={styles.partnershipBottom} data-reveal><div className={styles.partnershipImage}><Image src="/images/iripple-partnership-hero-v2.png" alt="Retail technology and partnership" fill sizes="(min-width: 768px) 350px, 80vw" /><span><HeartHandshake size={18} /> A partner for every step.</span></div><div className={styles.partnershipCopy}><p>From your next store to your next system, we bring the people and technology to see it through.</p><div className={styles.partnershipPills}><span>Expansion</span><span>Technology</span><span>Compliance</span></div><Link href="/why-iripple" className={styles.textLink}>See the partnership in action <ArrowUpRight size={19} /></Link></div></div>
        </div>
      </section>

      <section id="platforms" className={styles.platforms}>
        <div className={styles.container}>
          <div className={styles.platformHeading} data-reveal><p className={styles.eyebrow}>Two platforms, one retail partner</p><h2>Operate with Barter.<br /><span>Understand with Retina.</span></h2><div className={styles.platformConnector} aria-hidden="true"><span /><i /><span /></div></div>
          <PlatformSection familyKey="barter" index={1} /><PlatformSection familyKey="retina" index={2} />
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaOrbit} aria-hidden="true"><span /><span /><span /></div>
        <div className={styles.container} data-reveal><p className={styles.eyebrow}>Start a conversation</p><h2>Let’s build what comes next<br />for your retail business<span>.</span></h2><div className={styles.ctaBottom}><p>Tell us where you are today and what needs to change. We’ll help you identify the right starting point.</p><Action href="/contact" light>Talk to a retail technology specialist</Action></div></div>
      </section>

      <button className={styles.motionToggle} type="button" onClick={() => setPaused((value) => !value)} disabled={reducedMotion} aria-label={reducedMotion ? "Animations disabled by your system’s reduced motion preference" : paused ? "Enable animations" : "Pause animations"} aria-pressed={!paused}>{paused ? <Play size={13} /> : <Pause size={13} />}<span>{reducedMotion ? "Reduced motion" : `Motion ${paused ? "off" : "on"}`}</span></button>
    </div>
  </Layout>;
}
