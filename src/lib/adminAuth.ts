import { supabase, isSupabaseConfigured } from "./supabase";

// UUID nul : cible une ligne inexistante pour un set_read no-op. Si le mot de
// passe est valide, la RPC ne renvoie pas d'erreur (aucune donnée exposée).
const ZERO_UUID = "00000000-0000-0000-0000-000000000000";

export async function verifyAdminPassword(password: unknown): Promise<boolean> {
  if (typeof password !== "string" || !password) return false;
  if (!isSupabaseConfigured) return false;
  const { error } = await supabase.rpc("gh_admin_set_read", {
    p_password: password,
    p_kind: "contact",
    p_id: ZERO_UUID,
    p_read: false,
  });
  return !error;
}
