import { UnitProps } from "../../types";
import { UnitType } from "../../constants";

export const units: UnitProps[] = [
  // Unités de longueur/taille
  {
    name: "centimètre",
    code: "cm",
    conversionFactor: 1,
    baseUnitCode: "cm",
    type: UnitType.LENGTH,
  },
  {
    name: "mètre",
    code: "m",
    conversionFactor: 100,
    baseUnitCode: "cm",
    type: UnitType.LENGTH,
  },

  // Unités de poids/masse
  {
    name: "gramme",
    code: "g",
    conversionFactor: 0.001,
    baseUnitCode: "kg",
    type: UnitType.WEIGHT,
  },
  {
    name: "kilogramme",
    code: "kg",
    conversionFactor: 1,
    baseUnitCode: "kg",
    type: UnitType.WEIGHT,
  },
  {
    name: "milligramme",
    code: "mg",
    conversionFactor: 0.001,
    baseUnitCode: "g",
    type: UnitType.WEIGHT,
  },
  {
    name: "microgramme",
    code: "µg",
    conversionFactor: 0.000001,
    baseUnitCode: "g",
    type: UnitType.WEIGHT,
  },

  // Unités biochimiques
  {
    name: "millimole par litre",
    code: "mmol/l",
    conversionFactor: 1,
    baseUnitCode: "mmol/l",
    type: UnitType.CONCENTRATION,
  },
  {
    name: "micromole par litre",
    code: "µmol/l",
    conversionFactor: 0.001,
    baseUnitCode: "mmol/l",
    type: UnitType.CONCENTRATION,
  },
  {
    name: "gramme par litre",
    code: "g/l",
    conversionFactor: 1000,
    baseUnitCode: "mmol/l",
    type: UnitType.CONCENTRATION,
  },
  {
    name: "unité internationale par litre",
    code: "U/l",
    conversionFactor: 1,
    baseUnitCode: "U/l",
    type: UnitType.ENZYME,
  },

  // Unités de volume
  {
    name: "millilitre",
    code: "ml",
    conversionFactor: 0.001,
    baseUnitCode: "l",
    type: UnitType.VOLUME,
  },
  {
    name: "litre",
    code: "l",
    conversionFactor: 1,
    baseUnitCode: "l",
    type: UnitType.VOLUME,
  },

  // Unités de température
  {
    name: "degré Celsius",
    code: "°C",
    conversionFactor: 1,
    baseUnitCode: "°C",
    type: UnitType.TEMPERATURE,
  },

  // Unités de fréquence (respiratoire, cardiaque)
  {
    name: "par minute",
    code: "bpm",
    conversionFactor: 1,
    baseUnitCode: "bpm",
    type: UnitType.FREQUENCY,
  },

  // Unités de pourcentage
  {
    name: "pourcentage",
    code: "%",
    conversionFactor: 1,
    baseUnitCode: "%",
    type: UnitType.PERCENTAGE,
  },

  // Unités de pression
  {
    name: "millimètre de mercure",
    code: "mmHg",
    conversionFactor: 1,
    baseUnitCode: "mmHg",
    type: UnitType.PRESSURE,
  },

  // Unités de surface corporelle
  {
    name: "mètre carré",
    code: "m²",
    conversionFactor: 1,
    baseUnitCode: "m²",
    type: UnitType.SURFACE,
  },

  // Unités pour médicaments/dosage
  {
    name: "milligramme",
    code: "mg",
    conversionFactor: 0.001,
    baseUnitCode: "g",
    type: UnitType.WEIGHT,
  },
  {
    name: "microgramme",
    code: "µg",
    conversionFactor: 0.000001,
    baseUnitCode: "g",
    type: UnitType.WEIGHT,
  },

  // Unités pour fluides corporels
  {
    name: "millilitre par kilogramme",
    code: "ml/kg",
    conversionFactor: 1,
    baseUnitCode: "ml/kg",
    type: UnitType.FLUID_RATE,
  },
  {
    name: "millilitre par heure",
    code: "ml/h",
    conversionFactor: 1,
    baseUnitCode: "ml/h",
    type: UnitType.FLOW_RATE,
  },

  // Unités pour scores
  {
    name: "score z",
    code: "z-score",
    conversionFactor: 1,
    baseUnitCode: "z-score",
    type: UnitType.SCORE,
  },
  {
    name: "percentile",
    code: "p",
    conversionFactor: 1,
    baseUnitCode: "p",
    type: UnitType.PERCENTILE,
  },
];