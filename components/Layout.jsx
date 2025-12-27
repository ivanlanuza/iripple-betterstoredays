import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/router";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { NAV, SITE } from "@/content/siteContent";

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Link>
  );
}

export default function Layout({ children }) {
  const router = useRouter();
  const hashStripTimerRef = useRef(null);

  // When already on the home page, use a hash-only link so Next Router isn't involved.
  // On other pages, use /#contact to navigate to home and scroll.
  const contactHref = useMemo(() => {
    return router.pathname === "/" ? "#contact" : "/#contact";
  }, [router.pathname]);

  // If we landed on /#contact, strip the hash from the URL after the browser scrolls.
  // Important: do this gently so it doesn't interfere with route navigation.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!router.isReady) return;
    if (router.pathname !== "/") return;

    const hash = window.location.hash || "";
    if (hash !== "#contact") return;

    // Clear any prior timer
    if (hashStripTimerRef.current) {
      window.clearTimeout(hashStripTimerRef.current);
      hashStripTimerRef.current = null;
    }

    // Wait a bit for the browser's anchor scroll to complete, then strip the hash.
    hashStripTimerRef.current = window.setTimeout(() => {
      try {
        // Only strip if we're still on the same hash (user hasn't navigated away)
        if ((window.location.hash || "") === "#contact") {
          const base = router.asPath.split("#")[0] || "/";
          // Use Next router so internal state stays in sync
          router.replace(base, base, { shallow: true, scroll: false }).catch(() => false);
        }
      } catch (_) {
        // ignore
      } finally {
        hashStripTimerRef.current = null;
      }
    }, 200);

    return () => {
      if (hashStripTimerRef.current) {
        window.clearTimeout(hashStripTimerRef.current);
        hashStripTimerRef.current = null;
      }
    };
  }, [router.isReady, router.pathname, router.asPath]);

  // If a route change starts, cancel any pending hash-strip timer.
  useEffect(() => {
    if (!router?.events) return;

    const onStart = () => {
      if (hashStripTimerRef.current) {
        window.clearTimeout(hashStripTimerRef.current);
        hashStripTimerRef.current = null;
      }
    };

    router.events.on("routeChangeStart", onStart);
    router.events.on("hashChangeStart", onStart);

    return () => {
      router.events.off("routeChangeStart", onStart);
      router.events.off("hashChangeStart", onStart);
    };
  }, [router.events]);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white font-bold">
              i
            </span>
            <span className="text-sm font-semibold tracking-tight">{SITE.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.main.map((i) => (
              <NavLink key={i.path} href={i.path}>
                {i.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href={contactHref} variant="ghost" className="hidden sm:inline-flex">
              {SITE.salesCta}
            </Button>
            <Button href={contactHref}>{SITE.primaryCta}</Button>
          </div>
        </Container>

        {/* mobile nav */}
        <div className="border-t border-slate-200 md:hidden">
          <Container className="flex items-center gap-1 overflow-x-auto py-2">
            {NAV.main.map((i) => (
              <NavLink key={i.path} href={i.path}>
                {i.label}
              </NavLink>
            ))}
          </Container>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-white">
        <Container className="py-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-sm font-semibold">{SITE.name}</div>
              <div className="mt-2 text-sm text-slate-600">
                Have Better Store Days.
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold">Quick links</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {NAV.main.map((i) => (
                  <li key={i.path}>
                    <Link className="hover:underline" href={i.path}>
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold">Products</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {NAV.products.map((i) => (
                  <li key={i.path}>
                    <Link className="hover:underline" href={i.path}>
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold">Contact</div>
              <div className="mt-3 text-sm text-slate-700">
                <div>sales@iripple.com</div>
                <div className="mt-2">2305 East Tektite Towers, Exchange Road, Ortigas CBD, Pasig City, Philippines</div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-xs text-slate-500">
            © {new Date().getFullYear()} iRipple. All rights reserved.
          </div>
        </Container>
      </footer>
    </div>
  );
}
