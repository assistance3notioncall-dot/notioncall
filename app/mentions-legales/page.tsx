import type { Metadata } from "next";
import Link from "next/link";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import Reveal from "../_components/Reveal";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales" },
};

export default function Page() {
  return (
    <>
      <Header />

      <main>
      <section className="px-6 py-24 text-center md:px-16 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold tracking-widest text-[#50DFAE]">INFORMATIONS LÉGALES</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#9DBBFF] md:text-5xl">
            Mentions légales &amp; confidentialité
          </h1>
          <p className="mt-6 text-slate-400">Dernière mise à jour : août 2026.</p>
        </div>
      </section>

      <section id="mentions-legales" className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-3xl space-y-6">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-[#EAF0FF]">Mentions légales</h2>
          </Reveal>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-bold tracking-widest text-[#50DFAE]">ÉDITEUR DU SITE</p>
            <p className="mt-3 text-slate-400">
              NotionCall — centre d&rsquo;appels spécialisé dans la prise de
              rendez-vous qualifiés pour les entreprises de rénovation énergétique et
              de rénovation de l&rsquo;habitat en France.
            </p>
            <p className="mt-2 text-slate-400">Rue Tarik Bno Ziad, Guéliz, Marrakech — Maroc</p>
            <p className="mt-2 text-slate-400">
              Téléphone : +212 724 128 632 — Email : aouameur@gmail.com
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-bold tracking-widest text-[#50DFAE]">PROPRIÉTÉ INTELLECTUELLE</p>
            <p className="mt-3 text-slate-400">
              L&rsquo;ensemble des contenus de ce site — textes, logo, identité
              visuelle, illustrations et éléments graphiques — est la propriété de
              NotionCall. Toute reproduction ou utilisation, totale ou partielle, sans
              autorisation écrite préalable est interdite.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-bold tracking-widest text-[#50DFAE]">RESPONSABILITÉ</p>
            <p className="mt-3 text-slate-400">
              Les informations présentées sur ce site sont fournies à titre indicatif
              et peuvent évoluer. NotionCall ne saurait être tenue responsable
              d&rsquo;une utilisation qui en serait faite hors du cadre commercial pour
              lequel elles sont publiées.
            </p>
          </div>
        </div>
      </section>

      <section id="confidentialite" className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-3xl space-y-6">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-[#EAF0FF]">Politique de confidentialité</h2>
          </Reveal>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-bold tracking-widest text-[#50DFAE]">DONNÉES COLLECTÉES</p>
            <p className="mt-3 text-slate-400">
              Via notre formulaire, nous collectons uniquement les données
              professionnelles nécessaires à la préparation de notre échange : nom,
              entreprise, produit recherché, code postal de vos agences, nombre de
              commerciaux terrain et expérience avec un centre d&rsquo;appels. Aucune
              donnée sensible n&rsquo;est demandée, et aucune information sur un
              particulier.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-bold tracking-widest text-[#50DFAE]">FINALITÉ ET CONSERVATION</p>
            <p className="mt-3 text-slate-400">
              Ces données servent exclusivement à vous recontacter et à préparer votre
              campagne de prise de rendez-vous. Elles ne sont ni vendues, ni cédées à
              des tiers, et sont conservées le temps strictement nécessaire à la
              relation commerciale.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-bold tracking-widest text-[#50DFAE]">VOS DROITS</p>
            <p className="mt-3 text-slate-400">
              Vous disposez d&rsquo;un droit d&rsquo;accès, de rectification et de
              suppression de vos données. Pour exercer ces droits, écrivez-nous à{" "}
              aouameur@gmail.com.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-bold tracking-widest text-[#50DFAE]">COOKIES</p>
            <p className="mt-3 text-slate-400">
              Ce site n&rsquo;utilise pas de cookies publicitaires. Seules des
              préférences d&rsquo;affichage locales (thème clair/sombre) sont
              enregistrées dans votre navigateur.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 text-center md:px-16">
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] p-10">
          <h2 className="text-2xl font-extrabold text-[#EAF0FF] md:text-3xl">
            Une question sur vos données ?
          </h2>
          <p className="mt-3 text-slate-400">
            Écrivez-nous, nous répondons sous 24 heures ouvrées.
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
