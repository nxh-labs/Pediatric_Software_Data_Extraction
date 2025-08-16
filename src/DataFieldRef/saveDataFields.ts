import fs from "fs";
import path from "path";
import { processedDataDir } from "../../devConstants";
import {dataFieldRefs} from "./dataFieldReferences"

export async function saveDataFields() {
  try {
    const dataFieldsDir = path.join(processedDataDir, "data_fields");
    if (!fs.existsSync(dataFieldsDir)) {
      fs.mkdirSync(dataFieldsDir, { recursive: true });
    }

    const dataFieldsPath = path.join(dataFieldsDir, "data_fields.json");
    fs.writeFileSync(dataFieldsPath, JSON.stringify(dataFieldRefs, null, 2));

   // console.log("Data fields references saved successfully!");
    return true;
  } catch (error) {
    console.error("Error saving DataFields references:", error);
    return false;
  }
}
