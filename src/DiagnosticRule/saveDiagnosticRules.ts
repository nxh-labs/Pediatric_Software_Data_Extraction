import fs from "fs";
import path from "path";
import { processedDataDir } from "../../devConstants";
import { diagnosticRules } from "./DiagnosticRules";

/**
 * Save Diagnostic rules to JSON files
 */
export const saveDiagnosticRules = async () => {
  try {
    // Create diagnostic rules directory if it doesn't exist
    const diagnosticRuleDir = path.join(processedDataDir, "diagnosticRules");
    if (!fs.existsSync(diagnosticRuleDir)) {
      fs.mkdirSync(diagnosticRuleDir, { recursive: true });
    }

    const diagnosticRulePath = path.join(
      diagnosticRuleDir,
      "diagnosticRules.json"
    );
    fs.writeFileSync(
      diagnosticRulePath,
      JSON.stringify(diagnosticRules, null, 2)
    );

    console.log("Diagnostic Rules saved successfully!");
    return true;
  } catch (error) {
    console.error("Error saving diagnostic rules:", error);
    return false;
  }
};
