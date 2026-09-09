"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });
  const visible = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      if (!visible.current) {
        visible.current = true;
        glowPos.current.x = e.clientX;
        glowPos.current.y = e.clientY;
        dotRef.current?.style.setProperty("opacity", "1");
        glowRef.current?.style.setProperty("opacity", "1");
      }
    };
    const onLeave = () => {
      visible.current = false;
      dotRef.current?.style.setProperty("opacity", "0");
      glowRef.current?.style.setProperty("opacity", "0");
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    let raf: number;
    const tick = () => {
      // Dot tracks the pointer exactly; the glow eases behind it for a
      // soft trailing feel instead of rigidly overlapping the dot.
      glowPos.current.x += (pos.current.x - glowPos.current.x) * 0.12;
      glowPos.current.y += (pos.current.y - glowPos.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowPos.current.x}px, ${glowPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 hidden md:block">
      <div
        ref={glowRef}
        className="absolute left-0 top-0 h-[220px] w-[220px] rounded-full opacity-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(80,223,174,0.35) 0%, rgba(80,223,174,0.08) 45%, transparent 72%)",
          mixBlendMode: "screen",
        }}
      />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-2 w-2 rounded-full bg-[#50DFAE] opacity-0 shadow-[0_0_12px_2px_rgba(80,223,174,0.8)] transition-opacity duration-300"
      />
    </div>
  );
}
