import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { NEW_NAV } from "@/content/revampContent";

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-[#203888] focus:outline-none focus:ring-2 focus:ring-[#203888]"
    >
      {children}
    </Link>
  );
}

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <a href="#main-content" className="sr-only z-[100] rounded bg-white px-4 py-2 text-[#203888] focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <Container className="flex h-[74px] items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="iRipple home">
            <img
              src="/images/iripple-logo.png"
              alt="iRipple"
              className="h-10 w-auto"
              width="680"
              height="246"
            />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary navigation">
            {NEW_NAV.map((i) => (
              <NavLink key={i.path} href={i.path}>
                {i.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href="/contact" className="hidden sm:inline-flex">Talk to us</Button>
            <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#203888] lg:hidden" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? "Close navigation" : "Open navigation"}>
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>

        <div id="mobile-navigation" className={`${mobileOpen ? "block" : "hidden"} border-t border-slate-200 bg-white lg:hidden`}>
          <Container className="flex flex-col py-4">
            {NEW_NAV.map((i) => (
              <Link key={i.path} href={i.path} className="rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-blue-50 hover:text-[#203888]" onClick={() => setMobileOpen(false)}>{i.label}</Link>
            ))}
            <Button href="/contact" className="mt-3 sm:hidden">Talk to us</Button>
          </Container>
        </div>
      </header>

      <main id="main-content">{children}</main>

      <footer className="border-t border-slate-200 bg-[#f8f6f1]">
        <Container className="py-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.2fr]">
            <div>
              <img src="/images/iripple-logo.png" alt="iRipple" className="h-10 w-auto" width="680" height="246" />
              <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600">Your enterprise retail technology partner. Built for the Philippines. Ready for what comes next.</p>
            </div>

            <div>
              <div className="text-sm font-semibold">Explore</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {NEW_NAV.map((i) => (
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
                <li><Link className="hover:text-[#203888] hover:underline" href="/barter">Barter</Link></li>
                <li><Link className="hover:text-[#203888] hover:underline" href="/retina">Retina</Link></li>
                <li><Link className="hover:text-[#203888] hover:underline" href="/company/careers">Careers</Link></li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold">Contact</div>
              <div className="mt-2 text-sm text-slate-700">
                <a className="hover:underline" href="mailto:sales@iripple.com">sales@iripple.com</a>
                <div className="mt-2 leading-6">2305 East Tektite Towers, Exchange Road, Ortigas CBD, Pasig City, Philippines</div>
              </div>
              <a className="mt-5 inline-block text-sm font-semibold text-[#203888] hover:underline" href="https://support.iripple.com">Customer support</a>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} iRipple. All rights reserved.</span>
            <Link href="/privacy" className="hover:text-slate-800 hover:underline">Website inquiry privacy notice</Link>
          </div>
        </Container>
      </footer>
    </div>
  );
}
