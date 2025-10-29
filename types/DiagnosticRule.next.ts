import { DIAGNOSTIC_CODES } from "../constants";
import { ICondition } from "../src/IndicatorGeneration/types";

export interface Criterion {
  condition: ICondition;
  description: string;
  variablesExplanation: Record<string, string>;
  priority: number;
}

export interface NextDiagnosticRule {
  code: DIAGNOSTIC_CODES;
  name: string;
  priority: number;
  criterions: Criterion[];
}
