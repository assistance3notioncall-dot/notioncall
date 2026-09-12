import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import IconBadge from "./_components/IconBadge";
import Reveal from "./_components/Reveal";
import {
  IconClipboardCheck,
  IconPhoneIncoming,
  IconInfinity,
  IconShieldCheck,
  IconCalendarCheck,
  IconUsers,
  IconClock,
} from "./_components/icons";

const PATHS = [
  {
    icon: <IconClipboardCheck />,
    title: "Rendez-vous confirmés en deux étapes",
    text: "Prise du rendez-vous, puis second appel de confirmation : adresse, nom du commercial, distances, critères repris un à un. Ce qui ne passe pas le contrôle ne part pas.",
  },
  {
    icon: <IconPhoneIncoming />,
    title: "Rendez-vous consentis",
    text: "Des propriétaires qui ont eux-mêmes demandé à être appelés. Le rendez-vous part avec les éléments et la preuve du consentement, conformément à la loi.",
  },
  {
    icon: <IconInfinity />,
    title: "Leads Meta, Google et SEO",
    text: "Facebook Ads, Google Ads, référencement naturel. Numéro vérifié par SMS, appel dans la foulée, rendez-vous terrain posé.",
  },
];

const WHY = [
  { icon: <IconShieldCheck />, title: "Consentis, sans risque", text: "Des rendez-vous terrain consentis, avec la preuve. Aucun risque pour votre entreprise." },
  { icon: <IconCalendarCheck />, title: "Depuis mars 2026", text: "On vend des rendez-vous consentis depuis mars. Avant la loi, pas à cause d'elle." },
  { icon: <IconUsers />, title: "Stabilité", text: "Un des centres d'appels les plus stables de Marrakech. Trois ans, une même équipe." },
  { icon: <IconClipboardCheck />, title: "Exigence", text: "Vos critères, écrits, appliqués à la lettre. Ce qui ne passe pas le contrôle ne part pas." },
];

const STATS = [
  { icon: <IconShieldCheck className="h-5 w-5" />, value: "60%", label: "Taux de contrôle" },
  { icon: <IconClock className="h-5 w-5" />, value: "1h", label: "Entre la prise et le contrôle" },
  { icon: <IconUsers className="h-5 w-5" />, value: "+40", label: "Collaborateurs à Marrakech" },
  { icon: <IconCalendarCheck className="h-5 w-5" />, value: "+60", label: "Rendez-vous livrés par jour" },
];

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <>
      <Header />

      <main>
      <section className="relative overflow-hidden">
        <Image
          src="/images/index-646b53bd.webp"
          alt=""
          fill
          priority
          className="object-cover object-[center_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1226]/78 via-[#0B1226]/45 to-[#0B1226]/5" />
        <div className="relative px-6 py-28 md:px-16 md:py-40">
          <div className="max-w-[600px]">
            <h1 className="mt-4 text-[40px] font-extrabold uppercase leading-[1.1] tracking-tight text-[#F6F9FF] [text-shadow:0_2px_24px_rgba(11,25,58,0.45)]">
              Vos commerciaux ? <span className="text-[#50DFAE]">On remplit leur agenda.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Des rendez-vous terrain avec des propriétaires, pour les entreprises de
              rénovation en France. Des rendez-vous consentis, en deux méthodes. Et des
              leads issus de nos campagnes Meta.
            </p>
            <Link
              href="/appel-decouverte"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#50DFAE] px-7 py-3 text-sm font-bold text-[#0B1226] transition hover:-translate-y-0.5"
            >
              Réserver un appel de découverte <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold tracking-widest text-[#50DFAE]">CE QUE NOUS FAISONS</p>
          <Reveal>
            <h2 className="mt-2 max-w-2xl text-3xl font-extrabold text-[#EAF0FF] md:text-4xl">
              Trois chemins. Une seule livraison : le rendez-vous terrain.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PATHS.map((p) => (
              <div
                key={p.title}
                className="cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30"
              >
                <IconBadge>{p.icon}</IconBadge>
                <h3 className="mt-5 text-lg font-bold text-[#EAF0FF]">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-slate-400 xl:max-w-none xl:whitespace-nowrap">
            Peu importe la méthode : on suit ce que la loi d&rsquo;août exige, et vous
            recevez des rendez-vous terrain à traiter. Comme avant. Sans le risque.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold tracking-widest text-[#50DFAE]">POURQUOI NOTIONCALL</p>
          <Reveal>
            <h2 className="mt-2 max-w-2xl text-3xl font-extrabold text-[#EAF0FF] md:text-4xl">
              Ce qui change avec NotionCall
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w) => (
              <div key={w.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <IconBadge>{w.icon}</IconBadge>
                <h3 className="mt-5 text-base font-bold text-[#EAF0FF]">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{w.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-slate-400 xl:max-w-none xl:whitespace-nowrap">
            Le but est simple : que vous gagniez le plus d&rsquo;argent possible, et
            bien plus vite qu&rsquo;en porte-à-porte.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-16">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10">
          <Image
            src="/images/index-3d63666b.png"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0B1226]/55" />
          <div className="relative px-8 py-16 text-center md:px-16">
            <p className="text-xs font-bold tracking-widest text-[#50DFAE]">
              VOUS PENSEZ QU&rsquo;ON PEUT VOUS AIDER ?
            </p>
            <Reveal>
              <h2 className="mt-3 text-3xl font-extrabold text-[#EAF0FF] md:text-4xl">
                Besoin de leads en rénovation de l&rsquo;habitat ?
              </h2>
            </Reveal>
            <p className="mt-4 text-slate-300">
              Réservez un appel découverte de 15 minutes avec le fondateur. Et décidez.
            </p>
            <Link
              href="/appel-decouverte"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#50DFAE] px-7 py-3 text-sm font-bold text-[#0B1226] transition hover:-translate-y-0.5"
            >
              C&rsquo;est parti <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-20 overflow-hidden border-b border-white/10 border-t-2 border-t-white py-8">
        <div className="nc-marquee-track flex w-max gap-16">
          {[...STATS, ...STATS].map((s, i) => (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap">
              <IconBadge>{s.icon}</IconBadge>
              <div>
                <div className="text-2xl font-extrabold text-[#EAF0FF]">{s.value}</div>
                <div className="text-xs text-slate-400">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="text-xl font-semibold text-[#EAF0FF] md:text-2xl">
              Le porte-à-porte n&rsquo;est pas une fatalité.
            </p>
            <p className="mt-2 text-slate-400">
              Si vous le craignez pour vos commerciaux terrain, écrivez-moi directement.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              — Oussama Aouameur, fondateur de NotionCall
            </p>
          </div>
          <Link
            href="/appel-decouverte"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#50DFAE] px-7 py-3 text-sm font-bold text-[#0B1226] transition hover:-translate-y-0.5"
          >
            Découvrir <span>→</span>
          </Link>
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
}
