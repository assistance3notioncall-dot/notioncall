import type { Metadata } from "next";
import Link from "next/link";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import Reveal from "../_components/Reveal";
import { CalendarCheck, ClipboardCheck, Clock, FileText, Headphones, MapPin, ShieldCheck, Users } from "lucide-react";

const VALUES = [
  {
    icon: <ShieldCheck size={20} strokeWidth={1.8} />,
    title: "Le contrôle",
    text: "Un rendez-vous repasse au contrôle avant de partir. Ce qui ne passe pas ne vous est pas envoyé, et ne vous est pas facturé.",
  },
  {
    icon: <ClipboardCheck size={20} strokeWidth={1.8} />,
    title: "Vos critères",
    text: "Zone, logement, statut du propriétaire, échéance : écrits avec vous, appliqués à la lettre. Hors critères, ce n'est pas un rendez-vous.",
  },
  {
    icon: <FileText size={20} strokeWidth={1.8} />,
    title: "La trace",
    text: "Chaque rendez-vous arrive avec ce qui l'a produit. Vous n'avez pas à nous croire sur parole.",
  },
  {
    icon: <MapPin size={20} strokeWidth={1.8} />,
    title: "Le terrain décide",
    text: "Scripts, ciblage et argumentaires corrigés à partir des retours de vos commerciaux, pas des nôtres.",
  },
];

const STATS = [
  { icon: <Users size={20} strokeWidth={1.8} />, value: "+50", label: "Collaborateurs à Marrakech" },
  { icon: <CalendarCheck size={20} strokeWidth={1.8} />, value: "+120", label: "Rendez-vous livrés par jour" },
  { icon: <Headphones size={20} strokeWidth={1.8} />, value: "60%", label: "Taux de contrôle" },
  { icon: <Clock size={20} strokeWidth={1.8} />, value: "1h", label: "Entre la prise et le contrôle" },
];

export const metadata: Metadata = {
  title: "À propos",
  alternates: { canonical: "/a-propos" },
};

export default function Page() {
  return (
    <>
      <Header />

      <main>
      <section className="px-6 py-24 md:px-16 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-[#50DFAE]">À PROPOS DE NOTIONCALL</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#9DBBFF] md:text-5xl">
            Trois ans, une même équipe, <span className="text-[#50DFAE]">un seul métier.</span>
          </h1>
          <p className="mt-4 text-slate-400">NotionCall, en bref.</p>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-3xl space-y-5 text-center text-slate-300">
          <p>
            NotionCall est un centre d&rsquo;appels de Marrakech qui fait une seule
            chose : remplir l&rsquo;agenda des commerciaux terrain des entreprises de
            rénovation en France. Isolation, énergie, toiture.
          </p>
          <p>
            Une quarantaine de collaborateurs, une même équipe depuis trois ans. Chaque
            rendez-vous passe par deux appels — la prise, puis le contrôle une heure
            après. Ce qui ne passe pas le contrôle ne part pas.
          </p>
          <p>
            Depuis mars 2026, une partie de nos rendez-vous sont consentis : des
            propriétaires qui ont eux-mêmes demandé à être appelés, avec la preuve.
            Avant la loi d&rsquo;août, pas à cause d&rsquo;elle.
          </p>
          <p className="text-sm text-slate-400">
            — Oussama Aouameur,{" "}
            <a
              href="https://www.linkedin.com/company/notioncall/"
              target="_blank"
              rel="noopener"
              className="underline decoration-white/30 underline-offset-2 transition hover:text-[#50DFAE]"
            >
              NotionCall
            </a>
          </p>
          <div className="pt-2">
            <Link
              href="/appel-decouverte"
              className="inline-flex items-center gap-2 rounded-full bg-[#50DFAE] px-7 py-3 text-sm font-bold text-[#0B1226] transition hover:-translate-y-0.5"
            >
              Réserver un appel découverte <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-bold tracking-widest text-[#50DFAE]">NOTRE EXIGENCE</p>
          <Reveal>
            <h2 className="mt-2 text-3xl font-extrabold text-[#EAF0FF] md:text-4xl">
              Ce qui ne passe pas le contrôle ne part pas
            </h2>
          </Reveal>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            NotionCall existe pour une raison : qu&rsquo;un commercial qui prend la
            route sache qu&rsquo;il arrive chez quelqu&rsquo;un qui l&rsquo;attend.
          </p>
          <div className="mt-10 grid gap-6 text-left md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-[#50DFAE]">
                  {v.icon}
                </div>
                <h3 className="mt-5 text-base font-bold text-[#EAF0FF]">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{v.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-[#50DFAE]">
                  {s.icon}
                </div>
                <div className="text-2xl font-extrabold text-[#EAF0FF]">{s.value}</div>
                <div className="text-xs text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
}
