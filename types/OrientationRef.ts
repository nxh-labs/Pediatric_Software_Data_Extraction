import { ICondition } from "../src";

export interface OrientationRef {
  name: string;
  code: string;
  admissionCriteria: ICondition[];
  admissionType: { name: string; code: string; condition: ICondition }[];
}
