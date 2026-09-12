import type { Metadata } from "next";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import IconBadge from "../_components/IconBadge";
import Reveal from "../_components/Reveal";
import DiscoveryForm from "./DiscoveryForm";
import VideoPlayer from "./VideoPlayer";
import ProofSlot from "./ProofSlot";
import { IconCalendarCheck, IconShieldCheck } from "../_components/icons";

export const metadata: Metadata = {
  title: "Appel découverte",
  alternates: { canonical: "/appel-decouverte" },
};

const MECHANISM = [
  {
    icon: <IconCalendarCheck />,
    step: "1",
    label: "Prise de RDV",
    title: "Ciblage par département et type de travaux",
    text: "Consentement documenté à chaque étape. Le prospect sait qui va venir chez lui, et pourquoi.",
  },
  {
    icon: <IconShieldCheck />,
    step: "2",
    label: "Vérification, ~1h après",
    title: "Deuxième appel de contrôle",
    text: "Adresse, nom du commercial, distance, critères : tout est revérifié. Si ça échoue, le RDV n’est ni livré, ni facturé.",
  },
];

const CHANNELS = [
  {
    tag: "Canal 1",
    title: "RDV terrain classique",
    text: "Ciblage par département et type de travaux. Vérifié ~1h après la prise — adresse, distance, critères.",
  },
  {
    tag: "Canal 2",
    title: "RDV consentis",
    text: "Le prospect a lui-même demandé à être rappelé sur son projet. On le recontacte rapidement — demande d’origine documentée.",
  },
  {
    tag: "Canal 3",
    title: "Leads Meta, Google & SEO",
    text: "Facebook Ads, Google Ads, référencement naturel. Numéro vérifié par SMS, appel dans la foulée, rendez-vous terrain posé.",
  },
];

const QUALIFIER = {
  yes: {
    title: "C’est pour vous",
    items: [
      "PME française qui veut accélérer et grandir rapidement",
      "Au moins 2 à 3 commerciaux expérimentés",
      "Des rendez-vous de contrôle en maison individuelle — sans faire de porte-à-porte",
    ],
  },
  no: {
    title: "Pas pour vous, pour l’instant",
    items: [
      "Vous cherchez juste le prix le plus bas",
      "Vous n’avez pas de vendeurs terrain qui savent en profiter",
      "Votre budget est de 5 000 à 6 000 €/mois",
    ],
  },
};

const OFFER = [
  {
    n: "1",
    title: "On fait connaissance",
    text: "On cherche à comprendre la nature de votre organisation, et vos besoins.",
  },
  {
    n: "2",
    title: "On parle rendez-vous",
    text: "Volumes, prix, et tous les autres détails pratiques.",
  },
  {
    n: "3",
    title: "Si ça matche, votre premier test est gratuit",
    text: "Si nos méthodes sont alignées, vos premiers rendez-vous avec nous sont gratuits — 4 à 8 RDV selon votre taille, pour voir notre travail sur le terrain.",
  },
];

// Dépose whatsapp-1.jpg / whatsapp-2.jpg / whatsapp-3.jpg dans /public/images pour remplacer ces placeholders.
const PROOF_SLOTS = [
  { src: "/images/whatsapp-1.jpg" },
  { src: "/images/whatsapp-2.jpg" },
  { src: "/images/whatsapp-3.jpg" },
];

const FAQ = [
  {
    q: "Est-ce conforme à la réglementation sur le démarchage ?",
    a: "Oui. Depuis mars 2026 — avant l’entrée en vigueur de la loi du 11 août 2026 — chaque rendez-vous repose sur un consentement explicite, documenté et conservé 3 ans. C’est cette preuve que vos équipes peuvent présenter en cas de contrôle.",
  },
  {
    q: "Combien coûte un rendez-vous ?",
    a: "Ça dépend de votre secteur, votre zone et votre volume. On en parle pendant l’appel — aucun prix n’est fixé à l’avance, et rien n’est facturé avant que vous ayez vu comment on travaille.",
  },
  {
    q: "Travaillez-vous dans toute la France ?",
    a: "Nous travaillons sur toute la France, sauf l’Île-de-France et le sud de la France.",
  },
  {
    q: "Faut-il payer avant de tester ?",
    a: "Non, il ne faut rien payer. La première journée test est offerte. Vous ne payez que la moitié de votre commande, après avoir été satisfait de nos rendez-vous.",
  },
];

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#50DFAE] ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-[#50DFAE] shadow-[0_0_10px_1px_rgba(80,223,174,0.7)]" />
      {children}
    </p>
  );
}

export default function Page() {
  return (
    <>
      <Header />

      <main>
      {/* HERO */}
      <section className="px-6 pb-14 pt-24 text-center md:px-16 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <Eyebrow className="justify-center">APPEL DÉCOUVERTE · 15 MIN AVEC LE FONDATEUR</Eyebrow>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#EAF0FF] md:text-5xl">
            <span className="text-[#50DFAE]">Vérifié.</span>{" "}
            <span className="text-[#f2b463]">Consenti.</span> Vous continuez à vendre —
            bien protégé.
          </h1>
          <p className="mt-6 text-slate-400">
            Chaque RDV passe par un contrôle qualité et repose sur un consentement
            documenté, conforme à la loi du 11 août 2026.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#form"
              className="inline-flex items-center gap-2 rounded-full bg-[#50DFAE] px-7 py-3 text-sm font-bold text-[#0B1226] transition hover:-translate-y-0.5"
            >
              Réserver mon appel de 15 min <span>→</span>
            </a>
            <a
              href="#mecanisme"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-bold text-[#EAF0FF] transition hover:-translate-y-0.5 hover:border-white/30"
            >
              Voir comment ça marche
            </a>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] lg:grid-cols-4">
          {[
            { num: "+120", label: "RDV chaque jour" },
            { num: "J+1", label: "rendez-vous frais et qualifiés" },
            { num: "+50", label: "collaborateurs et collaboratrices" },
            { num: "+5 ans", label: "à aider nos clients à se surpasser" },
          ].map((s, i) => (
            <div
              key={s.num}
              className={`border-white/10 px-4 py-6 text-center ${
                i % 2 === 1 ? "border-l" : "lg:border-l"
              } ${i >= 2 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <span className="block text-2xl font-bold text-[#8ff4d3] md:text-3xl">{s.num}</span>
              <span className="mt-1 block text-xs leading-snug text-slate-400">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section id="video" className="scroll-mt-24 px-6 py-16 md:scroll-mt-28 md:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow className="justify-center">REGARDEZ D&rsquo;ABORD</Eyebrow>
          <Reveal>
            <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-extrabold text-[#EAF0FF] md:text-3xl">
              3 minutes pour comprendre ce que nous faisons, et comment !
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <VideoPlayer />
        </div>
        <p className="mt-6 text-center text-sm text-slate-400">
          Prêt(e) ?{" "}
          <a href="#form" className="font-semibold text-[#8ff4d3] hover:underline">
            Répondez à 4 questions pour réserver votre créneau ↓
          </a>
        </p>
      </section>

      {/* MECANISME */}
      <section id="mecanisme" className="scroll-mt-24 px-6 py-16 md:scroll-mt-28 md:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="justify-center">LE MÉCANISME</Eyebrow>
            <Reveal>
              <h2 className="mt-3 text-2xl font-extrabold text-[#EAF0FF] md:text-3xl">
                Des rendez-vous confirmés à froid, en deux appels.
              </h2>
            </Reveal>
            <p className="mt-4 text-slate-400">
              La plupart des centres d&rsquo;appels livrent un rendez-vous dès qu&rsquo;il
              est pris. Nous, on le vérifie une deuxième fois avant qu&rsquo;il touche
              l&rsquo;agenda.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {MECHANISM.map((m) => (
              <div
                key={m.step}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
              >
                <div className="flex items-center gap-3">
                  <IconBadge>{m.icon}</IconBadge>
                  <span className="text-xs font-bold tracking-widest text-[#50DFAE]">
                    {m.step} · {m.label}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#EAF0FF]">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{m.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-400">
            → <span className="font-bold text-[#8ff4d3]">+120</span> rendez-vous passent
            ce contrôle chaque jour, livrés à des équipes commerciales partout en
            France.
          </p>

          <p className="mx-auto mt-14 max-w-2xl text-center text-xs tracking-wide text-slate-500">
            Ce contrôle s&rsquo;applique quel que soit le canal par lequel le RDV arrive
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CHANNELS.map((c) => (
              <div
                key={c.tag}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <span className="inline-block rounded-full border border-[#1c4d43] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#8ff4d3]">
                  {c.tag}
                </span>
                <h3 className="mt-4 text-base font-bold text-[#EAF0FF]">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFORMITE / RISQUE */}
      <section id="conformite" className="scroll-mt-24 px-6 py-16 md:scroll-mt-28 md:px-16">
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#f2b463]/35 bg-white/[0.03] p-8 text-center md:p-10">
          <p className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#f2b463]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f2b463] shadow-[0_0_10px_1px_rgba(242,180,99,0.7)]" />
            DEPUIS LE 11 AOÛT 2026
          </p>
          <p className="mx-auto mt-4 max-w-xl text-xl font-bold text-[#EAF0FF] md:text-2xl">
            Un rendez-vous non consenti peut coûter jusqu&rsquo;à{" "}
            <span className="text-[#f2b463]">375 000 €</span> à votre entreprise.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {["Consentement documenté", "Conservé 3 ans", "Révocable à tout moment"].map(
              (chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-slate-400"
                >
                  {chip}
                </span>
              ),
            )}
          </div>
          <p className="mx-auto mt-6 max-w-xl border-t border-white/10 pt-5 text-sm text-slate-400">
            La plupart des centres d&rsquo;appels n&rsquo;ont pas encore fait la bascule.
            Nous, depuis mars 2026 — <span className="font-semibold text-[#8ff4d3]">avant que la loi ne l&rsquo;impose.</span>
          </p>
        </div>
      </section>

      {/* QUALIFIER */}
      <section id="qualifier" className="scroll-mt-24 px-6 py-16 md:scroll-mt-28 md:px-16">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-xl text-center">
            <Eyebrow className="justify-center">AVANT D&rsquo;ALLER PLUS LOIN</Eyebrow>
            <Reveal>
              <h2 className="mt-3 text-2xl font-extrabold text-[#EAF0FF] md:text-3xl">
                Ça a du sens pour vous si —
              </h2>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#1c4d43] bg-gradient-to-b from-[#50DFAE]/[0.07] to-transparent p-7">
              <h3 className="flex items-center gap-2 text-base font-bold text-[#8ff4d3]">
                {QUALIFIER.yes.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {QUALIFIER.yes.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-slate-300">
                    <span className="font-bold text-[#50DFAE]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <h3 className="text-base font-bold text-slate-300">{QUALIFIER.no.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {QUALIFIER.no.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-slate-400">
                    <span className="font-bold text-slate-500">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OFFRE */}
      <section id="offre" className="scroll-mt-24 px-6 py-16 md:scroll-mt-28 md:px-16">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto max-w-xl text-center">
            <Eyebrow className="justify-center">L&rsquo;APPEL</Eyebrow>
            <Reveal>
              <h2 className="mt-3 text-2xl font-extrabold text-[#EAF0FF] md:text-3xl">
                Ce que vous obtenez en 15 minutes — pas un pitch commercial
              </h2>
            </Reveal>
          </div>
          <div className="mt-10 flex flex-col gap-4">
            {OFFER.map((o) => (
              <div
                key={o.n}
                className="grid grid-cols-[44px_1fr] items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#1c4d43] text-base font-bold text-[#8ff4d3]">
                  {o.n}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#EAF0FF]">{o.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{o.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-r-lg border-l-2 border-[#50DFAE] bg-white/[0.02] px-5 py-4 text-sm text-slate-400">
            <span className="font-bold text-[#EAF0FF]">
              L&rsquo;appel est pris par Oussama Aouameur
            </span>
            , le fondateur — pas par un commercial qui suit un script.
          </p>
        </div>
      </section>

      {/* PREUVE */}
      <section id="preuve" className="scroll-mt-24 px-6 py-16 md:scroll-mt-28 md:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-xl text-center">
            <Eyebrow className="justify-center">ILS TRAVAILLENT AVEC NOUS</Eyebrow>
            <Reveal>
              <h2 className="mt-3 text-2xl font-extrabold text-[#EAF0FF] md:text-3xl">
                Des PME de la rénovation, l&rsquo;énergie et la toiture, partout en France.
              </h2>
            </Reveal>
          </div>
          <div className="mt-8 flex justify-center">
            <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-slate-400">
              Contrôle général de la maison
            </span>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROOF_SLOTS.map((slot, i) => (
              <ProofSlot key={slot.src} src={slot.src} alt={`Capture WhatsApp client ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 px-6 py-16 md:scroll-mt-28 md:px-16">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <Eyebrow className="justify-center">QUESTIONS FRÉQUENTES</Eyebrow>
            <Reveal>
              <h2 className="mt-3 text-2xl font-extrabold text-[#EAF0FF] md:text-3xl">
                Avant que vous demandiez
              </h2>
            </Reveal>
          </div>
          <div className="mt-10 flex flex-col gap-2.5">
            {FAQ.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className="group rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-sm font-bold text-[#EAF0FF] marker:content-none">
                  {f.q}
                  <span className="shrink-0 text-lg font-normal text-[#50DFAE] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm leading-relaxed text-slate-400">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="scroll-mt-24 px-6 pb-20 pt-4 md:scroll-mt-28 md:px-16">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-bold tracking-widest text-[#50DFAE]">DEVENIR CLIENT</p>
          <Reveal>
            <h2 className="mt-2 text-3xl font-extrabold text-[#EAF0FF]">
              Parlez-nous de votre entreprise
            </h2>
          </Reveal>
          <p className="mt-3 text-slate-400">
            Quatre questions. Le reste, on le voit ensemble à l&rsquo;appel.
          </p>

          <div className="mt-6 flex items-start gap-2.5 rounded-lg border border-[#f2b463]/25 bg-[#f2b463]/[0.08] px-4 py-3 text-sm text-[#f2b463]">
            <span>⚠</span>
            <span>
              Nous limitons le nombre de clients acceptés chaque mois, pour assurer une
              continuité infaillible de la qualité de nos services.
            </span>
          </div>

          <DiscoveryForm />
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
}
