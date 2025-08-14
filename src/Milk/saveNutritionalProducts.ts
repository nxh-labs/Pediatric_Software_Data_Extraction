import fs from "fs";
import path from "path";
import { processedDataDir } from "../../devConstants";
import { nutritionalProducts } from "./nutritionalProducts";
/**
 * Save NutritionalProduct to JSON files
 */
export const saveNutritionalProducts = async () => {
  try {
    const nutritionalProductsDir = path.join(processedDataDir, "milks");
    if (!fs.existsSync(nutritionalProductsDir)) {
      fs.mkdirSync(nutritionalProductsDir, { recursive: true });
    }

    const nutritionalProductPath = path.join(nutritionalProductsDir, "products.json");
    fs.writeFileSync(nutritionalProductPath, JSON.stringify(nutritionalProducts, null, 2));

    console.log("NutritionalProducts saved successfully!");
    return true;
  } catch (error) {
    console.error("Error saving NutritionalProducts :", error);
    return false;
  }
};
