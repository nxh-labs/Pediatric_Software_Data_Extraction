import fs from "fs";
import path from "path";
import { processedDataDir } from "../../devConstants";
import { milkRefs } from "./Milks";

/**
 * Save Milks to JSON files
 */
export const saveMilks = async () => {
  try {
    const milksDir = path.join(processedDataDir, "milks");
    if (!fs.existsSync(milksDir)) {
      fs.mkdirSync(milksDir, { recursive: true });
    }

    const milksPath = path.join(milksDir, "milks.json");
    fs.writeFileSync(milksPath, JSON.stringify(milkRefs, null, 2));

    //console.log("Milks Refs saved successfully!");
    return true;
  } catch (error) {
    console.error("Error saving milks references:", error);
    return false;
  }
};
