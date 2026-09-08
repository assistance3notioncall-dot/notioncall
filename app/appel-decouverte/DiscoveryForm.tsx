"use client";

import Link from "next/link";
import { useState } from "react";

const STEPS = [
  {
    n: 1,
    label: "Ce que vous cherchez",
    name: "produit",
    options: [
      "Rendez-vous terrain classique",
      "Rendez-vous terrain consenti",
      "Leads (Meta Ads)",
    ],
  },
  {
    n: 3,
    label: "Vos commerciaux terrain",
    name: "commerciaux",
    options: ["0–3", "4–8", "9–14", "+15"],
    grid: true,
  },
  {
    n: 4,
    label: "Vous travaillez avec un centre d'appels ?",
    name: "prestataire",
    options: ["Oui, un prestataire actuellement", "Oui, par le passé", "Jamais"],
  },
];

function StepBadge({ n }: { n: number }) {
  return (
    <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[7px] bg-[#50DFAE]/10 text-xs font-extrabold text-[#50DFAE]">
      {n}
    </div>
  );
}

function OptionRow({
  name,
  value,
}: {
  name: string;
  value: string;
}) {
  return (
    <label className="group flex cursor-pointer items-center gap-3.5 rounded-2xl border border-white/15 bg-white/5 px-4.5 py-3.5 text-sm font-medium text-slate-300 transition hover:border-[#50DFAE]/60 has-[:checked]:border-[#50DFAE] has-[:checked]:bg-[#50DFAE]/10 has-[:checked]:text-[#EAF0FF]">
      <input type="radio" name={name} value={value} required className="sr-only" />
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-slate-500 transition group-hover:border-[#50DFAE]/60 group-has-[:checked]:border-[#50DFAE]">
        <span className="h-2.5 w-2.5 rounded-full bg-[#50DFAE] opacity-0 transition group-hover:opacity-40 group-has-[:checked]:opacity-100" />
      </span>
      {value}
    </label>
  );
}

export default function DiscoveryForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="mt-8 rounded-2xl border border-[#50DFAE]/30 bg-[#50DFAE]/10 p-6 text-[#EAF0FF]">
        Merci — nous revenons vers vous sous 24 heures pour caler l&rsquo;appel.
      </div>
    );
  }

  return (
    <form
      className="mt-8 flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="nom"
          placeholder="Nom complet"
          required
          className="w-full rounded-2xl border border-white/15 bg-white/5 px-4.5 py-3.5 text-sm text-[#EAF0FF] placeholder:text-slate-500 outline-none focus:border-[#50DFAE]"
        />
        <input
          type="text"
          name="entreprise"
          placeholder="Entreprise"
          required
          className="w-full rounded-2xl border border-white/15 bg-white/5 px-4.5 py-3.5 text-sm text-[#EAF0FF] placeholder:text-slate-500 outline-none focus:border-[#50DFAE]"
        />
      </div>

      <div className="mt-2 flex items-center gap-2.5">
        <StepBadge n={1} />
        <span className="text-sm font-bold text-[#EAF0FF]">{STEPS[0].label}</span>
      </div>
      <div className="flex flex-col gap-2.5">
        {STEPS[0].options.map((opt) => (
          <OptionRow key={opt} name={STEPS[0].name} value={opt} />
        ))}
      </div>

      <div className="mt-2 flex items-center gap-2.5">
        <StepBadge n={2} />
        <span className="text-sm font-bold text-[#EAF0FF]">Vos agences</span>
      </div>
      <input
        type="text"
        name="agence_principale"
        inputMode="numeric"
        placeholder="Code postal de l'agence principale"
        required
        className="w-full rounded-2xl border border-white/15 bg-white/5 px-4.5 py-3.5 text-sm text-[#EAF0FF] placeholder:text-slate-500 outline-none focus:border-[#50DFAE]"
      />
      <input
        type="text"
        name="agence_secondaire"
        inputMode="numeric"
        placeholder="2ᵉ agence — code postal (optionnel)"
        className="w-full rounded-2xl border border-white/15 bg-white/5 px-4.5 py-3.5 text-sm text-[#EAF0FF]/70 placeholder:text-slate-500 outline-none focus:border-[#50DFAE]"
      />

      <div className="mt-2 flex items-center gap-2.5">
        <StepBadge n={3} />
        <span className="text-sm font-bold text-[#EAF0FF]">{STEPS[1].label}</span>
      </div>
      <div className="grid grid-cols-4 gap-2.5">
        {STEPS[1].options.map((opt) => (
          <label
            key={opt}
            className="cursor-pointer rounded-2xl border border-white/15 bg-white/5 py-3.5 text-center text-sm font-medium text-slate-300 transition has-[:checked]:border-[#50DFAE] has-[:checked]:bg-[#50DFAE]/10 has-[:checked]:text-[#EAF0FF]"
          >
            <input type="radio" name={STEPS[1].name} value={opt} required className="sr-only" />
            {opt}
          </label>
        ))}
      </div>

      <div className="mt-2 flex items-center gap-2.5">
        <StepBadge n={4} />
        <span className="text-sm font-bold text-[#EAF0FF]">{STEPS[2].label}</span>
      </div>
      <div className="flex flex-col gap-2.5">
        {STEPS[2].options.map((opt) => (
          <OptionRow key={opt} name={STEPS[2].name} value={opt} />
        ))}
      </div>

      <button
        type="submit"
        className="mt-4 inline-flex items-center gap-2 self-start rounded-full bg-[#50DFAE] px-7 py-3 text-sm font-bold text-[#0B1226] transition hover:-translate-y-0.5"
      >
        Envoyer <span>→</span>
      </button>

      <p className="mt-1 text-xs text-slate-500">
        Vos informations servent uniquement à préparer notre échange. Voir la{" "}
        <Link href="/mentions-legales#confidentialite" className="underline">
          politique de confidentialité
        </Link>
        .
      </p>
    </form>
  );
}
