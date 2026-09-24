"use client";

import Image from "next/image";
import { useState } from "react";

const VIMEO_SRC =
  "https://player.vimeo.com/video/1225337407?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&dnt=1&autoplay=1";

export default function VideoPlayer() {
  // Le player Vimeo (~500 Ko de JS) n'est chargé qu'au clic : avant ça,
  // seule l'affiche est téléchargée, ce qui évite de ralentir la page.
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0B1226] md:rounded-3xl">
      {playing ? (
        <iframe
          src={VIMEO_SRC}
          title="on boarding for the site 2"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Lancer la vidéo"
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          <Image
            src="/postervideo.webp"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
          <span className="absolute inset-0 bg-[#0B1226]/25 transition group-hover:bg-[#0B1226]/10" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#50DFAE] shadow-lg shadow-black/30 transition group-hover:scale-110 md:h-20 md:w-20">
            <svg viewBox="0 0 24 24" fill="#0B1226" className="ml-1 h-7 w-7 md:h-8 md:w-8">
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
