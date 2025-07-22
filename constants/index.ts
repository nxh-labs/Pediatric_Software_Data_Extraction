export enum ZScoreComputingStrategyType {
  AGEBASED = "age_based",
  LENHEIBASED = "lenhei_based",
  TABLEBASED = "table_based",
}
/**
 * @enum GrowthStandard
 * Définit les standards de référence pour la croissance des enfants.
 * @property OMS - Organisation Mondiale de la Santé (WHO)
 * @property NCHS - National Center for Health Statistics
 * @property CDC - Centers for Disease Control and Prevention
 */
export enum GrowthStandard {
  OMS = "oms",
  NCHS = "nchs",
  CDC = "cdc",
}

export enum StandardShape {
  TABLE = "growth_table",
  CURVE = "growth_curve",
}

export enum AnthroSystemCodes {
  HEIGHT = "height",
  LENGTH = "length",
  LENHEI = "lenhei",
  WEIGHT = "weight",
  BMI = "bmi",
  HEAD_CIRCUMFERENCE = "head_circumference",
  MUAC = "muac",
  TSF = "tsf",
  SSF = "ssf",
  WFLH = "wflh",
  WFLH_UNISEX = "wflh_unisex",
  WFH_UNISEX_NCHS = "wfh_unisex_nchs",
  WFA = "wfa",
  HFA = "hfa",
  BMI_FOR_AGE = "bmi_for_age",
  MUAC_FOR_AGE = "muac_for_age",
  TSF_FOR_AGE = "tsf_for_age",
  SSF_FOR_AGE = "ssf_for_age",
  HC_FOR_AGE = "hc_for_age",
  AGE_IN_DAY = "age_in_day",
  AGE_IN_MONTH = "age_in_month",
  SEX = "sex",
}
export const ZScoreVarName = "zscore";

/**
 * Nombre moyen de jours dans un mois (approximé à 30.4375 jours).
 * @constant
 */
export const DAY_IN_MONTHS = 30.4375;

/**
 * Nombre moyen de jours dans une année (incluant les années bissextiles).
 * @constant
 */
export const DAY_IN_YEARS = 365.25;

/**
 * Nombre de mois dans une année.
 * @constant
 */
export const MONTH_IN_YEARS = 12;

export const MAX_WEIGHT = 58.0;
export const MIN_WEIGHT = 0.9;
export const MIN_LENHEI = 38.0;
export const MAX_LENHEI = 150.0;

export const MAX_AGE_TO_USE_AGE_IN_DAY = DAY_IN_YEARS * 5;

export const DAY_IN_TWO_YEARS = Math.round(DAY_IN_YEARS * 2);

/**
 * Âge maximal en pédiatrie (19 ans).
 * @constant
 */
export const MAX_AGE_IN_PEDIATRIC = 19;
export const MAX_AGE_IN_MONTH_IN_PEDIATRIC = 228;
export const MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY = 1856;
export const MAX_AGE_MONTH_TO_USE_AGE_IN_DAY =
  MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY / DAY_IN_MONTHS;
export const MIN_AGE_IN_DAY_TO_USE_MUCA_TSF_SSF = 91;
export const MAX_AGE_IN_MONTH_TO_USE_WEIGHT_FOR_AGE_INDICATOR = 120;

export enum GrowthRefChartAndTableCodes {
  // Weight for Length/Height
  WFL_BOYS_45_110_CHART = "growth_ref_chart_wfl_boys_45_110",
  WFL_GIRLS_45_110_CHART = "growth_ref_chart_wfl_girls_45_110",
  WFH_BOYS_65_120_CHART = "growth_ref_chart_wfh_boys_65_120",
  WFH_GIRLS_65_120_CHART = "growth_ref_chart_wfh_girls_65_120",

  // BMI for Age
  BMIAGE_BOYS_0_5_CHART = "growth_ref_chart_bfa_boys_0_5",
  BMIAGE_GIRLS_0_5_CHART = "growth_ref_chart_bfa_girls_0_5",
  BMIAGE_BOYS_5_19_CHART = "growth_ref_chart_bfa_boys_5_19",
  BMIAGE_GIRLS_5_19_CHART = "growth_ref_chart_bfa_girls_5_19",

  // Weight for Age
  WFA_BOYS_0_5_CHART = "growth_ref_chart_wfa_boys_0_5",
  WFA_GIRLS_0_5_CHART = "growth_ref_chart_wfa_girls_0_5",
  WFA_BOYS_5_10_CHART = "growth_ref_chart_wfa_boys_5_10",
  WFA_GIRLS_5_10_CHART = "growth_ref_chart_wfa_girls_5_10",

  // Length/Height for Age
  HFA_BOYS_0_5_CHART = "growth_ref_chart_lhfa_boys_0_5",
  HFA_GIRLS_0_5_CHART = "growth_ref_chart_lhfa_girls_0_5",
  HFA_BOYS_5_19_CHART = "growth_ref_chart_hfa_boys_5_19",
  HFA_GIRLS_5_19_CHART = "growth_ref_chart_hfa_girls_5_19",

  // Head Circumference for Age

  HCFA_BOYS_0_5_CHART = "growth_ref_chart_hcfa_boys_0_5",
  HCFA_GIRLS_0_5_CHART = "growth_ref_chart_hcfa_girls_0_5",

  // MUAC for Age
  MUAC_BOYS_3M_5Y_CHART = "growth_ref_chart_acfa_boys_3m_5",
  MUAC_GIRLS_3M_5Y_CHART = "growth_ref_chart_acfa_girls_3m_5",

  // Triceps Skinfold for Age
  TSF_BOYS_3M_5Y_CHART = "growth_ref_chart_tsfa_boys_3m_5",
  TSF_GIRLS_3M_5Y_CHART = "growth_ref_chart_tsfa_girls_3m_5",

  // Subscapular Skinfold for Age
  SSF_BOYS_3M_5Y_CHART = "growth_ref_chart_ssfa_boys_3m_5",
  SSF_GIRLS_3M_5Y_CHART = "growth_ref_chart_ssfa_girls_3m_5",

  // Tables
  WFLH_UNISEX_OMS_TABLE = "weight_for_length_who_2006_unisex",
  WFH_UNISEX_NCHS_TABLE = "weight_for_height_nchs_unisex",
}

export enum GrowthIndicatorRange {
  ABOVE_4 = "above +4",
  ABOVE_3 = "above +3",
  ABOVE_2 = "above +2",
  ABOVE_1 = "above +1",
  MEDIAN = "0",
  BELOW_M1 = "below -1",
  BELOW_M2 = "below -2",
  BELOW_M3 = "below -3",
  BELOW_M4 = "below -4",
}
/**
 * @note This is sex enum for data treatment not for the domain
 */
export enum Sex {
  MALE = "'M'",
  FEMALE = "'F'",
  OTHER = "'O'",
}

export enum ZScorePossibleValueLimit {
  pos4 = "4",
  pos3 = "3",
  pos2 = "2",
  pos1 = "1",
  median = "0",
  neg1 = "(-1)",
  neg2 = "(-2)",
  neg3 = "(-3)",
  neg4 = "(-4)",
}

export const ALWAYS_TRUE_CONDITION = "0==0";
export const HOURS_IN_DAY = 24;
export const APPETITE_TEST_CODES = {
  CODE: "appetite_test_result",
  POSITIVE: "Positive",
  NEGATIVE: "Negative",
};
export enum APPETITE_TEST_PRODUCT_TYPE {
  IN_SACHET = "in_sachet",
  IN_POT = "in_pot",
}
export enum APPETITE_TEST_SACHET_FRACTION_PARTITION {
  ONE_EIGHTH = "1/8",
  ONE_FOURTH = "1/4",
  ONE_THIRD = "1/3",
  ONE_HALF = "1/2",
  THREE_FOURTH = "3/4",
  ONE = "1",
  INFINITY = "infinity",
}
export const CLINICAL_SIGNS = {
  HYPERTHERMIA: "clinical_hyperthermia",
  HYPOTHERMIA: "clinical_hypothermia",
  HYPOGLYCEMIA: "clinical_hypoglycemia",
  DIARRHEA: "clinical_diarrhea",
  VOMITING: "clinical_vomiting",
  SEVERE_SICKNESS: "clinical_severe_sickness",
  RESPIRATORY_DISTRESS: "clinical_respiratory_distress",
  EDEMA: "clinical_edema",
  SKIN: "clinical_skin_sign",
  HAIR: "clinical_hair_sign",
  NAILS: "clinical_nails_sign",
  CORNEA: "clinical_cornea_sign",
  MOUTH: "clinical_mouth_sign",
  HEMORRHAGE: "clinical_hemorrhage",
  MUSCLE: "clinical_muscle_sign",
  NEURO: "clinical_neuro_signs",
  LIVER: "clinical_liver_signs",
  JOINT: "clinical_joiint_signs", // Pour l'élargissement des articulations
  CARDIAC: "clinical_cardiac_signs", // Pour la tachycardie
} as const;

export const VITAL_SIGNS = {
  TEMPERATURE: "vital_sign_temperature",
  RESPIRATORY_RATE: "vital_sign_respiratory_rate",
} as const;

export const OBSERVATIONS = {
  SUBCOSTAL_RETRACTION: "observation_subcostal_retraction",
  EDEMA_PRESENCE: "observation_edema_presence",
  EDEMA_GODET_COUNT: "observation_edema_godet_count",

  // Signes cutanés
  SKIN_CHANGES: "observation_skin_changes",

  // Signes capillaires
  HAIR_CHANGES: "observation_hair_changes",

  // Signes des ongles
  NAIL_CHANGES: "observation_nail_changes",

  // Signes de la cornée
  CORNEA_CHANGES: "observation_cornea_changes",

  // Signes buccaux
  MOUTH_CHANGES: "observation_mouth_changes",

  // Signes hémorragiques
  HEMORRHAGE_SIGNS: "observation_hemorrhage_signs",

  // État musculaire
  MUSCLE_LOSS: "observation_muscle_loss",

  // Signes neurologiques
  NEURO_SIGNS: "observation_neuro_signs",

  // État du foie
  HEPATOMEGALY: "observation_hepatomegaly",

  // Articulations
  JOINT_ENLARGEMENT: "observation_joint_enlargement",

  // Signes cardiaques
  TACHYCARDIA: "observation_tachycardia",
} as const;

export const QUESTIONS = {
  EYELIDS_DURING_SLEEP: "question_eyelids_during_sleep",
  CONSCIOUSNESS_LEVEL: "question_consciousness_level",
} as const;

export const DATA_POINTS = {
  LIQUID_STOOL_COUNT: "data_liquid_stool_count_per_day",
  VOMITING_COUNT: "data_vomiting_count",
  GENERAL_CONDITION: "data_general_condition",
} as const;

export enum GENERAL_CONDITION_VALUES {
  ALTERED = "altered",
  NORMAL = "normal",
}
export enum ClinicalDataType {
  INT = "number",
  BOOL = "boolean",
  STR = "string",
  RANGE = "range",
  ENUM = "enum",
  QUANTITY = "quantity",
}
export const COMPLICATION_CODES = {
  COMPLICATIONS_NUMBER: "complications_number",
  DEHYDRATION: "DEHYD",
  DIARRHEA: "DIARR",
  VOMITING: "VOMIT",
  PNEUMONIA: "PNEUM",
  SKIN_LESIONS: "SKIN",
  HYPOTHERMIA: "HYPOTH",
  FEVER: "FEVER",
  ANEMIA: "ANEM",
  LETHARGY: "LETH",
  CONVULSION: "CONV",
  VITA_DEFICIENCY: "VITA",
  SNG_REQUIRED: "SNG",
  CANDIDOSIS: "CAND",
  HIV_TB: "HIVTB",
};
export const ORIENTATION_REF_CODES = {
  ORIENTED_TO_HOME: "ORIENTATION_HOME",
  ORIENTED_TO_CRENAM: "ORIENTATION_CRENAM",
  ORIENTED_TO_CNT: "ORIENTATION_CNT",
  ORIENTED_TO_CNA: "ORIENTATION_CNA",
  NEW_ADMISSION_CODE: "ADMISSION_TYPE_NEW",
  RELAPSE_ADMISSION_CODE: "ADMISSION_TYPE_RELAPSE",
  MAS_ALREADY_ADMISSION_CODE: "ADMISSION_TYPE_ALREADY_MAS",
  DIRECT_ADMISSION_CODE: "ADMISSION_TYPE_DIRECT",
  REFEREED_ADMISSION_CODE: "ADMISSION_TYPE_REF",
  INTERNAL_TRANSFER_ADMISSION_CODE: "ADMISSION_TYPE_INTERNAL_TRANSFER",
} as const;

export const TREATMENT_HISTORY_VARIABLES_CODES = {
  PREVIOUS_TREATMENT: "history_previous_treatment",
  CRENAM_ORIENTATION_NUMBER: "crenam_orientation_number",
  CNA_ORIENTATION_NUMBER: "cna_orientation_number",
  CNT_ORIENTATION_NUMBER: "cnt_orientation_number",
  PREVIOUS_CNA_TREATMENT_MONTH: "previous_cna_treatment_month",
  CURRENT_ORIENTATION: "history_current_orientation",
} as const;
export { ConditionResult } from "smartcal";
export enum DIAGNOSTIC_CODES {
  SEVERE_ACUTE_MALNUTRITION = "SEVERE_ACUTE_MALNUTRITION",
  MODERATE_ACUTE_MALNUTRITION = "MODERATE_ACUTE_MALNUTRITION",
  SEVERE_CHRONIC_MALNUTRITION = "SEVERE_CHRONIC_MALNUTRITION",
  MODERATE_CHRONIC_MALNUTRITION = "MODERATE_CHRONIC_MALNUTRITION",
  SEVERE_UNDERWEIGHT = "SEVERE_UNDERWEIGHT",
  MODERATE_UNDERWEIGHT = "MODERATE_UNDERWEIGHT",
  OBESITY = "OBESITY",
  OVERWEIGHT = "OVERWEIGHT",
}
export enum UnitType {
  LENGTH = "LENGTH",
  WEIGHT = "WEIGHT",
  CONCENTRATION = "CONCENTRATION",
  ENZYME = "ENZYME",
  TIME = "TIME",
  VOLUME = "VOLUME",
  TEMPERATURE = "TEMPERATURE",
  FREQUENCY = "FREQUENCY",
  PERCENTAGE = "PERCENTAGE",
  PRESSURE = "PRESSURE",
  SURFACE = "SURFACE",
  FLUID_RATE = "FLUID_RATE",
  FLOW_RATE = "FLOW_RATE",
  SCORE = "SCORE",
  PERCENTILE = "PERCENTILE",
}

export enum WeightRangeLimit {
  MIN = "min_weight",
  MAX = "max_weight",
}

export const BIOCHEMICAL_REF_CODES = {
  BIOCHEMICAL_IONO_NA: "biochemical_iono_na",
  BIOCHEMICAL_IONO_K: "biochemical_iono_k",
  BIOCHEMICAL_IONO_CL: "biochemical_iono_cl",
  BIOCHEMICAL_IONO_CA: "biochemical_iono_ca",
  BIOCHEMICAL_IONO_MG: "biochemical_iono_mg",
  BIOCHEMICAL_KIDNEY_UREA: "biochemical_kidney_urea",
  BIOCHEMICAL_KIDNEY_CREA: "bichemical_kidney_creatinine",
  BIOCHEMICAL_BLOOD_GLUCOSE: "biochemical_blood_glucose",
  BIOCHEMICAL_ENZY_ALT: "biochemical_enzy_alt",
  BIOCHEMICAL_ENZY_GGT: "biochemical_enzy_ggt",
  BIOCHEMICAL_ENZY_BILIRUBIN_TOTAL: "biochemical_enzy_bilirubin_total",
  BIOCHEMICAL_FAT_CHELESTEROL_TOTAL: "biochemical_fat_cholesterol_total",
  BIOCHEMICAL_FAT_HDL: "biochemical_fat_hdl",
  BIOCHEMICAL_FAT_TG: "bichemical_fat_triglycerides",
} as const;

export enum BiochemicalRangeStatus {
  UNDER = "under",
  NORMAL = "normal",
  OVER = "over",
}
