import { DiagnosticRule } from "../../types";
import { fExp } from "../../utils";
import {
  CLINICAL_SIGNS,
  ZScorePossibleValueLimit,
  ConditionResult,
  AnthroSystemCodes,
  OBSERVATIONS,
  DIAGNOSTIC_CODES,
  MONTH_IN_YEARS,
} from "../../constants";

export const diagnosticRules: DiagnosticRule[] = [
  {
    name: "Malnutrition aiguë sévère",
    code: DIAGNOSTIC_CODES.SEVERE_ACUTE_MALNUTRITION,
    conditions: [
      // Condition 1: Z-score P/T < -3 (générique, conservé pour compatibilité)
      {
        value: fExp`(${AnthroSystemCodes.WFLH_UNISEX}<${ZScorePossibleValueLimit.neg3}) || (${AnthroSystemCodes.WFLH}<${ZScorePossibleValueLimit.neg3})`,
        variables: [AnthroSystemCodes.WFLH_UNISEX],
      },
      // Condition 1b: Z-score P/T < -3 spécifiquement pour 6-59 mois
      {
        value: fExp`((${AnthroSystemCodes.AGE_IN_MONTH} >= 6) && (${AnthroSystemCodes.AGE_IN_MONTH}< ${MONTH_IN_YEARS * 8})) && ((${AnthroSystemCodes.WFLH_UNISEX}<${ZScorePossibleValueLimit.neg3}) || (${AnthroSystemCodes.WFLH}<${ZScorePossibleValueLimit.neg3}))`,
        variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.WFLH_UNISEX],
      },
      // Condition 2: MUAC < 115mm (6-59 mois)
      {
        value: fExp`((${AnthroSystemCodes.AGE_IN_MONTH} >= 6) && (${AnthroSystemCodes.AGE_IN_MONTH}<${MONTH_IN_YEARS * 8})) && (${AnthroSystemCodes.MUAC}<115)`,
        variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.MUAC],
      },
      // Condition 3: Présence d'œdèmes bilatéraux (tous âges)
      {
        value: fExp`${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.True}`,
        variables: [CLINICAL_SIGNS.EDEMA],
      },
      // Condition 4: < 6 mois — WLZ disponible (longueur suffisante) : WFLH < -3
      {
        value: fExp`(${AnthroSystemCodes.AGE_IN_MONTH}<6) && ((${AnthroSystemCodes.WFLH_UNISEX}<${ZScorePossibleValueLimit.neg3}) || (${AnthroSystemCodes.WFLH}<${ZScorePossibleValueLimit.neg3}))`,
        variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.WFLH_UNISEX],
      },
      // Condition 5: < 6 mois — fallback WFA < -3 si WLZ indisponible
      {
        value: fExp`(${AnthroSystemCodes.AGE_IN_MONTH}<6) && (${AnthroSystemCodes.WFA}<${ZScorePossibleValueLimit.neg3})`,
        variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.WFA],
      },
      // Condition 6: 60-228 mois — BMI-for-age Z < -3 (OMS 2007)
      {
        value: fExp`((${AnthroSystemCodes.AGE_IN_MONTH} >= 60) && (${AnthroSystemCodes.AGE_IN_MONTH} <= ${MONTH_IN_YEARS * 18})) && (${AnthroSystemCodes.BMI_FOR_AGE}<${ZScorePossibleValueLimit.neg3})`,
        variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.BMI_FOR_AGE],
      },
      // Condition 7 (optionnelle, transition): 96-228 mois — WFH (NCHS) < -3
      {
        value: fExp`((${AnthroSystemCodes.AGE_IN_MONTH} >= 96) && (${AnthroSystemCodes.AGE_IN_MONTH} <=  ${MONTH_IN_YEARS * 18})) && (${AnthroSystemCodes.WFH_UNISEX_NCHS}<${ZScorePossibleValueLimit.neg3})`,
        variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.WFH_UNISEX_NCHS],
      },
      // Condition 8: Signe clinique de marasme (si capturé)
      {
        value: fExp`${OBSERVATIONS.MUSCLE_LOSS} == ${ConditionResult.True}`,
        variables: [OBSERVATIONS.MUSCLE_LOSS],
      },
    ],
  },
  {
    name: "Malnutrition aiguë modérée",
    code: DIAGNOSTIC_CODES.MODERATE_ACUTE_MALNUTRITION,
    conditions: [
      // Condition 1: -3 ≤ Z-score P/T < -2
      {
        value: fExp`((${AnthroSystemCodes.WFLH_UNISEX} >= ${ZScorePossibleValueLimit.neg3}) || (${AnthroSystemCodes.WFLH} >= ${ZScorePossibleValueLimit.neg3})) && ((${AnthroSystemCodes.WFLH_UNISEX} < ${ZScorePossibleValueLimit.neg2}) || (${AnthroSystemCodes.WFLH} < ${ZScorePossibleValueLimit.neg2}))`,
        variables: [AnthroSystemCodes.WFLH_UNISEX],
      },
      // Condition 2: 115mm ≤ MUAC < 125mm
      {
        value: fExp`(${AnthroSystemCodes.MUAC} >= 115) && (${AnthroSystemCodes.MUAC} < 125)`,
        variables: [AnthroSystemCodes.MUAC],
      },
    ],
  },
  {
    name: "Malnutrition chronique sévère",
    code: DIAGNOSTIC_CODES.SEVERE_CHRONIC_MALNUTRITION,
    conditions: [
      // Z-score T/A < -3
      {
        value: fExp`${AnthroSystemCodes.HFA} < ${ZScorePossibleValueLimit.neg3}`,
        variables: [AnthroSystemCodes.HFA],
      },
    ],
  },
  {
    name: "Malnutrition chronique modérée",
    code: DIAGNOSTIC_CODES.MODERATE_CHRONIC_MALNUTRITION,
    conditions: [
      // -3 ≤ Z-score T/A < -2
      {
        value: fExp`(${AnthroSystemCodes.HFA} >= ${ZScorePossibleValueLimit.neg3}) && (${AnthroSystemCodes.HFA} < ${ZScorePossibleValueLimit.neg2})`,
        variables: [AnthroSystemCodes.HFA],
      },
    ],
  },
  {
    name: "Insuffisance pondérale sévère",
    code: DIAGNOSTIC_CODES.SEVERE_UNDERWEIGHT,
    conditions: [
      // Z-score P/A < -3
      {
        value: fExp`${AnthroSystemCodes.WFA} < ${ZScorePossibleValueLimit.neg3}`,
        variables: [AnthroSystemCodes.WFA],
      },
    ],
  },
  {
    name: "Insuffisance pondérale modérée",
    code: DIAGNOSTIC_CODES.MODERATE_UNDERWEIGHT,
    conditions: [
      // -3 ≤ Z-score P/A < -2
      {
        value: fExp`(${AnthroSystemCodes.WFA} >= ${ZScorePossibleValueLimit.neg3}) && (${AnthroSystemCodes.WFA} < ${ZScorePossibleValueLimit.neg2})`,
        variables: [AnthroSystemCodes.WFA],
      },
    ],
  },
  {
    name: "Obésité",
    code: DIAGNOSTIC_CODES.OBESITY,
    conditions: [
      {
        value: fExp`${AnthroSystemCodes.BMI_FOR_AGE} > ${ZScorePossibleValueLimit.pos3}`,
        variables: [AnthroSystemCodes.BMI_FOR_AGE],
      },
    ],
  },
  {
    name: "Surpoids",
    code: DIAGNOSTIC_CODES.OVERWEIGHT,
    conditions: [
      {
        value: fExp`(${AnthroSystemCodes.BMI_FOR_AGE} > ${ZScorePossibleValueLimit.pos2}) && (${AnthroSystemCodes.BMI_FOR_AGE} <= ${ZScorePossibleValueLimit.pos3})`,
        variables: [AnthroSystemCodes.BMI_FOR_AGE],
      },
    ],
  },
  {
    name: "État nutritionnel normal",
    code: DIAGNOSTIC_CODES.NORMAL_NUTRITIONAL_STATUS,
    conditions: [
      {
        value: fExp`
          (${AnthroSystemCodes.WFLH_UNISEX} >= ${ZScorePossibleValueLimit.neg2}) && 
          (${AnthroSystemCodes.WFLH_UNISEX} <= ${ZScorePossibleValueLimit.pos2}) &&
          (${AnthroSystemCodes.MUAC} >= 125) &&
          (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.False}) &&
          (${AnthroSystemCodes.HFA} >= ${ZScorePossibleValueLimit.neg2}) &&
          (${AnthroSystemCodes.HFA} <= ${ZScorePossibleValueLimit.pos2}) &&
          (${AnthroSystemCodes.WFA} >= ${ZScorePossibleValueLimit.neg2}) &&
          (${AnthroSystemCodes.WFA} <= ${ZScorePossibleValueLimit.pos2}) &&
          (${AnthroSystemCodes.BMI_FOR_AGE} >= ${ZScorePossibleValueLimit.neg2}) &&
          (${AnthroSystemCodes.BMI_FOR_AGE} <= ${ZScorePossibleValueLimit.pos2})
        `,
        variables: [
          AnthroSystemCodes.WFLH_UNISEX,
          AnthroSystemCodes.MUAC,
          CLINICAL_SIGNS.EDEMA,
          AnthroSystemCodes.HFA,
          AnthroSystemCodes.WFA,
          AnthroSystemCodes.BMI_FOR_AGE,
        ],
      },
    ],
  },
];
