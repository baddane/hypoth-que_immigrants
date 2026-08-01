"use client";

import { useCallback, useEffect, useState } from "react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import {
  outreachContacts,
  OUTREACH_DEFAULT_SUBJECT,
  OUTREACH_DEFAULT_BODY,
} from "@/lib/outreach-contacts";

// ============================================================
// Admin guide-hypotheque.ca — Supabase (gh_*) + modules blueprint.
// Sécurité : clé publique insert-only ; lectures/actions via RPC protégées.
// Mot de passe en sessionStorage (effacé à la fermeture).
// ============================================================

const PW_KEY = "gh_admin_pw";

type ContactMessage = {
  id: string; name: string | null; email: string; subject: string | null;
  message: string | null; is_read: boolean; created_at: string;
};
type Lead = {
  id: string; name: string | null; email: string; telephone: string | null;
  province: string | null; statut: string | null; score: number | null;
  quality: string | null; source: string; is_read: boolean; created_at: string;
};
type Reply = {
  id: string; message_id: string | null; lead_id: string | null;
  to_email: string; subject: string | null; body: string; created_at: string;
};
type Tab = "messages" | "leads" | "outreach" | "newsletter" | "compose";

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleString("fr-CA", {
      day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit",
    });
  } catch { return iso; }
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1] ?? "");
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const [tab, setTab] = useState<Tab>("messages");
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [replies, setReplies] = useState<Reply[]>([]);

  const load = useCallback(async (pw: string): Promise<boolean> => {
    setLoading(true); setError("");
    const { data, error } = await supabase.rpc("gh_admin_list", { p_password: pw });
    setLoading(false);
    if (error) {
      setError(error.message?.includes("unauthorized") ? "Mot de passe incorrect." : `Erreur : ${error.message}`);
      return false;
    }
    const payload = (data ?? {}) as { contacts?: ContactMessage[]; leads?: Lead[]; replies?: Reply[] };
    setContacts(payload.contacts ?? []);
    setLeads(payload.leads ?? []);
    setReplies(payload.replies ?? []);
    return true;
  }, []);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? sessionStorage.getItem(PW_KEY) : null;
    if (!stored) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load(stored).then((ok) => {
      if (ok) { setPassword(stored); setAuthed(true); }
      else sessionStorage.removeItem(PW_KEY);
    });
  }, [load]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const ok = await load(password);
    if (ok) { sessionStorage.setItem(PW_KEY, password); setAuthed(true); }
  }
  function logout() {
    sessionStorage.removeItem(PW_KEY);
    setAuthed(false); setPassword(""); setContacts([]); setLeads([]); setReplies([]);
  }

  async function toggleRead(kind: "contact" | "lead", id: string, current: boolean) {
    const { error } = await supabase.rpc("gh_admin_set_read", { p_password: password, p_kind: kind, p_id: id, p_read: !current });
    if (error) { setError(`Erreur : ${error.message}`); return; }
    if (kind === "contact") setContacts((p) => p.map((c) => (c.id === id ? { ...c, is_read: !current } : c)));
    else setLeads((p) => p.map((l) => (l.id === id ? { ...l, is_read: !current } : l)));
  }
  async function remove(kind: "contact" | "lead", id: string) {
    if (!confirm("Supprimer définitivement cet élément ?")) return;
    const { error } = await supabase.rpc("gh_admin_delete", { p_password: password, p_kind: kind, p_id: id });
    if (error) { setError(`Erreur : ${error.message}`); return; }
    if (kind === "contact") setContacts((p) => p.filter((c) => c.id !== id));
    else setLeads((p) => p.filter((l) => l.id !== id));
  }

  const unreadContacts = contacts.filter((c) => !c.is_read).length;
  const unreadLeads = leads.filter((l) => !l.is_read).length;

  if (!isSupabaseConfigured) {
    return (
      <section className="min-h-screen bg-cream flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white rounded-2xl border border-gray-200 p-8 text-center">
          <h1 className="text-2xl font-extrabold text-midnight mb-3">Admin</h1>
          <p className="text-gray-500 text-base">
            <code className="text-gold">NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY</code> non configurée.
          </p>
        </div>
      </section>
    );
  }

  if (!authed) {
    return (
      <section className="min-h-screen bg-cream flex items-center justify-center px-6">
        <form onSubmit={handleLogin} className="max-w-sm w-full bg-white rounded-2xl border border-gray-200 p-8">
          <h1 className="text-2xl font-extrabold text-midnight mb-1">Administration</h1>
          <p className="text-gray-500 text-base mb-6">guide-hypotheque.ca</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe" autoFocus
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base mb-4 focus:outline-none focus:border-gold" />
          {error && <p className="text-red-600 text-base mb-4">{error}</p>}
          <button type="submit" disabled={loading || !password}
            className="w-full bg-gold text-white px-6 py-3 rounded-lg font-bold hover:bg-gold-dark transition disabled:opacity-50">
            {loading ? "Connexion…" : "Se connecter"}
          </button>
        </form>
      </section>
    );
  }

  const tabs: { key: Tab; label: string; badge?: number }[] = [
    { key: "messages", label: "Messages", badge: unreadContacts },
    { key: "leads", label: "Leads", badge: unreadLeads },
    { key: "outreach", label: "Outreach" },
    { key: "newsletter", label: "Newsletter" },
    { key: "compose", label: "Composer" },
  ];

  return (
    <section className="min-h-screen bg-cream py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-extrabold text-midnight">Administration</h1>
          <div className="flex items-center gap-3">
            <button onClick={() => load(password)} disabled={loading}
              className="text-base font-semibold text-gold hover:text-gold-dark transition disabled:opacity-50">
              {loading ? "…" : "Actualiser"}
            </button>
            <button onClick={logout} className="text-base font-semibold text-gray-500 hover:text-midnight transition">
              Déconnexion
            </button>
          </div>
        </div>

        {error && <p className="text-red-600 text-base mb-4">{error}</p>}
        {notice && <p className="text-gold-dark text-base mb-4">{notice}</p>}

        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((t) => (
            <button key={t.key} onClick={() => { setTab(t.key); setNotice(""); setError(""); }}
              className={`px-5 py-2.5 rounded-lg text-base font-semibold transition ${
                tab === t.key ? "bg-midnight text-white" : "bg-white text-gray-600 border border-gray-200 hover:border-gold/40"
              }`}>
              {t.label}
              {!!t.badge && t.badge > 0 && (
                <span className="ml-2 inline-flex items-center justify-center bg-gold text-white text-xs font-bold rounded-full px-2 py-0.5">
                  {t.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {tab === "messages" && (
          <MessagesTab contacts={contacts} replies={replies} password={password}
            onToggle={toggleRead} onRemove={remove} onReplied={() => load(password)}
            setError={setError} setNotice={setNotice} />
        )}
        {tab === "leads" && (
          <LeadsTab leads={leads} replies={replies} password={password}
            onToggle={toggleRead} onRemove={remove} onReplied={() => load(password)}
            setError={setError} setNotice={setNotice} />
        )}
        {tab === "outreach" && <OutreachTab password={password} setError={setError} setNotice={setNotice} />}
        {tab === "newsletter" && <NewsletterTab password={password} setError={setError} setNotice={setNotice} />}
        {tab === "compose" && <ComposeTab password={password} setError={setError} setNotice={setNotice} />}

        <ChangePassword password={password} setError={setError} setNotice={setNotice} onChanged={(np) => { setPassword(np); sessionStorage.setItem(PW_KEY, np); }} />
      </div>
    </section>
  );
}

// ─────────────── Sous-composants ───────────────

type ThreadProps = {
  replies: Reply[]; password: string; to: string; messageId?: string; leadId?: string;
  onReplied: () => void; setError: (s: string) => void; setNotice: (s: string) => void;
};

function ReplyComposer({ to, messageId, leadId, password, onReplied, setError, setNotice }: ThreadProps) {
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);

  async function send() {
    setSending(true); setError(""); setNotice("");
    try {
      const res = await fetch("/api/admin/reply", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, to, subject, body, messageId, leadId }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Échec"); setSending(false); return; }
      setNotice(data.emailSkipped ? "Réponse enregistrée (e-mail non configuré)." : "Réponse envoyée.");
      setBody(""); setSubject(""); setOpen(false); onReplied();
    } catch { setError("Erreur réseau."); }
    setSending(false);
  }

  if (!open) {
    return <button onClick={() => setOpen(true)} className="text-sm font-semibold text-gold hover:text-gold-dark transition">Répondre</button>;
  }
  return (
    <div className="mt-3 border-t border-gray-100 pt-3">
      <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Objet"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm mb-2 focus:outline-none focus:border-gold" />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Votre réponse (Markdown supporté)…" rows={4}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm mb-2 focus:outline-none focus:border-gold" />
      <div className="flex gap-2">
        <button onClick={send} disabled={sending || !body.trim()}
          className="bg-gold text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gold-dark transition disabled:opacity-50">
          {sending ? "Envoi…" : "Envoyer"}
        </button>
        <button onClick={() => setOpen(false)} className="text-sm font-semibold text-gray-500 hover:text-midnight transition">Annuler</button>
      </div>
    </div>
  );
}

function MessagesTab({ contacts, replies, password, onToggle, onRemove, onReplied, setError, setNotice }: {
  contacts: ContactMessage[]; replies: Reply[]; password: string;
  onToggle: (k: "contact" | "lead", id: string, cur: boolean) => void;
  onRemove: (k: "contact" | "lead", id: string) => void;
  onReplied: () => void; setError: (s: string) => void; setNotice: (s: string) => void;
}) {
  if (contacts.length === 0) return <Empty />;
  return (
    <div className="space-y-3">
      {contacts.map((c) => {
        const thread = replies.filter((r) => r.message_id === c.id);
        return (
          <article key={c.id} className={`bg-white rounded-2xl border p-5 ${c.is_read ? "border-gray-200" : "border-gold/50"}`}>
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="font-semibold text-midnight">{c.name || "—"}{" "}
                  <a href={`mailto:${c.email}`} className="font-normal text-gold hover:underline">{c.email}</a>
                </p>
                {c.subject && <p className="text-base text-gray-600 font-semibold mt-1">{c.subject}</p>}
                {c.message && <p className="text-base text-gray-500 mt-1 whitespace-pre-wrap">{c.message}</p>}
                <p className="text-sm text-gray-400 mt-2">{formatDate(c.created_at)}</p>
                {thread.length > 0 && (
                  <div className="mt-3 space-y-1">
                    {thread.map((r) => (
                      <p key={r.id} className="text-sm text-gray-500 bg-cream rounded-lg px-3 py-2">
                        <span className="text-gold font-semibold">↳ Réponse</span> {formatDate(r.created_at)} — {r.subject}
                      </p>
                    ))}
                  </div>
                )}
                <ReplyComposer replies={replies} password={password} to={c.email} messageId={c.id}
                  onReplied={onReplied} setError={setError} setNotice={setNotice} />
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                <button onClick={() => onToggle("contact", c.id, c.is_read)} className="text-sm font-semibold text-gold hover:text-gold-dark transition whitespace-nowrap">
                  {c.is_read ? "Marquer non lu" : "Marquer lu"}
                </button>
                <button onClick={() => onRemove("contact", c.id)} className="text-sm font-semibold text-red-500 hover:text-red-700 transition">Supprimer</button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function LeadsTab({ leads, replies, password, onToggle, onRemove, onReplied, setError, setNotice }: {
  leads: Lead[]; replies: Reply[]; password: string;
  onToggle: (k: "contact" | "lead", id: string, cur: boolean) => void;
  onRemove: (k: "contact" | "lead", id: string) => void;
  onReplied: () => void; setError: (s: string) => void; setNotice: (s: string) => void;
}) {
  if (leads.length === 0) return <Empty />;
  return (
    <div className="space-y-3">
      {leads.map((l) => {
        const thread = replies.filter((r) => r.lead_id === l.id);
        return (
          <article key={l.id} className={`bg-white rounded-2xl border p-5 ${l.is_read ? "border-gray-200" : "border-gold/50"}`}>
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="font-semibold text-midnight">{l.name || "—"}{" "}
                  <a href={`mailto:${l.email}`} className="font-normal text-gold hover:underline">{l.email}</a>
                </p>
                <p className="text-base text-gray-500 mt-1">
                  {l.telephone && (<><a href={`tel:${l.telephone}`} className="text-gold hover:underline">{l.telephone}</a>{" · "}</>)}
                  {[l.province, l.statut].filter(Boolean).join(" · ") || "—"}
                </p>
                <p className="text-sm text-gray-500 mt-2 flex flex-wrap gap-2">
                  {l.quality && <span className="bg-gold-light text-gold px-2 py-0.5 rounded font-semibold uppercase">{l.quality}</span>}
                  {typeof l.score === "number" && <span className="bg-cream text-gray-600 px-2 py-0.5 rounded font-semibold">score {l.score}</span>}
                  <span className="bg-cream text-gray-600 px-2 py-0.5 rounded">{l.source}</span>
                </p>
                <p className="text-sm text-gray-400 mt-2">{formatDate(l.created_at)}</p>
                {thread.length > 0 && (
                  <div className="mt-3 space-y-1">
                    {thread.map((r) => (
                      <p key={r.id} className="text-sm text-gray-500 bg-cream rounded-lg px-3 py-2">
                        <span className="text-gold font-semibold">↳ Réponse</span> {formatDate(r.created_at)} — {r.subject}
                      </p>
                    ))}
                  </div>
                )}
                <ReplyComposer replies={replies} password={password} to={l.email} leadId={l.id}
                  onReplied={onReplied} setError={setError} setNotice={setNotice} />
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                <button onClick={() => onToggle("lead", l.id, l.is_read)} className="text-sm font-semibold text-gold hover:text-gold-dark transition whitespace-nowrap">
                  {l.is_read ? "Marquer non lu" : "Marquer lu"}
                </button>
                <button onClick={() => onRemove("lead", l.id)} className="text-sm font-semibold text-red-500 hover:text-red-700 transition">Supprimer</button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

type OutreachRow = { partner_id: string; status: string; commission_pct: number | null; notes: string | null; updated_at: string };

const EMAILABLE = outreachContacts.filter((c) => c.email);

function OutreachTab({ password, setError, setNotice }: { password: string; setError: (s: string) => void; setNotice: (s: string) => void }) {
  const [rows, setRows] = useState<Record<string, OutreachRow>>({});
  const [subject, setSubject] = useState(OUTREACH_DEFAULT_SUBJECT);
  const [body, setBody] = useState(OUTREACH_DEFAULT_BODY);
  const [testEmail, setTestEmail] = useState("");
  const [busy, setBusy] = useState(false);
  // Sélection des partenaires à contacter (par e-mail). Tous cochés par défaut.
  const [selected, setSelected] = useState<Set<string>>(
    () => new Set(EMAILABLE.map((c) => c.email as string))
  );

  function toggleSel(email: string) {
    setSelected((p) => {
      const n = new Set(p);
      if (n.has(email)) n.delete(email); else n.add(email);
      return n;
    });
  }
  const allSelected = selected.size === EMAILABLE.length && EMAILABLE.length > 0;
  function toggleAll() {
    setSelected(allSelected ? new Set() : new Set(EMAILABLE.map((c) => c.email as string)));
  }

  const loadPipeline = useCallback(async () => {
    const { data, error } = await supabase.rpc("gh_admin_outreach_list", { p_password: password });
    if (error) { setError(`Erreur : ${error.message}`); return; }
    const map: Record<string, OutreachRow> = {};
    (data as OutreachRow[] ?? []).forEach((r) => { map[r.partner_id] = r; });
    setRows(map);
  }, [password, setError]);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { loadPipeline(); }, [loadPipeline]);

  async function upsert(partnerId: string, patch: Partial<OutreachRow>) {
    const cur = rows[partnerId] ?? { partner_id: partnerId, status: "contacted", commission_pct: null, notes: null, updated_at: "" };
    const next = { ...cur, ...patch };
    setRows((p) => ({ ...p, [partnerId]: { ...next, updated_at: new Date().toISOString() } }));
    const { error } = await supabase.rpc("gh_admin_outreach_upsert", {
      p_password: password, p_partner_id: partnerId, p_status: next.status,
      p_commission_pct: next.commission_pct, p_notes: next.notes,
    });
    if (error) setError(`Erreur : ${error.message}`);
  }

  async function broadcast(action: "test" | "send") {
    setBusy(true); setError(""); setNotice("");
    try {
      const res = await fetch("/api/admin/outreach", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, action, subject, body, testEmail, emails: [...selected] }),
      });
      const data = await res.json();
      if (!res.ok) setError(data.error || "Échec");
      else setNotice(action === "test" ? "E-mail de test envoyé." : `Envoyé à ${data.sent}/${data.total} partenaires.`);
    } catch { setError("Erreur réseau."); }
    setBusy(false);
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-extrabold text-midnight">Pipeline partenaires</h2>
          {EMAILABLE.length > 0 && (
            <button onClick={toggleAll} className="text-sm font-semibold text-gold hover:text-gold-dark transition">
              {allSelected ? "Tout décocher" : "Tout cocher"}
            </button>
          )}
        </div>
        {outreachContacts.length === 0 ? (
          <p className="text-base text-gray-500">
            Aucun partenaire configuré. Ajoutez vos courtiers/partenaires dans <code className="text-gold">src/lib/outreach-contacts.ts</code>.
          </p>
        ) : (
          <div className="space-y-3">
            {outreachContacts.map((c) => {
              const row = rows[c.id];
              const canEmail = !!c.email;
              return (
                <div key={c.id} className={`border rounded-xl p-3 ${canEmail && selected.has(c.email as string) ? "border-gold/40 bg-gold-light/30" : "border-gray-100"}`}>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1.5"
                      disabled={!canEmail}
                      checked={canEmail && selected.has(c.email as string)}
                      onChange={() => canEmail && toggleSel(c.email as string)}
                      title={canEmail ? "Contacter ce partenaire" : "Pas d'e-mail vérifié"}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-midnight">{c.partner} <span className="font-normal text-gray-400 text-sm">· {c.location}</span></p>
                      <p className="text-sm text-gray-500 mb-2">
                        {c.email ?? <span className="italic">pas d&apos;e-mail — {c.formUrl ? "voir page partenariat" : "à compléter"}</span>}
                        {c.email ? ` — ${c.note}` : ""}
                      </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    <select value={row?.status ?? "contacted"} onChange={(e) => upsert(c.id, { status: e.target.value })}
                      className="rounded-lg border border-gray-300 px-2 py-1.5 text-sm">
                      <option value="to-contact">À contacter</option>
                      <option value="contacted">Contacté</option>
                      <option value="replied">A répondu</option>
                      <option value="partner">Partenaire</option>
                      <option value="declined">Refusé</option>
                    </select>
                    <input type="number" placeholder="Commission %" defaultValue={row?.commission_pct ?? undefined}
                      onBlur={(e) => upsert(c.id, { commission_pct: e.target.value ? Number(e.target.value) : null })}
                      className="w-28 rounded-lg border border-gray-300 px-2 py-1.5 text-sm" />
                    <input type="text" placeholder="Notes" defaultValue={row?.notes ?? ""}
                      onBlur={(e) => upsert(c.id, { notes: e.target.value || null })}
                      className="flex-1 min-w-[140px] rounded-lg border border-gray-300 px-2 py-1.5 text-sm" />
                  </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-5">
        <h2 className="font-extrabold text-midnight mb-3">Message de prospection</h2>
        <p className="text-sm text-gray-400 mb-3">
          {"{{partner}}"} est remplacé par le nom. <strong>{selected.size}</strong> partenaire(s) coché(s) sur {EMAILABLE.length} avec e-mail vérifié.
        </p>
        <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Objet"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm mb-2 focus:outline-none focus:border-gold" />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={8}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm mb-3 focus:outline-none focus:border-gold" />
        <div className="flex flex-wrap gap-2 items-center">
          <input value={testEmail} onChange={(e) => setTestEmail(e.target.value)} placeholder="E-mail de test"
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gold" />
          <button onClick={() => broadcast("test")} disabled={busy}
            className="bg-white text-gold border border-gold px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gold hover:text-white transition disabled:opacity-50">Test</button>
          <button onClick={() => broadcast("send")} disabled={busy || selected.size === 0}
            className="bg-gold text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gold-dark transition disabled:opacity-50">
            Envoyer aux {selected.size} sélectionné(s)
          </button>
        </div>
      </div>
    </div>
  );
}

type NewsletterPost = { slug: string; title: string; category: string };

function NewsletterTab({ password, setError, setNotice }: { password: string; setError: (s: string) => void; setNotice: (s: string) => void }) {
  const [posts, setPosts] = useState<NewsletterPost[]>([]);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [testEmail, setTestEmail] = useState("");
  const [busy, setBusy] = useState(false);

  const call = useCallback(async (action: string, extra: Record<string, unknown> = {}) => {
    const res = await fetch("/api/admin/newsletter", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, action, ...extra }),
    });
    return { res, data: await res.json() };
  }, [password]);

  useEffect(() => {
    call("list").then(({ res, data }) => { if (res.ok) setPosts(data.posts ?? []); });
  }, [call]);

  function toggle(slug: string) {
    setSelected((p) => {
      const n = new Set(p);
      if (n.has(slug)) n.delete(slug); else n.add(slug);
      return n;
    });
  }

  async function run(action: "test" | "send") {
    setBusy(true); setError(""); setNotice("");
    const { res, data } = await call(action, { slugs: [...selected], testEmail });
    if (!res.ok) setError(data.error || "Échec");
    else setNotice(action === "test" ? "Test envoyé." : "Campagne envoyée.");
    setBusy(false);
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5">
      <h2 className="font-extrabold text-midnight mb-3">Newsletter</h2>
      <p className="text-sm text-gray-400 mb-3">Sélectionnez les articles à inclure. L&apos;envoi réel nécessite BREVO_API_KEY + BREVO_NEWSLETTER_LIST_ID.</p>
      <div className="max-h-72 overflow-y-auto border border-gray-100 rounded-xl p-3 mb-3 space-y-1">
        {posts.map((p) => (
          <label key={p.slug} className="flex items-start gap-2 text-sm text-gray-600 py-1">
            <input type="checkbox" checked={selected.has(p.slug)} onChange={() => toggle(p.slug)} className="mt-1" />
            <span><span className="text-gold font-semibold">[{p.category}]</span> {p.title}</span>
          </label>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        <input value={testEmail} onChange={(e) => setTestEmail(e.target.value)} placeholder="E-mail de test"
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gold" />
        <button onClick={() => run("test")} disabled={busy || selected.size === 0}
          className="bg-white text-gold border border-gold px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gold hover:text-white transition disabled:opacity-50">Test</button>
        <button onClick={() => run("send")} disabled={busy || selected.size === 0}
          className="bg-gold text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gold-dark transition disabled:opacity-50">Envoyer la campagne</button>
      </div>
    </div>
  );
}

function ComposeTab({ password, setError, setNotice }: { password: string; setError: (s: string) => void; setNotice: (s: string) => void }) {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);

  async function send() {
    setBusy(true); setError(""); setNotice("");
    try {
      const attachments = await Promise.all(
        files.slice(0, 5).map(async (f) => ({ name: f.name, content: await fileToBase64(f) }))
      );
      const res = await fetch("/api/admin/send", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, to, subject, body, attachments }),
      });
      const data = await res.json();
      if (!res.ok) setError(data.error || "Échec");
      else { setNotice("Message envoyé."); setBody(""); setSubject(""); setTo(""); setFiles([]); }
    } catch { setError("Erreur réseau."); }
    setBusy(false);
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5">
      <h2 className="font-extrabold text-midnight mb-3">Composer un e-mail</h2>
      <input value={to} onChange={(e) => setTo(e.target.value)} placeholder="Destinataire"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm mb-2 focus:outline-none focus:border-gold" />
      <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Objet"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm mb-2 focus:outline-none focus:border-gold" />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={8} placeholder="Message (Markdown supporté)…"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm mb-2 focus:outline-none focus:border-gold" />
      <input type="file" multiple onChange={(e) => setFiles(Array.from(e.target.files ?? []))} className="text-sm mb-3" />
      <button onClick={send} disabled={busy || !to || !body.trim()}
        className="bg-gold text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gold-dark transition disabled:opacity-50">
        {busy ? "Envoi…" : "Envoyer"}
      </button>
    </div>
  );
}

function ChangePassword({ password, setError, setNotice, onChanged }: {
  password: string; setError: (s: string) => void; setNotice: (s: string) => void; onChanged: (np: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [np, setNp] = useState("");
  const [busy, setBusy] = useState(false);

  async function change() {
    if (np.length < 8) { setError("Minimum 8 caractères."); return; }
    setBusy(true); setError(""); setNotice("");
    const { error } = await supabase.rpc("gh_admin_change_password", { p_old: password, p_new: np });
    setBusy(false);
    if (error) { setError(`Erreur : ${error.message}`); return; }
    setNotice("Mot de passe changé."); onChanged(np); setNp(""); setOpen(false);
  }

  return (
    <div className="mt-10 pt-6 border-t border-gray-200">
      {!open ? (
        <button onClick={() => setOpen(true)} className="text-sm font-semibold text-gray-500 hover:text-midnight transition">Changer le mot de passe</button>
      ) : (
        <div className="flex flex-wrap gap-2 items-center">
          <input type="password" value={np} onChange={(e) => setNp(e.target.value)} placeholder="Nouveau mot de passe"
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gold" />
          <button onClick={change} disabled={busy}
            className="bg-gold text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gold-dark transition disabled:opacity-50">Valider</button>
          <button onClick={() => setOpen(false)} className="text-sm font-semibold text-gray-500 hover:text-midnight transition">Annuler</button>
        </div>
      )}
    </div>
  );
}

function Empty() {
  return <p className="text-gray-400 text-base bg-white rounded-2xl border border-gray-200 p-8 text-center">Aucun élément.</p>;
}
