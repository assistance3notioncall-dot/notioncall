import Script from "next/script";

export default function VideoPlayer() {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0B1226] md:rounded-3xl">
      <iframe
        src="https://player.vimeo.com/video/1225337407?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&dnt=1"
        title="on boarding for the site 2"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 h-full w-full"
      />
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
    </div>
  );
}
