import { DIAGNOSTIC_CODES } from "../constants";
import { ICondition } from "../src/IndicatorGeneration/types";

export interface NextDiagnosticRule {
  code: DIAGNOSTIC_CODES;
  name: string;
  criterions: {
    condition: ICondition;
    description: string;
    variablesExplanation: Record<string, string>;
  }[];
}
