import { ICondition } from "../src/IndicatorGeneration/types";

export enum MilkType {
  F100 = "f100",
  F75 = "f75",
  F100Diluted = "f100_diluted",
}
export enum FeedingFrequenciePerDay {
  EIGHT = "8",
  FIVE = "5",
  SIX = "6",
}
export interface RecommendedMilkPerWeightRanges {
  weightRange: {
    min: number;
    max: number;
  };
  recommendedQuantityPerMilkRecommendationPerDay: Partial<
    Record<FeedingFrequenciePerDay, number>
  >;
}
export interface Milk {
  name: string;
  type: MilkType;
  doseFormula: ICondition;
  condition: ICondition;
  recommendedMilkPerDay: FeedingFrequenciePerDay[];
  notes: string[];
  recommendationPerRanges: RecommendedMilkPerWeightRanges[];
}
export interface MilkEntity {
  code: MilkType;
  name: string;
  notes: string[];
}
export interface NutitionalProduct {
  code: MilkType;
  dosageTables: DosageScenario[];
}

export interface DosageScenario {
  applicability: {
    condition: ICondition;
    descritption: string;
    variableExplanation: { [variable: string]: string };
  };
  conditionalDosageFormulas: ConditionalDosageFormula[];
  dosages: DosageByWeight[];
  isAdmissionWeight: boolean;
}

export interface DosageByWeight {
  weight_kg: number;
  dosePerMeal: Partial<Record<FeedingFrequenciePerDay, number>>;
}
export enum DosageFormulaUnit {
  ML = 'ml',
  G = 'g',
  PACKET = 'packet'
}
export interface ConditionalDosageFormula {
  applicabilities: Array<{
    condition: ICondition;
    description: string;
    variableExplanation: Record<string, string>;
  }>;
  formula: {
    min: ICondition;
    max: ICondition | null;
    unit: DosageFormulaUnit;
    desciption: string;
    variableExplanation: Record<string, string>;
  };
}