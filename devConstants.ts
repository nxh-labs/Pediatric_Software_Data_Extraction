import { resolve } from "path/posix";
import { cwd } from "process";

// Création du dossier pour stocker les données traitées
export const processedDataDir = resolve(cwd(), "processed_data");