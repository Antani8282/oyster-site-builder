import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import logoAsset from "@/assets/ostreae-logo.png.asset.json";

const NAV = [
  { to: "/", label: "Chi Sono" },
  { to: "/progetto-ostreae", label: "Progetto Ostreae" },
  { to: "/formazione", label: "Formazione" },
  { to: "/degustazioni", label: "Degustazioni" },
  { to: "/blog", label: "Il Mio Blog" },
] as const;

export function SiteLayout({ children }: { children?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img
              src={logoAsset.url}
              alt="Ostreae by Claudia Maggiani"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`text-[0.72rem] tracking-[0.28em] uppercase transition-colors ${
                    active ? "text-primary" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            aria-label="Menu"
            className="lg:hidden text-primary p-2"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="flex flex-col px-6 py-4">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm tracking-[0.25em] uppercase text-foreground/85 hover:text-primary border-b border-border last:border-0"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children ?? <Outlet />}</main>

      <footer className="mt-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-10 md:grid-cols-3">
          <div>
            <img
              src={logoAsset.url}
              alt="Ostreae by Claudia Maggiani"
              className="h-12 w-auto object-contain"
            />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Ogni ostrica ha una storia. Noi siamo qui per raccontarla.
            </p>
          </div>
          <div>
            <div className="eyebrow">Contatti</div>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              <li>info@ostreae.it</li>
              <li>www.ostreae.it</li>
              <li>@ostreae_oystersommelier</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow">Navigazione</div>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-foreground/80 hover:text-primary">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-6 text-center text-xs tracking-[0.25em] uppercase text-muted-foreground">
          © {new Date().getFullYear()} Ostreae · Claudia Maggiani · Oyster Sommelier
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="max-w-5xl mx-auto px-6 lg:px-10 pt-24 pb-16">
      <div className="eyebrow">{eyebrow}</div>
      <h1 className="mt-6 text-5xl md:text-7xl leading-[1.05] text-foreground">
        {title}
      </h1>
      {intro && (
        <p className="mt-8 max-w-2xl text-lg text-foreground/75 leading-relaxed">
          {intro}
        </p>
      )}
      <span className="hairline mt-10" />
    </section>
  );
}
