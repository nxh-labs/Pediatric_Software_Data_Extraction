

import { ICondition } from "../src/IndicatorGeneration/types";
import { Next_ClinicalSignData } from "./clinicalSignData.next";

export interface Next_ClinicalSignReference {
  name: string;
  code: string;
  description: string;
  evaluationRule: ICondition;
  data: Next_ClinicalSignData[];
}
