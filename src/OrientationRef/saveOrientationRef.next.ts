import fs from "fs";
import path from "path";
import { processedDataDir } from "../../devConstants";
import {next_orientationRefs} from "./OrientationRef.next"

/**
 * Save orientation references to JSON files
 */
export const saveOrientationRefsNext = async () => {
  try {
    // Create orientation ref directory if it doesn't exist
    const orientationRefDir = path.join(processedDataDir, "orientationRef");
    if (!fs.existsSync(orientationRefDir)) {
      fs.mkdirSync(orientationRefDir, { recursive: true });
    }

    const orientationRefPath = path.join(
      orientationRefDir,
      "orientationRef.next.json"
    );
    fs.writeFileSync(
      orientationRefPath,
      JSON.stringify(next_orientationRefs, null, 2)
    );

    //console.log("Orientation references saved successfully!");
    return true;
  } catch (error) {
    console.error("Error saving orientation references:", error);
    return false;
  }
};
