

import { ICondition } from "../src/IndicatorGeneration/types";
import { ClinicalSignData } from "./clinicalSignData";

export interface ClinicalSignReference {
  name: string;
  code: string;
  description: string;
  evaluationRule: ICondition;
  data: ClinicalSignData[];
}
