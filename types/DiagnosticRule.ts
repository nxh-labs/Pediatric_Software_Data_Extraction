import { ICondition } from "../src";

export interface DiagnosticRule {
  name: string;
  code: string;
  conditions: ICondition[];
}
