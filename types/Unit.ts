import { UnitType } from "../constants";



export interface UnitProps {
  name: string;
  code: string;
  conversionFactor: number;
  baseUnitCode: string;
  type: UnitType;
}
