/*
 Orchestrateur d'extraction – ne modifie pas les extracteurs existants.
 Place ce fichier à la racine du projet et exécute-le avec ts-node ou via votre pipeline.
*/

import {
  // Références et tables sauvegardées en JSON
  saveClinicalRefs,
  saveOrientationRefs,
  saveMedicines,
  saveDiagnosticRules,
  saveAppetiteTestRefs,
  saveAnthropometricMeasures,
  saveUnits,
  saveComplications,
  saveNutritionalRiskFactors,
  saveMilks,
  saveMilkEntities,
  saveNutritionalProducts,
  saveCarePhases,
  saveMedicinesNext,
  saveClinicalRefsNext,
  saveOrientationRefsNext,
  saveDataFields,


  // Indicateurs
  // Exporté par src/IndicatorGeneration
  // (via src/IndicatorGeneration/index.ts)
  // et ré-exporté par src/index.ts
} from "./src";

import { saveAllIndicators } from "./src/IndicatorGeneration";
import { generateAndSaveGrowthRef } from "./src/GrowthRef";
import { saveBiochemicalRef } from "./src/BiologicalRef";
import { saveFormulaRefs } from "./src/FormulaFieldRef";

async function runExtraction(): Promise<void> {
  const steps: Array<{ name: string; exec: () => Promise<any> | any }> = [
    { name: "Units", exec: () => saveUnits() },
    {
      name: "AnthropometricMeasures",
      exec: () => saveAnthropometricMeasures(),
    },
    { name: "ClinicalRefs", exec: () => saveClinicalRefs() },
    { name: "OrientationRefs", exec: () => saveOrientationRefs() },
    { name: "AppetiteTestRefs", exec: () => saveAppetiteTestRefs() },
    { name: "Complications", exec: () => saveComplications() },
    {
      name: "NutritionalRiskFactors",
      exec: () => saveNutritionalRiskFactors(),
    },
    { name: "Medicines", exec: () => saveMedicines() },
    { name: "DiagnosticRules", exec: () => saveDiagnosticRules() },
    {
      name: "BiochemicalRef (verified & notVerified)",
      exec: () => saveBiochemicalRef(),
    },
    // Courbes et tables OMS/NCHS (xls/xlsx sous assets) => JSON dans processed_data/charts & processed_data/tables
    {
      name: "GrowthReferences (charts & tables)",
      exec: () => generateAndSaveGrowthRef(),
    },
    // Indicateurs (all_indicators + single/*)
    { name: "Indicators", exec: () => saveAllIndicators() },
    // Laits (NE PAS MODIFIER l'existant) – simple sauvegarde
    { name: "Milks", exec: () => saveMilks() },
    { name: "Milks Entities", exec: () => saveMilkEntities() },
    { name: "Nutritional Products", exec: () => saveNutritionalProducts() },
    { name: "Clinical Reference (Next)", exec: () => saveClinicalRefsNext() },
    { name: "Medicines (Next)", exec: () => saveMedicinesNext() },
    { name: "Orientation References (Next)", exec: () => saveOrientationRefsNext() },
    { name: "Cares Phases References", exec: () => saveCarePhases() },
    { name: "DataFields References", exec: () => saveDataFields() },
    { name: "Formula Fields References", exec: () => saveFormulaRefs() }
  ];

  let hasError = false;
  for (const step of steps) {
    try {
      const res = await step.exec();
      console.log(
        `✅ ${step.name}: OK`,
        res === false ? "(returned false)" : ""
      );
    } catch (e) {
      hasError = true;
      console.error(`❌ ${step.name}: FAILED`, e);
    }
  }

  if (hasError) {
    console.error("Extraction terminée avec erreurs. Voir les logs ci-dessus.");
    process.exitCode = 1;
  } else {
    console.log("Extraction terminée avec succès.");
  }
}

runExtraction().catch((e) => {
  console.error("Erreur inattendue lors de l'extraction:", e);
  process.exitCode = 1;
});
