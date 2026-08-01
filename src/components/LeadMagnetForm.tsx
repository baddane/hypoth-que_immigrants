"use client";

import { useState } from "react";
import { getAttribution } from "@/lib/attribution";
import { trackLead } from "@/lib/track";

const PDF_PATH = "/ressources/checklist-documents-hypotheque-immigrant.pdf";

export default function LeadMagnetForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, ...getAttribution() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Une erreur est survenue.");
        setStatus("error");
        return;
      }
      trackLead("lead-magnet");
      setStatus("done");
      // Déclenche le téléchargement du PDF.
      const link = document.createElement("a");
      link.href = data.file || PDF_PATH;
      link.download = "";
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch {
      setError("Une erreur réseau est survenue. Réessayez.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="bg-gold-light border border-gold/20 rounded-2xl p-8 text-center">
        <p className="text-lg font-extrabold text-midnight mb-2">
          Merci ! Votre checklist est en téléchargement.
        </p>
        <p className="text-base text-gray-500 mb-4">
          Si le téléchargement ne démarre pas automatiquement :
        </p>
        <a
          href={PDF_PATH}
          download
          className="inline-block bg-gold text-white px-6 py-3 rounded-lg font-bold hover:bg-gold-dark transition"
        >
          Télécharger le PDF
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8"
    >
      <label className="block text-base font-semibold text-midnight mb-1">
        Prénom <span className="font-normal text-gray-400">(facultatif)</span>
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Votre prénom"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base mb-4 focus:outline-none focus:border-gold"
      />
      <label className="block text-base font-semibold text-midnight mb-1">
        Courriel
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="vous@exemple.com"
        required
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base mb-4 focus:outline-none focus:border-gold"
      />
      {error && <p className="text-red-600 text-base mb-4">{error}</p>}
      <button
        type="submit"
        disabled={status === "loading" || !email}
        className="w-full bg-gold text-white px-6 py-3.5 rounded-lg font-bold hover:bg-gold-dark transition disabled:opacity-50 uppercase tracking-wider"
      >
        {status === "loading" ? "Envoi…" : "Recevoir ma checklist PDF"}
      </button>
      <p className="text-sm text-gray-400 mt-3 text-center">
        Gratuit • Aucun engagement • Désabonnement en un clic
      </p>
    </form>
  );
}
