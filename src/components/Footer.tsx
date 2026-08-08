import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-midnight text-white pt-16 pb-24">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-full bg-cream flex items-center justify-center font-serif font-black text-gold text-lg leading-none">G</span>
              <span className="text-xl font-serif font-black text-white tracking-tight">
                Guide<span className="italic font-bold text-gold"> Hypothèque</span>
              </span>
            </div>
            <p className="text-base leading-relaxed text-white/60">
              Obtenez votre préapprobation hypothécaire gratuitement. Nous connectons les immigrants avec les meilleurs courtiers et banques au Canada.
            </p>
          </div>

          <div>
            <h4 className="font-mono mb-4 uppercase text-xs tracking-widest text-gold">Outils</h4>
            <ul className="space-y-2 text-base text-gray-400">
              <li><Link href="/wizard" className="hover:text-gold transition font-semibold">Wizard Hypothèque</Link></li>
              <li><Link href="/outils/calculateur-prime-schl" className="hover:text-gold transition font-semibold">Calculateur Prime SCHL</Link></li>
              <li><Link href="/outils/simulateur-stress-test" className="hover:text-gold transition font-semibold">Simulateur Stress Test</Link></li>
              <li><Link href="/outils/checklist-documents" className="hover:text-gold transition font-semibold">Checklist Documents</Link></li>
              <li><Link href="/outils/eligibilite-achat-non-canadien" className="hover:text-gold transition font-semibold">Quiz Éligibilité</Link></li>
              <li><Link href="/outils/calculateur-montant-empruntable" className="hover:text-gold transition font-semibold">Montant Empruntable</Link></li>
              <li><Link href="/outils/comparateur-25-vs-30-ans" className="hover:text-gold transition font-semibold">Comparateur 25 vs 30 ans</Link></li>
              <li><Link href="/outils/calculateur-abd-atd" className="hover:text-gold transition font-semibold">Calculateur ABD/ATD</Link></li>
              <li><Link href="/glossaire" className="hover:text-gold transition font-semibold">Glossaire</Link></li>
              <li><Link href="/faq" className="hover:text-gold transition font-semibold">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition font-semibold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono mb-4 uppercase text-xs tracking-widest text-gold">Guides</h4>
            <ul className="space-y-2 text-base text-gray-400">
              <li><Link href="/blog/hypotheque-travailleur-temporaire-5pourcent" className="hover:text-gold transition font-semibold">Guide Complet</Link></li>
              <li><Link href="/blog/hypotheque-permis-travail-ouvert" className="hover:text-gold transition font-semibold">Permis de Travail</Link></li>
              <li><Link href="/blog/preapprobation-hypotheque-immigrant" className="hover:text-gold transition font-semibold">Préapprobation</Link></li>
              <li><Link href="/blog/hypotheque-francophone-quebec" className="hover:text-gold transition font-semibold">Hypothèque Québec</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono mb-4 uppercase text-xs tracking-widest text-gold">Légal</h4>
            <ul className="space-y-2 text-base text-gray-400">
              <li><Link href="/about" className="hover:text-gold transition font-semibold">À propos</Link></li>
              <li><Link href="/mentions-legales" className="hover:text-gold transition font-semibold">Mentions Légales</Link></li>
              <li><Link href="/politique-confidentialite" className="hover:text-gold transition font-semibold">Confidentialité</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-base text-gray-500">
          <p>&copy; {new Date().getFullYear()} guide-hypotheque.ca — Tous droits réservés.</p>
          <p className="text-sm">Conforme PIPEDA. Vos données sont sécurisées et confidentielles.</p>
        </div>
      </div>
    </footer>
  );
}
