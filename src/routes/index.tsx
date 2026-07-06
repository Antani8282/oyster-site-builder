import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/ostreae-logo.png.asset.json";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chi Sono · Claudia Maggiani — Ostreae" },
      {
        name: "description",
        content:
          "Claudia Maggiani, Oyster Sommelier: passione, studio e rispetto per il mare al servizio della cultura dell'ostrica italiana.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #d0c0a0 0, transparent 40%), radial-gradient(circle at 80% 70%, #c0b0a0 0, transparent 45%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-32 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            
            <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.95] text-foreground">
              Ogni ostrica<br />
              <em className="text-primary not-italic font-normal">ha una storia.</em>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-foreground/75 leading-relaxed">
              Ostreae nasce per custodire e condividere il patrimonio dell'ostricoltura
              italiana. Un progetto di Claudia Maggiani, Oyster Sommelier —
              una degustazione alla volta.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/degustazioni"
                className="border border-primary bg-primary text-primary-foreground px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-transparent hover:text-primary transition"
              >
                Prenota una degustazione
              </Link>
              <Link
                to="/progetto-ostreae"
                className="border border-border px-8 py-4 text-xs tracking-[0.3em] uppercase text-foreground/85 hover:text-primary hover:border-primary transition"
              >
                Scopri il progetto
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] border border-border">
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <svg viewBox="0 0 200 200" className="w-full h-full text-primary opacity-90">
                  <circle cx="100" cy="70" r="45" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  <path
                    d="M55 130 Q100 90 145 130 Q100 175 55 130 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.8"
                  />
                  <path
                    d="M65 130 Q100 100 135 130"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    opacity="0.6"
                  />
                  <text
                    x="100"
                    y="195"
                    textAnchor="middle"
                    fill="currentColor"
                    fontSize="6"
                    letterSpacing="4"
                    fontFamily="Montserrat"
                  >
                    OYSTER SOMMELIER
                  </text>
                </svg>
              </div>
              <div className="absolute top-4 left-4 text-[0.6rem] tracking-[0.3em] uppercase text-primary">
                Marchio
              </div>
              <div className="absolute bottom-4 right-4 text-[0.6rem] tracking-[0.3em] uppercase text-muted-foreground">
                Est. Italia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow">Il Manifesto</div>
            <span className="hairline mt-6" />
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-3xl md:text-4xl leading-tight text-foreground">
              Crediamo che ogni ostrica italiana racconti un territorio,
              il lavoro di chi la alleva e il mare che l'ha generata.
            </p>
            <p className="mt-6 text-foreground/70 leading-relaxed max-w-2xl">
              Ostreae nasce per custodire e condividere queste storie, una degustazione
              alla volta — con rispetto, competenza e sensibilità.
            </p>
          </div>
        </div>
      </section>

      {/* CHI SONO */}
      <section id="chi-sono" className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="eyebrow">Chi Sono</div>
            <h2 className="mt-6 font-display text-5xl leading-tight text-foreground">
              Claudia<br />Maggiani
            </h2>
            <div className="mt-6 text-primary tracking-[0.3em] text-xs uppercase">
              Oyster Sommelier
            </div>
          </div>
          <div className="md:col-span-7 space-y-6 text-foreground/80 leading-relaxed">
            <p>
              La mia passione per l'ostrica nasce dall'incontro tra curiosità, studio
              e rispetto per il mare. Come Oyster Sommelier ho scelto di dedicare la
              mia competenza e la mia esperienza alla valorizzazione delle ostriche
              italiane e alla cultura della degustazione.
            </p>
            <p>
              Racconto storie di mare, di persone e di territori — costruendo
              esperienze uniche e memorabili, in cui ogni ostrica diventa un viaggio
              da scoprire.
            </p>
            <div className="pt-4">
              <Link
                to="/progetto-ostreae"
                className="text-primary text-xs tracking-[0.3em] uppercase border-b border-primary pb-1 hover:opacity-80"
              >
                Scopri il progetto Ostreae →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="eyebrow">Aree di attività</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl max-w-2xl">
            Formazione, esperienza e narrazione.
          </h2>
          <div className="mt-14 grid md:grid-cols-3 gap-px bg-border">
            {[
              {
                to: "/formazione",
                n: "01",
                title: "Formazione",
                text: "Corsi e percorsi dedicati alla conoscenza dell'ostrica italiana, dalla biologia al servizio.",
              },
              {
                to: "/degustazioni",
                n: "02",
                title: "Degustazioni",
                text: "Esperienze curate per privati, ristoranti ed eventi — un viaggio sensoriale nei mari d'Italia.",
              },
              {
                to: "/blog",
                n: "03",
                title: "Il Mio Blog",
                text: "Racconti, appunti di viaggio e approfondimenti sulla cultura del mare e dell'ostricoltura.",
              },
            ].map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="group bg-background p-10 hover:bg-surface transition"
              >
                <div className="text-primary font-display text-2xl">{c.n}</div>
                <h3 className="mt-6 font-display text-2xl text-foreground">{c.title}</h3>
                <p className="mt-4 text-sm text-foreground/70 leading-relaxed">{c.text}</p>
                <div className="mt-8 text-xs tracking-[0.3em] uppercase text-primary opacity-0 group-hover:opacity-100 transition">
                  Scopri →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-28 text-center">
          <div className="eyebrow">Contatti</div>
          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-tight">
            Ogni ostrica ha una storia.<br />
            <span className="text-primary">Raccontiamola insieme.</span>
          </h2>
          <div className="mt-10">
            <a
              href="mailto:info@ostreae.it"
              className="inline-block border border-primary bg-primary text-primary-foreground px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-transparent hover:text-primary transition"
            >
              info@ostreae.it
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
