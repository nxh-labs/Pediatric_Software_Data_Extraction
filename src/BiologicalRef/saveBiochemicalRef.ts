import fs from "fs";
import path from "path";
import { biochemicalReferences } from "./BiochemicalRef";
import { notVerifiedBiochemicalRef } from "./NotVerifiedBiochemicalRef";
import { processedDataDir } from "../../devConstants";

/**
 * Save biochemical references to JSON files
 */
export const saveBiochemicalRef = async () => {
  try {
    // Create biochemicalRef directory if it doesn't exist
    const biochemicalRefDir = path.join(processedDataDir, "biochemicalRef");
    if (!fs.existsSync(biochemicalRefDir)) {
      fs.mkdirSync(biochemicalRefDir, { recursive: true });
    }

    // Save verified biochemical references
    const verifiedPath = path.join(biochemicalRefDir, "verified.json");
    fs.writeFileSync(
      verifiedPath,
      JSON.stringify(biochemicalReferences, null, 2)
    );

    // Save not verified biochemical references
    const notVerifiedPath = path.join(biochemicalRefDir, "notVerified.json");
    fs.writeFileSync(
      notVerifiedPath,
      JSON.stringify(notVerifiedBiochemicalRef, null, 2)
    );

   // console.log("Biochemical references saved successfully!");
    return true;
  } catch (error) {
    console.error("Error saving biochemical references:", error);
    return false;
  }
};
