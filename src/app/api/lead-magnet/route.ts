import { NextRequest, NextResponse } from "next/server";
import { isValidEmail } from "@/lib/validation";
import { isRateLimited } from "@/lib/rateLimit";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { upsertBrevoContact } from "@/lib/email";
import { pickAttribution } from "@/lib/attribution";

const PDF_PATH = "/ressources/checklist-documents-hypotheque-immigrant.pdf";
const LEADS_LIST_ID = Number(process.env.BREVO_LEADS_LIST_ID ?? "0");

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Trop de requêtes. Réessayez plus tard." },
        { status: 429 }
      );
    }

    const data = await request.json();

    if (!data.email || !isValidEmail(data.email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    console.log("=== NEW LEAD MAGNET ===", {
      source: "lead-magnet",
      submittedAt: new Date().toISOString(),
    });

    const email = data.email.trim().toLowerCase();
    const name = typeof data.name === "string" ? data.name.trim() || null : null;
    const attribution = pickAttribution(data);

    // Double-write best-effort : persistance Supabase (source 'lead-magnet').
    if (isSupabaseConfigured) {
      const { error } = await supabase.from("gh_leads").insert({
        name,
        email,
        source: "lead-magnet",
        ...attribution,
      });
      if (error) {
        console.error("Supabase lead-magnet insert error:", error.message);
      }
    }

    // Nurturing Brevo (best-effort, gated).
    await upsertBrevoContact({
      email,
      attributes: { SOURCE: "lead-magnet" },
      listIds: LEADS_LIST_ID ? [LEADS_LIST_ID] : undefined,
    });

    return NextResponse.json({ success: true, file: PDF_PATH });
  } catch (error) {
    console.error("Lead magnet error:", error);
    return NextResponse.json(
      { error: "Erreur interne. Réessayez." },
      { status: 500 }
    );
  }
}
