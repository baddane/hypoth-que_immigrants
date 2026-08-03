import { NextRequest, NextResponse } from "next/server";
import { isValidEmail, isValidPhone } from "@/lib/validation";
import { calculateLeadScore } from "@/data/banks";
import { isRateLimited } from "@/lib/rateLimit";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { sendResendEmail, upsertBrevoContact } from "@/lib/email";
import { CONTACT_EMAIL } from "@/lib/mail";
import { pickAttribution } from "@/lib/attribution";

const LEADS_LIST_ID = Number(process.env.BREVO_LEADS_LIST_ID ?? "0");

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

    // Validate required fields
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
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (!isValidPhone(lead.telephone)) {
      return NextResponse.json(
        { error: "Invalid phone number (minimum 10 digits)" },
        { status: 400 }
      );
    }

    // Recalculate score server-side — never trust client values
    const { score, quality } = calculateLeadScore({
      statut: lead.statut || "",
      duree: lead.duree || "",
      credit: lead.credit || "",
      revenu: Number(lead.revenu) || 0,
      apport: lead.apport || "",
      meilleurMoment: lead.meilleurMoment || "Cette semaine",
    });

    const processedLead = {
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

      score,
      quality,

      submittedAt: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") || "unknown",
    };

    // Structured log without PII
    console.log("=== NEW LEAD ===", {
      quality: processedLead.quality,
      score: processedLead.score,
      province: processedLead.province,
      statut: processedLead.statut,
      submittedAt: processedLead.submittedAt,
    });

    // Route based on lead quality
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

    const attribution = pickAttribution(lead);
    const fullName = `${processedLead.prenom} ${processedLead.nom}`.trim();

    // Double-write best-effort : persistance Supabase (schéma enrichi + attribution).
    if (isSupabaseConfigured) {
      const { error } = await supabase.from("gh_leads").insert({
        name: fullName,
        email: processedLead.email,
        telephone: processedLead.telephone,
        phone: processedLead.telephone,
        province: processedLead.province || null,
        statut: processedLead.statut || null,
        score: processedLead.score,
        quality: processedLead.quality,
        source: "wizard",
        ...attribution,
      });
      if (error) {
        console.error("Supabase lead insert error:", error.message);
      }
    }

    // Notification interne (Resend) + nurturing (Brevo) — best-effort, gated.
    await sendResendEmail({
      to: CONTACT_EMAIL,
      subject: `Nouveau lead ${quality} (score ${score}) — ${fullName}`,
      html: `<p><strong>${fullName}</strong> — ${processedLead.email} — ${processedLead.telephone}</p>
             <p>Statut : ${processedLead.statut || "?"} · Province : ${processedLead.province || "?"}</p>
             <p>Qualité : <strong>${quality}</strong> · Score : ${score}</p>`,
      replyTo: processedLead.email,
    });
    await upsertBrevoContact({
      email: processedLead.email,
      attributes: { FIRSTNAME: processedLead.prenom, LASTNAME: processedLead.nom, SOURCE: "wizard" },
      listIds: LEADS_LIST_ID ? [LEADS_LIST_ID] : undefined,
    });

    // TODO: Nesto API Integration
    // TODO: Ratehub API Integration

    return NextResponse.json({
      success: true,
      quality,
      score,
      routes,
    });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
