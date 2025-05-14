

import { ICondition } from "../src/IndicatorGeneration/types";
import { RecommendedTest } from "./RecommendedTest";

export interface NutritionalRiskFactor {
  clinicalSignCode: string;
  associatedNutrients: { nutrient: string; effect: "deficiency" | "excess" }[];
  modulatingCondition: ICondition;
  recommendedTests: RecommendedTest[];
}
