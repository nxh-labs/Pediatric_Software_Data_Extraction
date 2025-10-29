import { ICondition } from "../src/IndicatorGeneration/types";

export interface DiagnosticRule {
  name: string;
  code: string;
  conditions: ICondition[];
}