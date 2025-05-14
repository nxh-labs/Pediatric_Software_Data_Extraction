import fs from "fs";
import path from "path";
import { processedDataDir } from "../../devConstants";
import {complicationRefs } from "./complications"

/**
 * Save Complications to JSON files
 */
export const saveComplications= async () => {
  try {
    const complicationsDir = path.join(processedDataDir, "complications");
    if (!fs.existsSync(complicationsDir)) {
      fs.mkdirSync(complicationsDir, { recursive: true });
    }

    const complicationsPath = path.join(complicationsDir, "complications.json");
    fs.writeFileSync(complicationsPath, JSON.stringify(complicationRefs, null, 2));

    console.log("Complications saved successfully!");
    return true;
  } catch (error) {
    console.error("Error saving complications:", error);
    return false;
  }
};
