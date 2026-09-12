import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CursorGlow from "./_components/CursorGlow";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://notioncall.com"),
  title: {
    default: "NotionCall — Rendez-vous terrain pour les entreprises de rénovation",
    template: "%s | NotionCall",
  },
  description:
    "Rendez-vous terrain, rendez-vous consentis et leads Meta pour les PME françaises de la rénovation, énergie et toiture. Équipes à Marrakech.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "NotionCall",
    title: "NotionCall — Rendez-vous terrain pour les entreprises de rénovation",
    description:
      "Rendez-vous terrain, rendez-vous consentis et leads Meta pour les PME françaises de la rénovation, énergie et toiture.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "NotionCall — Rendez-vous terrain pour les entreprises de rénovation",
    description:
      "Rendez-vous terrain, rendez-vous consentis et leads Meta pour les PME françaises de la rénovation, énergie et toiture.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${jakarta.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
      </head>
      <body className="h-full">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
