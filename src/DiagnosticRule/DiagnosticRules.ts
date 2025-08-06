import { DiagnosticRule } from "../../types";
import { fExp } from "../../utils";
import {
  CLINICAL_SIGNS,
  ZScorePossibleValueLimit,
  ConditionResult,
  AnthroSystemCodes,
  OBSERVATIONS,
  DIAGNOSTIC_CODES,
} from "../../constants";

export const diagnosticRules: DiagnosticRule[] = [
  {
    name: "Malnutrition aiguë sévère",
    code: DIAGNOSTIC_CODES.SEVERE_ACUTE_MALNUTRITION,
    conditions: [
      // Condition 1: Z-score P/T < -3
      {
        value: fExp`${AnthroSystemCodes.WFLH_UNISEX} < ${ZScorePossibleValueLimit.neg3}`,
        variables: [AnthroSystemCodes.WFLH_UNISEX],
      },
      // Condition 2: MUAC < 115mm
      {
        value: fExp`${AnthroSystemCodes.MUAC} < 115`,
        variables: [AnthroSystemCodes.MUAC],
      },
      // Condition 3: Présence d'œdèmes bilatéraux
      {
        value: fExp`${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.True}`,
        variables: [CLINICAL_SIGNS.EDEMA],
      },
    ],
  },
  {
    name: "Malnutrition aiguë modérée",
    code: DIAGNOSTIC_CODES.MODERATE_ACUTE_MALNUTRITION,
    conditions: [
      // Condition 1: -3 ≤ Z-score P/T < -2
      {
        value: fExp`(${AnthroSystemCodes.WFLH_UNISEX} >= ${ZScorePossibleValueLimit.neg3}) && (${AnthroSystemCodes.WFLH_UNISEX} < ${ZScorePossibleValueLimit.neg2})`,
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
