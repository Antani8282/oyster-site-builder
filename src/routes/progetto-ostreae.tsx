import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/progetto-ostreae")({
  head: () => ({
    meta: [
      { title: "Progetto Ostreae — Cultura dell'ostrica italiana" },
      {
        name: "description",
        content:
          "Ostreae: un progetto dedicato alla valorizzazione dell'ostricoltura italiana attraverso formazione, esperienza e narrazione.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Il Progetto"
        title="Ostreae"
        intro="Un progetto che unisce formazione, esperienza e narrazione per promuovere le ostriche italiane e i loro straordinari territori."
      />

      <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-20 grid md:grid-cols-2 gap-16">
        <div>
          <div className="eyebrow">La Promessa</div>
          <p className="mt-6 text-foreground/80 leading-relaxed">
            Ostreae nasce per raccontare il patrimonio dell'ostricoltura italiana con
            rispetto, competenza e sensibilità. Crediamo che ogni ostrica abbia una
            storia fatta di mare, territorio e persone.
          </p>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            Ogni progetto è costruito con rigore, curiosità e attenzione alla
            qualità, affinché ogni degustazione diventi anche un'occasione di
            conoscenza.
          </p>
        </div>
        <div>
          <div className="eyebrow">La Filosofia</div>
          <p className="mt-6 text-foreground/80 leading-relaxed">
            Ostreae è cultura del mare, degustazione consapevole e valorizzazione
            dell'eccellenza italiana. Un dialogo autentico tra chi produce,
            chi racconta e chi sceglie di vivere questa esperienza.
          </p>
          <p className="mt-4 font-display text-2xl text-primary leading-snug">
            Ogni degustazione è un viaggio. Ogni ostrica, una storia da scoprire.
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
          <div className="eyebrow">Il Nome</div>
          <h2 className="mt-6 font-display text-4xl md:text-5xl max-w-3xl">
            Ostreae — dall'unione di <em className="text-primary not-italic">Ostrea</em> e del suffisso <em className="text-primary not-italic">-ae</em>.
          </h2>
          <p className="mt-8 text-foreground/75 leading-relaxed max-w-3xl">
            Simbolo di appartenenza, femminilità e identità. Un nome che rappresenta
            la nostra dedizione alla cultura dell'ostrica italiana e alla bellezza del
            racconto autentico. Ostreae è un omaggio al mare che ci nutre e alle
            persone che lo custodiscono.
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
          <div className="eyebrow">Valori</div>
          <div className="mt-10 grid md:grid-cols-3 gap-px bg-border">
            {[
              { t: "Territorio", d: "Ogni ostrica racconta il mare, i fondali e le persone che lo abitano." },
              { t: "Competenza", d: "Studio, formazione e rispetto per l'ostricoltura come mestiere e arte." },
              { t: "Racconto", d: "Narrare per valorizzare — con parole scelte e degustazioni curate." },
            ].map((v) => (
              <div key={v.t} className="bg-background p-10">
                <h3 className="font-display text-2xl text-primary">{v.t}</h3>
                <p className="mt-4 text-sm text-foreground/75 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
