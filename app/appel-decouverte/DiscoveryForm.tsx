"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "212707290640";

const DEPARTMENTS: [string, string][] = [
  ["01", "Ain"], ["02", "Aisne"], ["03", "Allier"], ["04", "Alpes-de-Haute-Provence"], ["05", "Hautes-Alpes"],
  ["06", "Alpes-Maritimes"], ["07", "Ardèche"], ["08", "Ardennes"], ["09", "Ariège"], ["10", "Aube"],
  ["11", "Aude"], ["12", "Aveyron"], ["13", "Bouches-du-Rhône"], ["14", "Calvados"], ["15", "Cantal"],
  ["16", "Charente"], ["17", "Charente-Maritime"], ["18", "Cher"], ["19", "Corrèze"], ["21", "Côte-d'Or"],
  ["22", "Côtes-d'Armor"], ["23", "Creuse"], ["24", "Dordogne"], ["25", "Doubs"], ["26", "Drôme"],
  ["27", "Eure"], ["28", "Eure-et-Loir"], ["29", "Finistère"], ["30", "Gard"], ["31", "Haute-Garonne"],
  ["32", "Gers"], ["33", "Gironde"], ["34", "Hérault"], ["35", "Ille-et-Vilaine"], ["36", "Indre"],
  ["37", "Indre-et-Loire"], ["38", "Isère"], ["39", "Jura"], ["40", "Landes"], ["41", "Loir-et-Cher"],
  ["42", "Loire"], ["43", "Haute-Loire"], ["44", "Loire-Atlantique"], ["45", "Loiret"], ["46", "Lot"],
  ["47", "Lot-et-Garonne"], ["48", "Lozère"], ["49", "Maine-et-Loire"], ["50", "Manche"], ["51", "Marne"],
  ["52", "Haute-Marne"], ["53", "Mayenne"], ["54", "Meurthe-et-Moselle"], ["55", "Meuse"], ["56", "Morbihan"],
  ["57", "Moselle"], ["58", "Nièvre"], ["59", "Nord"], ["60", "Oise"], ["61", "Orne"],
  ["62", "Pas-de-Calais"], ["63", "Puy-de-Dôme"], ["64", "Pyrénées-Atlantiques"], ["65", "Hautes-Pyrénées"], ["66", "Pyrénées-Orientales"],
  ["67", "Bas-Rhin"], ["68", "Haut-Rhin"], ["69", "Rhône"], ["70", "Haute-Saône"], ["71", "Saône-et-Loire"],
  ["72", "Sarthe"], ["73", "Savoie"], ["74", "Haute-Savoie"], ["75", "Paris"], ["76", "Seine-Maritime"],
  ["77", "Seine-et-Marne"], ["78", "Yvelines"], ["79", "Deux-Sèvres"], ["80", "Somme"], ["81", "Tarn"],
  ["82", "Tarn-et-Garonne"], ["83", "Var"], ["84", "Vaucluse"], ["85", "Vendée"], ["86", "Vienne"],
  ["87", "Haute-Vienne"], ["88", "Vosges"], ["89", "Yonne"], ["90", "Territoire de Belfort"], ["91", "Essonne"],
  ["92", "Hauts-de-Seine"], ["93", "Seine-Saint-Denis"], ["94", "Val-de-Marne"], ["95", "Val-d'Oise"],
];

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

function CheckboxRow({
  value,
  checked,
  onChange,
}: {
  value: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="group flex cursor-pointer items-center gap-3.5 rounded-2xl border border-white/15 bg-white/5 px-4.5 py-3.5 text-sm font-medium text-slate-300 transition hover:border-[#50DFAE]/60 has-[:checked]:border-[#50DFAE] has-[:checked]:bg-[#50DFAE]/10 has-[:checked]:text-[#EAF0FF]">
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[6px] border-2 border-slate-500 transition group-hover:border-[#50DFAE]/60 group-has-[:checked]:border-[#50DFAE] group-has-[:checked]:bg-[#50DFAE]">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="opacity-0 transition group-has-[:checked]:opacity-100">
          <path d="M5 12.5l4.5 4.5L19 7.5" stroke="#0B1226" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {value}
    </label>
  );
}

function MultiSelectField({
  placeholder,
  options,
  values,
  onChange,
}: {
  placeholder: string;
  options: [string, string][];
  values: string[];
  onChange: (values: string[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggle(code: string) {
    onChange(
      values.includes(code) ? values.filter((v) => v !== code) : [...values, code]
    );
  }

  const selectedLabels = options
    .filter(([code]) => values.includes(code))
    .map(([, name]) => name);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-2 rounded-2xl border border-white/15 bg-white/5 px-4.5 py-3.5 text-left text-sm outline-none transition focus:border-[#50DFAE]"
      >
        <span className={selectedLabels.length ? "text-[#EAF0FF]" : "text-slate-500"}>
          {selectedLabels.length ? selectedLabels.join(", ") : placeholder}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          className={`shrink-0 text-slate-400 transition ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className="absolute z-20 mt-2 max-h-64 w-full overflow-y-auto rounded-2xl border border-white/15 bg-[#111a33] p-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]">
          {options.map(([code, name]) => {
            const checked = values.includes(code);
            return (
              <label
                key={code}
                className="flex cursor-pointer items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 has-[:checked]:text-[#EAF0FF]"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggle(code)}
                  className="h-4 w-4 shrink-0 accent-[#50DFAE]"
                />
                {code} — {name}
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function DiscoveryForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [popup, setPopup] = useState<{
    name: string;
    whatsappUrl: string;
  } | null>(null);
  const [produits, setProduits] = useState<string[]>([]);
  const [agencePrincipale, setAgencePrincipale] = useState<string[]>([]);
  const [agencesSecondaires, setAgencesSecondaires] = useState<string[][]>([[]]);

  function addAgenceSecondaire() {
    setAgencesSecondaires((prev) => [...prev, []]);
  }

  function updateAgenceSecondaire(index: number, values: string[]) {
    setAgencesSecondaires((prev) => prev.map((v, i) => (i === index ? values : v)));
  }

  function removeAgenceSecondaire(index: number) {
    setAgencesSecondaires((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <>
      <form
        className="mt-8 flex flex-col gap-4"
        onSubmit={async (e) => {
          e.preventDefault();
          setError(null);
          setLoading(true);

          if (produits.length === 0) {
            setError("Sélectionnez au moins une option pour « Ce que vous cherchez ».");
            setLoading(false);
            return;
          }
          if (agencePrincipale.length === 0) {
            setError("Sélectionnez au moins un département pour l'agence principale.");
            setLoading(false);
            return;
          }

          const form = e.currentTarget;
          const formData = new FormData(form);
          const departmentLabels = (codes: string[]) =>
            DEPARTMENTS.filter(([code]) => codes.includes(code))
              .map(([code, name]) => `${name} (${code})`)
              .join(", ");
          const payload: Record<string, string> = {
            ...(Object.fromEntries(formData.entries()) as Record<string, string>),
            produit: produits.join(", "),
            agence_principale: departmentLabels(agencePrincipale),
            agence_secondaire: agencesSecondaires
              .map((values) => departmentLabels(values))
              .filter(Boolean)
              .join(" | "),
          };

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
            setProduits([]);
            setAgencePrincipale([]);
            setAgencesSecondaires([[]]);
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
            <CheckboxRow
              key={opt}
              value={opt}
              checked={produits.includes(opt)}
              onChange={() =>
                setProduits((prev) =>
                  prev.includes(opt) ? prev.filter((p) => p !== opt) : [...prev, opt]
                )
              }
            />
          ))}
        </div>

        <div className="mt-2 flex items-center gap-2.5">
          <StepBadge n={2} />
          <span className="text-sm font-bold text-[#EAF0FF]">Vos agences</span>
        </div>
        <MultiSelectField
          placeholder="Départements de l'agence principale"
          options={DEPARTMENTS}
          values={agencePrincipale}
          onChange={setAgencePrincipale}
        />
        <div className="flex flex-col gap-2.5">
          {agencesSecondaires.map((values, i) => {
            const isLast = i === agencesSecondaires.length - 1;
            const canRemove = agencesSecondaires.length > 1;
            return (
              <div key={i} className="flex items-center gap-2">
                <div className="flex-1">
                  <MultiSelectField
                    placeholder={
                      i === 0
                        ? "2ᵉ agence — départements (optionnel)"
                        : `Agence supplémentaire — départements (optionnel)`
                    }
                    options={DEPARTMENTS}
                    values={values}
                    onChange={(v) => updateAgenceSecondaire(i, v)}
                  />
                </div>
                {canRemove && (
                  <button
                    type="button"
                    onClick={() => removeAgenceSecondaire(i)}
                    aria-label="Supprimer cette agence"
                    className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-lg text-slate-400 transition hover:border-red-400/60 hover:text-red-400"
                  >
                    ×
                  </button>
                )}
                {isLast && (
                  <button
                    type="button"
                    onClick={addAgenceSecondaire}
                    aria-label="Ajouter une agence"
                    className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-lg font-bold text-[#50DFAE] transition hover:border-[#50DFAE]/60"
                  >
                    +
                  </button>
                )}
              </div>
            );
          })}
        </div>

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

        <p className="mt-1 text-xs text-slate-400">
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
              className="cursor-pointer text-[13.5px] text-slate-400 transition hover:text-slate-300"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}
