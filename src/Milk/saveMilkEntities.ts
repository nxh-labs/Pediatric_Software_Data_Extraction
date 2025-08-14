import fs from "fs";
import path from "path";
import { processedDataDir } from "../../devConstants";
import { milkEntities } from "./MilkEntities";
/**
 * Save Milk Entities to JSON files
 */
export const saveMilkEntities = async () => {
  try {
    const milkEntityDir = path.join(processedDataDir, "milks");
    if (!fs.existsSync(milkEntityDir)) {
      fs.mkdirSync(milkEntityDir, { recursive: true });
    }

    const milksPath = path.join(milkEntityDir, "milk_entities.json");
    fs.writeFileSync(milksPath, JSON.stringify(milkEntities, null, 2));

    console.log("Milk Entities saved successfully!");
    return true;
  } catch (error) {
    console.error("Error saving Milk Entities :", error);
    return false;
  }
};
