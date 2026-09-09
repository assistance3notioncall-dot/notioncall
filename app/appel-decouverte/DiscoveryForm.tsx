"use client";

import Link from "next/link";
import { useState, type ChangeEvent, type InvalidEvent } from "react";

const WHATSAPP_NUMBER = "212724128632";

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

function digitsOnly(value: string, maxLength = 5) {
  return value.replace(/[^0-9]/g, "").slice(0, maxLength);
}

function handleCpInvalid(e: InvalidEvent<HTMLInputElement>) {
  e.currentTarget.setCustomValidity("Merci d'écrire 5 chiffres.");
}

function clearCpValidity(e: ChangeEvent<HTMLInputElement>) {
  e.target.setCustomValidity("");
}

export default function DiscoveryForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [popup, setPopup] = useState<{
    name: string;
    whatsappUrl: string;
  } | null>(null);
  const [agencePrincipale, setAgencePrincipale] = useState("");
  const [agenceSecondaire, setAgenceSecondaire] = useState("");

  return (
    <>
      <form
        className="mt-8 flex flex-col gap-4"
        onSubmit={async (e) => {
          e.preventDefault();
          setError(null);
          setLoading(true);

          const form = e.currentTarget;
          const formData = new FormData(form);
          const payload = Object.fromEntries(formData.entries()) as Record<
            string,
            string
          >;

          try {
            const res = await fetch("/api/discovery", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            });

            if (!res.ok) {
              throw new Error("Échec de l'envoi");
            }

            const agences = [payload.agence_principale, payload.agence_secondaire]
              .filter(Boolean)
              .join(", ");
            const waLines = [
              `Bonjour, je suis ${payload.nom} de ${payload.entreprise}.`,
              `Produit : ${payload.produit}`,
              `Agences : ${agences}`,
              `Commerciaux terrain : ${payload.commerciaux}`,
              `Centre d'appels : ${payload.prestataire}`,
            ];
            const whatsappUrl =
              `https://wa.me/${WHATSAPP_NUMBER}?text=` +
              encodeURIComponent(waLines.join("\n"));

            setPopup({ name: payload.nom, whatsappUrl });
            form.reset();
            setAgencePrincipale("");
            setAgenceSecondaire("");
          } catch {
            setError(
              "Une erreur est survenue. Réessayez ou écrivez-nous directement."
            );
          } finally {
            setLoading(false);
          }
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
          pattern="\d{5}"
          title="5 chiffres"
          placeholder="Code postal de l'agence principale"
          required
          value={agencePrincipale}
          onChange={(e) => {
            setAgencePrincipale(digitsOnly(e.target.value));
            clearCpValidity(e);
          }}
          onInvalid={handleCpInvalid}
          className="w-full rounded-2xl border border-white/15 bg-white/5 px-4.5 py-3.5 text-sm text-[#EAF0FF] placeholder:text-slate-500 outline-none focus:border-[#50DFAE]"
        />
        <input
          type="text"
          name="agence_secondaire"
          inputMode="numeric"
          pattern="\d{5}"
          title="5 chiffres"
          placeholder="2ᵉ agence — code postal (optionnel)"
          value={agenceSecondaire}
          onChange={(e) => {
            setAgenceSecondaire(digitsOnly(e.target.value));
            clearCpValidity(e);
          }}
          onInvalid={handleCpInvalid}
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

        {error && (
          <p className="text-sm font-medium text-red-400">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-4 inline-flex items-center gap-2 self-start rounded-full bg-[#50DFAE] px-7 py-3 text-sm font-bold text-[#0B1226] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Envoi..." : "Envoyer"} <span>→</span>
        </button>

        <p className="mt-1 text-xs text-slate-500">
          Vos informations servent uniquement à préparer notre échange. Voir la{" "}
          <Link href="/mentions-legales#confidentialite" className="underline">
            politique de confidentialité
          </Link>
          .
        </p>
      </form>

      {popup && (
        <div
          onClick={() => setPopup(null)}
          className="fixed inset-0 z-[10005] flex items-center justify-center bg-[#0B1226]/70 p-6 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-[28px] border border-white/10 bg-[#111a33] p-10 text-center shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)]"
          >
            <div className="mx-auto mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-[22px] bg-[#50DFAE]/10">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  stroke="#50DFAE"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mb-2.5 text-[22px] font-extrabold text-[#EAF0FF]">
              Merci {popup.name}, c&rsquo;est enregistré.
            </h3>
            <p className="mb-6 text-[15px] leading-relaxed text-slate-400">
              Nous revenons vers vous sous 24 heures ouvrées. Pour aller plus
              vite, ouvrez WhatsApp : vos réponses y sont déjà écrites, il ne
              reste qu&rsquo;à envoyer.
            </p>
            <a
              href={popup.whatsappUrl}
              target="_blank"
              rel="noopener"
              className="mb-3 flex items-center justify-center gap-2.5 rounded-full bg-[#50DFAE] px-7 py-[15px] text-[15px] font-bold text-[#0B1226] shadow-[0_12px_24px_-10px_rgba(23,185,140,0.55)] transition hover:-translate-y-0.5"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="#0B1226">
                <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.5-5.7c-.2-.1-1.4-.7-1.7-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.3 0-.5s-.5-1.3-.7-1.7-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3A3 3 0 0 0 7 10.8c0 1.3 1 2.6 1.1 2.8a10.3 10.3 0 0 0 4 3.5c1.4.6 2 .6 2.7.5a2.5 2.5 0 0 0 1.6-1.2 2 2 0 0 0 .1-1.1z" />
              </svg>
              Continuer sur WhatsApp
            </a>
            <a
              href="https://www.instagram.com/notioncall/"
              target="_blank"
              rel="noopener"
              className="mb-4 flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-[14.5px] font-bold text-[#EAF0FF] transition hover:border-[#50DFAE]/60 hover:text-[#50DFAE]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.2" cy="6.8" r="1.3" fill="currentColor" />
              </svg>
              Voir les coulisses sur Instagram
            </a>
            <button
              type="button"
              onClick={() => setPopup(null)}
              className="cursor-pointer text-[13.5px] text-slate-500 transition hover:text-slate-300"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}
