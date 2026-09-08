import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/notre-service", label: "Notre service" },
  { href: "/contact", label: "Contact" },
];

const SERVICE_LINKS = [
  "Rendez-vous confirmés en deux étapes",
  "Rendez-vous consentis",
  "Leads Meta, Google et SEO",
];

const SOCIALS = [
  {
    href: "https://www.instagram.com/notioncall/",
    title: "Instagram",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="#EAF0FF" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.2" stroke="#EAF0FF" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.3" fill="#EAF0FF" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/notioncall/posts/?feedView=all",
    title: "LinkedIn",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="#EAF0FF">
        <path
          d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.16V23H8V8z"
          transform="translate(2 -1) scale(0.85)"
        />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/notioncall?locale=fr_FR",
    title: "Facebook",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="#EAF0FF">
        <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.87.24-1.46 1.49-1.46h1.6V4.45c-.28-.04-1.23-.12-2.34-.12-2.32 0-3.9 1.41-3.9 4v2.17H7.75v3h2.6V21h3.15z" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@NotionCallOfficial",
    title: "YouTube",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2.5" y="6" width="19" height="13" rx="3.5" stroke="#EAF0FF" strokeWidth="1.8" />
        <path d="M10.5 9.8l4.5 2.7-4.5 2.7V9.8z" fill="#EAF0FF" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="nc-section"
      style={{
        position: "relative",
        background: "rgb(11, 25, 58)",
        padding: "60px 64px 28px",
        overflow: "hidden",
      }}
    >
      <Image
        src="/images/index-5551957b.png"
        alt=""
        fill
        style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(11, 25, 58, 0.72)",
          zIndex: 0,
        }}
      />

      <div
        className="nc-footer-grid"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: 40,
          paddingBottom: 40,
        }}
      >
        <div>
          <Image
            src="/images/index-767cba37.png"
            alt="NotionCall"
            width={120}
            height={44}
            style={{
              height: 22,
              width: "auto",
              marginBottom: 16,
              display: "block",
              filter: "brightness(0) invert(1)",
            }}
          />
          <p style={{ fontSize: 13.5, color: "rgb(200, 208, 230)", lineHeight: 1.6, maxWidth: 260, margin: 0 }}>
            Rendez-vous terrain et leads pour les PME françaises de la rénovation, énergie et toiture. Équipes à Marrakech.
          </p>
        </div>

        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#FFFFFF", marginBottom: 16 }}>
            Navigation
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} style={{ fontSize: 13.5, color: "rgb(200, 208, 230)" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#FFFFFF", marginBottom: 16 }}>
            Notre service
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {SERVICE_LINKS.map((label) => (
              <Link key={label} href="/notre-service" style={{ fontSize: 13.5, color: "rgb(200, 208, 230)" }}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#FFFFFF", marginBottom: 16 }}>
            Contact
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 13.5, color: "rgb(200, 208, 230)" }}>
            <div>Téléphone : +212 724 128 632</div>
            <div>Email : aouameur@gmail.com</div>
            <div>Rue Tarik Bno Ziad, Guéliz, Marrakech</div>
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            {SOCIALS.map((s) => (
              <a
                key={s.title}
                href={s.href}
                target="_blank"
                rel="noopener"
                title={s.title}
                className="nc-footer-social"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.25s, transform 0.25s",
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1280,
          margin: "0 auto",
          borderTop: "1px solid rgba(255, 255, 255, 0.18)",
          paddingTop: 22,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div style={{ fontSize: 12.5, color: "rgb(160, 172, 202)" }}>
          © 2026 NotionCall. Tous droits réservés.
        </div>
        <div style={{ display: "flex", gap: 24, fontSize: 12.5, color: "rgb(160, 172, 202)" }}>
          <Link href="/mentions-legales#mentions-legales" style={{ color: "rgb(160, 172, 202)" }}>
            Mentions légales
          </Link>
          <Link href="/mentions-legales#confidentialite" style={{ color: "rgb(160, 172, 202)" }}>
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
