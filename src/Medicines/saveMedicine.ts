import fs from "fs";
import path from "path";
import { processedDataDir } from "../../devConstants";
import { medicines } from "./Medicines";

/**
 * Save medicine to JSON files
 */
export const saveMedicines = async () => {
  try {
    // Create medicines directory if it doesn't exist
    const medicineDir = path.join(processedDataDir, "medicine");
    if (!fs.existsSync(medicineDir)) {
      fs.mkdirSync(medicineDir, { recursive: true });
    }

    const medicinesPath = path.join(medicineDir, "medicines.json");
    fs.writeFileSync(medicinesPath, JSON.stringify(medicines, null, 2));

    console.log("Medicines saved successfully!");
    return true;
  } catch (error) {
    console.error("Error saving medicines:", error);
    return false;
  }
};
