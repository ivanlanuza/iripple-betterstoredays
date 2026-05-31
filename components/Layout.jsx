import Link from "next/link";
import { useMemo } from "react";
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
  const primaryDemoHref = useMemo(
    () => `/request-demo?cta=${encodeURIComponent(SITE.primaryCta)}`,
    []
  );
  const salesDemoHref = useMemo(
    () => `/request-demo?cta=${encodeURIComponent(SITE.salesCta)}`,
    []
  );

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/iripple-logo.png"
              alt="iRipple"
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.main.map((i) => (
              <NavLink key={i.path} href={i.path}>
                {i.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href={salesDemoHref} variant="ghost" className="hidden sm:inline-flex">
              {SITE.salesCta}
            </Button>
            <Button href={primaryDemoHref}>{SITE.primaryCta}</Button>
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
                Better Store Days.
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
              <div className="mt-2 text-sm text-slate-700">
                <div>sales@iripple.com</div>
                <div className="mt-1">2305 East Tektite Towers, Exchange Road, Ortigas CBD, Pasig City, Philippines</div>
              </div>
              <div className="mt-8 text-sm font-semibold">After-sales Service</div>
                  <div className="mt-2 text-sm text-slate-700">
                <div>https://support.iripple.com</div>
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
