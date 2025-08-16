import { ICondition } from "../src/IndicatorGeneration/types";

export enum MilkType {
  F100 = "f100",
  F75 = "f75",
  F100Diluted = "f100_diluted",
}
export enum RecommendedMilkPerDay {
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
    Record<RecommendedMilkPerDay, number>
  >;
}
export interface Milk {
  name: string;
  type: MilkType;
  doseFormula: ICondition;
  condition: ICondition;
  recommendedMilkPerDay: RecommendedMilkPerDay[];
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
  dosages: DosageByWeight[];
}

export interface DosageByWeight {
  weight_kg: [number, number];
  dosePerMeal: Partial<Record<RecommendedMilkPerDay, number>>;
}
