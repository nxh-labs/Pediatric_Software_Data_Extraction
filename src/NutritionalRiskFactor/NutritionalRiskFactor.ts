import { ALWAYS_TRUE_CONDITION, CLINICAL_SIGNS } from "../../constants";
import { NutritionalRiskFactor } from "../../types";

export const nutritionalRiskFactors: NutritionalRiskFactor[] = [
  {
    associatedNutrients: [{ effect: "deficiency", nutrient: "Protéine" }],
    clinicalSignCode: CLINICAL_SIGNS.EDEMA,
    modulatingCondition: {
      value: ALWAYS_TRUE_CONDITION,
      variables: [],
    },
    recommendedTests: [
      {
        testName: "Protidémie",
        reason: "Pour contrôler le taux sanguine de proteine",
      },
    ],
  },
  {
    associatedNutrients: [
      { effect: "deficiency", nutrient: "Vitamine A" },
      { effect: "deficiency", nutrient: "Zinc" },
      { effect: "deficiency", nutrient: "Acides gras essentiels" },
    ],
    clinicalSignCode: CLINICAL_SIGNS.SKIN,
    modulatingCondition: {
      value: ALWAYS_TRUE_CONDITION,
      variables: [],
    },
    recommendedTests: [
      {
        testName: "Rétinol sérique",
        reason: "Pour évaluer le statut en vitamine A",
      },
      {
        testName: "Zinc sérique",
        reason: "Pour évaluer le statut en zinc",
      },
    ],
  },
  {
    associatedNutrients: [
      { effect: "deficiency", nutrient: "Protéine" },
      { effect: "deficiency", nutrient: "Zinc" },
    ],
    clinicalSignCode: CLINICAL_SIGNS.HAIR,
    modulatingCondition: {
      value: ALWAYS_TRUE_CONDITION,
      variables: [],
    },
    recommendedTests: [
      {
        testName: "Protidémie",
        reason: "Pour évaluer le statut protéique",
      },
      {
        testName: "Zinc sérique",
        reason: "Pour évaluer le statut en zinc",
      },
    ],
  },
  {
    associatedNutrients: [
      { effect: "deficiency", nutrient: "Vitamine A" },
    ],
    clinicalSignCode: CLINICAL_SIGNS.CORNEA,
    modulatingCondition: {
      value: ALWAYS_TRUE_CONDITION,
      variables: [],
    },
    recommendedTests: [
      {
        testName: "Rétinol sérique",
        reason: "Pour évaluer le statut en vitamine A",
      },
    ],
  },
  {
    associatedNutrients: [
      { effect: "deficiency", nutrient: "Vitamine B12" },
      { effect: "deficiency", nutrient: "Folates" },
      { effect: "deficiency", nutrient: "Riboflavine" },
      { effect: "deficiency", nutrient: "Fer" },
      { effect: "deficiency", nutrient: "Niacine" },
    ],
    clinicalSignCode: CLINICAL_SIGNS.MOUTH,
    modulatingCondition: {
      value: ALWAYS_TRUE_CONDITION,
      variables: [],
    },
    recommendedTests: [
      {
        testName: "Vitamine B12 sérique",
        reason: "Pour évaluer le statut en vitamine B12",
      },
      {
        testName: "Folates sériques",
        reason: "Pour évaluer le statut en folates",
      },
      {
        testName: "Ferritine",
        reason: "Pour évaluer le statut en fer",
      },
    ],
  },
  {
    associatedNutrients: [
      { effect: "deficiency", nutrient: "Vitamine K" },
      { effect: "deficiency", nutrient: "Vitamine C" },
    ],
    clinicalSignCode: CLINICAL_SIGNS.HEMORRHAGE,
    modulatingCondition: {
      value: ALWAYS_TRUE_CONDITION,
      variables: [],
    },
    recommendedTests: [
      {
        testName: "Temps de prothrombine",
        reason: "Pour évaluer le statut en vitamine K",
      },
      {
        testName: "Vitamine C sérique",
        reason: "Pour évaluer le statut en vitamine C",
      },
    ],
  },
  {
    associatedNutrients: [
      { effect: "deficiency", nutrient: "Protéine" },
      { effect: "deficiency", nutrient: "Sélénium" },
    ],
    clinicalSignCode: CLINICAL_SIGNS.MUSCLE,
    modulatingCondition: {
      value: ALWAYS_TRUE_CONDITION,
      variables: [],
    },
    recommendedTests: [
      {
        testName: "Protidémie",
        reason: "Pour évaluer le statut protéique",
      },
      {
        testName: "Sélénium sérique",
        reason: "Pour évaluer le statut en sélénium",
      },
    ],
  },
  {
    associatedNutrients: [
      { effect: "deficiency", nutrient: "Thiamine" },
      { effect: "deficiency", nutrient: "Vitamine B12" },
    ],
    clinicalSignCode: CLINICAL_SIGNS.NEURO,
    modulatingCondition: {
      value: ALWAYS_TRUE_CONDITION,
      variables: [],
    },
    recommendedTests: [
      {
        testName: "Thiamine sérique",
        reason: "Pour évaluer le statut en thiamine",
      },
      {
        testName: "Vitamine B12 sérique",
        reason: "Pour évaluer le statut en vitamine B12",
      },
    ],
  },
  {
    associatedNutrients: [
      { effect: "deficiency", nutrient: "Protéine" },
    ],
    clinicalSignCode: CLINICAL_SIGNS.LIVER,
    modulatingCondition: {
      value: ALWAYS_TRUE_CONDITION,
      variables: [],
    },
    recommendedTests: [
      {
        testName: "Protidémie",
        reason: "Pour évaluer le statut protéique",
      },
      {
        testName: "Bilan hépatique",
        reason: "Pour évaluer la fonction hépatique",
      },
    ],
  },
];
