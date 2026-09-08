import Link from "next/link";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import { IconMapPin, IconPhoneIncoming, IconFileText } from "../_components/icons";

const INFO = [
  {
    icon: <IconMapPin />,
    label: "ADRESSE",
    lines: ["Rue Tarik Bno Ziad", "Guéliz, Marrakech — Maroc"],
  },
  {
    icon: <IconPhoneIncoming />,
    label: "TÉLÉPHONE",
    lines: ["+212 724 128 632", "Lun — Sam, 9h00 à 19h00"],
    href: "tel:+212724128632",
  },
  {
    icon: <IconFileText />,
    label: "EMAIL",
    lines: ["aouameur@gmail.com", "Réponse sous 24 heures ouvrées"],
    href: "mailto:aouameur@gmail.com",
  },
];

export default function Page() {
  return (
    <>
      <Header />

      <section className="px-6 py-24 text-center md:px-16 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold tracking-widest text-[#50DFAE]">NOUS CONTACTER</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#9DBBFF] md:text-5xl">
            Parlons de vos <span className="text-[#50DFAE]">rendez-vous</span>
          </h1>
          <p className="mt-6 text-slate-400">
            Vous êtes une entreprise de rénovation énergétique ? Écrivez-nous pour
            définir votre cible et votre volume de rendez-vous. Nos bureaux sont à
            Guéliz, Marrakech.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-3xl space-y-4">
          {INFO.map((i) => (
            <div
              key={i.label}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#50DFAE]">
                {i.icon}
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest text-[#50DFAE]">{i.label}</p>
                {i.lines.map((line, idx) =>
                  idx === 0 && i.href ? (
                    <a
                      key={line}
                      href={i.href}
                      className="mt-1 block text-slate-200 transition hover:text-[#50DFAE]"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={line} className="mt-1 text-slate-200">
                      {line}
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20 text-center md:px-16">
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] p-10">
          <h2 className="text-2xl font-extrabold text-[#EAF0FF] md:text-3xl">
            Besoin d&rsquo;un devis ?
          </h2>
          <p className="mt-3 text-slate-400">
            Décrivez votre activité et vos zones d&rsquo;intervention : nous revenons
            avec une proposition de campagne sur mesure.
          </p>
          <Link
            href="/appel-decouverte"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#50DFAE] px-7 py-3 text-sm font-bold text-[#0B1226] transition hover:-translate-y-0.5"
          >
            Demander un devis <span>→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
