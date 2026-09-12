"use client";

export default function ProofSlot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-dashed border-white/15 bg-white/[0.02]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
          const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
          if (fallback) fallback.style.display = "flex";
        }}
      />
      <div className="absolute inset-0 hidden flex-col items-center justify-center gap-2.5 p-5 text-center">
        <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#1c4d43] text-lg">
          💬
        </div>
        <span className="text-[11px] font-semibold text-slate-300">Capture WhatsApp</span>
        <span className="max-w-[160px] text-[11px] text-slate-500">
          à ajouter avant publication
        </span>
      </div>
    </div>
  );
}
