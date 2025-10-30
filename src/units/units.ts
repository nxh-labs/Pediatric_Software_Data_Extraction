import { UnitProps } from "../../types";
import { UnitType, UnitCode } from "../../constants";

export const units: UnitProps[] = [
  // Unités de longueur/taille
  {
    name: "centimètre",
    code: UnitCode.CM,
    conversionFactor: 1,
    baseUnitCode: UnitCode.CM,
    type: UnitType.LENGTH,
  },
  {
    name: "mètre",
    code: UnitCode.M,
    conversionFactor: 100,
    baseUnitCode: UnitCode.CM,
    type: UnitType.LENGTH,
  },
  {
    name: "millimètre",
    code: UnitCode.MM,
    conversionFactor: 0.1,
    baseUnitCode: UnitCode.CM,
    type: UnitType.LENGTH,
  },

  // Unités de poids/masse
  {
    name: "gramme",
    code: UnitCode.G,
    conversionFactor: 0.001,
    baseUnitCode: UnitCode.KG,
    type: UnitType.WEIGHT,
  },
  {
    name: "kilogramme",
    code: UnitCode.KG,
    conversionFactor: 1,
    baseUnitCode: UnitCode.KG,
    type: UnitType.WEIGHT,
  },
  {
    name: "milligramme",
    code: UnitCode.MG,
    conversionFactor: 0.001,
    baseUnitCode: UnitCode.G,
    type: UnitType.WEIGHT,
  },
  {
    name: "microgramme",
    code: UnitCode.UG,
    conversionFactor: 0.000001,
    baseUnitCode: UnitCode.G,
    type: UnitType.WEIGHT,
  },

  // Unités biochimiques
  {
    name: "millimole par litre",
    code: UnitCode.MMOL_PER_L,
    conversionFactor: 1,
    baseUnitCode: UnitCode.MMOL_PER_L,
    type: UnitType.CONCENTRATION,
  },
  {
    name: "micromole par litre",
    code: UnitCode.UMOL_PER_L,
    conversionFactor: 0.001,
    baseUnitCode: UnitCode.MMOL_PER_L,
    type: UnitType.CONCENTRATION,
  },
  {
    name: "gramme par litre",
    code: UnitCode.G_PER_L,
    conversionFactor: 1000,
    baseUnitCode: UnitCode.MMOL_PER_L,
    type: UnitType.CONCENTRATION,
  },
  {
    name: "unité internationale par litre",
    code: UnitCode.U_PER_L,
    conversionFactor: 1,
    baseUnitCode: UnitCode.U_PER_L,
    type: UnitType.ENZYME,
  },

  // Unités de volume
  {
    name: "millilitre",
    code: UnitCode.ML,
    conversionFactor: 0.001,
    baseUnitCode: UnitCode.L,
    type: UnitType.VOLUME,
  },
  {
    name: "litre",
    code: UnitCode.L,
    conversionFactor: 1,
    baseUnitCode: UnitCode.L,
    type: UnitType.VOLUME,
  },

  // Unités de température
  {
    name: "degré Celsius",
    code: UnitCode.DEGREES_CELSIUS,
    conversionFactor: 1,
    baseUnitCode: UnitCode.DEGREES_CELSIUS,
    type: UnitType.TEMPERATURE,
  },

  // Unités de fréquence (respiratoire, cardiaque)
  {
    name: "par minute",
    code: UnitCode.BPM,
    conversionFactor: 1,
    baseUnitCode: UnitCode.BPM,
    type: UnitType.FREQUENCY,
  },

  // Unités de pourcentage
  {
    name: "pourcentage",
    code: UnitCode.PERCENT,
    conversionFactor: 1,
    baseUnitCode: UnitCode.PERCENT,
    type: UnitType.PERCENTAGE,
  },

  // Unités de pression
  {
    name: "millimètre de mercure",
    code: UnitCode.MMHG,
    conversionFactor: 1,
    baseUnitCode: UnitCode.MMHG,
    type: UnitType.PRESSURE,
  },

  // Unités pour fluides corporels
  {
    name: "millilitre par kilogramme",
    code: UnitCode.ML_PER_KG,
    conversionFactor: 1,
    baseUnitCode: UnitCode.ML_PER_KG,
    type: UnitType.FLUID_RATE,
  },
  {
    name: "millilitre par heure",
    code: UnitCode.ML_PER_H,
    conversionFactor: 1,
    baseUnitCode: UnitCode.ML_PER_H,
    type: UnitType.FLOW_RATE,
  },

  // Unités pour scores
  {
    name: "score z",
    code: UnitCode.Z_SCORE,
    conversionFactor: 1,
    baseUnitCode: UnitCode.Z_SCORE,
    type: UnitType.SCORE,
  },
  {
    name: "percentile",
    code: UnitCode.P,
    conversionFactor: 1,
    baseUnitCode: UnitCode.P,
    type: UnitType.PERCENTILE,
  },
];
