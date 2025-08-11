import {
  AnthroSystemCodes,
  BIOCHEMICAL_REF_CODES,
  CLINICAL_SIGNS,
  DATA_FIELD_CODE_TYPE,
  MEDICINE_CODES,
} from "../constants";
import { ICondition } from "../src/IndicatorGeneration/types";
import { ValueOf } from "../utils";
import { MilkType } from "./Milk";

export interface CarePhaseReference {
  code: CARE_PHASE_CODES;
  name: string;
  description: string;
  failureCriteria: PhaseCriterion[];
  transitionCriteria: PhaseCriterion[];
  recommendedTreatments: RecommendedTreatment[];
  monitoringPlan: MonitoringElement[];
}

export enum CARE_PHASE_CODES {
  CNT_PHASE1 = "phase_1_cnt",
  CNT_TRANS_PHASE = "transition_phase_cnt",
  CNT_PHASE2 = "phase_2_cnt",
}

export interface PhaseCriterion {
  description: string;
  condition: ICondition;
  variablesExplanation: Record<string, string>;
}
export interface RecommendedTreatment {
  type: RECOMMENDED_TREATMENT_TYPE;
  code: MilkType | MEDICINE_CODES;
  /** La durée pendant laquelle le traitement doit être actif. */
  duration: TreatmentDuration;

  /** (Optionnel) Actions à déclencher au début de ce traitement. */
  triggers?: {
    onStart?: TreatmentTrigger[];
    onEnd?: TreatmentTrigger[];
  };
}

export enum RECOMMENDED_TREATMENT_TYPE {
  NUTRITIONAL = "nutritional",
  SYSTEMATIC = "systematic",
}

/**
 * Décrit la durée d'un traitement.
 */
export interface TreatmentDuration {
  /**
   * 'days': Le traitement dure un nombre de jours défini.
   * 'hours': Le traitement dure un nombre d'heures défini.
   * 'while_in_phase': Le traitement est actif tant que le patient est dans cette phase.
   */
  type: "days" | "hours" | "while_in_phase";

  /** La valeur numérique de la durée (ex: 5 pour 5 jours). */
  value?: number;
}

/**
 * Définit une action à déclencher (ex: arrêter un autre traitement).
 */
export interface TreatmentTrigger {
  /** L'action à effectuer. */
  action: "STOP_TREATMENT" | "START_TREATMENT";

  /** Le code du traitement cible. */
  targetCode: string; // ex: 'MED_PREVIOUS_ANTIBIOTIC'
}

export enum MONITORING_VALUE_SOURCE {
  CALCULATED = "calculated_monitoring_value", // Intégrer pour pouvoir distinguer les monitorings values calculables a partie d'autre source de donnée . ex.: Pourcentage de variation d'un monitoring value sur une periods donnée et on pourra aussi fournir la formule de calcule et les variables independantes
  NOT_CALCULATED = "not_calculated_monitoring_value",
}
export interface MonitoringElement {
  category: MONITORING_ELEMENT_CATEGORY;
  source: MONITORING_VALUE_SOURCE;
  code:
  | AnthroSystemCodes
  | ValueOf<typeof BIOCHEMICAL_REF_CODES>
  | DATA_FIELD_CODE_TYPE | ValueOf<typeof CLINICAL_SIGNS>
  frequency: MonitoringFrequency;
}
export interface MonitoringFrequency {
  intervalUnit: "day" | "week" | "hours";
  intervalValue: number;
  countInUnit?: number; // Nombre de fois par intervalle (ex: 2 fois par jour)
}
export enum MONITORING_ELEMENT_CATEGORY {
  ANTHROPOMETRIC = "anthropometric_monitoring_element",
  BIOCHEMICAL = "biochemical_monitoring_element",
  CLINICAL_SIGNS = "clinical_signs_monitoring_element",
  DATA_FIELD = "data_field_monitoring_element",
}
