import { ICondition } from "../src/IndicatorGeneration/types";

export interface BiochemicalRange {
   condition: ICondition;
   range: {
      min: [value: number, notStrict: boolean];
      max: [value: number, notStrict: boolean];
   };
   under: string[]; 
   over: string[]; 
}