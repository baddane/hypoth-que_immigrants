import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-midnight text-white pt-16 pb-24">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/icon.png" alt="guide-hypotheque.ca" width={36} height={36} className="rounded-lg" />
              <span className="text-lg font-extrabold">
                guide-hypotheque<span className="text-gold">.ca</span>
              </span>
            </div>
            <p className="text-base leading-relaxed text-gray-400">
              Obtenez votre préapprobation hypothécaire gratuitement. Nous connectons les immigrants avec les meilleurs courtiers et banques au Canada.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase text-xs tracking-wider text-white">Outils</h4>
            <ul className="space-y-2 text-base text-gray-400">
              <li><Link href="/wizard" className="hover:text-gold transition font-semibold">Wizard Hypothèque</Link></li>
              <li><Link href="/outils/calculateur-prime-schl" className="hover:text-gold transition font-semibold">Calculateur Prime SCHL</Link></li>
              <li><Link href="/outils/simulateur-stress-test" className="hover:text-gold transition font-semibold">Simulateur Stress Test</Link></li>
              <li><Link href="/outils/checklist-documents" className="hover:text-gold transition font-semibold">Checklist Documents</Link></li>
              <li><Link href="/outils/eligibilite-achat-non-canadien" className="hover:text-gold transition font-semibold">Quiz Éligibilité</Link></li>
              <li><Link href="/faq" className="hover:text-gold transition font-semibold">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition font-semibold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase text-xs tracking-wider text-white">Guides</h4>
            <ul className="space-y-2 text-base text-gray-400">
              <li><Link href="/blog/hypotheque-travailleur-temporaire-5pourcent" className="hover:text-gold transition font-semibold">Guide Complet</Link></li>
              <li><Link href="/blog/hypotheque-permis-travail-ouvert" className="hover:text-gold transition font-semibold">Permis de Travail</Link></li>
              <li><Link href="/blog/preapprobation-hypotheque-immigrant" className="hover:text-gold transition font-semibold">Préapprobation</Link></li>
              <li><Link href="/blog/hypotheque-francophone-quebec" className="hover:text-gold transition font-semibold">Hypothèque Québec</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase text-xs tracking-wider text-white">Légal</h4>
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
