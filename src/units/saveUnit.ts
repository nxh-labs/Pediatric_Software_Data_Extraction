import fs from "fs";
import path from "path";
import { processedDataDir } from "../../devConstants";
import { units } from "./units";

/**
 * Save Units to JSON files
 */
export const saveUnits = async () => {
  try {
    const unitsDir = path.join(processedDataDir, "units");
    if (!fs.existsSync(unitsDir)) {
      fs.mkdirSync(unitsDir, { recursive: true });
    }

    const unitsPath = path.join(unitsDir, "units.json");
    fs.writeFileSync(unitsPath, JSON.stringify(units, null, 2));

    //console.log("Units saved successfully!");
    return true;
  } catch (error) {
    console.error("Error saving units:", error);
    return false;
  }
};
