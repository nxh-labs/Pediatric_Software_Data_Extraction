import { IFormula } from "./Indicator";

export interface FormulaFieldReference {
    code: string;
    formula: {
        formula: IFormula;
        description: string;
        variablesExplanation: Record<string, string>;
    };
}
