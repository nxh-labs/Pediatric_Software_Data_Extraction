import { ICondition } from "../src";
import { CARE_PHASE_CODES } from "./CarePhaseReference";

export interface Next_OrientationRef {
  name: string;
  code: string;
  criteria: AdmissionCriteria[];
  treatmentPhase?: CARE_PHASE_CODES;
}
export interface AdmissionCriteria {
  condition: ICondition;
  description: string;
  variablesExplanation: { [variable: string]: string };
}
