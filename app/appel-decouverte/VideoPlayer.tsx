"use client";

import { useEffect, useRef } from "react";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

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
      className="mx-auto block h-auto w-full rounded-2xl border border-white/10 bg-[#0B1226] object-contain md:h-auto md:max-h-[80vh] md:w-auto md:max-w-full md:rounded-3xl"
    />
  );
}
