import AdmZip from "adm-zip";
import path from "path";
import fs from "fs";

export const createProcessedDataZip = async (): Promise<string> => {
  try {
    const zip = new AdmZip();

    // Chemin vers le dossier processed_data
    const processedDataPath = path.join(__dirname, "..", "processed_data");
    const outputFileName = "PediatricSoftWareData.zip";
    const outputPath = path.join(__dirname, "..", "dist", outputFileName);

    // Vérifier si le dossier processed_data existe
    if (!fs.existsSync(processedDataPath)) {
      throw new Error("Processed data directory not found");
    }

    // Créer le dossier dist s'il n'existe pas
    if (!fs.existsSync(path.join(__dirname, "..", "dist"))) {
      fs.mkdirSync(path.join(__dirname, "..", "dist"));
    }

    // Ajouter tout le contenu du dossier processed_data au zip
    zip.addLocalFolder(processedDataPath);

    // Créer le fichier zip
    zip.writeZip(outputPath);

    console.log(`Zip file created successfully at: ${outputPath}`);
    return outputPath;
  } catch (error) {
    console.error("Error creating zip file:", error);
    throw error;
  }
};
createProcessedDataZip()
  .then((outputPath) => {
    console.log(`Zip file created at: ${outputPath}`);
  })
  .catch((error) => {
    console.error("Error creating zip file:", error);
  });
