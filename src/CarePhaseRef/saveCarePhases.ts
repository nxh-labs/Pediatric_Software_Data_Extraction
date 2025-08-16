import fs from "fs";
import path from "path";
import { processedDataDir } from "../../devConstants";
import { CARE_PHASES } from "./carePhases";

export async function saveCarePhases() {
  try {
    const carePhaseDir = path.join(processedDataDir, "carePhases");
    if (!fs.existsSync(carePhaseDir)) {
      fs.mkdirSync(carePhaseDir, { recursive: true });
    }

    const carePhasesPath = path.join(carePhaseDir, "carePhases.json");
    fs.writeFileSync(carePhasesPath, JSON.stringify(CARE_PHASES, null, 2));

   // console.log("CarePhases references saved successfully!");
    return true;
  } catch (error) {
    console.error("Error saving CarePhases references:", error);
    return false;
  }
}
