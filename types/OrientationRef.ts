import { ICondition } from "../src/IndicatorGeneration/types";



export interface OrientationRef {
  name: string;
  code: string;
  admissionCriteria: ICondition[];
  admissionTypes: { name: string; code: string; condition: ICondition }[];
}
