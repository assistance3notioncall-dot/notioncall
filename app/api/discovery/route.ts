import { NextRequest, NextResponse, after } from "next/server";

const REQUIRED_FIELDS = [
  "nom",
  "entreprise",
  "produit",
  "agence_principale",
  "commerciaux",
  "prestataire",
] as const;

export async function POST(req: NextRequest) {
  const webAppUrl = process.env.GOOGLE_SHEET_WEBAPP_URL;

  if (!webAppUrl) {
    console.error("GOOGLE_SHEET_WEBAPP_URL is not configured");
    return NextResponse.json(
      { error: "Configuration serveur manquante." },
      { status: 500 }
    );
  }

  let data: Record<string, string>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  for (const field of REQUIRED_FIELDS) {
    if (!data[field] || !String(data[field]).trim()) {
      return NextResponse.json(
        { error: `Champ manquant : ${field}` },
        { status: 400 }
      );
    }
  }

  const row = {
    nom: data.nom,
    entreprise: data.entreprise,
    produit: data.produit,
    agence_principale: data.agence_principale,
    agence_secondaire: data.agence_secondaire ?? "",
    commerciaux: data.commerciaux,
    prestataire: data.prestataire,
  };

  // Respond to the client immediately; the Google Apps Script call is slow
  // (cold starts routinely take 1-3s+), so it runs after the response is
  // already sent instead of making the visitor wait for it.
  after(async () => {
    try {
      const res = await fetch(webAppUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(row),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Google Sheet webhook error:", res.status, text);
      }
    } catch (err) {
      console.error("Google Sheet webhook fetch failed:", err);
    }
  });

  return NextResponse.json({ ok: true });
}
