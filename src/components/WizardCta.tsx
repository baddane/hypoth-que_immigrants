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
    <div className={`rounded-lg p-6 not-prose my-8 ${isDark ? "bg-navy text-white" : "bg-light-blue"}`}>
      <p className="font-semibold text-sm mb-2">
        {title ?? (isDark ? "Prêt à passer à l'action ?" : "Découvrez vos options personnalisées")}
      </p>
      <p className={`text-xs mb-3 ${isDark ? "text-white/50" : "text-dark/50"}`}>
        {description ?? "Notre wizard gratuit analyse votre situation en 5 minutes et vous connecte aux meilleurs courtiers spécialisés."}
      </p>
      <Link
        href={href}
        className="inline-block bg-primary text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-primary-dark transition"
      >
        {buttonText ?? "Commencer le Wizard"} &rarr;
      </Link>
    </div>
  );
}
