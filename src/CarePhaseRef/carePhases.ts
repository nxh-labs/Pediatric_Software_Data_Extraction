import {
  ALWAYS_TRUE_CONDITION,
  AnthroSystemCodes,
  APPETITE_TEST_CODES,
  CALCULATED_MONITORING_ELEMENT,
  CARE_SESSION,
  CLINICAL_SIGNS,
  clinicalSignChangeDay,
  COMPLICATION_CODES,
  ConditionResult,
  DATA_POINTS,
  initialValueCode,
  MEDICINE_CODES,
  MONTH_IN_YEARS,
  OBSERVATIONS,
  TREATMENT_PLAN_IDS,
  VITAL_SIGNS,
  ZScorePossibleValueLimit,
} from "../../constants";
import {
  CARE_PHASE_CODES,
  CarePhaseReference,
  MilkType,
  MONITORING_ELEMENT_CATEGORY,
  MONITORING_VALUE_SOURCE,
  RECOMMENDED_TREATMENT_TYPE,
} from "../../types";
import { fExp } from "../../utils";

export const CARE_PHASES: CarePhaseReference[] = [
  {
    code: CARE_PHASE_CODES.CNT_PHASE1,
    name: "Phase 1 (Aiguë) du traitement au CNT",
    description:
      "Stabilisation métabolique du patient sans chercher la prise de poids.",
    applicabilyConditions: [
      {
        condition: {
          value: fExp`(${AnthroSystemCodes.AGE_IN_MONTH} >= 6) && (${AnthroSystemCodes.WEIGHT} >= 3)`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.WEIGHT],
        },
        description: "",
        varaibleExplaination: {},
      },
    ],
    failureCriteria: [
      {
        condition: {
          value: fExp`(${CARE_SESSION.DAYS_IN_PHASE} >= 4) && (${APPETITE_TEST_CODES.CODE} == '${APPETITE_TEST_CODES.NEGATIVE}')`,
          variables: [CARE_SESSION.DAYS_IN_PHASE, APPETITE_TEST_CODES.CODE],
        },
        description: "Absence de retour de l'appétit au 4ème jour.",
        variablesExplanation: {
          [CARE_SESSION.DAYS_IN_PHASE]:
            "Nombre de jours que le patient a passés dans la phase actuelle (Phase 1).",
          [APPETITE_TEST_CODES.CODE]:
            "Le résultat du dernier test d'appétit ('POSITIVE' ou 'NEGATIVE').",
        },
      },
      {
        condition: {
          value: fExp`(${CARE_SESSION.DAYS_IN_PHASE} >=4) && (${
            OBSERVATIONS.EDEMA_GODET_COUNT
          } >= ${initialValueCode(OBSERVATIONS.EDEMA_GODET_COUNT)})`,
          variables: [],
        },
        description: "Absence de perte d'œdèmes au 4ème jour.",
        variablesExplanation: {
          [CARE_SESSION.DAYS_IN_PHASE]:
            "Nombre de jours que le patient a passés dans la phase actuelle.",
          [initialValueCode(OBSERVATIONS.EDEMA_GODET_COUNT)]:
            "Le niveau d'œdème actuel du patient (0, 1, 2, ou 3).",
          [OBSERVATIONS.EDEMA_GODET_COUNT]:
            "Le niveau d'œdème que le patient avait au début de cette phase.",
        },
      },
      {
        condition: {
          value: fExp`(${CARE_SESSION.DAYS_IN_PHASE}>=10) && (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.True})`,
          variables: [CARE_SESSION.DAYS_IN_PHASE, CLINICAL_SIGNS.EDEMA],
        },
        description: "Présence d'œdèmes persistants au 10ème jour.",
        variablesExplanation: {
          [CARE_SESSION.DAYS_IN_PHASE]:
            "Nombre de jours que le patient a passés dans la phase actuelle.",
          [CLINICAL_SIGNS.EDEMA]:
            "Un booléen (vrai/faux) indiquant si le patient a des œdèmes.",
        },
      },
    ],
    transitionCriteria: [
      {
        condition: {
          value: fExp`(${APPETITE_TEST_CODES.CODE} == '${APPETITE_TEST_CODES.POSITIVE}') && (${COMPLICATION_CODES.COMPLICATIONS_NUMBER} == 0) && (${OBSERVATIONS.EDEMA_GODET_COUNT} <= 1)`,
          variables: [
            APPETITE_TEST_CODES.CODE,
            COMPLICATION_CODES.COMPLICATIONS_NUMBER,
            OBSERVATIONS.EDEMA_GODET_COUNT,
          ],
        },
        description:
          "Retour de l'appétit, stabilité clinique et début de fonte des œdèmes.",
        variablesExplanation: {
          [APPETITE_TEST_CODES.CODE]:
            "Le résultat du dernier test d'appétit ('POSITIVE' ou 'NEGATIVE').",
          [COMPLICATION_CODES.COMPLICATIONS_NUMBER]:
            "Le nombre total de complications médicales graves et actives.",
          [OBSERVATIONS.EDEMA_GODET_COUNT]:
            "Le niveau d'œdème actuel du patient. Le protocole demande un 'début de fonte', ce qui peut être interprété comme un niveau de + (1) ou 0.",
        },
      },
    ],
    recommendedTreatments: [
      {
        identifier: TREATMENT_PLAN_IDS.CNT_PHASE1_F75,
        applicabilityCondition: {
          condition: {
            value: fExp`((${AnthroSystemCodes.AGE_IN_MONTH} >= 6) && (${AnthroSystemCodes.WEIGHT} >=3)) || ((${AnthroSystemCodes.AGE_IN_MONTH} < 6) && (${AnthroSystemCodes.WEIGHT} < 3) && (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.True}))`,
            variables: [AnthroSystemCodes.AGE_IN_MONTH, CLINICAL_SIGNS.EDEMA],
          },
          descritpion: "",
          varialbleExplaination: {},
        },
        code: MilkType.F75,
        type: RECOMMENDED_TREATMENT_TYPE.NUTRITIONAL,
        duration: {
          type: "while_in_phase",
        },
      },
      {
        identifier: TREATMENT_PLAN_IDS.CNT_PHASE1_F100_DILUTED,
        applicabilityCondition: {
          condition: {
            value: fExp` (((${AnthroSystemCodes.AGE_IN_MONTH} < 6) || (${AnthroSystemCodes.WEIGHT} < 3)) && (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.False}))`,
            variables: [AnthroSystemCodes.AGE_IN_MONTH, CLINICAL_SIGNS.EDEMA],
          },
          descritpion: "",
          varialbleExplaination: {},
        },
        code: MilkType.F100Diluted,
        type: RECOMMENDED_TREATMENT_TYPE.NUTRITIONAL,
        duration: {
          type: "while_in_phase",
        },
      },
      {
        applicabilityCondition: {
          condition: {
            value: ALWAYS_TRUE_CONDITION,
            variables: [],
          },
          descritpion: "",
          varialbleExplaination: {},
        },
        identifier: TREATMENT_PLAN_IDS.CNT_PHASE1_AMOXICILLIN,
        code: MEDICINE_CODES.AMOX,
        type: RECOMMENDED_TREATMENT_TYPE.SYSTEMATIC,
        duration: {
          type: "while_in_phase",
        },
      },
    ],
    monitoringPlan: [
      {
        category: MONITORING_ELEMENT_CATEGORY.ANTHROPOMETRIC,
        code: AnthroSystemCodes.WEIGHT,
        frequency: {
          intervalUnit: "day",
          intervalValue: 1,
          countInUnit: 1,
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED,
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.DATA_FIELD,
        code: OBSERVATIONS.EDEMA_GODET_COUNT,
        frequency: {
          intervalUnit: "day",
          intervalValue: 1,
          countInUnit: 1,
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED,
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.DATA_FIELD,
        code: VITAL_SIGNS.TEMPERATURE,
        frequency: {
          intervalUnit: "day",
          intervalValue: 1,
          countInUnit: 2,
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED,
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.CLINICAL_SIGNS,
        code: CLINICAL_SIGNS.DIARRHEA,
        frequency: {
          intervalUnit: "day",
          intervalValue: 1,
          countInUnit: 1,
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED,
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.CLINICAL_SIGNS,
        code: CLINICAL_SIGNS.VOMITING,
        frequency: {
          intervalUnit: "day",
          intervalValue: 1,
          countInUnit: 1,
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED,
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.CLINICAL_SIGNS,
        code: CLINICAL_SIGNS.RESPIRATORY_DISTRESS,
        frequency: {
          intervalUnit: "day",
          intervalValue: 1,
          countInUnit: 1,
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED,
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.CLINICAL_SIGNS,
        code: CLINICAL_SIGNS.LIVER,
        frequency: {
          intervalUnit: "day",
          intervalValue: 1,
          countInUnit: 1,
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED,
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.ANTHROPOMETRIC,
        code: AnthroSystemCodes.MUAC,
        frequency: {
          intervalUnit: "week",
          intervalValue: 1,
          countInUnit: 1,
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED,
      },
    ],
    followUpPlan: [],
    duration: { type: "while_phase" },
    nextPhase: CARE_PHASE_CODES.CNT_TRANS_PHASE,
    prevPhase: CARE_PHASE_CODES.CNT_PHASE1,
  },
  {
    code: CARE_PHASE_CODES.CNT_TRANS_PHASE,
    name: "Phase de Transition du traitement au CNT",
    description:
      "Préparation à la phase de réhabilitation nutritionnelle avec introduction de l'ATPE ou du F-100.",
    applicabilyConditions: [
      {
        condition: {
          value: fExp`(${AnthroSystemCodes.AGE_IN_MONTH} >= 6) && (${AnthroSystemCodes.WEIGHT} >= 3)`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.WEIGHT],
        },
        description: "",
        varaibleExplaination: {},
      },
    ],
    failureCriteria: [
      {
        condition: {
          value: fExp`((${CLINICAL_SIGNS.LIVER} == ${
            ConditionResult.True
          }) || (${CALCULATED_MONITORING_ELEMENT.WEIGHT_GAIN_RATE_KG_DAY} > ${
            10 / 1000 // Convertion en kg
          }) || (${CLINICAL_SIGNS.RESPIRATORY_DISTRESS} == ${
            ConditionResult.True
          }))`,
          variables: [
            CLINICAL_SIGNS.LIVER,
            CALCULATED_MONITORING_ELEMENT.WEIGHT_GAIN_RATE_KG_DAY,
            CLINICAL_SIGNS.RESPIRATORY_DISTRESS,
          ],
        },
        description:
          "Signes de surcharge ou gain de poids trop rapide (>10g/kg/j), indiquant un risque. Le patient doit retourner en Phase 1.",
        variablesExplanation: {
          [CALCULATED_MONITORING_ELEMENT.WEIGHT_GAIN_RATE_KG_DAY]:
            "Gain de poids en g/kg/jour",
          [CLINICAL_SIGNS.LIVER]: "Augmentation du volume du foie",
          [CLINICAL_SIGNS.RESPIRATORY_DISTRESS]:
            "Augmentation de la fréquence respiratoire",
        },
      },
      {
        condition: {
          value: fExp`(${CLINICAL_SIGNS.DIARRHEA} == ${ConditionResult.True}) && (${CALCULATED_MONITORING_ELEMENT.WEIGHT_CHANGE_RATE_DURING_DIARRHEA} < 0 )`,
          variables: [
            CLINICAL_SIGNS.DIARRHEA,
            CALCULATED_MONITORING_ELEMENT.WEIGHT_CHANGE_RATE_DURING_DIARRHEA,
          ],
        },
        description:
          "Développement d'une diarrhée de renutrition entraînant une perte de poids.",
        variablesExplanation: {
          [CLINICAL_SIGNS.DIARRHEA]: "Présence de diarrhée",
          [CALCULATED_MONITORING_ELEMENT.WEIGHT_CHANGE_RATE_DURING_DIARRHEA]:
            "Le patient perds du poids durant la diarrhée.",
        },
      },
    ],
    transitionCriteria: [
      {
        // ici on a besoin de capturer la consommation du milk (le pourcentage) et pourcela j'ai inserre une variable donc cela doit etre ajouter au field afin qu'il puisse fournir les donnee necessiare pour caculer cela .
        // Je vois on doit ajouter dans les fields un champs pour captuer la quantité de lait prise par l'enfant dans la journée et avec cela on pourra calculer avec .
        condition: {
          value: fExp`(${APPETITE_TEST_CODES.CODE} == '${APPETITE_TEST_CODES.POSITIVE}') && (${CALCULATED_MONITORING_ELEMENT.NUTRITIONAL_MILK_CONSUMPTION_RATE_PERCENT_PER_DAY} >= 90) && (${OBSERVATIONS.EDEMA_GODET_COUNT} == 0)`,
          variables: [
            APPETITE_TEST_CODES.CODE,
            CALCULATED_MONITORING_ELEMENT.NUTRITIONAL_MILK_CONSUMPTION_RATE_PERCENT_PER_DAY,
            OBSERVATIONS.EDEMA_GODET_COUNT,
          ],
        },
        description:
          "Un bon appétit soit une consommation de 90% d'ATPE et une fonte totale des œdèmes.",
        variablesExplanation: {
          [APPETITE_TEST_CODES.CODE]:
            "Le résultat du dernier test d'appétit ('POSITIVE' ou 'NEGATIVE').",
          [CALCULATED_MONITORING_ELEMENT.NUTRITIONAL_MILK_CONSUMPTION_RATE_PERCENT_PER_DAY]:
            "",
          [OBSERVATIONS.EDEMA_GODET_COUNT]:
            "Le niveau d'œdème actuel du patient. Le protocole demande un 'début de fonte', ce qui peut être interprété comme un niveau de + (1) ou 0.",
        },
      },
    ],
    recommendedTreatments: [
      {
        applicabilityCondition: {
          condition: {
            value: fExp`${ALWAYS_TRUE_CONDITION}`,
            variables: [],
          },
          varialbleExplaination: {},
          descritpion: "",
        },
        identifier: TREATMENT_PLAN_IDS.CNT_TRANS_PHASE_AMOXICILLIN,
        code: MEDICINE_CODES.AMOX,
        duration: {
          type: "days",
          value: 5,
        },
        type: RECOMMENDED_TREATMENT_TYPE.SYSTEMATIC,
      },
      {
        applicabilityCondition: {
          condition: {
            value: fExp`(${AnthroSystemCodes.AGE_IN_MONTH} >= 6) && (${AnthroSystemCodes.WEIGHT} >= 3)`,
            variables: [
              AnthroSystemCodes.AGE_IN_MONTH,
              AnthroSystemCodes.WEIGHT,
            ],
          },
          descritpion: "",
          varialbleExplaination: {},
        },
        identifier: TREATMENT_PLAN_IDS.CNT_TRANS_PHASE_F100,
        code: MilkType.F100,
        duration: {
          type: "while_in_phase",
        },
        type: RECOMMENDED_TREATMENT_TYPE.NUTRITIONAL,
      },
      {
        applicabilityCondition: {
          condition: {
            value: fExp`(${AnthroSystemCodes.AGE_IN_MONTH} < 6) || (${AnthroSystemCodes.WEIGHT} < 3)`,
            variables: [
              AnthroSystemCodes.AGE_IN_MONTH,
              AnthroSystemCodes.WEIGHT,
            ],
          },
          descritpion: "",
          varialbleExplaination: {},
        },
        identifier: TREATMENT_PLAN_IDS.CNT_TRANS_PHASE_F100_DILUTED,
        code: MilkType.F100Diluted,
        duration: {
          type: "while_in_phase",
        },
        type: RECOMMENDED_TREATMENT_TYPE.NUTRITIONAL,
      },
    ],
    monitoringPlan: [
      {
        category: MONITORING_ELEMENT_CATEGORY.ANTHROPOMETRIC,
        code: AnthroSystemCodes.WEIGHT,
        frequency: {
          intervalUnit: "day",
          intervalValue: 1,
          countInUnit: 1,
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED,
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.DATA_FIELD,
        code: OBSERVATIONS.EDEMA_GODET_COUNT,
        frequency: {
          intervalUnit: "day",
          intervalValue: 1,
          countInUnit: 1,
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED,
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.DATA_FIELD,
        code: VITAL_SIGNS.TEMPERATURE,
        frequency: {
          intervalUnit: "day",
          intervalValue: 1,
          countInUnit: 2,
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED,
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.CLINICAL_SIGNS,
        code: CLINICAL_SIGNS.DIARRHEA,
        frequency: {
          intervalUnit: "day",
          intervalValue: 1,
          countInUnit: 1,
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED,
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.CLINICAL_SIGNS,
        code: CLINICAL_SIGNS.VOMITING,
        frequency: {
          intervalUnit: "day",
          intervalValue: 1,
          countInUnit: 1,
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED,
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.CLINICAL_SIGNS,
        code: CLINICAL_SIGNS.RESPIRATORY_DISTRESS,
        frequency: {
          intervalUnit: "day",
          intervalValue: 1,
          countInUnit: 1,
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED,
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.CLINICAL_SIGNS,
        code: CLINICAL_SIGNS.LIVER,
        frequency: {
          intervalUnit: "day",
          intervalValue: 1,
          countInUnit: 1,
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED,
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.ANTHROPOMETRIC,
        code: AnthroSystemCodes.MUAC,
        frequency: {
          intervalUnit: "week",
          intervalValue: 1,
          countInUnit: 1,
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED,
      },
    ],
    followUpPlan: [],
    nextPhase: CARE_PHASE_CODES.CNT_PHASE2,
    prevPhase: CARE_PHASE_CODES.CNT_PHASE1,
    duration: {
      type: "days",
      value: 6,
    },
  },
  {
    code: CARE_PHASE_CODES.CNT_PHASE2,
    name: "Phase 2 (Réhabilitation) du traitement au CNT",
    description:
      "Phase de réhabilitation nutritionnelle avec rattrapage pondéral (F-100), en préparation du transfert vers le CNA.",
    applicabilyConditions: [
      {
        condition: {
          value: fExp`(${AnthroSystemCodes.AGE_IN_MONTH} >= 6) && (${AnthroSystemCodes.WEIGHT} >=3)`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.WEIGHT],
        },
        description: "",
        varaibleExplaination: {},
      },
    ],
    failureCriteria: [
      {
        condition: {
          value: fExp`(${COMPLICATION_CODES.COMPLICATIONS_NUMBER} > 0)`,
          variables: [COMPLICATION_CODES.COMPLICATIONS_NUMBER],
        },
        description:
          "Si le patient dévelloppe une complication, c'est un échec du traitement",
        variablesExplanation: {},
      },
      {
        condition: {
          value: fExp`(${APPETITE_TEST_CODES.CODE} == '${APPETITE_TEST_CODES.NEGATIVE}')`,
          variables: [APPETITE_TEST_CODES.CODE],
        },
        description:
          "L'échec du test d'appetit est un critère d'echec de la phase de réhabilitation",
        variablesExplanation: {},
      },
      {
        condition: {
          value: fExp`(${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.True})`,
          variables: [CLINICAL_SIGNS.EDEMA],
        },
        description:
          "L'apparition d'œdème bilatéraux aucour de la phase de réhabiliation est un critère d'echec de la phase de réhabiliation",
        variablesExplanation: {},
      },
      {
        condition: {
          value: fExp`(${CLINICAL_SIGNS.DIARRHEA} == ${ConditionResult.True}) && (${CALCULATED_MONITORING_ELEMENT.WEIGHT_CHANGE_RATE_DURING_DIARRHEA} < 0)`,
          variables: [
            CLINICAL_SIGNS.DIARRHEA,
            CALCULATED_MONITORING_ELEMENT.WEIGHT_CHANGE_RATE_DURING_DIARRHEA,
          ],
        },
        description:
          "L'apparition d'une diarrhée de renutrition avec perte pondérale est un critère d'échec de la phase de réhabilitation.",
        variablesExplanation: {
          [CLINICAL_SIGNS.DIARRHEA]: "Présence de diarrhée",
          [CALCULATED_MONITORING_ELEMENT.WEIGHT_CHANGE_RATE_DURING_DIARRHEA]:
            "Variation du poids pendant l'épisode de diarrhée",
        },
      },
      {
        condition: {
          value: fExp`(${CALCULATED_MONITORING_ELEMENT.WEIGHT_LOSS_PERCENT_BETWEEN_TWO_CONSECUTIVE_MEASUREMENTS} >= 5) || (${CALCULATED_MONITORING_ELEMENT.WEIGHT_LOSS_PERCENT_BETWEEN_THREE_CONSECUTIVE_MEASUREMENTS} == 0)`,
          variables: [],
        },
        description:
          "Une perte de poids de 5% à n'importe quel moment ou une stagnation du poids pendant trois prise consecutive est un critère d'echec de la phase réhabilitation.",
        variablesExplanation: {},
      },
      {
        condition: {
          value: fExp`(${CALCULATED_MONITORING_ELEMENT.WEIGHT_GAIN_RATE_DURING_PHASE} == 0) && (${CARE_SESSION.DAYS_IN_PHASE} >= 21)`,
          variables: [],
        },
        description:
          "Lorsque le poids du patient est stable depuis le debut de la phase de réhabilitation jusqu'au jours 21 du traitement , cela est un critère d'echec de la phase.",
        variablesExplanation: {},
      },
      {
        condition: {
          value: fExp`(${CALCULATED_MONITORING_ELEMENT.WEIGHT_GAIN_RATE_DURING_PHASE} < 0) && (${CARE_SESSION.DAYS_IN_PHASE} >= 14)`,
          variables: [],
        },
        description:
          "Une perte de poids depuis le debut du traitement jusqu'au 14 jours, est un critère d'echec de la phase de réhabiliation.",
        variablesExplanation: {},
      },
    ],
    transitionCriteria: [
      {
        condition: {
          value: fExp`((((${AnthroSystemCodes.WFLH_UNISEX} >= ${
            ZScorePossibleValueLimit.negOutTarget
          }) || (${AnthroSystemCodes.WFLH} >= ${
            ZScorePossibleValueLimit.negOutTarget
          }) || (${AnthroSystemCodes.MUAC} > 125)) && ${
            AnthroSystemCodes.AGE_IN_MONTH
          } < ${MONTH_IN_YEARS * 8}) || (((${
            AnthroSystemCodes.WFH_UNISEX_NCHS
          } >= ${ZScorePossibleValueLimit.negOutTarget}) || (${
            AnthroSystemCodes.WFLH
          } >= ${ZScorePossibleValueLimit.negOutTarget})) && (${
            AnthroSystemCodes.AGE_IN_MONTH
          } >= ${MONTH_IN_YEARS * 8}))  && ((${CLINICAL_SIGNS.EDEMA} == ${
            ConditionResult.True
          }) && ((${clinicalSignChangeDay(CLINICAL_SIGNS.EDEMA)} - ${
            CARE_SESSION.DAYS_IN_PHASE
          }) >= 14 )))`,
          variables: [],
        },
        description: "",
        variablesExplanation: {},
      },
    ],
    recommendedTreatments: [
      {
        applicabilityCondition: {
          condition: {
            value: fExp`(${AnthroSystemCodes.AGE_IN_MONTH} >= 6) && (${AnthroSystemCodes.WEIGHT} >= 3)`,
            variables: [
              AnthroSystemCodes.AGE_IN_MONTH,
              AnthroSystemCodes.WEIGHT,
            ],
          },
          descritpion: "",
          varialbleExplaination: {},
        },
        identifier: TREATMENT_PLAN_IDS.CNT_PHASE2_F100,
        code: MilkType.F100,
        type: RECOMMENDED_TREATMENT_TYPE.NUTRITIONAL,
        duration: { type: "while_in_phase" },
      },
      {
        applicabilityCondition: {
          condition: {
            value: fExp`(${AnthroSystemCodes.AGE_IN_MONTH} < 6) || (${AnthroSystemCodes.WEIGHT} < 3)`,
            variables: [
              AnthroSystemCodes.AGE_IN_MONTH,
              AnthroSystemCodes.WEIGHT,
            ],
          },
          descritpion: "",
          varialbleExplaination: {},
        },
        identifier: TREATMENT_PLAN_IDS.CNT_PHASE2_F100_DILUTED,
        code: MilkType.F100Diluted,
        duration: {
          type: "while_in_phase",
        },
        type: RECOMMENDED_TREATMENT_TYPE.NUTRITIONAL,
      },
    ],
    monitoringPlan: [
      {
        category: MONITORING_ELEMENT_CATEGORY.ANTHROPOMETRIC,
        code: AnthroSystemCodes.WEIGHT,
        frequency: { intervalUnit: "week", intervalValue: 1, countInUnit: 3 },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED,
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.CLINICAL_SIGNS,
        code: CLINICAL_SIGNS.EDEMA,
        frequency: { intervalUnit: "week", intervalValue: 1, countInUnit: 3 },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED,
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.ANTHROPOMETRIC,
        code: AnthroSystemCodes.MUAC,
        frequency: { intervalUnit: "week", intervalValue: 1, countInUnit: 1 },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED,
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.DATA_FIELD,
        code: DATA_POINTS.NUTRITIONAL_MILK_CONSUMPTION_G_PER_DAY,
        frequency: {
          intervalUnit: "day",
          intervalValue: 1,
          countInUnit: 1,
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED,
      },

      {
        category: MONITORING_ELEMENT_CATEGORY.DATA_FIELD,
        code: VITAL_SIGNS.TEMPERATURE,
        frequency: { intervalUnit: "day", intervalValue: 1, countInUnit: 1 },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED,
      },
      // Ici en vrai on doit faire le monitoring des signes cliniques aussi
    ],
    followUpPlan: [],
    prevPhase: CARE_PHASE_CODES.CNT_PHASE1,
    duration: {
      type: "while_phase",
    },
  },
  // {
  //   applicabilyConditions: [
  //     {
  //       condition: {
  //         value: ALWAYS_TRUE_CONDITION,
  //         variables: [],
  //       },
  //       description: "",
  //       varaibleExplaination: {},
  //     },
  //   ],
  //   code: CARE_PHASE_CODES.CNT_INFANT_LT6m_LT3kg,
  //   name: "Phase de prise en charge de MAS chez les moins de 6 mois ou moins de 3 kg allaité",
  //   description: "",
  //   duration: {
  //     type: 'while_phase'
  //   },
  //   failureCriteria: [],
  //   followUpPlan: [

  //   ],
  //   monitoringPlan: [
  //     {
  //       category: MONITORING_ELEMENT_CATEGORY.ANTHROPOMETRIC,
  //       code: AnthroSystemCodes.WEIGHT,
  //       frequency: {
  //         intervalUnit: 'day',
  //         intervalValue:1,
  //         countInUnit: 1
  //       },
  //       source: MONITORING_VALUE_SOURCE.NOT_CALCULATED
  //     }
  //   ], 

  //   recommendedTreatments: [],
  //   transitionCriteria: []
  // },
];
