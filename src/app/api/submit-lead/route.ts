import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
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

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(lead.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate phone format (min 10 digits)
    const phoneDigits = lead.telephone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      return NextResponse.json(
        { error: "Invalid phone number (minimum 10 digits)" },
        { status: 400 }
      );
    }

    // Lead data structure
    const processedLead = {
      // Personal info
      prenom: lead.prenom.trim(),
      nom: lead.nom.trim(),
      email: lead.email.trim().toLowerCase(),
      telephone: lead.telephone.trim(),
      meilleurMoment: lead.meilleurMoment || "Cette semaine",
      accepteContact: lead.accepteContact ?? true,

      // Wizard answers
      statut: lead.statut || "",
      duree: lead.duree || "",
      credit: lead.credit || "",
      revenu: Number(lead.revenu) || 0,
      apport: lead.apport || "",
      province: lead.province || "",
      emploi: lead.emploi || "",

      // Scoring
      score: lead.score || 0,
      quality: lead.quality || "OK",

      // Metadata
      submittedAt: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || "unknown",
      userAgent: request.headers.get("user-agent") || "unknown",
    };

    // Log lead (in production, save to database)
    console.log("=== NEW LEAD SUBMITTED ===");
    console.log(`Quality: ${processedLead.quality} (Score: ${processedLead.score})`);
    console.log(`Name: ${processedLead.prenom} ${processedLead.nom}`);
    console.log(`Email: ${processedLead.email}`);
    console.log(`Phone: ${processedLead.telephone}`);
    console.log(`Province: ${processedLead.province}`);
    console.log(`Statut: ${processedLead.statut}`);
    console.log("==========================");

    // --- PARTNER API INTEGRATIONS ---
    // In production, uncomment and configure these:

    // Route based on lead quality
    const routes: string[] = [];

    if (processedLead.score >= 200) {
      // EXCELLENT lead → send to all top partners
      routes.push("nesto", "ratehub", "top_brokers");
      // Revenue: $300-500 per lead
    } else if (processedLead.score >= 120) {
      // GOOD lead → send to main partners
      routes.push("nesto", "ratehub", "mid_brokers");
      // Revenue: $150-300 per lead
    } else if (processedLead.score >= 50) {
      // OK lead → send to secondary partners
      routes.push("ratehub", "regional_brokers");
      // Revenue: $75-150 per lead
    } else {
      // WEAK lead → keep for email nurture
      routes.push("email_nurture");
      // Revenue: $0-50 (resell after 30 days if engaged)
    }

    console.log(`Routes: ${routes.join(", ")}`);

    // TODO: Nesto API Integration
    // if (routes.includes("nesto")) {
    //   await fetch("https://api.nesto.ca/partners/leads", {
    //     method: "POST",
    //     headers: { "Authorization": `Bearer ${process.env.NESTO_API_KEY}`, "Content-Type": "application/json" },
    //     body: JSON.stringify({ name: `${processedLead.prenom} ${processedLead.nom}`, email: processedLead.email, phone: processedLead.telephone, income: processedLead.revenu, credit: processedLead.credit, province: processedLead.province }),
    //   });
    // }

    // TODO: Ratehub API Integration
    // if (routes.includes("ratehub")) {
    //   await fetch("https://api.ratehub.ca/partners/leads", { ... });
    // }

    // TODO: Email automation (ConvertKit / MailerLite)
    // Send welcome email sequence

    // TODO: Save to database (MongoDB / PostgreSQL)
    // await db.leads.create(processedLead);

    return NextResponse.json({
      success: true,
      quality: processedLead.quality,
      score: processedLead.score,
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
