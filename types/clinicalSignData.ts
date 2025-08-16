import { FieldDataType } from "../constants";

export interface ClinicalSignData {
  name: string;
  code: string;
  question: string;
  dataType: FieldDataType;
  required: boolean;
  dataRange?: [number, number];
  enumValue?: { label: string; value: string }[];
  units?: { default: string; available: string[] };
}
