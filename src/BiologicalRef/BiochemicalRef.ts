import {
  AnthroSystemCodes,
  BIOCHEMICAL_REF_CODES,
  HOURS_IN_DAY,
  MAX_AGE_IN_MONTH_IN_PEDIATRIC,
  MONTH_IN_YEARS,
  Sex,
} from "../../constants";
import { BiochemicalReference } from "../../types/BiochemicalReference";
import { f } from "../../utils";

export const biochemicalReferences: BiochemicalReference[] = [
  // Ionogramme sanguin
  {
    name: "Sodium",
    code: BIOCHEMICAL_REF_CODES.BIOCHEMICAL_IONO_NA,
    unit: "mmol/l",
    availableUnits: ["mmol/l"],
    ranges: [
      {
        condition: {
          value: f(`${AnthroSystemCodes.AGE_IN_MONTH} < 1`),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [130, true], max: [146, true] },
        under: ["Hyponatrémie"],
        over: ["Hypernatrémie"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= 1 && ${AnthroSystemCodes.AGE_IN_MONTH} < 12`
          ),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [133, true], max: [146, true] },
        under: ["Hyponatrémie"],
        over: ["Hypernatrémie"],
      },
      {
        condition: {
          value: f(`${AnthroSystemCodes.AGE_IN_MONTH} >= 12`),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [136, true], max: [146, true] },
        under: ["Hyponatrémie"],
        over: ["Hypernatrémie"],
      },
    ],
    source: "Normes biologiques",
  },
  {
    name: "Potassium",
    code: BIOCHEMICAL_REF_CODES.BIOCHEMICAL_IONO_K,
    unit: "mmol/l",
    availableUnits: ["mmol/l"],
    ranges: [
      {
        condition: {
          value: f(`${AnthroSystemCodes.AGE_IN_MONTH} < 1`),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [3.6, true], max: [6.1, true] },
        under: ["Hypokaliémie"],
        over: ["Hyperkaliémie"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= 1 && ${AnthroSystemCodes.AGE_IN_MONTH} < 12`
          ),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [3.7, true], max: [5.8, true] },
        under: ["Hypokaliémie"],
        over: ["Hyperkaliémie"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= 12 && ${AnthroSystemCodes.AGE_IN_MONTH} <= ${MAX_AGE_IN_MONTH_IN_PEDIATRIC}`
          ),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [3.2, true], max: [5.1, true] },
        under: ["Hypokaliémie"],
        over: ["Hyperkaliémie"],
      },
    ],
    source: "Normes biologiques",
  },
  {
    name: "Chlorure",
    code: BIOCHEMICAL_REF_CODES.BIOCHEMICAL_IONO_CL,
    unit: "mmol/l",
    availableUnits: ["mmol/l"],
    ranges: [
      {
        condition: {
          value: f(`${AnthroSystemCodes.AGE_IN_MONTH} < 12`),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [96, true], max: [110, true] },
        under: ["Hypochlorémie"],
        over: ["Hyperchlorémie"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= 12 && ${AnthroSystemCodes.AGE_IN_MONTH} <= ${MAX_AGE_IN_MONTH_IN_PEDIATRIC}`
          ),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [98, true], max: [106, true] },
        under: ["Hypochlorémie"],
        over: ["Hyperchlorémie"],
      },
    ],
    source: "Normes biologiques",
  },
  {
    name: "Calcium",
    code: BIOCHEMICAL_REF_CODES.BIOCHEMICAL_IONO_CA,
    unit: "mmol/l",
    availableUnits: ["mmol/l"],
    ranges: [
      {
        condition: {
          value: f(`${AnthroSystemCodes.AGE_IN_DAY} < 7`), // < 7 jours
          variables: [AnthroSystemCodes.AGE_IN_DAY],
        },
        range: { min: [1.8, true], max: [2.75, true] },
        under: ["Hypocalcémie"],
        over: ["Hypercalcémie"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_DAY} >= 7 && ${AnthroSystemCodes.AGE_IN_DAY} < 21`
          ), // 7j à 3 semaines
          variables: [AnthroSystemCodes.AGE_IN_DAY],
        },
        range: { min: [2.0, true], max: [2.75, true] },
        under: ["Hypocalcémie"],
        over: ["Hypercalcémie"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_DAY} >= 21 && ${AnthroSystemCodes.AGE_IN_MONTH} <= ${MAX_AGE_IN_MONTH_IN_PEDIATRIC}`
          ), // nourrisson-enfant
          variables: [
            AnthroSystemCodes.AGE_IN_DAY,
            AnthroSystemCodes.AGE_IN_MONTH,
          ],
        },
        range: { min: [2.2, true], max: [2.7, true] },
        under: ["Hypocalcémie"],
        over: ["Hypercalcémie"],
      },
    ],
    source: "Normes biologiques",
  },
  {
    name: "Magnésium",
    code: BIOCHEMICAL_REF_CODES.BIOCHEMICAL_IONO_MG,
    unit: "mmol/l",
    availableUnits: ["mmol/l"],
    ranges: [
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_DAY} >= 7 && ${AnthroSystemCodes.AGE_IN_MONTH} < 3`
          ), // 7j à 3 mois
          variables: [
            AnthroSystemCodes.AGE_IN_DAY,
            AnthroSystemCodes.AGE_IN_MONTH,
          ],
        },
        range: { min: [0.65, true], max: [1.02, true] },
        under: ["Hypomagnésémie"],
        over: ["Hypermagnésémie"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= 3 && ${AnthroSystemCodes.AGE_IN_MONTH} <= ${MAX_AGE_IN_MONTH_IN_PEDIATRIC}`
          ),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [0.75, true], max: [0.96, true] },
        under: ["Hypomagnésémie"],
        over: ["Hypermagnésémie"],
      },
    ],
    source: "Normes biologiques",
  },

  // Fonction rénale
  {
    name: "Urée",
    code: BIOCHEMICAL_REF_CODES.BIOCHEMICAL_KIDNEY_UREA,
    unit: "mmol/l",
    availableUnits: ["mmol/l"],
    ranges: [
      {
        condition: {
          value: f(`${AnthroSystemCodes.AGE_IN_DAY} < 4`), // < 4 jours
          variables: [AnthroSystemCodes.AGE_IN_DAY],
        },
        range: { min: [1.5, true], max: [8.0, true] },
        under: ["Urée basse"],
        over: ["Urée élevée"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_DAY} >= 4 && ${AnthroSystemCodes.AGE_IN_MONTH} < 1`
          ),
          variables: [
            AnthroSystemCodes.AGE_IN_DAY,
            AnthroSystemCodes.AGE_IN_MONTH,
          ],
        },
        range: { min: [1.0, true], max: [4.2, true] },
        under: ["Urée basse"],
        over: ["Urée élevée"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= 1 && ${
              AnthroSystemCodes.AGE_IN_MONTH
            } < ${6 * MONTH_IN_YEARS}`
          ), // 1 mois à 6 ans
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [1.6, true], max: [6.5, true] },
        under: ["Urée basse"],
        over: ["Urée élevée"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= ${6 * MONTH_IN_YEARS} && ${
              AnthroSystemCodes.AGE_IN_MONTH
            } <= ${MAX_AGE_IN_MONTH_IN_PEDIATRIC}`
          ),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [2.5, true], max: [7.5, true] },
        under: ["Urée basse"],
        over: ["Urée élevée"],
      },
    ],
    source: "Normes biologiques",
  },
  {
    name: "Créatinine",
    code: BIOCHEMICAL_REF_CODES.BIOCHEMICAL_KIDNEY_CREA,
    unit: "mmol/24h",
    availableUnits: ["mmol/24h"],
    ranges: [
      {
        condition: {
          value: f(`${AnthroSystemCodes.AGE_IN_MONTH} < 1`),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [0.15, true], max: [0.45, true] },
        under: ["Créatinine basse"],
        over: ["Créatinine élevée"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= 1 && ${AnthroSystemCodes.AGE_IN_MONTH} < ${MONTH_IN_YEARS}`
          ),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [0.5, true], max: [1.5, true] },
        under: ["Créatinine basse"],
        over: ["Créatinine élevée"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= 12 && ${
              AnthroSystemCodes.AGE_IN_MONTH
            } < ${6 * MONTH_IN_YEARS}`
          ),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [1.5, true], max: [3.5, true] },
        under: ["Créatinine basse"],
        over: ["Créatinine élevée"],
      },
    ],
    source: "Normes biologiques",
  },

  // Bilan glycémique
  {
    name: "Glucose",
    code: BIOCHEMICAL_REF_CODES.BIOCHEMICAL_BLOOD_GLUCOSE,
    unit: "mmol/l",
    availableUnits: ["mmol/l"],
    ranges: [
      {
        condition: {
          value: f(`${AnthroSystemCodes.AGE_IN_MONTH} < 1`),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [2.8, true], max: [4.4, true] },
        under: ["Hypoglycémie"],
        over: ["Hyperglycémie"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= 1 && ${AnthroSystemCodes.AGE_IN_MONTH} < ${MAX_AGE_IN_MONTH_IN_PEDIATRIC}`
          ),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [3.3, true], max: [5.5, true] },
        under: ["Hypoglycémie"],
        over: ["Hyperglycémie"],
      },
    ],
    source: "Normes biologiques",
  },

  // Bilan enzymatique
  {
    name: "Alanine amino-transférase",
    code: BIOCHEMICAL_REF_CODES.BIOCHEMICAL_ENZY_ALT,
    unit: "U/l",
    availableUnits: ["U/l"],
    ranges: [
      {
        condition: {
          value: f(`${AnthroSystemCodes.AGE_IN_MONTH} < 1`),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [3, true], max: [27, true] },
        under: ["ALT basse"],
        over: ["ALT élevée"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= 1 && ${AnthroSystemCodes.AGE_IN_MONTH} <= ${MAX_AGE_IN_MONTH_IN_PEDIATRIC}`
          ),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [7, true], max: [40, true] },
        under: ["ALT basse"],
        over: ["ALT élevée"],
      },
    ],
    source: "Normes biologiques",
  },

  {
    name: "Gamma glutamyl transférase",
    code: BIOCHEMICAL_REF_CODES.BIOCHEMICAL_ENZY_GGT,
    unit: "U/l",
    availableUnits: ["U/l"],
    ranges: [
      {
        condition: {
          value: f(`${AnthroSystemCodes.AGE_IN_MONTH} < 1`),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [10, true], max: [270, true] },
        under: ["GGT basse"],
        over: ["GGT élevée"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= 1 && ${AnthroSystemCodes.AGE_IN_MONTH} < 2`
          ),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [10, true], max: [160, true] },
        under: ["GGT basse"],
        over: ["GGT élevée"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= 2 && ${AnthroSystemCodes.AGE_IN_MONTH} < 4`
          ),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [7, true], max: [100, true] },
        under: ["GGT basse"],
        over: ["GGT élevée"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= 4 && ${AnthroSystemCodes.AGE_IN_MONTH} < 7`
          ),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [5, true], max: [45, true] },
        under: ["GGT basse"],
        over: ["GGT élevée"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= 7 && ${AnthroSystemCodes.AGE_IN_MONTH} <= ${MAX_AGE_IN_MONTH_IN_PEDIATRIC}`
          ),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [5, true], max: [25, true] },
        under: ["GGT basse"],
        over: ["GGT élevée"],
      },
    ],
    source: "Normes biologiques",
  },
  {
    name: "Bilirubine totale",
    code: BIOCHEMICAL_REF_CODES.BIOCHEMICAL_ENZY_BILIRUBIN_TOTAL ,
    unit: "µmol/l",
    availableUnits: ["µmol/l"],
    ranges: [
      {
        condition: {
          value: f(
            `(${AnthroSystemCodes.AGE_IN_DAY} * ${HOURS_IN_DAY})< ${
              HOURS_IN_DAY / 2
            }`
          ), // 12h
          variables: [AnthroSystemCodes.AGE_IN_DAY],
        },
        range: { min: [0, true], max: [102, true] },
        under: ["Bilirubine basse"],
        over: ["Hyperbilirubinémie"],
      },
      {
        condition: {
          value: f(
            `(${AnthroSystemCodes.AGE_IN_DAY} * ${HOURS_IN_DAY}) >= ${
              HOURS_IN_DAY / 2
            } && (${
              AnthroSystemCodes.AGE_IN_DAY
            } * ${HOURS_IN_DAY}) < ${HOURS_IN_DAY}`
          ), // 24h
          variables: [AnthroSystemCodes.AGE_IN_DAY],
        },
        range: { min: [0, true], max: [145, true] },
        under: ["Bilirubine basse"],
        over: ["Hyperbilirubinémie"],
      },
      {
        condition: {
          value: f(
            `(${
              AnthroSystemCodes.AGE_IN_DAY
            } * ${HOURS_IN_DAY})>= ${HOURS_IN_DAY} && (${
              AnthroSystemCodes.AGE_IN_DAY
            } * ${HOURS_IN_DAY}) <= ${HOURS_IN_DAY * 2}`
          ), // 48h
          variables: [AnthroSystemCodes.AGE_IN_DAY],
        },
        range: { min: [0, true], max: [196, true] },
        under: ["Bilirubine basse"],
        over: ["Hyperbilirubinémie"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_DAY} >= 3 && ${AnthroSystemCodes.AGE_IN_DAY} < 5`
          ), // 3-5j
          variables: [AnthroSystemCodes.AGE_IN_DAY],
        },
        range: { min: [0, true], max: [256, true] },
        under: ["Bilirubine basse"],
        over: ["Hyperbilirubinémie"],
      },
      {
        condition: {
          value: f(`${AnthroSystemCodes.AGE_IN_DAY} >= 5`),
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [0, true], max: [17, true] },
        under: ["Bilirubine basse"],
        over: ["Hyperbilirubinémie"],
      },
    ],
    source: "Normes biologiques",
  },

  // Bilan lipidique
  {
    name: "Cholestérol total",
    code: BIOCHEMICAL_REF_CODES.BIOCHEMICAL_FAT_CHELESTEROL_TOTAL,
    unit: "mmol/l",
    availableUnits: ["mmol/l"],
    ranges: [
      {
        condition: {
          value: f(`${AnthroSystemCodes.AGE_IN_MONTH} < ${MONTH_IN_YEARS}`), // 0 - 1 ans
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [1.8, true], max: [4.55, true] },
        under: ["Cholestérol total bas"],
        over: ["Hypercholestérolémie"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} <= ${MONTH_IN_YEARS * 4} && ${
              AnthroSystemCodes.AGE_IN_MONTH
            } >= ${MONTH_IN_YEARS}`
          ), // 1-4 ans
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [1.8, true], max: [4.55, true] },
        under: ["Cholestérol total bas"],
        over: ["Hypercholestérolémie"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= ${5 * MONTH_IN_YEARS} && ${
              AnthroSystemCodes.AGE_IN_MONTH
            } <= ${9 * MONTH_IN_YEARS}`
          ), // 5-9 ans
          variables: [AnthroSystemCodes.AGE_IN_MONTH],
        },
        range: { min: [3.1, true], max: [5.2, true] },
        under: ["Cholestérol total bas"],
        over: ["Hypercholestérolémie"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= ${10 * MONTH_IN_YEARS} && ${
              AnthroSystemCodes.AGE_IN_MONTH
            } <=${MONTH_IN_YEARS * 14}  && ${AnthroSystemCodes.SEX} == ${
              Sex.FEMALE
            }`
          ), // 10-14 ans femme
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [3.2, true], max: [5.2, true] },
        under: ["Cholestérol total bas"],
        over: ["Hypercholestérolémie"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= ${10 * MONTH_IN_YEARS} && ${
              AnthroSystemCodes.AGE_IN_MONTH
            } <=${MONTH_IN_YEARS * 14}  && ${AnthroSystemCodes.SEX} == ${
              Sex.MALE
            }`
          ), // 10-14 ans Homme
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [3.1, true], max: [5.25, true] },
        under: ["Cholestérol total bas"],
        over: ["Hypercholestérolémie"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= ${15 * MONTH_IN_YEARS} && ${
              AnthroSystemCodes.AGE_IN_MONTH
            } < ${MAX_AGE_IN_MONTH_IN_PEDIATRIC} && ${
              AnthroSystemCodes.SEX
            } == ${Sex.FEMALE}`
          ), // 15-19 ans femme
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [3.1, true], max: [5.2, true] },
        under: ["Cholestérol total bas"],
        over: ["Hypercholestérolémie"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= ${15 * MONTH_IN_YEARS} && ${
              AnthroSystemCodes.AGE_IN_MONTH
            } < ${MAX_AGE_IN_MONTH_IN_PEDIATRIC} && ${
              AnthroSystemCodes.SEX
            } == ${Sex.MALE}`
          ), // 15-19 ans homme
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [2.9, true], max: [5.1, true] },
        under: ["Cholestérol total bas"],
        over: ["Hypercholestérolémie"],
      },
    ],
    source: "Normes biologiques",
  },
  {
    name: "HDL Cholestérol",
    code: BIOCHEMICAL_REF_CODES.BIOCHEMICAL_FAT_HDL,
    unit: "mmol/l",
    availableUnits: ["mmol/l"],
    ranges: [
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} < ${MONTH_IN_YEARS * 2} && ${
              AnthroSystemCodes.SEX
            } == ${Sex.FEMALE}`
          ), // <2 ans femme
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [0.41, true], max: [1.29, true] },
        under: ["HDL bas"],
        over: ["HDL élevé"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} < ${MONTH_IN_YEARS * 2} && ${
              AnthroSystemCodes.SEX
            } == ${Sex.MALE}`
          ), // <2 ans homme
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [0.31, true], max: [0.96, true] },
        under: ["HDL bas"],
        over: ["HDL élevé"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= ${MONTH_IN_YEARS * 2} && ${
              AnthroSystemCodes.AGE_IN_MONTH
            } <= ${MONTH_IN_YEARS * 4} && ${AnthroSystemCodes.SEX} == ${
              Sex.FEMALE
            }`
          ), // 2-4 ans femme
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [0.85, true], max: [1.29, true] },
        under: ["HDL bas"],
        over: ["HDL élevé"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= ${MONTH_IN_YEARS * 2} && ${
              AnthroSystemCodes.AGE_IN_MONTH
            } <= ${MONTH_IN_YEARS * 4} && ${AnthroSystemCodes.SEX} == ${
              Sex.MALE
            }`
          ), // 2-4 ans homme
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [0.65, true], max: [0.96, true] },
        under: ["HDL bas"],
        over: ["HDL élevé"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= ${MONTH_IN_YEARS * 5} && ${
              AnthroSystemCodes.AGE_IN_MONTH
            } <= ${MONTH_IN_YEARS * 9} && ${AnthroSystemCodes.SEX} == ${
              Sex.FEMALE
            }`
          ), // 5-9 ans femme
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [1.06, true], max: [1.58, true] },
        under: ["HDL bas"],
        over: ["HDL élevé"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= ${MONTH_IN_YEARS * 5} && ${
              AnthroSystemCodes.AGE_IN_MONTH
            } <= ${MONTH_IN_YEARS * 9} && ${AnthroSystemCodes.SEX} == ${
              Sex.MALE
            }`
          ), // 5-9 ans homme
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [0.8, true], max: [1.19, true] },
        under: ["HDL bas"],
        over: ["HDL élevé"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= ${MONTH_IN_YEARS * 10} && ${
              AnthroSystemCodes.AGE_IN_MONTH
            } <= ${MONTH_IN_YEARS * 14} && ${AnthroSystemCodes.SEX} == ${
              Sex.FEMALE
            }`
          ), // 10-14 ans femme
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [1.11, true], max: [1.63, true] },
        under: ["HDL bas"],
        over: ["HDL élevé"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= ${MONTH_IN_YEARS * 15} && ${
              AnthroSystemCodes.AGE_IN_MONTH
            } <= ${MAX_AGE_IN_MONTH_IN_PEDIATRIC} && ${
              AnthroSystemCodes.SEX
            } == ${Sex.FEMALE}`
          ), // 15-19 ans femme
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [1.11, true], max: [1.71, true] },
        under: ["HDL bas"],
        over: ["HDL élevé"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= ${MONTH_IN_YEARS * 10} && ${
              AnthroSystemCodes.AGE_IN_MONTH
            } <= ${MAX_AGE_IN_MONTH_IN_PEDIATRIC} && ${
              AnthroSystemCodes.SEX
            } == ${Sex.MALE}`
          ), // 10-19 ans homme
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [0.8, true], max: [1.22, true] },
        under: ["HDL bas"],
        over: ["HDL élevé"],
      },
    ],
    source: "Normes biologiques",
  },
  {
    name: "Triglycérides",
    code: BIOCHEMICAL_REF_CODES.BIOCHEMICAL_FAT_TG,
    unit: "mmol/l",
    availableUnits: ["mmol/l"],
    ranges: [
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} < ${MONTH_IN_YEARS * 4} && ${
              AnthroSystemCodes.SEX
            } == ${Sex.FEMALE}`
          ), // 0-4 ans femme
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [0.35, true], max: [1.2, true] },
        under: ["Triglycérides bas"],
        over: ["Hypertriglycéridémie"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} < ${MONTH_IN_YEARS * 4} && ${
              AnthroSystemCodes.SEX
            } == ${Sex.MALE}`
          ), // 0-4 ans homme
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [0.35, true], max: [1.1, true] },
        under: ["Triglycérides bas"],
        over: ["Hypertriglycéridémie"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= ${MONTH_IN_YEARS * 4} && ${
              AnthroSystemCodes.AGE_IN_MONTH
            } <= ${MONTH_IN_YEARS * 9} && ${AnthroSystemCodes.SEX} == ${
              Sex.FEMALE
            }`
          ), // 4 - 9 ans femme
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [0.4, true], max: [1.25, true] },
        under: ["Triglycérides bas"],
        over: ["Hypertriglycéridémie"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= ${MONTH_IN_YEARS * 4} && ${
              AnthroSystemCodes.AGE_IN_MONTH
            } <= ${MONTH_IN_YEARS * 9} && ${AnthroSystemCodes.SEX} == ${
              Sex.MALE
            }`
          ), // 4 - 9 ans homme
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [0.35, true], max: [1.2, true] },
        under: ["Triglycérides bas"],
        over: ["Hypertriglycéridémie"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= ${MONTH_IN_YEARS * 10} && ${
              AnthroSystemCodes.AGE_IN_MONTH
            } < ${MONTH_IN_YEARS * 14} && ${AnthroSystemCodes.SEX} == ${
              Sex.FEMALE
            }`
          ), // 10 - 14 ans femme
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [0.4, true], max: [1.55, true] },
        under: ["Triglycérides bas"],
        over: ["Hypertriglycéridémie"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= ${MONTH_IN_YEARS * 10} && ${
              AnthroSystemCodes.AGE_IN_MONTH
            } < ${MONTH_IN_YEARS * 14} && ${AnthroSystemCodes.SEX} == ${
              Sex.MALE
            }`
          ), // 10 - 14 ans homme
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [0.35, true], max: [1.5, true] },
        under: ["Triglycérides bas"],
        over: ["Hypertriglycéridémie"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= ${MONTH_IN_YEARS * 14} && ${
              AnthroSystemCodes.AGE_IN_MONTH
            } <= ${MAX_AGE_IN_MONTH_IN_PEDIATRIC} && ${
              AnthroSystemCodes.SEX
            } == ${Sex.FEMALE}`
          ), // 14 - 19 ans femme
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [0.45, true], max: [1.45, true] },
        under: ["Triglycérides bas"],
        over: ["Hypertriglycéridémie"],
      },
      {
        condition: {
          value: f(
            `${AnthroSystemCodes.AGE_IN_MONTH} >= ${MONTH_IN_YEARS * 14} && ${
              AnthroSystemCodes.AGE_IN_MONTH
            } <= ${MAX_AGE_IN_MONTH_IN_PEDIATRIC} && ${
              AnthroSystemCodes.SEX
            } == ${Sex.MALE}`
          ), // 14 - 19 ans homme
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.SEX],
        },
        range: { min: [0.4, true], max: [1.5, true] },
        under: ["Triglycérides bas"],
        over: ["Hypertriglycéridémie"],
      },
    ],
    source: "Normes biologiques",
  },
];
