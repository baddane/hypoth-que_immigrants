import { NextRequest, NextResponse } from "next/server";
import { isValidEmail } from "@/lib/validation";
import { isRateLimited } from "@/lib/rateLimit";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

const PDF_PATH = "/ressources/checklist-documents-hypotheque-immigrant.pdf";

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

    // Double-write best-effort : persistance Supabase (source 'lead-magnet').
    if (isSupabaseConfigured) {
      const { error } = await supabase.from("gh_leads").insert({
        name: typeof data.name === "string" ? data.name.trim() || null : null,
        email: data.email.trim().toLowerCase(),
        source: "lead-magnet",
      });
      if (error) {
        console.error("Supabase lead-magnet insert error:", error.message);
      }
    }

    // TODO: Email automation (envoi du PDF par e-mail, best-effort)

    return NextResponse.json({ success: true, file: PDF_PATH });
  } catch (error) {
    console.error("Lead magnet error:", error);
    return NextResponse.json(
      { error: "Erreur interne. Réessayez." },
      { status: 500 }
    );
  }
}
