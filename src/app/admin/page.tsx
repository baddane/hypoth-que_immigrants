"use client";

import { useCallback, useEffect, useState } from "react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

// ============================================================
// Admin guide-hypotheque.ca — connecté à Supabase (tables gh_*).
// Sécurité : la clé publique ne peut qu'insérer ; toute lecture passe par
// les fonctions RPC SECURITY DEFINER protégées par mot de passe.
// Le mot de passe est conservé en sessionStorage (effacé à la fermeture).
// ============================================================

const PW_KEY = "gh_admin_pw";

type ContactMessage = {
  id: string;
  name: string | null;
  email: string;
  subject: string | null;
  message: string | null;
  is_read: boolean;
  created_at: string;
};

type Lead = {
  id: string;
  name: string | null;
  email: string;
  telephone: string | null;
  province: string | null;
  statut: string | null;
  score: number | null;
  quality: string | null;
  source: string;
  is_read: boolean;
  created_at: string;
};

type Tab = "messages" | "leads";

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleString("fr-CA", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [tab, setTab] = useState<Tab>("messages");
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);

  const load = useCallback(async (pw: string): Promise<boolean> => {
    setLoading(true);
    setError("");
    const { data, error } = await supabase.rpc("gh_admin_list", {
      p_password: pw,
    });
    setLoading(false);
    if (error) {
      setError(
        error.message?.includes("unauthorized")
          ? "Mot de passe incorrect."
          : `Erreur : ${error.message}`
      );
      return false;
    }
    const payload = (data ?? {}) as { contacts?: ContactMessage[]; leads?: Lead[] };
    setContacts(payload.contacts ?? []);
    setLeads(payload.leads ?? []);
    return true;
  }, []);

  // Reconnexion automatique si le mot de passe est en sessionStorage.
  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? sessionStorage.getItem(PW_KEY) : null;
    if (!stored) return;
    // Auto-reconnexion légitime depuis sessionStorage au montage.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load(stored).then((ok) => {
      if (ok) {
        setPassword(stored);
        setAuthed(true);
      } else {
        sessionStorage.removeItem(PW_KEY);
      }
    });
  }, [load]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const ok = await load(password);
    if (ok) {
      sessionStorage.setItem(PW_KEY, password);
      setAuthed(true);
    }
  }

  function logout() {
    sessionStorage.removeItem(PW_KEY);
    setAuthed(false);
    setPassword("");
    setContacts([]);
    setLeads([]);
  }

  async function toggleRead(kind: "contact" | "lead", id: string, current: boolean) {
    const { error } = await supabase.rpc("gh_admin_set_read", {
      p_password: password,
      p_kind: kind,
      p_id: id,
      p_read: !current,
    });
    if (error) {
      setError(`Erreur : ${error.message}`);
      return;
    }
    if (kind === "contact") {
      setContacts((prev) =>
        prev.map((c) => (c.id === id ? { ...c, is_read: !current } : c))
      );
    } else {
      setLeads((prev) =>
        prev.map((l) => (l.id === id ? { ...l, is_read: !current } : l))
      );
    }
  }

  async function remove(kind: "contact" | "lead", id: string) {
    if (!confirm("Supprimer définitivement cet élément ?")) return;
    const { error } = await supabase.rpc("gh_admin_delete", {
      p_password: password,
      p_kind: kind,
      p_id: id,
    });
    if (error) {
      setError(`Erreur : ${error.message}`);
      return;
    }
    if (kind === "contact") {
      setContacts((prev) => prev.filter((c) => c.id !== id));
    } else {
      setLeads((prev) => prev.filter((l) => l.id !== id));
    }
  }

  const unreadContacts = contacts.filter((c) => !c.is_read).length;
  const unreadLeads = leads.filter((l) => !l.is_read).length;

  // ----------------- Configuration manquante -----------------
  if (!isSupabaseConfigured) {
    return (
      <section className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white rounded-2xl border border-gray-200 p-8 text-center">
          <h1 className="text-2xl font-extrabold text-midnight mb-3">Admin</h1>
          <p className="text-gray-500 text-base">
            La variable <code className="text-gold">NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY</code>{" "}
            n&apos;est pas configurée. Renseignez-la pour activer le tableau de bord.
          </p>
        </div>
      </section>
    );
  }

  // ----------------- Écran de connexion -----------------
  if (!authed) {
    return (
      <section className="min-h-screen bg-cream flex items-center justify-center px-6">
        <form
          onSubmit={handleLogin}
          className="max-w-sm w-full bg-white rounded-2xl border border-gray-200 p-8"
        >
          <h1 className="text-2xl font-extrabold text-midnight mb-1">Administration</h1>
          <p className="text-gray-500 text-base mb-6">guide-hypotheque.ca</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            autoFocus
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base mb-4 focus:outline-none focus:border-gold"
          />
          {error && <p className="text-red-600 text-base mb-4">{error}</p>}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full bg-gold text-white px-6 py-3 rounded-lg font-bold hover:bg-gold-dark transition disabled:opacity-50"
          >
            {loading ? "Connexion…" : "Se connecter"}
          </button>
        </form>
      </section>
    );
  }

  // ----------------- Tableau de bord -----------------
  const items = tab === "messages" ? contacts : leads;

  return (
    <section className="min-h-screen bg-cream py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* En-tête */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-extrabold text-midnight">Administration</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={() => load(password)}
              disabled={loading}
              className="text-base font-semibold text-gold hover:text-gold-dark transition disabled:opacity-50"
            >
              {loading ? "…" : "Actualiser"}
            </button>
            <button
              onClick={logout}
              className="text-base font-semibold text-gray-500 hover:text-midnight transition"
            >
              Déconnexion
            </button>
          </div>
        </div>

        {error && <p className="text-red-600 text-base mb-4">{error}</p>}

        {/* Onglets */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setTab("messages")}
            className={`px-5 py-2.5 rounded-lg text-base font-semibold transition ${
              tab === "messages"
                ? "bg-midnight text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:border-gold/40"
            }`}
          >
            Messages
            {unreadContacts > 0 && (
              <span className="ml-2 inline-flex items-center justify-center bg-gold text-white text-xs font-bold rounded-full px-2 py-0.5">
                {unreadContacts}
              </span>
            )}
          </button>
          <button
            onClick={() => setTab("leads")}
            className={`px-5 py-2.5 rounded-lg text-base font-semibold transition ${
              tab === "leads"
                ? "bg-midnight text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:border-gold/40"
            }`}
          >
            Leads
            {unreadLeads > 0 && (
              <span className="ml-2 inline-flex items-center justify-center bg-gold text-white text-xs font-bold rounded-full px-2 py-0.5">
                {unreadLeads}
              </span>
            )}
          </button>
        </div>

        {/* Liste */}
        {items.length === 0 ? (
          <p className="text-gray-400 text-base bg-white rounded-2xl border border-gray-200 p-8 text-center">
            Aucun élément.
          </p>
        ) : (
          <div className="space-y-3">
            {tab === "messages"
              ? contacts.map((c) => (
                  <article
                    key={c.id}
                    className={`bg-white rounded-2xl border p-5 ${
                      c.is_read ? "border-gray-200" : "border-gold/50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="font-semibold text-midnight">
                          {c.name || "—"}{" "}
                          <a
                            href={`mailto:${c.email}`}
                            className="font-normal text-gold hover:underline"
                          >
                            {c.email}
                          </a>
                        </p>
                        {c.subject && (
                          <p className="text-base text-gray-600 font-semibold mt-1">
                            {c.subject}
                          </p>
                        )}
                        {c.message && (
                          <p className="text-base text-gray-500 mt-1 whitespace-pre-wrap">
                            {c.message}
                          </p>
                        )}
                        <p className="text-sm text-gray-400 mt-2">
                          {formatDate(c.created_at)}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 shrink-0">
                        <button
                          onClick={() => toggleRead("contact", c.id, c.is_read)}
                          className="text-sm font-semibold text-gold hover:text-gold-dark transition whitespace-nowrap"
                        >
                          {c.is_read ? "Marquer non lu" : "Marquer lu"}
                        </button>
                        <button
                          onClick={() => remove("contact", c.id)}
                          className="text-sm font-semibold text-red-500 hover:text-red-700 transition"
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </article>
                ))
              : leads.map((l) => (
                  <article
                    key={l.id}
                    className={`bg-white rounded-2xl border p-5 ${
                      l.is_read ? "border-gray-200" : "border-gold/50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="font-semibold text-midnight">
                          {l.name || "—"}{" "}
                          <a
                            href={`mailto:${l.email}`}
                            className="font-normal text-gold hover:underline"
                          >
                            {l.email}
                          </a>
                        </p>
                        <p className="text-base text-gray-500 mt-1">
                          {l.telephone && (
                            <>
                              <a
                                href={`tel:${l.telephone}`}
                                className="text-gold hover:underline"
                              >
                                {l.telephone}
                              </a>
                              {" · "}
                            </>
                          )}
                          {[l.province, l.statut].filter(Boolean).join(" · ") || "—"}
                        </p>
                        <p className="text-sm text-gray-500 mt-2 flex flex-wrap gap-2">
                          {l.quality && (
                            <span className="bg-gold-light text-gold px-2 py-0.5 rounded font-semibold uppercase">
                              {l.quality}
                            </span>
                          )}
                          {typeof l.score === "number" && (
                            <span className="bg-cream text-gray-600 px-2 py-0.5 rounded font-semibold">
                              score {l.score}
                            </span>
                          )}
                          <span className="bg-cream text-gray-600 px-2 py-0.5 rounded">
                            {l.source}
                          </span>
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                          {formatDate(l.created_at)}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 shrink-0">
                        <button
                          onClick={() => toggleRead("lead", l.id, l.is_read)}
                          className="text-sm font-semibold text-gold hover:text-gold-dark transition whitespace-nowrap"
                        >
                          {l.is_read ? "Marquer non lu" : "Marquer lu"}
                        </button>
                        <button
                          onClick={() => remove("lead", l.id)}
                          className="text-sm font-semibold text-red-500 hover:text-red-700 transition"
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
          </div>
        )}
      </div>
    </section>
  );
}
