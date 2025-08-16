import { MEDICINE_CODES } from "../constants";
import { ICondition } from "./Indicator";

export enum MedicineCategory {
  ANTIBACTERIALS = "antibacterials",
  ANTIFUNGALS = "antifungals",
  ANTIMALARIALS = "antimalarials",
  SCABIES = "scabies",
  CARDIAC_FAILURE = "cardiac_failure",
  ALTERNATIVES = "alternatives",
}

export enum AdministrationRoute {
  ORAL = "oral",
  IV = "iv",
  IM = "im",
  IV_IM = "iv/im",
  RECTAL = "rectal",
  TOPICAL = "topical",
  ORAL_IV = "oral/iv",
  ORAL_IM = "oral/im",
}

export enum DosageUnit {
  MG = "mg",
  MG_KG = "mg/kg",
  MG_KG_DAY = "mg/kg/day",
  UI = "UI",
  ML = "ml",
  G = "g",
}

export type Amount =
  | { value: number; unit: DosageUnit }
  | { minValue: number; maxValue: number; unit: DosageUnit };

export interface WeightRange {
  min: number;
  max: number; // Use Infinity as a number if needed.
  description: string;
}

export interface BaseDosage {
  label: string;
  frequency: number;
  min: number;
  max: number;
  unit: DosageUnit;
}

export interface DosageRange {
  weightRange: WeightRange;
  // Some entries use the key "amount" others "dosageAmount".
  // Here we create a unified property.
  amount: Amount;
  frequency: number;
}

export interface Next_Medicine {
  code: MEDICINE_CODES;
  name: string;
  category: MedicineCategory;
  administrationRoutes: AdministrationRoute[];
  dosageCases: DosageCase[]
  warnings?: string[];
  contraindications?: string[];
  interactions?: string[];
  notes?: string[];
}
export interface DosageCase {
  dosageCondition: { condition: ICondition, description: string, variableExplanation: Record<string, string> }
  baseDosage: BaseDosage;
  dosageRanges: DosageRange[];
}