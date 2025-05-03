import { ClinicalDataType } from "../constants";

export interface ClinicalSignData {
  name: string;
  code: string;
  question: string;
  dataType: ClinicalDataType;
  required: boolean;
  dataRange?: [number, number];
  enumValue?: string[]
}
