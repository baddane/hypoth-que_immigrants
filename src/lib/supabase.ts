import { createClient } from "@supabase/supabase-js";

// Projet Supabase partagé avec guide-taechir — tables/fonctions préfixées « gh_ ».
// L'URL et la clé publishable sont PUBLIQUES (la sécurité est assurée par RLS +
// fonctions RPC protégées par mot de passe), il est donc sûr de les committer.
export const SUPABASE_URL = "https://yjxuutdnhsvrbbgcqltw.supabase.co";

// Clé publishable (anon). Renseignée via variable d'environnement pour faciliter
// la rotation ; peut aussi être codée en dur ici puisqu'elle est publique.
const SUPABASE_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? "";

export const isSupabaseConfigured = SUPABASE_PUBLISHABLE_KEY.length > 0;

// createClient refuse une clé vide : on fournit un repli inoffensif tant que la
// clé n'est pas configurée. Le code ne touche jamais le réseau dans ce cas car
// il s'appuie sur isSupabaseConfigured.
export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY || "publishable-key-not-configured",
  { auth: { persistSession: false } }
);
