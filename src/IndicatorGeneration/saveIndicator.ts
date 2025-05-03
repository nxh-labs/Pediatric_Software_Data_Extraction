import fs from "fs";
import path from "path";
import { CreateIndicatorProps } from "./types";
import {
  bmiIndicator,
  headCircumferenceForAgeIndicator,
  heightForAgeIndicator,
  muacForAgeIndicator,
  subscapularSkinfoldForAgeIndicator,
  tricepsSkinfoldForAgeIndicator,
  weightForAgeIndicator,
  weightForHeightUnisexIndicator,
  weightForHeightIndicator,
  weightForHeightUnisexNCHSIndicator,
} from "./Indicators";
import { processedDataDir } from "../../devConstants";

interface IndicatorMap {
  [key: string]: {
    indicator: CreateIndicatorProps;
    filename: string;
  };
}

const indicators: IndicatorMap = {
  bmi: {
    indicator: bmiIndicator,
    filename: "bmi_indicator.json",
  },
  headCircumference: {
    indicator: headCircumferenceForAgeIndicator,
    filename: "head_circumference_indicator.json",
  },
  heightForAge: {
    indicator: heightForAgeIndicator,
    filename: "height_for_age_indicator.json",
  },
  muacForAge: {
    indicator: muacForAgeIndicator,
    filename: "muac_for_age_indicator.json",
  },
  subscapularSkinfold: {
    indicator: subscapularSkinfoldForAgeIndicator,
    filename: "subscapular_skinfold_indicator.json",
  },
  tricepsSkinfold: {
    indicator: tricepsSkinfoldForAgeIndicator,
    filename: "triceps_skinfold_indicator.json",
  },
  weightForAge: {
    indicator: weightForAgeIndicator,
    filename: "weight_for_age_indicator.json",
  },
  weightForHeightNCHS: {
    indicator: weightForHeightUnisexNCHSIndicator,
    filename: "weight_for_height_nchs_indicator.json",
  },
  weightForHeight: {
    indicator: weightForHeightIndicator,
    filename: "weight_for_height_indicator.json",
  },
  weightForHeightUnisex: {
    indicator: weightForHeightUnisexIndicator,
    filename: "weight_for_height_unisex_indicator.json",
  },
};

const createDirectoryIfNotExists = (dirPath: string): void => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const saveIndicatorToFile = (data: any, filePath: string): void => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Saved to: ${filePath}`);
};

export const saveAllIndicators = (): void => {
  // Créer la structure des dossiers
 
  const indicatorsPath = path.join(processedDataDir, "indicators");
  const singleIndicatorsPath = path.join(indicatorsPath, "single");

  // Créer les dossiers s'ils n'existent pas
  createDirectoryIfNotExists(processedDataDir);
  createDirectoryIfNotExists(indicatorsPath);
  createDirectoryIfNotExists(singleIndicatorsPath);

  // Créer l'objet pour all_indicators.json
  const allIndicators = Object.entries(indicators).reduce(
    (acc, [key, value]) => {
      acc[key] = value.indicator;
      return acc;
    },
    {} as Record<string, CreateIndicatorProps>
  );

  // Sauvegarder all_indicators.json
  saveIndicatorToFile(
    allIndicators,
    path.join(indicatorsPath, "all_indicators.json")
  );

  // Sauvegarder les indicateurs individuels
  Object.entries(indicators).forEach(([_, value]) => {
    saveIndicatorToFile(
      value.indicator,
      path.join(singleIndicatorsPath, value.filename)
    );
  });
};

