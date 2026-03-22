// ============================================
// Re-export hub — all data split into dedicated modules
// Import from this file for backward compatibility,
// or import directly from the specific module.
// ============================================

export type { LeadData, LeadQuality } from "@/types/lead";

export {
  cmhcRules,
  cmhcInsurancePremiums,
  cmhcAlternativeCredit,
} from "./cmhc";

export { bankPrograms } from "./bankPrograms";

export { requiredDocuments } from "./documents";

export {
  scoringRules,
  getRevenueScore,
  getMomentScore,
  calculateLeadScore,
} from "@/lib/scoring";

export { wizardSteps } from "./wizardSteps";

export { faqItems } from "./faq";
