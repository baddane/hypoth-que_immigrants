// Setup Brevo pour guide-hypotheque.ca
// Crée l'attribut contact SOURCE (FIRSTNAME/LASTNAME sont natifs Brevo) + les listes Leads / Newsletter,
// puis affiche les IDs de listes à mettre dans les variables d'environnement.
//
// Usage :
//   BREVO_API_KEY="xkeysib-..." node setup-brevo.js
// (La clé N'EST PAS stockée dans le dépôt — passée en variable d'environnement.)

const API = "https://api.brevo.com/v3";
const KEY = process.env.BREVO_API_KEY;

if (!KEY) {
  console.error("❌ BREVO_API_KEY manquante. Lancez : BREVO_API_KEY=\"xkeysib-...\" node setup-brevo.js");
  process.exit(1);
}

const headers = { "api-key": KEY, "Content-Type": "application/json", accept: "application/json" };

async function req(method, path, body) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers,
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  const text = await res.text();
  let json;
  try { json = text ? JSON.parse(text) : {}; } catch { json = { raw: text }; }
  return { status: res.status, ok: res.ok, json };
}

const FOLDER_NAME = "guide-hypotheque";
const LISTS = [
  { key: "BREVO_LEADS_LIST_ID", name: "Leads guide-hypotheque" },
  { key: "BREVO_NEWSLETTER_LIST_ID", name: "Newsletter guide-hypotheque" },
];
// FIRSTNAME/LASTNAME existent nativement chez Brevo ; seul SOURCE est custom.
const ATTRIBUTES = ["SOURCE"];

async function main() {
  // 0) Vérifier la clé
  const acc = await req("GET", "/account");
  if (!acc.ok) {
    console.error(`❌ Clé invalide/inactive (${acc.status}) :`, acc.json.message || acc.json);
    process.exit(1);
  }
  console.log(`✅ Compte Brevo : ${acc.json.email ?? "(ok)"}`);

  // 1) Attributs contact (type text)
  for (const name of ATTRIBUTES) {
    const r = await req("POST", `/contacts/attributes/normal/${name}`, { type: "text" });
    if (r.ok) console.log(`✅ Attribut créé : ${name}`);
    else if (r.status === 400 && /exist/i.test(JSON.stringify(r.json))) console.log(`↷ Attribut déjà présent : ${name}`);
    else console.warn(`⚠️ Attribut ${name} : ${r.status} ${JSON.stringify(r.json)}`);
  }

  // 2) Dossier (requis pour créer des listes)
  let folderId;
  const folders = await req("GET", "/contacts/folders?limit=50&offset=0");
  const existingFolder = (folders.json.folders || []).find((f) => f.name === FOLDER_NAME);
  if (existingFolder) {
    folderId = existingFolder.id;
    console.log(`↷ Dossier existant : ${FOLDER_NAME} (id ${folderId})`);
  } else {
    const cf = await req("POST", "/contacts/folders", { name: FOLDER_NAME });
    folderId = cf.json.id;
    console.log(`✅ Dossier créé : ${FOLDER_NAME} (id ${folderId})`);
  }

  // 3) Listes
  const lists = await req("GET", "/contacts/lists?limit=50&offset=0");
  const existingLists = lists.json.lists || [];
  const envOut = [];
  for (const { key, name } of LISTS) {
    const found = existingLists.find((l) => l.name === name);
    let id;
    if (found) {
      id = found.id;
      console.log(`↷ Liste existante : ${name} (id ${id})`);
    } else {
      const cl = await req("POST", "/contacts/lists", { name, folderId });
      if (!cl.ok) { console.warn(`⚠️ Liste ${name} : ${cl.status} ${JSON.stringify(cl.json)}`); continue; }
      id = cl.json.id;
      console.log(`✅ Liste créée : ${name} (id ${id})`);
    }
    envOut.push(`${key}=${id}`);
  }

  console.log("\n── Variables d'environnement à définir (Vercel + .env.local) ──");
  console.log(envOut.join("\n"));
}

main().catch((e) => { console.error("Erreur :", e); process.exit(1); });
