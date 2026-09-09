import type { Metadata } from "next";
import Link from "next/link";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import IconBadge from "../_components/IconBadge";
import Reveal from "../_components/Reveal";
import { IconClipboardCheck, IconPhoneIncoming, IconInfinity } from "../_components/icons";

const SERVICES = [
  {
    n: "01",
    icon: <IconClipboardCheck />,
    title: "Rendez-vous contrôlés",
    text: "Le produit historique de NotionCall. Nos équipes travaillent vos secteurs, posent le rendez-vous, puis le repassent au contrôle avant de vous l'envoyer.",
    highlight: "Votre commercial arrive chez quelqu'un qui l'attend",
    bullets: [
      "Ciblage par département et par type de travaux",
      "Double appel : la prise, puis la confirmation environ une heure après",
      "Contrôle : adresse sur Google Maps, nom du commercial, distance, critères",
      "Fiche complète livrée avec le rendez-vous, le soir même",
    ],
  },
  {
    n: "02",
    icon: <IconPhoneIncoming />,
    title: "Rendez-vous consentis",
    text: "Le particulier a demandé lui-même à être rappelé, sur un objet précis. Nous rappelons vite, nous restons sur cet objet, et le rendez-vous vous arrive avec la trace de sa demande.",
    highlight: "Un rendez-vous qui répond à une vraie demande",
    bullets: [
      "Demande du particulier horodatée et conservée",
      "Rappel dans les jours qui suivent la demande, jamais au-delà",
      "Appel verrouillé sur l'objet demandé, sans rebond sur autre chose",
      "Justificatif transmis avec chaque rendez-vous",
    ],
  },
  {
    n: "03",
    icon: <IconInfinity />,
    title: "Leads Meta",
    text: "Nous montons et pilotons des campagnes Facebook sur vos secteurs. Le particulier laisse sa demande, nous le rappelons rapidement et posons le rendez-vous terrain.",
    highlight: "Vous recevez des rendez-vous, pas des fichiers",
    bullets: [
      "Campagnes créées, financées et gérées par nos équipes",
      "Rappel rapide après la demande du particulier",
      "Prise de rendez-vous enregistrée",
      "Ciblage ajusté selon vos secteurs prioritaires",
    ],
  },
];

export const metadata: Metadata = {
  title: "Notre service",
  alternates: { canonical: "/notre-service" },
};

export default function Page() {
  return (
    <>
      <Header />

      <main>
      <section className="px-6 py-24 text-center md:px-16 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold tracking-widest text-[#50DFAE]">NOTRE SERVICE</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#9DBBFF] md:text-5xl">
            Trois façons de <span className="text-[#50DFAE]">remplir l&rsquo;agenda</span> de vos
            commerciaux
          </h1>
          <p className="mt-6 text-slate-400">
            Trois produits, trois mécaniques. Un point commun : un rendez-vous
            n&rsquo;arrive chez vous qu&rsquo;après être passé au contrôle.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl space-y-8">
          {SERVICES.map((s) => (
            <div key={s.n} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-start">
                <div>
                  <div className="flex items-center gap-3">
                    <IconBadge>{s.icon}</IconBadge>
                    <span className="text-sm font-bold text-slate-400">{s.n}</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-extrabold text-[#EAF0FF]">{s.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.text}</p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#50DFAE]/10 px-4 py-2 text-sm font-semibold text-[#50DFAE]">
                    <span>✓</span> {s.highlight}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                  <p className="text-xs font-bold tracking-widest text-[#50DFAE]">CE QUE NOUS FAISONS</p>
                  <ul className="mt-4 space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-slate-300">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#50DFAE]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20 text-center md:px-16">
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] p-10">
          <h2 className="text-2xl font-extrabold text-[#EAF0FF] md:text-3xl">
            Prêt à remplir l&rsquo;agenda de vos commerciaux ?
          </h2>
          <p className="mt-3 text-slate-400">
            Parlons de vos rendez-vous — nous vous répondons sous 24 heures.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#50DFAE] px-7 py-3 text-sm font-bold text-[#0B1226] transition hover:-translate-y-0.5"
          >
            Nous contacter <span>→</span>
          </Link>
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
}
