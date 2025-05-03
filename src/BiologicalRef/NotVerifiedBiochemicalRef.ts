import { AnthroSystemCodes, MAX_AGE_IN_MONTH_IN_PEDIATRIC, MONTH_IN_YEARS, Sex } from "../../constants";
import { BiochemicalReference } from "../../types/BiochemicalReference";

export const notVerifiedBiochemicalRef: BiochemicalReference[] = [
  {
    name: "Aspartate amino-transférase",
    code: "biochemical_ast",
    unit: "U/l",
    availableUnits: ["U/l"],
    ranges: [
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} < 1`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [13, true], max: [38, true] },
        under: ["AST basse"],
        over: ["AST élevée"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} >= 1 && ${AnthroSystemCodes.AGE_IN_MONTH} < 216`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [15, true], max: [45, true] },
        under: ["AST basse"],
        over: ["AST élevée"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} >= 216 && ${AnthroSystemCodes.SEX} === 'M'`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [10, true], max: [40, true] },
        under: ["AST basse"],
        over: ["AST élevée"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} >= 216 && ${AnthroSystemCodes.SEX} === 'F'`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [9, true], max: [32, true] },
        under: ["AST basse"],
        over: ["AST élevée"],
      },
    ],
    source: "Normes biologiques",
  },
  // Bilan Hémostase
  {
    name: "Taux de prothrombine",
    code: "biochemical_tp",
    unit: "%",
    availableUnits: ["%"],
    ranges: [
      {
        condition: {
          value: "true",
          variables: [],
        },
        range: { min: [70, true], max: [100, true] },
        under: ["TP bas"],
        over: ["TP élevé"],
      },
    ],
    source: "Normes biologiques",
  },
  {
    name: "Temps de céphaline activée",
    code: "biochemical_tca",
    unit: "sec",
    availableUnits: ["sec"],
    ranges: [
      {
        condition: {
          value: "true",
          variables: [],
        },
        range: { min: [30, true], max: [35, true] },
        under: ["TCA bas"],
        over: ["TCA élevé"],
      },
    ],
    source: "Normes biologiques",
  },

  // Bilan protéique
  {
    name: "Protéines totales",
    code: "biochemical_proteins_total",
    unit: "g/l",
    availableUnits: ["g/l"],
    ranges: [
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} < 1`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [44, true], max: [76, true] },
        under: ["Hypoprotéinémie"],
        over: ["Hyperprotéinémie"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} >= 1`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [64, true], max: [83, true] },
        under: ["Hypoprotéinémie"],
        over: ["Hyperprotéinémie"],
      },
    ],
    source: "Normes biologiques",
  },
  {
    name: "Albumine",
    code: "biochemical_albumin",
    unit: "g/l",
    availableUnits: ["g/l"],
    ranges: [
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} < 1`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [28, true], max: [44, true] },
        under: ["Hypoalbuminémie"],
        over: ["Hyperalbuminémie"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} >= 1`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [35, true], max: [50, true] },
        under: ["Hypoalbuminémie"],
        over: ["Hyperalbuminémie"],
      },
    ],
    source: "Normes biologiques",
  },

  // Bilan inflammatoire
  {
    name: "Protéine C-réactive",
    code: "biochemical_crp",
    unit: "mg/l",
    availableUnits: ["mg/l"],
    ranges: [
      {
        condition: {
          value: "true",
          variables: [],
        },
        range: { min: [0, true], max: [6, true] },
        under: ["CRP normale"],
        over: ["Syndrome inflammatoire"],
      },
    ],
    source: "Normes biologiques",
  },

  // Bilan martial
  {
    name: "Fer sérique",
    code: "biochemical_iron",
    unit: "µmol/l",
    availableUnits: ["µmol/l"],
    ranges: [
      {
        condition: {
          value: `${AnthroSystemCodes.SEX} === 'M'`,
          variables: [AnthroSystemCodes.SEX],
        },
        range: { min: [11.6, true], max: [31.3, true] },
        under: ["Hyposidérémie"],
        over: ["Hypersidérémie"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.SEX} === 'F'`,
          variables: [AnthroSystemCodes.SEX],
        },
        range: { min: [9.0, true], max: [30.4, true] },
        under: ["Hyposidérémie"],
        over: ["Hypersidérémie"],
      },
    ],
    source: "Normes biologiques",
  },
  {
    name: "Ferritine",
    code: "biochemical_ferritin",
    unit: "µg/l",
    availableUnits: ["µg/l"],
    ranges: [
      {
        condition: {
          value: `${AnthroSystemCodes.SEX} === 'M'`,
          variables: [AnthroSystemCodes.SEX],
        },
        range: { min: [20, true], max: [250, true] },
        under: ["Ferritine basse"],
        over: ["Ferritine élevée"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.SEX} === 'F'`,
          variables: [AnthroSystemCodes.SEX],
        },
        range: { min: [15, true], max: [150, true] },
        under: ["Ferritine basse"],
        over: ["Ferritine élevée"],
      },
    ],
    source: "Normes biologiques",
  },
  {
    name: "Transferrine",
    code: "biochemical_transferrin",
    unit: "g/l",
    availableUnits: ["g/l"],
    ranges: [
      {
        condition: {
          value: "true",
          variables: [],
        },
        range: { min: [2.0, true], max: [3.6, true] },
        under: ["Transferrine basse"],
        over: ["Transferrine élevée"],
      },
    ],
    source: "Normes biologiques",
  },
  {
    name: "Coefficient de saturation de la transferrine",
    code: "biochemical_transferrin_saturation",
    unit: "%",
    availableUnits: ["%"],
    ranges: [
      {
        condition: {
          value: "true",
          variables: [],
        },
        range: { min: [20, true], max: [40, true] },
        under: ["Coefficient de saturation bas"],
        over: ["Coefficient de saturation élevé"],
      },
    ],
    source: "Normes biologiques",
  },

  // Oligoéléments
  {
    name: "Zinc",
    code: "biochemical_zinc",
    unit: "µmol/l",
    availableUnits: ["µmol/l"],
    ranges: [
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} < 12`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [10.7, true], max: [15.3, true] },
        under: ["Hypozincémie"],
        over: ["Hyperzincémie"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} >= 12`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [11.5, true], max: [18.5, true] },
        under: ["Hypozincémie"],
        over: ["Hyperzincémie"],
      },
    ],
    source: "Normes biologiques",
  },
  {
    name: "Cuivre",
    code: "biochemical_copper",
    unit: "µmol/l",
    availableUnits: ["µmol/l"],
    ranges: [
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} < 6`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [3.1, true], max: [7.9, true] },
        under: ["Hypocuprémie"],
        over: ["Hypercuprémie"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} >= 6 && ${AnthroSystemCodes.AGE_IN_MONTH} < 12`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [8.7, true], max: [17.3, true] },
        under: ["Hypocuprémie"],
        over: ["Hypercuprémie"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} >= 12`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [11.0, true], max: [22.0, true] },
        under: ["Hypocuprémie"],
        over: ["Hypercuprémie"],
      },
    ],
    source: "Normes biologiques",
  },
  {
    name: "Sélénium",
    code: "biochemical_selenium",
    unit: "µmol/l",
    availableUnits: ["µmol/l"],
    ranges: [
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} < 1`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [0.32, true], max: [0.9, true] },
        under: ["Hyposélénémie"],
        over: ["Hypersélénémie"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} >= 1`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [0.89, true], max: [1.65, true] },
        under: ["Hyposélénémie"],
        over: ["Hypersélénémie"],
      },
    ],
    source: "Normes biologiques",
  },
   // Oligoéléments
  {
    name: "Zinc",
    code: "biochemical_zinc",
    unit: "µmol/l",
    availableUnits: ["µmol/l"],
    ranges: [
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} < 12`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [10.7, true], max: [15.3, true] },
        under: ["Hypozincémie"],
        over: ["Hyperzincémie"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} >= 12`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [11.5, true], max: [18.5, true] },
        under: ["Hypozincémie"],
        over: ["Hyperzincémie"],
      },
    ],
    source: "Normes biologiques",
  },
  {
    name: "Cuivre",
    code: "biochemical_copper",
    unit: "µmol/l",
    availableUnits: ["µmol/l"],
    ranges: [
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} < 6`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [3.1, true], max: [7.9, true] },
        under: ["Hypocuprémie"],
        over: ["Hypercuprémie"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} >= 6 && ${AnthroSystemCodes.AGE_IN_MONTH} < 12`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [8.7, true], max: [17.3, true] },
        under: ["Hypocuprémie"],
        over: ["Hypercuprémie"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} >= 12`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [11.0, true], max: [22.0, true] },
        under: ["Hypocuprémie"],
        over: ["Hypercuprémie"],
      },
    ],
    source: "Normes biologiques",
  },
  {
    name: "Sélénium",
    code: "biochemical_selenium",
    unit: "µmol/l",
    availableUnits: ["µmol/l"],
    ranges: [
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} < 1`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [0.32, true], max: [0.9, true] },
        under: ["Hyposélénémie"],
        over: ["Hypersélénémie"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} >= 1`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [0.89, true], max: [1.65, true] },
        under: ["Hyposélénémie"],
        over: ["Hypersélénémie"],
      },
    ],
    source: "Normes biologiques",
  },

  // Bilan martial
  {
    name: "Fer sérique",
    code: "biochemical_iron",
    unit: "µmol/l",
    availableUnits: ["µmol/l"],
    ranges: [
      {
        condition: {
          value: `${AnthroSystemCodes.SEX} === 'M'`,
          variables: [AnthroSystemCodes.SEX],
        },
        range: { min: [11.6, true], max: [31.3, true] },
        under: ["Hyposidérémie"],
        over: ["Hypersidérémie"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.SEX} === 'F'`,
          variables: [AnthroSystemCodes.SEX],
        },
        range: { min: [9.0, true], max: [30.4, true] },
        under: ["Hyposidérémie"],
        over: ["Hypersidérémie"],
      },
    ],
    source: "Normes biologiques",
  },
  {
    name: "Ferritine",
    code: "biochemical_ferritin",
    unit: "µg/l",
    availableUnits: ["µg/l"],
    ranges: [
      {
        condition: {
          value: `${AnthroSystemCodes.SEX} === 'M'`,
          variables: [AnthroSystemCodes.SEX],
        },
        range: { min: [20, true], max: [250, true] },
        under: ["Ferritine basse"],
        over: ["Ferritine élevée"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.SEX} === 'F'`,
          variables: [AnthroSystemCodes.SEX],
        },
        range: { min: [15, true], max: [150, true] },
        under: ["Ferritine basse"],
        over: ["Ferritine élevée"],
      },
    ],
    source: "Normes biologiques",
  },
  {
    name: "Transferrine",
    code: "biochemical_transferrin",
    unit: "g/l",
    availableUnits: ["g/l"],
    ranges: [
      {
        condition: {
          value: "true",
          variables: [],
        },
        range: { min: [2.0, true], max: [3.6, true] },
        under: ["Transferrine basse"],
        over: ["Transferrine élevée"],
      },
    ],
    source: "Normes biologiques",
  },
  {
    name: "Coefficient de saturation de la transferrine",
    code: "biochemical_transferrin_saturation",
    unit: "%",
    availableUnits: ["%"],
    ranges: [
      {
        condition: {
          value: "true",
          variables: [],
        },
        range: { min: [20, true], max: [40, true] },
        under: ["Coefficient de saturation bas"],
        over: ["Coefficient de saturation élevé"],
      },
    ],
    source: "Normes biologiques",
  },
    {
    name: "Phosphatases alcalines",
    code: "biochemical_alp",
    unit: "U/l",
    availableUnits: ["U/l"],
    ranges: [
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} < 2`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [140, true], max: [315, true] },
        under: ["PAL basse"],
        over: ["PAL élevée"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} >= 2 && ${AnthroSystemCodes.AGE_IN_MONTH} < 6`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [110, true], max: [390, true] },
        under: ["PAL basse"],
        over: ["PAL élevée"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} >= 6 && ${
            AnthroSystemCodes.AGE_IN_MONTH
          } < ${MONTH_IN_YEARS * 3}`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [140, true], max: [320, true] },
        under: ["PAL basse"],
        over: ["PAL élevée"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} >= ${
            MONTH_IN_YEARS * 3
          } && ${AnthroSystemCodes.AGE_IN_MONTH} < ${15 * MONTH_IN_YEARS}`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [125, true], max: [410, true] },
        under: ["PAL basse"],
        over: ["PAL élevée"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} >= ${
            15 * MONTH_IN_YEARS
          } && ${
            AnthroSystemCodes.AGE_IN_MONTH
          } <= ${MAX_AGE_IN_MONTH_IN_PEDIATRIC}`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [40, true], max: [138, true] },
        under: ["PAL basse"],
        over: ["PAL élevée"],
      },
    ],
    source: "Normes biologiques",
  },
/////// HLLLLLL
// Bilan Hémostase
  {
    name: "Taux de prothrombine",
    code: "biochemical_tp",
    unit: "%",
    availableUnits: ["%"],
    ranges: [
      {
        condition: {
          value: "true",
          variables: [],
        },
        range: { min: [70, true], max: [100, true] },
        under: ["TP bas"],
        over: ["TP élevé"],
      },
    ],
    source: "Normes biologiques",
  },
  {
    name: "Temps de céphaline activée",
    code: "biochemical_tca",
    unit: "sec",
    availableUnits: ["sec"],
    ranges: [
      {
        condition: {
          value: "true",
          variables: [],
        },
        range: { min: [30, true], max: [35, true] },
        under: ["TCA bas"],
        over: ["TCA élevé"],
      },
    ],
    source: "Normes biologiques",
  },

  // Bilan protéique
  {
    name: "Protéines totales",
    code: "biochemical_proteins_total",
    unit: "g/l",
    availableUnits: ["g/l"],
    ranges: [
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} < 1`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [44, true], max: [76, true] },
        under: ["Hypoprotéinémie"],
        over: ["Hyperprotéinémie"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} >= 1`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [64, true], max: [83, true] },
        under: ["Hypoprotéinémie"],
        over: ["Hyperprotéinémie"],
      },
    ],
    source: "Normes biologiques",
  },
  {
    name: "Albumine",
    code: "biochemical_albumin",
    unit: "g/l",
    availableUnits: ["g/l"],
    ranges: [
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} < 1`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [28, true], max: [44, true] },
        under: ["Hypoalbuminémie"],
        over: ["Hyperalbuminémie"],
      },
      {
        condition: {
          value: `${AnthroSystemCodes.AGE_IN_MONTH} >= 1`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [35, true], max: [50, true] },
        under: ["Hypoalbuminémie"],
        over: ["Hyperalbuminémie"],
      },
    ],
    source: "Normes biologiques",
  },

  // Bilan inflammatoire
  {
    name: "Protéine C-réactive",
    code: "biochemical_crp",
    unit: "mg/l",
    availableUnits: ["mg/l"],
    ranges: [
      {
        condition: {
          value: "true",
          variables: [],
        },
        range: { min: [0, true], max: [6, true] },
        under: ["CRP normale"],
        over: ["Syndrome inflammatoire"],
      },
    ],
    source: "Normes biologiques",
  },
//...........
];
