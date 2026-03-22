import { NextRequest, NextResponse } from "next/server";
import { isValidEmail, isValidPhone } from "@/lib/validation";
import { calculateLeadScore } from "@/data/banks";
import { isRateLimited } from "@/lib/rateLimit";

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

    // TODO: Nesto API Integration
    // TODO: Ratehub API Integration
    // TODO: Email automation (ConvertKit / MailerLite)
    // TODO: Save to database (MongoDB / PostgreSQL)
    // await db.leads.create(processedLead);

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
