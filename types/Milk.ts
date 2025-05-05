import { ICondition as Formula, ICondition } from "../src";

export enum MilkType {
  F100 = "f100",
  F75 = "f75",
  F100_dilue = "f100 - dilué",
}
export enum RecommendedMilkQuantityPerDay {
  HEIGHT = "8",
  FIVE = "5",
  SIX = "6",
}
export interface RecommendedMilkPerWeightRanges {
  weightRanges: {
    min: number;
    max: number;
  };
  recommendedQuantityPerMilkRecommendationPerDay: Partial<
    Record<RecommendedMilkQuantityPerDay, number>
  >;
}
export interface Milk {
  name: string;
  type: MilkType;
  doseFormula: Formula;
  condition: ICondition;
  recommendedMilkPerDay: RecommendedMilkQuantityPerDay[];
  notes: string[];
  recommendedMilkPerWeightRanges: RecommendedMilkPerWeightRanges[];
}
