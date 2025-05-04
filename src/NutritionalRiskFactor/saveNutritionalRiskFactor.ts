import fs from "fs";
import path from "path";
import { processedDataDir } from "../../devConstants";
import { nutritionalRiskFactors } from "./NutritionalRiskFactor";

/**
 * Save nutritional risk factors to JSON files
 */
export const saveNutritionalRiskFactors = async () => {
  try {
    const nutritionalRiskFactorDir = path.join(
      processedDataDir,
      "nutritionalRiskFactor"
    );
    if (!fs.existsSync(nutritionalRiskFactorDir)) {
      fs.mkdirSync(nutritionalRiskFactorDir, { recursive: true });
    }

    const nutritionalRiskFactorPath = path.join(
      nutritionalRiskFactorDir,
      "nutritionalRiskFactor.json"
    );
    fs.writeFileSync(
      nutritionalRiskFactorPath,
      JSON.stringify(nutritionalRiskFactors, null, 2)
    );

    console.log("Nutritional Risk Factors saved successfully!");
    return true;
  } catch (error) {
    console.error("Error saving Nutritional Risk Factors:", error);
    return false;
  }
};
