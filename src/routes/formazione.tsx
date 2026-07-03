import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/formazione")({
  head: () => ({
    meta: [
      { title: "Formazione — Ostreae · Corsi sull'ostrica italiana" },
      {
        name: "description",
        content:
          "Percorsi di formazione dedicati alla conoscenza dell'ostrica italiana: biologia, allevamento, servizio e degustazione.",
      },
    ],
  }),
  component: Page,
});

const CORSI = [
  {
    n: "I",
    livello: "Introduttivo",
    titolo: "Il mondo dell'ostrica",
    durata: "Mezza giornata",
    desc: "Un primo incontro con la biologia dell'ostrica, la storia dell'ostricoltura e le tecniche di degustazione.",
  },
  {
    n: "II",
    livello: "Intermedio",
    titolo: "Territori italiani",
    durata: "1 giornata",
    desc: "Un viaggio tra i mari italiani, le aree di produzione e le peculiarità organolettiche di ciascun territorio.",
  },
  {
    n: "III",
    livello: "Avanzato",
    titolo: "Servizio e abbinamento",
    durata: "2 giornate",
    desc: "Tecniche di apertura, servizio professionale, abbinamento con vini e bollicine — pensato per operatori del settore.",
  },
];

function Page() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Formazione"
        title="Imparare l'ostrica."
        intro="Percorsi dedicati a professionisti e appassionati per conoscere l'ostrica italiana: dalla biologia alla degustazione, dal servizio all'abbinamento."
      />

      <section className="max-w-6xl mx-auto px-6 lg:px-10 pb-20">
        <div className="grid gap-px bg-border">
          {CORSI.map((c) => (
            <div key={c.n} className="bg-background p-8 md:p-12 grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-1 font-display text-4xl text-primary">{c.n}</div>
              <div className="md:col-span-3">
                <div className="eyebrow">{c.livello}</div>
                <div className="mt-3 text-sm text-muted-foreground">{c.durata}</div>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-display text-3xl text-foreground">{c.titolo}</h3>
                <p className="mt-4 text-foreground/75 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 text-center">
          <div className="eyebrow">Formazione su misura</div>
          <h2 className="mt-6 font-display text-4xl md:text-5xl">
            Percorsi dedicati a <span className="text-primary">ristoranti, hotel e team</span>.
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-2xl mx-auto">
            Progetto contenuti e format su richiesta, pensati per le esigenze specifiche
            di sala, cucina e accoglienza.
          </p>
          <a
            href="mailto:info@ostreae.it?subject=Richiesta%20formazione"
            className="mt-10 inline-block border border-primary bg-primary text-primary-foreground px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-transparent hover:text-primary transition"
          >
            Richiedi informazioni
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
