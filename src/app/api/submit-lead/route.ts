import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { isValidEmail, isValidPhone } from "@/lib/validation";
import { calculateLeadScore } from "@/data/banks";
import { isRateLimited } from "@/lib/rateLimit";

const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = "r.baddane@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "onboarding@resend.dev";

function qualityLabel(quality: string): string {
  if (quality === "hot") return "🔥 CHAUD";
  if (quality === "warm") return "🟡 TIÈDE";
  return "🔵 FROID";
}

function qualityColor(quality: string): string {
  if (quality === "hot") return "#d62828";
  if (quality === "warm") return "#f77f00";
  return "#457b9d";
}

function buildEmailHtml(lead: Record<string, unknown>, score: number, quality: string): string {
  const ql = qualityLabel(quality);
  const qc = qualityColor(quality);
  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /></head>
<body style="font-family:sans-serif;background:#f4f4f4;margin:0;padding:20px;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08);">
    <div style="background:#212243;padding:24px 32px;">
      <h1 style="color:#fff;margin:0;font-size:20px;">Nouveau lead — guide-hypotheque.ca</h1>
      <span style="display:inline-block;margin-top:8px;padding:4px 14px;border-radius:20px;background:${qc};color:#fff;font-size:13px;font-weight:700;">${ql} — Score ${score}</span>
    </div>
    <div style="padding:32px;">
      <h2 style="font-size:16px;color:#212243;margin-top:0;">Contact</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:6px 0;color:#666;width:160px;">Prénom</td><td style="padding:6px 0;font-weight:600;">${lead.prenom}</td></tr>
        <tr><td style="padding:6px 0;color:#666;">Nom</td><td style="padding:6px 0;font-weight:600;">${lead.nom}</td></tr>
        <tr><td style="padding:6px 0;color:#666;">Email</td><td style="padding:6px 0;"><a href="mailto:${lead.email}" style="color:#489D90;">${lead.email}</a></td></tr>
        <tr><td style="padding:6px 0;color:#666;">Téléphone</td><td style="padding:6px 0;"><a href="tel:${lead.telephone}" style="color:#489D90;">${lead.telephone}</a></td></tr>
        <tr><td style="padding:6px 0;color:#666;">Meilleur moment</td><td style="padding:6px 0;">${lead.meilleurMoment}</td></tr>
      </table>

      <hr style="border:none;border-top:1px solid #eee;margin:24px 0;" />
      <h2 style="font-size:16px;color:#212243;margin-top:0;">Profil hypothécaire</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:6px 0;color:#666;width:160px;">Statut immigration</td><td style="padding:6px 0;">${lead.statut || "—"}</td></tr>
        <tr><td style="padding:6px 0;color:#666;">Province</td><td style="padding:6px 0;">${lead.province || "—"}</td></tr>
        <tr><td style="padding:6px 0;color:#666;">Durée au Canada</td><td style="padding:6px 0;">${lead.duree || "—"}</td></tr>
        <tr><td style="padding:6px 0;color:#666;">Revenu annuel</td><td style="padding:6px 0;">${Number(lead.revenu).toLocaleString("fr-CA")} $</td></tr>
        <tr><td style="padding:6px 0;color:#666;">Mise de fonds</td><td style="padding:6px 0;">${lead.apport || "—"}</td></tr>
        <tr><td style="padding:6px 0;color:#666;">Score de crédit</td><td style="padding:6px 0;">${lead.credit || "—"}</td></tr>
        <tr><td style="padding:6px 0;color:#666;">Emploi</td><td style="padding:6px 0;">${lead.emploi || "—"}</td></tr>
        ${lead.wizardVariant ? `<tr><td style="padding:6px 0;color:#666;">Variant wizard</td><td style="padding:6px 0;">${lead.wizardVariant}</td></tr>` : ""}
      </table>

      <hr style="border:none;border-top:1px solid #eee;margin:24px 0;" />
      <p style="font-size:12px;color:#aaa;margin:0;">Soumis le ${new Date().toLocaleString("fr-CA", { timeZone: "America/Toronto" })} (heure de Toronto)</p>
    </div>
  </div>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const lead = await request.json();

    const requiredFields = ["prenom", "nom", "email", "telephone"];
    for (const field of requiredFields) {
      if (!lead[field] || typeof lead[field] !== "string" || !lead[field].trim()) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    if (!isValidEmail(lead.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    if (!isValidPhone(lead.telephone)) {
      return NextResponse.json(
        { error: "Invalid phone number (minimum 10 digits)" },
        { status: 400 }
      );
    }

    const { score, quality } = calculateLeadScore({
      statut: lead.statut || "",
      duree: lead.duree || "",
      credit: lead.credit || "",
      revenu: Number(lead.revenu) || 0,
      apport: lead.apport || "",
      meilleurMoment: lead.meilleurMoment || "Cette semaine",
    });

    const processedLead: Record<string, unknown> = {
      prenom: lead.prenom.trim(),
      nom: lead.nom.trim(),
      email: lead.email.trim().toLowerCase(),
      telephone: lead.telephone.trim(),
      meilleurMoment: lead.meilleurMoment || "Cette semaine",
      accepteContact: lead.accepteContact ?? true,
      statut: lead.statut || "",
      duree: lead.duree || "",
      credit: lead.credit || "",
      revenu: Number(lead.revenu) || 0,
      apport: lead.apport || "",
      province: lead.province || "",
      emploi: lead.emploi || "",
      wizardVariant: lead.wizardVariant || "",
      score,
      quality,
      submittedAt: new Date().toISOString(),
    };

    console.log("=== NEW LEAD ===", {
      quality: processedLead.quality,
      score: processedLead.score,
      province: processedLead.province,
      statut: processedLead.statut,
      submittedAt: processedLead.submittedAt,
    });

    // Send email notification to owner
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: OWNER_EMAIL,
        subject: `${qualityLabel(quality)} Nouveau lead — ${processedLead.prenom} ${processedLead.nom} (score ${score})`,
        html: buildEmailHtml(processedLead, score, quality),
      });
    }

    const routes: string[] = [];
    if (score >= 200) {
      routes.push("nesto", "ratehub", "top_brokers");
    } else if (score >= 120) {
      routes.push("nesto", "ratehub", "mid_brokers");
    } else if (score >= 50) {
      routes.push("ratehub", "regional_brokers");
    } else {
      routes.push("email_nurture");
    }

    return NextResponse.json({ success: true, quality, score, routes });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
