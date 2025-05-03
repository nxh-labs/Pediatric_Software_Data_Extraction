import fs from "fs";
import path from "path";
import { processedDataDir } from "../../devConstants";
import { appetiteTestRef } from "./AppetiteTestRef";

/**
 * Save appetite test references to JSON files
 */
export const saveAppetiteTestRefs = async () => {
  try {
    // Create appetite test ref directory if it doesn't exist
    const appetiteTestRefDir = path.join(processedDataDir, "appetiteTestRef");
    if (!fs.existsSync(appetiteTestRefDir)) {
      fs.mkdirSync(appetiteTestRefDir, { recursive: true });
    }

    const appetiteTestRefPath = path.join(
      appetiteTestRefDir,
      "appetiteTestRef.json"
    );
    fs.writeFileSync(
      appetiteTestRefPath,
      JSON.stringify(appetiteTestRef, null, 2)
    );

    console.log("Appetite Test references saved successfully!");
    return true;
  } catch (error) {
    console.error("Error saving appetite Test ref references:", error);
    return false;
  }
};
