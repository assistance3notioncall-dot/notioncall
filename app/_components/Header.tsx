"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/notre-service", label: "Notre service" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
    <header
      className="nc-header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: "20px 64px",
        background: "rgba(11, 25, 58, 0.92)",
        backdropFilter: "blur(14px) saturate(140%)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Link
        href="/"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Image
          src="/images/index-767cba37.png"
          alt="NotionCall"
          width={120}
          height={44}
          style={{ height: 44, width: "auto" }}
          priority
        />
      </Link>

      <nav
        className="nc-nav"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 36,
          flexWrap: "wrap",
        }}
      >
        {NAV_LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="nc-navlink"
              style={{
                fontSize: 15,
                fontWeight: 600,
                padding: "8px 14px 6px",
                borderRadius: 999,
                whiteSpace: "nowrap",
                color: active ? "rgb(80, 223, 174)" : "rgb(234, 240, 255)",
                borderBottom: active
                  ? "2px solid rgb(80, 223, 174)"
                  : "2px solid transparent",
                transition: "background 0.25s, color 0.25s",
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <Link
        href="/contact"
        className="nc-header-btn"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          flexShrink: 0,
          background: "rgb(80, 223, 174)",
          color: "rgb(255, 255, 255)",
          border: "none",
          borderRadius: 999,
          padding: "12px 22px",
          fontSize: 14,
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "rgba(23, 185, 140, 0.5) 0px 8px 20px -8px",
          whiteSpace: "nowrap",
          textDecoration: "none",
          transition: "transform 0.22s ease",
        }}
      >
        <span className="nc-btn-label">Nous contacter</span> <span>→</span>
      </Link>
    </header>
    {/* Matches .nc-header's actual box height at each breakpoint (see
        globals.css) via pure CSS, so there's no measured-after-mount
        layout shift like a JS-computed spacer would cause. */}
    <div className="h-[69px] md:h-[77px] lg:h-[85px]" aria-hidden="true" />

    {mounted &&
        createPortal(
          <>
            <button
              id="nc-burger"
              type="button"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="outline-none flex"
              style={{
                position: "fixed",
                top: 14,
                right: 16,
                zIndex: 10002,
                width: 44,
                height: 44,
                padding: 0,
                borderRadius: 12,
                border: "1px solid rgb(229, 233, 241)",
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(6px)",
                cursor: "pointer",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                boxShadow: "rgba(22, 36, 74, 0.35) 0px 8px 20px -10px",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: 20,
                  height: 2.5,
                  borderRadius: 2,
                  background: "rgb(22, 36, 74)",
                  transform: open ? "translateY(7.5px) rotate(45deg)" : "none",
                  transition: "transform 0.3s, opacity 0.3s",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 20,
                  height: 2.5,
                  borderRadius: 2,
                  background: "rgb(22, 36, 74)",
                  opacity: open ? 0 : 1,
                  transition: "transform 0.3s, opacity 0.3s",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 20,
                  height: 2.5,
                  borderRadius: 2,
                  background: "rgb(22, 36, 74)",
                  transform: open ? "translateY(-7.5px) rotate(-45deg)" : "none",
                  transition: "transform 0.3s, opacity 0.3s",
                }}
              />
            </button>

            {open && (
              <div
                style={{
                  position: "fixed",
                  inset: 0,
                  zIndex: 10001,
                  background: "rgba(11, 25, 58, 0.98)",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 22,
                }}
              >
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color:
                        pathname === link.href
                          ? "rgb(80, 223, 174)"
                          : "rgb(234, 240, 255)",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </>,
          document.body
        )}
    </>
  );
}
