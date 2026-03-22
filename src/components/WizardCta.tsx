import Link from "next/link";

interface WizardCtaProps {
  variant?: string;
  style?: "light" | "dark";
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function WizardCta({
  variant,
  style = "light",
  title,
  description,
  buttonText,
}: WizardCtaProps) {
  const href = variant ? `/wizard/${variant}` : "/wizard";
  const isDark = style === "dark";

  return (
    <div className={`rounded-xl p-6 not-prose my-8 ${isDark ? "bg-gray-900 text-white" : "bg-gold-light"}`}>
      <p className="font-medium text-sm mb-2">
        {title ?? (isDark ? "Prêt à passer à l'action ?" : "Découvrez vos options personnalisées")}
      </p>
      <p className={`text-xs mb-3 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
        {description ?? "Notre wizard gratuit analyse votre situation en 5 minutes et vous connecte aux meilleurs courtiers spécialisés."}
      </p>
      <Link
        href={href}
        className="inline-block bg-gold text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gold-dark transition"
      >
        {buttonText ?? "Commencer le Wizard"} &rarr;
      </Link>
    </div>
  );
}
