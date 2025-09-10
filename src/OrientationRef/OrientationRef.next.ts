import {
  AnthroSystemCodes,
  APPETITE_TEST_CODES,
  CLINICAL_SIGNS,
  COMPLICATION_CODES,
  ConditionResult,
  DATA_POINTS,
  MAX_AGE_IN_MONTH_IN_PEDIATRIC,
  MONTH_IN_YEARS,
  ORIENTATION_REF_CODES,
  TREATMENT_HISTORY_VARIABLES_CODES,
  ZScorePossibleValueLimit,
} from "../../constants";
import { CARE_PHASE_CODES, Next_OrientationRef } from "../../types";
import { fExp } from "../../utils";

export const next_orientationRefs: Next_OrientationRef[] = [
  {
    name: "HOME: ",
    code: ORIENTATION_REF_CODES.ORIENTED_TO_HOME,
    criteria: [
      {
        condition: {
          value: fExp`(((${AnthroSystemCodes.MUAC} >= 125) && (${
            AnthroSystemCodes.AGE_IN_MONTH
          } < ${MONTH_IN_YEARS * 8}) && (${
            AnthroSystemCodes.AGE_IN_MONTH
          } >= 6)  && (${AnthroSystemCodes.WFLH_UNISEX} > ${
            ZScorePossibleValueLimit.neg2
          }) && (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.False}) && (${
            COMPLICATION_CODES.COMPLICATIONS_NUMBER
          } == 0)))`,
          variables: [
            AnthroSystemCodes.MUAC,
            AnthroSystemCodes.WFLH_UNISEX,
            AnthroSystemCodes.AGE_IN_MONTH,
            CLINICAL_SIGNS.EDEMA,
            COMPLICATION_CODES.COMPLICATIONS_NUMBER,
          ],
        },
        description: "Enfant sans MAM/MAS (6-<96 mois) avec MUAC ≥125 ou WFLH > -2, sans œdème et sans complication: orientation domicile.",
        variablesExplanation: {
          [AnthroSystemCodes.MUAC]: "Périmètre brachial en mm; seuil normal ≥ 125 mm.",
          [AnthroSystemCodes.WFLH_UNISEX]: "Z-score poids-pour-taille OMS; normal si > -2.",
          [AnthroSystemCodes.AGE_IN_MONTH]: "Âge en mois (entre 6 et <96 mois).",
          [CLINICAL_SIGNS.EDEMA]: "Présence d'œdèmes bilatéraux (False attendu).",
          [COMPLICATION_CODES.COMPLICATIONS_NUMBER]: "Nombre de complications actives (0 attendu).",
        }
      },
    ],
    treatmentPhase: undefined,
  },
  {
    name: "CRENAM: Centre de prise en charge de la malnutrition aiguë modérée",
    code: ORIENTATION_REF_CODES.ORIENTED_TO_CRENAM,
    criteria: [
      {
        condition: {
          value: fExp`(${AnthroSystemCodes.AGE_IN_MONTH} >= 6) && (((${AnthroSystemCodes.WFLH_UNISEX} >= ${ZScorePossibleValueLimit.neg3}) && (${AnthroSystemCodes.WFLH_UNISEX}<${ZScorePossibleValueLimit.neg2}))||((${AnthroSystemCodes.MUAC}>=115) && (${AnthroSystemCodes.MUAC}<125))) && (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.False})`,
          variables: [
            AnthroSystemCodes.AGE_IN_MONTH,
            AnthroSystemCodes.WFLH_UNISEX,
            AnthroSystemCodes.MUAC,
            CLINICAL_SIGNS.EDEMA,
          ],
        },
        description: "Enfant de 6 mois et plus présentant une malnutrition aiguë modérée (Z-score Poids/Taille entre -3 et -2 ou PB entre 115mm et 125mm) sans œdème.",
        variablesExplanation: {},
      },
      {
        condition: {
          value: fExp`${TREATMENT_HISTORY_VARIABLES_CODES.PREVIOUS_TREATMENT} == '${ORIENTATION_REF_CODES.ORIENTED_TO_CNT}'`,
          variables: [TREATMENT_HISTORY_VARIABLES_CODES.PREVIOUS_TREATMENT],
        },
        description: "Patient précédemment orienté au CNT (historique): maintien/retour vers CRENAM si état actuel compatible.",
        variablesExplanation: {
          [TREATMENT_HISTORY_VARIABLES_CODES.PREVIOUS_TREATMENT]: "Orientation précédente enregistrée dans l'historique (code).",
        },
      },
    ],
    treatmentPhase: undefined,
  },
  {
    name: "CNT: Centre de prise en charge de la malnutrtition aigue Severe avec complication",
    code: ORIENTATION_REF_CODES.ORIENTED_TO_CNT,
    criteria: [
      {
        condition: {
          value: fExp`(((${AnthroSystemCodes.AGE_IN_MONTH} >= 6) && (${
            AnthroSystemCodes.WEIGHT
          } >= 3)) && (${AnthroSystemCodes.AGE_IN_MONTH} < ${
            MONTH_IN_YEARS * 8
          })) && ((${AnthroSystemCodes.WFLH_UNISEX} < ${
            ZScorePossibleValueLimit.neg3
          }) || (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.True}) || (${
            AnthroSystemCodes.MUAC
          } < 115) || (${COMPLICATION_CODES.COMPLICATIONS_NUMBER} > 0) || (${
            APPETITE_TEST_CODES.CODE
          } == '${APPETITE_TEST_CODES.NEGATIVE}'))`,
          variables: [
            AnthroSystemCodes.AGE_IN_MONTH,
            AnthroSystemCodes.WFLH_UNISEX,
            CLINICAL_SIGNS.EDEMA,
            COMPLICATION_CODES.COMPLICATIONS_NUMBER,
            AnthroSystemCodes.WEIGHT,
          ],
        },
        description: "Critères de MAS/complication (6-<96 mois, poids ≥3 kg): WFLH < -3 ou œdèmes, ou MUAC <115, ou complication, ou test d'appétit négatif ⇒ CNT.",
        variablesExplanation: {
          [AnthroSystemCodes.AGE_IN_MONTH]: "Âge en mois (6 à <96).",
          [AnthroSystemCodes.WEIGHT]: "Poids en kg (≥ 3 kg).",
          [AnthroSystemCodes.WFLH_UNISEX]: "Z-score OMS poids-pour-taille (< -3 = MAS).",
          [CLINICAL_SIGNS.EDEMA]: "Œdèmes bilatéraux (True = MAS oedémateux).",
          [COMPLICATION_CODES.COMPLICATIONS_NUMBER]: "Nb de complications actives (>0).",
        }
      },
      {
        condition: {
          value: fExp`((${AnthroSystemCodes.AGE_IN_MONTH} >= ${
            MONTH_IN_YEARS * 8
          }) && (${
            AnthroSystemCodes.AGE_IN_MONTH
          } < ${MAX_AGE_IN_MONTH_IN_PEDIATRIC})) && ((${
            AnthroSystemCodes.WFH_UNISEX_NCHS
          } < ${ZScorePossibleValueLimit.neg3}) || (${
            CLINICAL_SIGNS.EDEMA
          } == ${ConditionResult.True})|| (${
            COMPLICATION_CODES.COMPLICATIONS_NUMBER
          } > 0) || (${APPETITE_TEST_CODES.CODE} == '${
            APPETITE_TEST_CODES.NEGATIVE
          }'))`,
          variables: [
            AnthroSystemCodes.AGE_IN_MONTH,
            AnthroSystemCodes.WFH_UNISEX_NCHS,
            CLINICAL_SIGNS.EDEMA,
            COMPLICATION_CODES.COMPLICATIONS_NUMBER,
            APPETITE_TEST_CODES.CODE,
          ],
        },
        description: "≥8 ans: WFH (NCHS) < -3, ou œdèmes, ou complication, ou test d'appétit négatif ⇒ CNT.",
        variablesExplanation: {
          [AnthroSystemCodes.AGE_IN_MONTH]: "Âge en mois (≥ 96 jusqu'à < 228).",
          [AnthroSystemCodes.WFH_UNISEX_NCHS]: "Z-score NCHS poids-pour-taille (< -3 = MAS).",
          [CLINICAL_SIGNS.EDEMA]: "Œdèmes bilatéraux (True).",
          [COMPLICATION_CODES.COMPLICATIONS_NUMBER]: "Complications actives (>0).",
          [APPETITE_TEST_CODES.CODE]: "Résultat du test d'appétit (Negative = échec).",
        }
      },
      {
        condition: {
          value: fExp`(((${AnthroSystemCodes.AGE_IN_MONTH} < 6) || (${AnthroSystemCodes.WEIGHT} < 3)) && ((${AnthroSystemCodes.WFA} < ${ZScorePossibleValueLimit.neg3}) || (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.True})|| (${COMPLICATION_CODES.COMPLICATIONS_NUMBER} > 0))) && (${DATA_POINTS.IS_BREASTFED} == ${ConditionResult.False})`,
          variables: [
            AnthroSystemCodes.AGE_IN_MONTH,
            AnthroSystemCodes.WEIGHT,
            CLINICAL_SIGNS.EDEMA,
            AnthroSystemCodes.WFA,
            AnthroSystemCodes.WFLH_UNISEX,
            COMPLICATION_CODES.COMPLICATIONS_NUMBER,
            DATA_POINTS.IS_BREASTFED,
          ],
        },
        description: "<6 mois ou <3 kg non allaité avec MAS/œdèmes/complications ⇒ CNT (unité nourrisson non allaité).",
        variablesExplanation: {
          [AnthroSystemCodes.AGE_IN_MONTH]: "Âge en mois (<6).",
          [AnthroSystemCodes.WEIGHT]: "Poids en kg (<3).",
          [AnthroSystemCodes.WFA]: "Z-score poids-pour-âge (< -3).",
          [CLINICAL_SIGNS.EDEMA]: "Œdèmes bilatéraux (True).",
          [COMPLICATION_CODES.COMPLICATIONS_NUMBER]: "Complications actives (>0).",
          [DATA_POINTS.IS_BREASTFED]: "Statut d'allaitement (False = non allaité).",
        }
      },
    ],
    treatmentPhase: CARE_PHASE_CODES.CNT_PHASE1,
  },
  {
    name: "CNT: Centre de nutrition Thérapeutique (Prise en charge des nourissons de moins de 6 mois ou moins de 3kg)",
    code: ORIENTATION_REF_CODES.ORIENTED_TO_CNT,
    criteria: [
      {
        condition: {
          value: fExp`(((${AnthroSystemCodes.AGE_IN_MONTH} < 6) || (${AnthroSystemCodes.WEIGHT} < 3)) && ((${AnthroSystemCodes.WFA} < ${ZScorePossibleValueLimit.neg3}) || (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.True})|| (${COMPLICATION_CODES.COMPLICATIONS_NUMBER} > 0))) && (${DATA_POINTS.IS_BREASTFED} == ${ConditionResult.True})`,
          variables: [
            AnthroSystemCodes.AGE_IN_MONTH,
            AnthroSystemCodes.WEIGHT,
            CLINICAL_SIGNS.EDEMA,
            AnthroSystemCodes.WFA,
            AnthroSystemCodes.WFLH_UNISEX,
            COMPLICATION_CODES.COMPLICATIONS_NUMBER,
            DATA_POINTS.IS_BREASTFED,
          ],
        },
        description: "<6 mois ou <3 kg allaité avec MAS/œdèmes/complications ⇒ CNT (unité nourrisson allaité).",
        variablesExplanation: {
          [AnthroSystemCodes.AGE_IN_MONTH]: "Âge en mois (<6).",
          [AnthroSystemCodes.WEIGHT]: "Poids en kg (<3).",
          [AnthroSystemCodes.WFA]: "Z-score poids-pour-âge (< -3).",
          [CLINICAL_SIGNS.EDEMA]: "Œdèmes bilatéraux (True).",
          [COMPLICATION_CODES.COMPLICATIONS_NUMBER]: "Complications actives (>0).",
          [DATA_POINTS.IS_BREASTFED]: "Statut d'allaitement (True = allaité).",
        }
      },
    ],
    treatmentPhase: CARE_PHASE_CODES.CNT_INFANT_LT6m_LT3kg,
  },
];
