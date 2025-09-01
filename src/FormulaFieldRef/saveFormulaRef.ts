import fs from "fs";
import path from "path";
import { processedDataDir } from "../../devConstants";
import { formulaFields } from "./FormulaFieldReference";


export async function saveFormulaRefs() {
    try {
        const dataFieldsDir = path.join(processedDataDir, "formula");
        if (!fs.existsSync(dataFieldsDir)) {
            fs.mkdirSync(dataFieldsDir, { recursive: true });
        }

        const dataFieldsPath = path.join(dataFieldsDir, "formula.json");
        fs.writeFileSync(dataFieldsPath, JSON.stringify(formulaFields, null, 2));

        // console.log("Data fields references saved successfully!");
        return true;
    } catch (error) {
        console.error("Error saving Formula references:", error);
        return false;
    }
}
