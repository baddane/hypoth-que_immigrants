import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-white font-bold text-sm">G</span>
              <span className="font-serif text-white text-lg">
                guide-<span className="font-bold">hypotheque</span>.ca
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Obtenez votre préapprobation hypothécaire gratuitement. Nous connectons les immigrants avec les meilleurs courtiers et banques au Canada.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 uppercase text-xs tracking-wider">Outils</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/wizard" className="hover:text-white transition">Wizard Hypothèque</Link></li>
              <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 uppercase text-xs tracking-wider">Guides</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/hypotheque-travailleur-temporaire-5pourcent" className="hover:text-white transition">Guide Complet</Link></li>
              <li><Link href="/blog/hypotheque-permis-travail-ouvert" className="hover:text-white transition">Permis de Travail</Link></li>
              <li><Link href="/blog/preapprobation-hypotheque-immigrant" className="hover:text-white transition">Préapprobation</Link></li>
              <li><Link href="/blog/hypotheque-francophone-quebec" className="hover:text-white transition">Hypothèque Québec</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 uppercase text-xs tracking-wider">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition">À propos</Link></li>
              <li><Link href="/mentions-legales" className="hover:text-white transition">Mentions Légales</Link></li>
              <li><Link href="/politique-confidentialite" className="hover:text-white transition">Confidentialité</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} guide-hypotheque.ca — Tous droits réservés.</p>
          <p className="text-xs text-gray-500">Conforme PIPEDA. Vos données sont sécurisées et confidentielles.</p>
        </div>
      </div>
    </footer>
  );
}
