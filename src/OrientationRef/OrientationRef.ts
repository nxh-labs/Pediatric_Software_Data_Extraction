import {
  AnthroSystemCodes,
  APPETITE_TEST_CODES,
  CLINICAL_SIGNS,
  COMPLICATION_CODES,
  ConditionResult,
  MAX_AGE_IN_MONTH_IN_PEDIATRIC,
  MONTH_IN_YEARS,
  ORIENTATION_REF_CODES,
  TREATMENT_HISTORY_VARIABLES_CODES,
  ZScorePossibleValueLimit,
} from "../../constants";
import { OrientationRef } from "../../types";
import { f, fExp } from "../../utils";

export const orientationRefs: OrientationRef[] = [
  {
    name: "HOME: Enfant normal",
    code: ORIENTATION_REF_CODES.ORIENTED_TO_HOME,
    admissionCriteria: [
      {
        value: fExp`(((${AnthroSystemCodes.MUAC} >= 125) &&( ${AnthroSystemCodes.AGE_IN_MONTH} < ${MONTH_IN_YEARS * 5})) || (${AnthroSystemCodes.WFLH_UNISEX} > ${ZScorePossibleValueLimit.neg2}))`,
        variables: [AnthroSystemCodes.MUAC, AnthroSystemCodes.WFLH_UNISEX],
      },
    ],
    admissionTypes: [],
  },
  {
    name: "CRENAM: Centre de prise en charge de la malnutrition aiguë modérée",
    code: ORIENTATION_REF_CODES.ORIENTED_TO_CRENAM,
    admissionCriteria: [
      {
        value: fExp`(${AnthroSystemCodes.AGE_IN_MONTH} >= 6) && (((${AnthroSystemCodes.WFLH_UNISEX} >= ${ZScorePossibleValueLimit.neg3}) && (${AnthroSystemCodes.WFLH_UNISEX}<${ZScorePossibleValueLimit.neg2}))||((${AnthroSystemCodes.MUAC}>=115) && (${AnthroSystemCodes.MUAC}<125))) && (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.False})`,
        variables: [
          AnthroSystemCodes.AGE_IN_MONTH,
          AnthroSystemCodes.WFLH_UNISEX,
          AnthroSystemCodes.MUAC,
          CLINICAL_SIGNS.EDEMA,
        ],
      },
      {
        value: fExp`${TREATMENT_HISTORY_VARIABLES_CODES.PREVIOUS_TREATMENT} == '${ORIENTATION_REF_CODES.ORIENTED_TO_CNT}'`,
        variables: [TREATMENT_HISTORY_VARIABLES_CODES.PREVIOUS_TREATMENT],
      },
    ],
    admissionTypes: [
      {
        name: "Nouvelle Admission",
        code: ORIENTATION_REF_CODES.NEW_ADMISSION_CODE,
        condition: {
          variables: [
            TREATMENT_HISTORY_VARIABLES_CODES.CRENAM_ORIENTATION_NUMBER,
          ],
          value: fExp`${TREATMENT_HISTORY_VARIABLES_CODES.CRENAM_ORIENTATION_NUMBER} == 0`,
        },
      },
      {
        name: "Rechute",
        code: ORIENTATION_REF_CODES.RELAPSE_ADMISSION_CODE,
        condition: {
          variables: [
            TREATMENT_HISTORY_VARIABLES_CODES.CRENAM_ORIENTATION_NUMBER,
          ],
          value: fExp`${TREATMENT_HISTORY_VARIABLES_CODES.CRENAM_ORIENTATION_NUMBER} > 0`,
        },
      },
    ],
  },
  {
    name: "CNA: Centre de prise en charge de la malnutrtition aigue",
    code: ORIENTATION_REF_CODES.ORIENTED_TO_CNA,
    admissionCriteria: [
      {
        value: fExp`(${AnthroSystemCodes.WFLH_UNISEX}<${ZScorePossibleValueLimit.neg3}) &&((${AnthroSystemCodes.MUAC}>=115) && (${AnthroSystemCodes.MUAC}<125)) && (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.False}) && (${APPETITE_TEST_CODES.CODE} == '${APPETITE_TEST_CODES.POSITIVE}') && (${COMPLICATION_CODES.COMPLICATIONS_NUMBER} == 0)`,
        variables: [
          CLINICAL_SIGNS.EDEMA,
          AnthroSystemCodes.WFLH_UNISEX,
          AnthroSystemCodes.MUAC,
          APPETITE_TEST_CODES.CODE,
          COMPLICATION_CODES.COMPLICATIONS_NUMBER,
        ],
      },
    ],
    admissionTypes: [
      {
        name: "Nouvelle Admission",
        code: ORIENTATION_REF_CODES.NEW_ADMISSION_CODE,
        condition: {
          variables: [TREATMENT_HISTORY_VARIABLES_CODES.CNA_ORIENTATION_NUMBER],
          value: fExp`${TREATMENT_HISTORY_VARIABLES_CODES.CNA_ORIENTATION_NUMBER} == 0`,
        },
      },
      {
        name: "Admissions de patients déjà sous traitement de MAS",
        code: ORIENTATION_REF_CODES.MAS_ALREADY_ADMISSION_CODE,
        condition: {
          variables: [
            TREATMENT_HISTORY_VARIABLES_CODES.CNA_ORIENTATION_NUMBER,
            TREATMENT_HISTORY_VARIABLES_CODES.CNT_ORIENTATION_NUMBER,
            TREATMENT_HISTORY_VARIABLES_CODES.PREVIOUS_CNA_TREATMENT_MONTH,
          ],
          value: fExp`(${TREATMENT_HISTORY_VARIABLES_CODES.CNT_ORIENTATION_NUMBER} > 0) || ((${TREATMENT_HISTORY_VARIABLES_CODES.CNA_ORIENTATION_NUMBER} > 0 ) && (${TREATMENT_HISTORY_VARIABLES_CODES.PREVIOUS_CNA_TREATMENT_MONTH} > 2))`,
        },
      },
    ],
  },
  {
    name: "CNT: Centre de prise en charge de la malnutrtition aigue Severe avec complication",
    code: ORIENTATION_REF_CODES.ORIENTED_TO_CNT,
    admissionCriteria: [
      {
        value: fExp`((${AnthroSystemCodes.AGE_IN_MONTH} >= 6) && (${AnthroSystemCodes.AGE_IN_MONTH
          } < ${MONTH_IN_YEARS * 8})) && ((${AnthroSystemCodes.WFLH_UNISEX} < ${ZScorePossibleValueLimit.neg3
          }) || (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.True}) || (${AnthroSystemCodes.MUAC
          } < 115) || (${COMPLICATION_CODES.COMPLICATIONS_NUMBER} > 0) || (${APPETITE_TEST_CODES.CODE
          } == '${APPETITE_TEST_CODES.NEGATIVE}'))`,
        variables: [
          AnthroSystemCodes.AGE_IN_MONTH,
          AnthroSystemCodes.WFLH_UNISEX,
          CLINICAL_SIGNS.EDEMA,
          COMPLICATION_CODES.COMPLICATIONS_NUMBER,
        ],
      },

      {
        value: fExp`((${AnthroSystemCodes.AGE_IN_MONTH} >= ${MONTH_IN_YEARS * 8
          }) && (${AnthroSystemCodes.AGE_IN_MONTH
          } < ${MAX_AGE_IN_MONTH_IN_PEDIATRIC})) && ((${AnthroSystemCodes.WFH_UNISEX_NCHS
          } < ${ZScorePossibleValueLimit.neg3}) || (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.True
          })|| (${COMPLICATION_CODES.COMPLICATIONS_NUMBER} > 0) || (${APPETITE_TEST_CODES.CODE
          } == '${APPETITE_TEST_CODES.NEGATIVE}'))`,
        variables: [
          AnthroSystemCodes.AGE_IN_MONTH,
          AnthroSystemCodes.WFH_UNISEX_NCHS,
          CLINICAL_SIGNS.EDEMA,
          COMPLICATION_CODES.COMPLICATIONS_NUMBER,
          APPETITE_TEST_CODES.CODE,
        ],
      },
      {
        value: fExp`((${AnthroSystemCodes.AGE_IN_MONTH} < 6) && ((${AnthroSystemCodes.WFA} < ${ZScorePossibleValueLimit.neg3}) || (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.True})|| (${COMPLICATION_CODES.COMPLICATIONS_NUMBER} > 0))) || (((${AnthroSystemCodes.AGE_IN_MONTH}>=6) && (${AnthroSystemCodes.WEIGHT} < 3)) && ((${AnthroSystemCodes.WFLH_UNISEX} < ${ZScorePossibleValueLimit.neg3}) || (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.True})|| (${COMPLICATION_CODES.COMPLICATIONS_NUMBER} > 0)))`,
        variables: [
          AnthroSystemCodes.AGE_IN_MONTH,
          AnthroSystemCodes.WEIGHT,
          CLINICAL_SIGNS.EDEMA,

          AnthroSystemCodes.WFA,
          AnthroSystemCodes.WFLH_UNISEX,
          COMPLICATION_CODES.COMPLICATIONS_NUMBER,
        ],
      },
    ],
    admissionTypes: [
      {
        name: "Admission Directe",
        code: ORIENTATION_REF_CODES.DIRECT_ADMISSION_CODE,
        condition: {
          variables: [TREATMENT_HISTORY_VARIABLES_CODES.CNA_ORIENTATION_NUMBER],
          value: f(
            `${TREATMENT_HISTORY_VARIABLES_CODES.CNA_ORIENTATION_NUMBER} == 0`
          ),
        },
      },
      {
        name: "Reference",
        code: ORIENTATION_REF_CODES.REFEREED_ADMISSION_CODE,
        condition: {
          variables: [
            TREATMENT_HISTORY_VARIABLES_CODES.CNA_ORIENTATION_NUMBER,
            AnthroSystemCodes.AGE_IN_MONTH,
          ],
          value: fExp`(${TREATMENT_HISTORY_VARIABLES_CODES.CNA_ORIENTATION_NUMBER} == 0) || (${AnthroSystemCodes.AGE_IN_MONTH} < 6)`,
        },
      },
      {
        name: "Transfert interne du CNA",
        code: ORIENTATION_REF_CODES.INTERNAL_TRANSFER_ADMISSION_CODE,
        condition: {
          variables: [TREATMENT_HISTORY_VARIABLES_CODES.CNA_ORIENTATION_NUMBER],
          value: fExp`${TREATMENT_HISTORY_VARIABLES_CODES.CNA_ORIENTATION_NUMBER} > 0`,
        },
      },
    ],
  },
];
