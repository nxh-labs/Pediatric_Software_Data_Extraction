import fs from "fs";
import path from "path";
import { processedDataDir } from "../../devConstants";

import { anthropometricMeasures } from "./AnthropometricMeasure";

/**
 * Save anthropometric Measure to JSON files
 */
export const saveAnthropometricMeasures = async () => {
  try {
  
    const anthroMeasureDir = path.join(processedDataDir, "anthroMeasures");
    if (!fs.existsSync(anthroMeasureDir)) {
      fs.mkdirSync(anthroMeasureDir, { recursive: true });
    }

    const anthroMeasurePath = path.join(
      anthroMeasureDir,
      "anthropometricMeasures.json"
    );
    fs.writeFileSync(
      anthroMeasurePath,
      JSON.stringify(anthropometricMeasures, null, 2)
    );

   // console.log("Anthropometric Measures saved successfully!");
    return true;
  } catch (error) {
    console.error("Error saving anthropometric measures:", error);
    return false;
  }
};
