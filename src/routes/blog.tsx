import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Il Mio Blog — Ostreae · Racconti dal mare" },
      {
        name: "description",
        content:
          "Il blog di Claudia Maggiani: racconti, appunti di viaggio e approfondimenti sulla cultura dell'ostrica e dell'ostricoltura italiana.",
      },
    ],
  }),
  component: Page,
});

const POSTS = [
  {
    cat: "Territori",
    data: "Prossimamente",
    titolo: "Le ostriche di Goro: un mare di storie",
    excerpt: "Un viaggio nel Delta del Po tra allevatori, sacche e sapori salmastri.",
  },
  {
    cat: "Tecnica",
    data: "Prossimamente",
    titolo: "Come si degusta un'ostrica",
    excerpt: "Piccola guida ai sensi per scoprire dolcezza, mineralità e persistenza.",
  },
  {
    cat: "Incontri",
    data: "Prossimamente",
    titolo: "Le mani che allevano il mare",
    excerpt: "Ritratti di ostricoltori italiani e del loro mestiere quotidiano.",
  },
];

function Page() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Il Mio Blog"
        title="Racconti dal mare."
        intro="Appunti di viaggio, incontri e approfondimenti dedicati alla cultura dell'ostrica italiana. Uno spazio per raccontare — con calma e attenzione."
      />

      <section className="max-w-6xl mx-auto px-6 lg:px-10 pb-24 grid md:grid-cols-3 gap-px bg-border">
        {POSTS.map((p) => (
          <article key={p.titolo} className="bg-background p-10 flex flex-col">
            <div className="flex items-center justify-between text-[0.65rem] tracking-[0.3em] uppercase text-primary">
              <span>{p.cat}</span>
              <span className="text-muted-foreground">{p.data}</span>
            </div>
            <h2 className="mt-6 font-display text-2xl leading-snug text-foreground">
              {p.titolo}
            </h2>
            <p className="mt-4 text-sm text-foreground/70 leading-relaxed flex-1">{p.excerpt}</p>
            <div className="mt-8 text-xs tracking-[0.3em] uppercase text-muted-foreground border-t border-border pt-4">
              In arrivo
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20 text-center">
          <div className="eyebrow">Newsletter</div>
          <h2 className="mt-6 font-display text-3xl md:text-4xl">
            Non perderti i prossimi racconti
          </h2>
          <p className="mt-4 text-foreground/75">
            Scrivimi a <a href="mailto:info@ostreae.it" className="text-primary underline-offset-4 hover:underline">info@ostreae.it</a> e ti aggiornerò sulle novità dal mondo Ostreae.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
