import fs from "fs";
import path from "path";
import { processedDataDir } from "../../devConstants";
import { nextDiagnosticRules } from "./DiagnosticRules.next";

/**
 * Save next diagnostic rules to JSON files
 */
export const saveNextDiagnosticRules = async () => {
  try {
    const diagnosticRulesDir = path.join(processedDataDir, "diagnosticRules");
    if (!fs.existsSync(diagnosticRulesDir)) {
      fs.mkdirSync(diagnosticRulesDir, { recursive: true });
    }

    const diagnosticRulesPath = path.join(diagnosticRulesDir, "diagnosticRules.next.json");
    fs.writeFileSync(
      diagnosticRulesPath,
      JSON.stringify(nextDiagnosticRules, null, 2)
    );

    return true;
  } catch (error) {
    console.error("Error saving next diagnostic rules:", error);
    return false;
  }
};
