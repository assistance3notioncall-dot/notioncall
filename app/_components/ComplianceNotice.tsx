const CHIPS = ["Consentement documenté", "Conservé 3 ans", "Révocable à tout moment"];

export default function ComplianceNotice() {
  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-[#50DFAE]/35 bg-white/[0.03] p-8 text-center md:p-10">
      <p className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FFFFFF]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#FFFFFF] shadow-[0_0_10px_1px_rgba(255,255,255,0.7)]" />
        DEPUIS LE 11 AOÛT 2026
      </p>
      <p className="mx-auto mt-4 max-w-xl text-xl font-bold text-[#EAF0FF] md:text-2xl">
        Un rendez-vous non consenti peut coûter jusqu&rsquo;à{" "}
        <span className="text-[#50DFAE]">375 000 €</span> à votre entreprise.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2.5">
        {CHIPS.map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-slate-400"
          >
            {chip}
          </span>
        ))}
      </div>
      <p className="mx-auto mt-6 max-w-xl border-t border-white/10 pt-5 text-sm text-slate-400">
        La plupart des centres d&rsquo;appels n&rsquo;ont pas encore fait la bascule.
        Nous, depuis mars 2026 —{" "}
        <span className="font-semibold text-[#8ff4d3]">avant que la loi ne l&rsquo;impose.</span>
      </p>
    </div>
  );
}
