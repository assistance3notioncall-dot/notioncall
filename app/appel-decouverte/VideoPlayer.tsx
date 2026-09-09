"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: coarse)").matches) return;

    const onFullscreenChange = () => {
      const isFs = document.fullscreenElement === videoRef.current;
      const orientation = screen.orientation as ScreenOrientation & {
        lock?: (o: string) => Promise<void>;
      };
      if (isFs) orientation.lock?.("landscape").catch(() => {});
      else orientation.unlock?.();
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  return (
    <div className="relative mx-auto flex w-full max-w-full justify-center">
      <video
        ref={videoRef}
        src="/notioncallVideo.mp4"
        poster="/notioncall-video-poster.jpg"
        controls
        controlsList="nodownload noremoteplayback"
        disablePictureInPicture
        playsInline
        preload="metadata"
        onContextMenu={(e) => e.preventDefault()}
        onPlay={() => setStarted(true)}
        className="block h-auto w-full rounded-2xl border border-white/10 bg-[#0B1226] object-contain md:h-auto md:max-h-[80vh] md:w-auto md:max-w-full md:rounded-3xl"
      />

      {!started && (
        <button
          type="button"
          aria-label="Lire la vidéo"
          onClick={() => videoRef.current?.play()}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#50DFAE] text-2xl text-[#0B1226] shadow-[0_12px_30px_-8px_rgba(0,0,0,0.5)]">
            ▶
          </span>
        </button>
      )}
    </div>
  );
}
