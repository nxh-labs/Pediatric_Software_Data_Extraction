import {
  extractAgeInDayBasedChartFromFile,
  extractAgeInMonthBasedChartFromFile,
  extractUnisexWeightForHeightNCHSTable,
  extractUnisexWeightForLenHeiTable,
  extractWeightForHeightChartFromFile,
  extractWeightForLengthChartFromFile,
} from "./src";
import { mkdir, writeFile } from "fs/promises";
import { join } from "path";

// Courbes de croissance 0-5 ans
const weightForAgeBoysChart = extractAgeInDayBasedChartFromFile(
  "./assets/oms/charts/wfa/boys/wfa-boys-zscore-expanded-tables.xlsx",
  "Courbe de référence poids pour l'âge (garçons 0-5 ans)",
  "growth_ref_chart_wfa_boys_0_5",
  "M"
);

const weightForAgeGirlsChart = extractAgeInDayBasedChartFromFile(
  "./assets/oms/charts/wfa/girls/wfa-girls-zscore-expanded-tables.xlsx",
  "Courbe de référence poids pour l'âge (filles 0-5 ans)",
  "growth_ref_chart_wfa_girls_0_5",
  "F"
);

// Courbes de croissance 5-10 ans
const weightForAgeBoysChartSup5 = extractAgeInMonthBasedChartFromFile(
  "./assets/oms/charts/wfa_5_10_years/boys/hfa-boys-z-who-2007-exp_0ff9c43c-8cc0-4c23-9fc6-81290675e08b.xlsx",
  "Courbe de référence poids pour l'âge (garçons 5-10 ans)",
  "growth_ref_chart_wfa_boys_5_10",
  "M"
);

const weightForAgeGirlsChartSup5 = extractAgeInMonthBasedChartFromFile(
  "./assets/oms/charts/wfa_5_10_years/girls/hfa-girls-z-who-2007-exp_7ea58763-36a2-436d-bef0-7fcfbadd2820.xlsx",
  "Courbe de référence poids pour l'âge (filles 5-10 ans)",
  "growth_ref_chart_wfa_girls_5_10",
  "F"
);

// Taille pour l'âge 5-19 ans
const heightForAgeBoysChartSup5 = extractAgeInMonthBasedChartFromFile(
  "./assets/oms/charts/hfa_5_19_years/boys/hfa-boys-z-who-2007-exp.xlsx",
  "Courbe de référence taille pour l'âge (garçons 5-19 ans)",
  "growth_ref_chart_hfa_boys_5_19",
  "M"
);

const heightForAgeGirlsChartSup5 = extractAgeInMonthBasedChartFromFile(
  "./assets/oms/charts/hfa_5_19_years/girls/hfa-girls-z-who-2007-exp.xlsx",
  "Courbe de référence taille pour l'âge (filles 5-19 ans)",
  "growth_ref_chart_hfa_girls_5_19",
  "F"
);

// IMC pour l'âge 5-19 ans
const bmiForAgeBoysChartSup5 = extractAgeInMonthBasedChartFromFile(
  "./assets/oms/charts/bfa_5_19_years/boys/bmi-boys-z-who-2007-exp.xlsx",
  "Courbe de référence IMC pour l'âge (garçons 5-19 ans)",
  "growth_ref_chart_bfa_boys_5_19",
  "M"
);

const bmiForAgeGirlsChartSup5 = extractAgeInMonthBasedChartFromFile(
  "./assets/oms/charts/bfa_5_19_years/girls/bmi-girls-z-who-2007-exp.xlsx",
  "Courbe de référence IMC pour l'âge (filles 5-19 ans)",
  "growth_ref_chart_bfa_girls_5_19",
  "F"
);

// Taille/Longueur pour l'âge 0-5 ans
const lengthForAgeBoysChart = extractAgeInDayBasedChartFromFile(
  "./assets/oms/charts/lhfa/boys/lhfa-boys-zscore-expanded-tables.xlsx",
  "Courbe de référence taille/longueur pour l'âge (garçons 0-5 ans)",
  "growth_ref_chart_lhfa_boys_0_5",
  "M"
);

const lengthForAgeGirlsChart = extractAgeInDayBasedChartFromFile(
  "./assets/oms/charts/lhfa/girls/lhfa-girls-zscore-expanded-tables.xlsx",
  "Courbe de référence taille/longueur pour l'âge (filles 0-5 ans)",
  "growth_ref_chart_lhfa_girls_0_5",
  "F"
);

// IMC pour l'âge 0-5 ans
const bmiForAgeBoysChart = extractAgeInDayBasedChartFromFile(
  "./assets/oms/charts/bfa/boys/bfa-boys-zscore-expanded-tables.xlsx",
  "Courbe de référence IMC pour l'âge (garçons 0-5 ans)",
  "growth_ref_chart_bfa_boys_0_5",
  "M"
);

const bmiForAgeGirlsChart = extractAgeInDayBasedChartFromFile(
  "./assets/oms/charts/bfa/girls/bfa-girls-zscore-expanded-tables.xlsx",
  "Courbe de référence IMC pour l'âge (filles 0-5 ans)",
  "growth_ref_chart_bfa_girls_0_5",
  "F"
);

// Périmètre crânien pour l'âge 0-5 ans
const headCircumferenceBoysChart = extractAgeInDayBasedChartFromFile(
  "./assets/oms/charts/hcfa/boys/hcfa-boys-zscore-expanded-tables.xlsx",
  "Courbe de référence périmètre crânien pour l'âge (garçons 0-5 ans)",
  "growth_ref_chart_hcfa_boys_0_5",
  "M"
);

const headCircumferenceGirlsChart = extractAgeInDayBasedChartFromFile(
  "./assets/oms/charts/hcfa/girls/hcfa-girls-zscore-expanded-tables.xlsx",
  "Courbe de référence périmètre crânien pour l'âge (filles 0-5 ans)",
  "growth_ref_chart_hcfa_girls_0_5",
  "F"
);

// Périmètre brachial pour l'âge 0-5 ans
const armCircumferenceBoysChart = extractAgeInDayBasedChartFromFile(
  "./assets/oms/charts/acfa/boys/acfa-boys-zscore-expanded-tables.xlsx",
  "Courbe de référence périmètre brachial pour l'âge (garçons 0-5 ans)",
  "growth_ref_chart_acfa_boys_0_5",
  "M"
);

const armCircumferenceGirlsChart = extractAgeInDayBasedChartFromFile(
  "./assets/oms/charts/acfa/girls/acfa-girls-zscore-expanded-tables.xlsx",
  "Courbe de référence périmètre brachial pour l'âge (filles 0-5 ans)",
  "growth_ref_chart_acfa_girls_0_5",
  "F"
);

// Pli cutané subscapulaire pour l'âge 0-5 ans
const subscapularSkinfoldBoysChart = extractAgeInDayBasedChartFromFile(
  "./assets/oms/charts/ssfa/boys/ssfa-boys-zscore-expanded-table.xlsx",
  "Courbe de référence pli cutané subscapulaire pour l'âge (garçons 0-5 ans)",
  "growth_ref_chart_ssfa_boys_0_5",
  "M"
);

const subscapularSkinfoldGirlsChart = extractAgeInDayBasedChartFromFile(
  "./assets/oms/charts/ssfa/girls/ssfa-girls-zscore-expanded-table.xlsx",
  "Courbe de référence pli cutané subscapulaire pour l'âge (filles 0-5 ans)",
  "growth_ref_chart_ssfa_girls_0_5",
  "F"
);

// Pli cutané tricipital pour l'âge 0-5 ans
const tricepsSkinfoldBoysChart = extractAgeInDayBasedChartFromFile(
  "./assets/oms/charts/tsfa/boys/tsfa-boys-zscore-expanded-tables.xlsx",
  "Courbe de référence pli cutané tricipital pour l'âge (garçons 0-5 ans)",
  "growth_ref_chart_tsfa_boys_0_5",
  "M"
);

const tricepsSkinfoldGirlsChart = extractAgeInDayBasedChartFromFile(
  "./assets/oms/charts/tsfa/girls/tsfa-girls-zscore-expanded-tables.xlsx",
  "Courbe de référence pli cutané tricipital pour l'âge (filles 0-5 ans)",
  "growth_ref_chart_tsfa_girls_0_5",
  "F"
);

// Poids pour la taille 45-110 cm
const weightForLengthBoysChart = extractWeightForLengthChartFromFile(
  "./assets/oms/charts/wflh/boys/wfl-boys-zscore-expanded-table.xlsx",
  "Courbe de référence poids pour la taille (garçons 45-110 cm)",
  "growth_ref_chart_wfl_boys_45_110",
  "M"
);

const weightForLengthGirlsChart = extractWeightForLengthChartFromFile(
  "./assets/oms/charts/wflh/girls/wfl-girls-zscore-expanded-table.xlsx",
  "Courbe de référence poids pour la taille (filles 45-110 cm)",
  "growth_ref_chart_wfl_girls_45_110",
  "F"
);

// Poids pour la stature 65-120 cm
const weightForHeightBoysChart = extractWeightForHeightChartFromFile(
  "./assets/oms/charts/wflh/boys/wfh-boys-zscore-expanded-tables.xlsx",
  "Courbe de référence poids pour la stature (garçons 65-120 cm)",
  "growth_ref_chart_wfh_boys_65_120",
  "M"
);

const weightForHeightGirlsChart = extractWeightForHeightChartFromFile(
  "./assets/oms/charts/wflh/girls/wfh-girls-zscore-expanded-tables.xlsx",
  "Courbe de référence poids pour la stature (filles 65-120 cm)",
  "growth_ref_chart_wfh_girls_65_120",
  "F"
);

// Tables de référence unisexes
const unisexWeightForLengthOMSTable = extractUnisexWeightForLenHeiTable(
  "./assets/oms/tables/table_weight_for_lenhei_who_2006_unisexe.xlsx",
  "Table de référence poids pour taille/longueur unisexe OMS 2006",
  "weight_for_length_who_2006_unisex"
);

const unisexWeightForHeightNCHSTable = extractUnisexWeightForHeightNCHSTable(
  "./assets/oms/tables/table_weight_for_height_who_unisexe.xlsx",
  "Table de référence poids pour taille unisexe NCHS",
  "weight_for_height_nchs_unisex"
);

// Création du dossier pour stocker les données traitées
const processedDataDir = join(__dirname, "processed_data");

// Modifier la fonction saveChartToJson pour utiliser le sous-dossier charts
async function saveChartToJson(chart: any, filename: string) {
  try {
    const chartsDir = join(processedDataDir, "charts");
    await mkdir(chartsDir, { recursive: true });
    
    const filePath = join(chartsDir, `${filename}.json`);
    await writeFile(filePath, JSON.stringify(chart, null, 2));
    console.log(`Courbe sauvegardée dans ${filePath}`);
  } catch (error) {
    console.error(`Erreur lors de la sauvegarde de la courbe ${filename}:`, error);
  }
}

// Fonction pour sauvegarder les tables
async function saveTableToJson(table: any, filename: string) {
  try {
    const tablesDir = join(processedDataDir, "tables");
    await mkdir(tablesDir, { recursive: true });

    const filePath = join(tablesDir, `${filename}.json`);
    await writeFile(filePath, JSON.stringify(table, null, 2));
    console.log(`Table sauvegardée dans ${filePath}`);
  } catch (error) {
    console.error(`Erreur lors de la sauvegarde de la table ${filename}:`, error);
  }
}

// Fonction principale pour sauvegarder toutes les courbes
async function saveAllCharts() {
  const chartsToSave = [
    { data: weightForAgeBoysChart, filename: "weight_for_age_boys_0_5" },
    { data: weightForAgeGirlsChart, filename: "weight_for_age_girls_0_5" },
    { data: weightForAgeBoysChartSup5, filename: "weight_for_age_boys_5_10" },
    { data: weightForAgeGirlsChartSup5, filename: "weight_for_age_girls_5_10" },
    { data: heightForAgeBoysChartSup5, filename: "height_for_age_boys_5_19" },
    { data: heightForAgeGirlsChartSup5, filename: "height_for_age_girls_5_19" },
    { data: bmiForAgeBoysChartSup5, filename: "bmi_for_age_boys_5_19" },
    { data: bmiForAgeGirlsChartSup5, filename: "bmi_for_age_girls_5_19" },
    { data: lengthForAgeBoysChart, filename: "length_for_age_boys_0_5" },
    { data: lengthForAgeGirlsChart, filename: "length_for_age_girls_0_5" },
    { data: bmiForAgeBoysChart, filename: "bmi_for_age_boys_0_5" },
    { data: bmiForAgeGirlsChart, filename: "bmi_for_age_girls_0_5" },
    {
      data: headCircumferenceBoysChart,
      filename: "head_circumference_boys_0_5",
    },
    {
      data: headCircumferenceGirlsChart,
      filename: "head_circumference_girls_0_5",
    },
    { data: armCircumferenceBoysChart, filename: "arm_circumference_boys_0_5" },
    {
      data: armCircumferenceGirlsChart,
      filename: "arm_circumference_girls_0_5",
    },
    {
      data: subscapularSkinfoldBoysChart,
      filename: "subscapular_skinfold_boys_0_5",
    },
    {
      data: subscapularSkinfoldGirlsChart,
      filename: "subscapular_skinfold_girls_0_5",
    },
    { data: tricepsSkinfoldBoysChart, filename: "triceps_skinfold_boys_0_5" },
    { data: tricepsSkinfoldGirlsChart, filename: "triceps_skinfold_girls_0_5" },
    {
      data: weightForLengthBoysChart,
      filename: "weight_for_length_boys_45_110",
    },
    {
      data: weightForLengthGirlsChart,
      filename: "weight_for_length_girls_45_110",
    },
    {
      data: weightForHeightBoysChart,
      filename: "weight_for_height_boys_65_120",
    },
    {
      data: weightForHeightGirlsChart,
      filename: "weight_for_height_girls_65_120",
    },
  ];

  for (const chart of chartsToSave) {
    await saveChartToJson(chart.data, chart.filename);
  }
}

// Ajout de la sauvegarde des tables
async function saveAllTables() {
  const tablesToSave = [
    {
      data: unisexWeightForLengthOMSTable,
      filename: "weight_for_length_who_2006_unisex",
    },
    {
      data: unisexWeightForHeightNCHSTable,
      filename: "weight_for_height_nchs_unisex",
    },
  ];

  for (const table of tablesToSave) {
    await saveTableToJson(table.data, table.filename);
  }
}

// Modification de la fonction principale pour inclure la sauvegarde des tables
async function saveAllData() {
  try {
    await saveAllCharts();
    await saveAllTables();
    console.log("Toutes les données ont été sauvegardées avec succès");
  } catch (error) {
    console.error("Erreur lors de la sauvegarde des données:", error);
  }
}

// Exécuter la sauvegarde
saveAllData();

// Export de toutes les courbes
export const growthReferenceCharts = [
  weightForAgeBoysChart,
  weightForAgeGirlsChart,
  weightForAgeBoysChartSup5,
  weightForAgeGirlsChartSup5,
  heightForAgeBoysChartSup5,
  heightForAgeGirlsChartSup5,
  bmiForAgeBoysChartSup5,
  bmiForAgeGirlsChartSup5,
  lengthForAgeBoysChart,
  lengthForAgeGirlsChart,
  bmiForAgeBoysChart,
  bmiForAgeGirlsChart,
  headCircumferenceBoysChart,
  headCircumferenceGirlsChart,
  armCircumferenceBoysChart,
  armCircumferenceGirlsChart,
  subscapularSkinfoldBoysChart,
  subscapularSkinfoldGirlsChart,
  tricepsSkinfoldBoysChart,
  tricepsSkinfoldGirlsChart,
  weightForLengthBoysChart,
  weightForLengthGirlsChart,
  weightForHeightBoysChart,
  weightForHeightGirlsChart,
];
