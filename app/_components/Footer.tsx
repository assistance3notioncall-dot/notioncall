import Image from "next/image";
import Link from "next/link";
import { SiInstagram, SiFacebook, SiYoutube } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/nos-services", label: "Nos services" },
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
    icon: <SiInstagram size={17} />,
  },
  {
    href: "https://www.linkedin.com/company/notioncall/",
    title: "LinkedIn",
    icon: <FaLinkedinIn size={17} />,
  },
  {
    href: "https://www.facebook.com/notioncall?locale=fr_FR",
    title: "Facebook",
    icon: <SiFacebook size={17} />,
  },
  {
    href: "https://www.youtube.com/@NotionCallOfficial",
    title: "YouTube",
    icon: <SiYoutube size={18} />,
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
        src="/images/index-5551957b.webp"
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
            Nos services
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {SERVICE_LINKS.map((label) => (
              <Link key={label} href="/nos-services" style={{ fontSize: 13.5, color: "rgb(200, 208, 230)" }}>
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
            <div>
              WhatsApp :{" "}
              <a
                href="https://wa.me/212707290640"
                target="_blank"
                rel="noopener"
                style={{ color: "inherit" }}
              >
                +212 707 290 640
              </a>
            </div>
            <div>
              Email :{" "}
              <a href="mailto:info-rdv@notioncall.com" style={{ color: "inherit" }}>
                info-rdv@notioncall.com
              </a>
            </div>
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
                  color: "#EAF0FF",
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
