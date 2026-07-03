import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/degustazioni")({
  head: () => ({
    meta: [
      { title: "Degustazioni — Ostreae · Esperienze di ostriche italiane" },
      {
        name: "description",
        content:
          "Degustazioni guidate di ostriche italiane per privati, ristoranti ed eventi. Un viaggio sensoriale nei mari d'Italia.",
      },
    ],
  }),
  component: Page,
});

const FORMATI = [
  {
    titolo: "Degustazione Privata",
    persone: "2–10 persone",
    desc: "Un'esperienza intima a casa tua o in una location scelta: 4 ostriche italiane in racconto guidato, con abbinamento consigliato.",
  },
  {
    titolo: "Evento & Corporate",
    persone: "10–60 persone",
    desc: "Format su misura per eventi, presentazioni aziendali e ricorrenze. Corner degustazione con servizio dedicato.",
  },
  {
    titolo: "Ristorante & Hotel",
    persone: "Serate a tema",
    desc: "Serate degustazione ospitate nel tuo locale, con carta ostriche curata e narrazione dei territori.",
  },
];

function Page() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Degustazioni"
        title="Un viaggio nei mari d'Italia."
        intro="Ogni degustazione è un racconto: territori, allevatori, tecniche e sfumature. Scegli il formato più adatto a te — dalla serata privata all'evento su misura."
      />

      <section className="max-w-6xl mx-auto px-6 lg:px-10 pb-20 grid md:grid-cols-3 gap-px bg-border">
        {FORMATI.map((f, i) => (
          <div key={f.titolo} className="bg-background p-10">
            <div className="font-display text-3xl text-primary">0{i + 1}</div>
            <h3 className="mt-6 font-display text-2xl">{f.titolo}</h3>
            <div className="mt-3 eyebrow">{f.persone}</div>
            <p className="mt-6 text-sm text-foreground/75 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>

      <section className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="eyebrow">L'esperienza</div>
            <h2 className="mt-6 font-display text-4xl">Come si svolge</h2>
          </div>
          <ol className="md:col-span-7 space-y-6">
            {[
              ["Introduzione", "Il mondo dell'ostrica: biologia, storia e tecniche di allevamento."],
              ["Territori", "Presentazione delle aree di produzione italiane e delle loro peculiarità."],
              ["Degustazione", "Assaggio guidato con attenzione a olfatto, gusto e persistenza."],
              ["Abbinamento", "Consigli su vini e bollicine per esaltare ogni ostrica."],
            ].map(([t, d], i) => (
              <li key={t} className="grid grid-cols-[auto_1fr] gap-6 border-b border-border pb-6 last:border-0">
                <div className="font-display text-2xl text-primary">0{i + 1}</div>
                <div>
                  <h4 className="font-display text-xl">{t}</h4>
                  <p className="mt-2 text-foreground/75 leading-relaxed">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-24 text-center">
          <h2 className="font-display text-4xl md:text-5xl">
            Prenota la tua degustazione
          </h2>
          <p className="mt-6 text-foreground/75 max-w-xl mx-auto">
            Raccontami la tua idea: numero di ospiti, occasione e location. Ti risponderò con una proposta dedicata.
          </p>
          <a
            href="mailto:info@ostreae.it?subject=Prenotazione%20degustazione"
            className="mt-10 inline-block border border-primary bg-primary text-primary-foreground px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-transparent hover:text-primary transition"
          >
            Scrivimi
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
