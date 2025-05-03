import fs from "fs";
import path from "path";
import { processedDataDir } from "../../devConstants";
import { clinicalSignRefs } from "./clinicalRef";

/**
 * Save clinical references to JSON files
 */
export const saveClinicalRefs = async () => {
  try {
    // Create ClinicalRef directory if it doesn't exist
    const clinicalRefDir = path.join(processedDataDir, "clinicalRef");
    if (!fs.existsSync(clinicalRefDir)) {
      fs.mkdirSync(clinicalRefDir, { recursive: true });
    }

    const clinicalRefPath = path.join(clinicalRefDir, "clinicalRef.json");
    fs.writeFileSync(
      clinicalRefPath,
      JSON.stringify(clinicalSignRefs, null, 2)
    );

    console.log("Clinical references saved successfully!");
    return true;
  } catch (error) {
    console.error("Error saving clinical references:", error);
    return false;
  }
};
