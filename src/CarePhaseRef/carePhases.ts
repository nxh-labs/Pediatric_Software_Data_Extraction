import { AnthroSystemCodes, APPETITE_TEST_CODES, CALCULATED_MONITORING_ELEMENT, CARE_SESSION, CLINICAL_SIGNS, COMPLICATION_CODES, ConditionResult, initialValueCode, MEDICINE_CODES, OBSERVATIONS, VITAL_SIGNS } from "../../constants";
import { CARE_PHASE_CODES, CarePhaseReference, MilkType, MONITORING_ELEMENT_CATEGORY, MONITORING_VALUE_SOURCE, RECOMMENDED_TREATMENT_TYPE } from "../../types";
import { f, fExp } from "../../utils";

export const CARE_PHASES: CarePhaseReference[] = [
  {
    code: CARE_PHASE_CODES.CNT_PHASE1,
    name: "Phase 1 (Aiguë) du traitement au CNT",
    description:
      "Stabilisation métabolique du patient sans chercher la prise de poids.",
    failureCriteria: [
      {
        condition: { value: fExp`(${CARE_SESSION.DAYS_IN_PHASE} >= 4) && (${APPETITE_TEST_CODES.CODE} == ${APPETITE_TEST_CODES.NEGATIVE})`, variables: [CARE_SESSION.DAYS_IN_PHASE, APPETITE_TEST_CODES.CODE] },
        description: "Absence de retour de l'appétit au 4ème jour.",
        variablesExplanation: {
          [CARE_SESSION.DAYS_IN_PHASE]: '',
          [APPETITE_TEST_CODES.CODE]: ''
        },
      }, {
        condition: {
          value: fExp`(${CARE_SESSION.DAYS_IN_PHASE} >=4) && (${OBSERVATIONS.EDEMA_GODET_COUNT} >= ${initialValueCode(OBSERVATIONS.EDEMA_GODET_COUNT)})`,
          variables: []
        },
        description: "Absence de perte d'œdèmes au 4ème jour.",
        variablesExplanation: {
          [CARE_SESSION.DAYS_IN_PHASE]: '',
          [initialValueCode(OBSERVATIONS.EDEMA_GODET_COUNT)]: '',
          [OBSERVATIONS.EDEMA_GODET_COUNT]: ''
        },

      }
      , {
        condition: {
          value: fExp`(${CARE_SESSION.DAYS_IN_PHASE}>=10) && (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.True})`,
          variables: [CARE_SESSION.DAYS_IN_PHASE, CLINICAL_SIGNS.EDEMA]
        },
        description: "Présence d'œdèmes persistants au 10ème jour.",
        variablesExplanation: {}
      }
    ],
    transitionCriteria: [
      {
        condition: {
          value: fExp`(${APPETITE_TEST_CODES.CODE} == ${APPETITE_TEST_CODES.POSITIVE}) && (${COMPLICATION_CODES.COMPLICATIONS_NUMBER} == 0) && (${OBSERVATIONS.EDEMA_GODET_COUNT} <= 1)`,
          variables: [APPETITE_TEST_CODES.CODE, COMPLICATION_CODES.COMPLICATIONS_NUMBER, OBSERVATIONS.EDEMA_GODET_COUNT]
        },
        description: "Retour de l'appétit, stabilité clinique et début de fonte des œdèmes.",
        variablesExplanation: {}
      }
    ],
    recommendedTreatments: [
      {
        code: MilkType.F75,
        type: RECOMMENDED_TREATMENT_TYPE.NUTRITIONAL,
        duration: {
          type: 'while_in_phase',
        }
      },
      {
        code: MEDICINE_CODES.AMOX,
        type: RECOMMENDED_TREATMENT_TYPE.SYSTEMATIC,
        duration: {
          type: 'while_in_phase'
        }
      },
    ],
    monitoringPlan: [
      {
        category: MONITORING_ELEMENT_CATEGORY.ANTHROPOMETRIC,
        code: AnthroSystemCodes.WEIGHT,
        frequency: {
          intervalUnit: 'day',
          intervalValue: 1,
          countInUnit: 1
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED
      }, {
        category: MONITORING_ELEMENT_CATEGORY.DATA_FIELD,
        code: OBSERVATIONS.EDEMA_GODET_COUNT,
        frequency: {
          intervalUnit: "day",
          intervalValue: 1,
          countInUnit: 1
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.DATA_FIELD,
        code: VITAL_SIGNS.TEMPERATURE,
        frequency: {
          intervalUnit: 'day',
          intervalValue: 1,
          countInUnit: 2
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.CLINICAL_SIGNS,
        code: CLINICAL_SIGNS.DIARRHEA,
        frequency: {
          intervalUnit: 'day',
          intervalValue: 1,
          countInUnit: 1
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.CLINICAL_SIGNS,
        code: CLINICAL_SIGNS.VOMITING,
        frequency: {
          intervalUnit: 'day',
          intervalValue: 1,
          countInUnit: 1
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.CLINICAL_SIGNS,
        code: CLINICAL_SIGNS.RESPIRATORY_DISTRESS,
        frequency: {
          intervalUnit: 'day',
          intervalValue: 1,
          countInUnit: 1
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.CLINICAL_SIGNS,
        code: CLINICAL_SIGNS.LIVER,
        frequency: {
          intervalUnit: 'day',
          intervalValue: 1,
          countInUnit: 1
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED
      },
      {
        category: MONITORING_ELEMENT_CATEGORY.ANTHROPOMETRIC,
        code: AnthroSystemCodes.MUAC,
        frequency: {
          intervalUnit: 'week',
          intervalValue: 1,
          countInUnit: 1
        },
        source: MONITORING_VALUE_SOURCE.NOT_CALCULATED
      }
    ],
  },
  {
    code: CARE_PHASE_CODES.CNT_TRANS_PHASE,
    name: "Phase de Transition du traitement au CNT",
    description: "Préparation à la phase de réhabilitation nutritionnelle avec introduction de l'ATPE ou du F-100.",

    failureCriteria: [
      {
        condition: {
          value: fExp`((${CLINICAL_SIGNS.LIVER} == ${ConditionResult.True}) || (${CALCULATED_MONITORING_ELEMENT.WEIGHT_GAIN_RATE_KG_DAY} > ${10 / 1000}) || (${CLINICAL_SIGNS.RESPIRATORY_DISTRESS} == ${ConditionResult.True}))`,
          variables: [
            CLINICAL_SIGNS.LIVER, CALCULATED_MONITORING_ELEMENT.WEIGHT_GAIN_RATE_KG_DAY, CLINICAL_SIGNS.RESPIRATORY_DISTRESS
          ]
        },
        description: "Signes de surcharge ou gain de poids trop rapide (>10g/kg/j), indiquant un risque. Le patient doit retourner en Phase 1.",
        variablesExplanation: {
          [CALCULATED_MONITORING_ELEMENT.WEIGHT_GAIN_RATE_KG_DAY]: "Gain de poids en g/kg/jour",
          [CLINICAL_SIGNS.LIVER]: "Augmentation du volume du foie",
          [CLINICAL_SIGNS.RESPIRATORY_DISTRESS]: "Augmentation de la fréquence respiratoire"
        }
      }, {
        condition: {
          value: fExp`(${CLINICAL_SIGNS.DIARRHEA} == ${ConditionResult.True}) && (${CALCULATED_MONITORING_ELEMENT.WEIGHT_CHANGE_RATE_DURING_DIARRHEA} < 0 )`,
          variables: [
            CLINICAL_SIGNS.DIARRHEA, CALCULATED_MONITORING_ELEMENT.WEIGHT_CHANGE_RATE_DURING_DIARRHEA
          ]
        },
        description: "Développement d'une diarrhée de renutrition entraînant une perte de poids.",
        variablesExplanation: {
          [CLINICAL_SIGNS.DIARRHEA]: "Présence de diarrhée",
          [CALCULATED_MONITORING_ELEMENT.WEIGHT_CHANGE_RATE_DURING_DIARRHEA]: "Le patient perds du poids durant la diarrhée."
        }
      }
    ],
    transitionCriteria: [
      {
        // ici on a besoin de capturer la consommation du milk (le pourcentage) et pourcela j'ai inserre une variable donc cela doit etre ajouter au field afin qu'il puisse fournir les donnee necessiare pour caculer cela . 
        condition: {
           value: fExp``,
           variables:[]
        },
        description: '',
        variablesExplanation: {}
      }
    ],
    recommendedTreatments: [
      {
        code: MEDICINE_CODES.AMOX,
        duration: {
          type: 'days',
          value: 5
        },
        type: RECOMMENDED_TREATMENT_TYPE.SYSTEMATIC,

      },
      {
        code: MilkType.F100,
        duration: {
          type: 'while_in_phase',

        },
        type: RECOMMENDED_TREATMENT_TYPE.NUTRITIONAL
      }
    ],

    monitoringPlan: []
  }
];



/**


export const TransitionPhase = {
    code: "CNT_TRANS_PHASE", // CARE_PHASE_CODES.CNT_TRANS_PHASE
    name: "Phase de Transition du traitement au CNT",
    description: "Préparation à la phase de réhabilitation nutritionnelle avec introduction de l'ATPE ou du F-100.",

    // Failure criteria for this phase are actually criteria for returning to Phase 1
    failureCriteria: [
      {
        condition: {
          value: "(weight_gain_rate_g_kg_day > 10) || (liver_enlargement == true) || (respiratory_rate_increase > 5)",
          variables: ["weight_gain_rate_g_kg_day", "liver_enlargement", "respiratory_rate_increase"]
        },
        description: "Signes de surcharge ou gain de poids trop rapide (>10g/kg/j), indiquant un risque. Le patient doit retourner en Phase 1.",
        variablesExplanation: {
          "weight_gain_rate_g_kg_day": "Gain de poids en g/kg/jour",
          "liver_enlargement": "Augmentation du volume du foie",
          "respiratory_rate_increase": "Augmentation de la fréquence respiratoire de plus de 5 cycles/min"
        },
      },
      {
        condition: {
          value: "(has_diarrhea == true) && (is_losing_weight == true)",
          variables: ["has_diarrhea", "is_losing_weight"]
        },
        description: "Développement d'une diarrhée de renutrition entraînant une perte de poids.",
        variablesExplanation: {
          "has_diarrhea": "Présence de diarrhée",
          "is_losing_weight": "Le patient perd du poids"
        }
      }
    ],

    // The goal of this phase is to meet these criteria to be transferred to outpatient care (CNA)
    transitionCriteria: [
      {
        condition: {
          // Note: The 90% RUTF consumption rule is complex. A successful appetite test is a good starting point.
          value: "(appetite_test_result == 'POSITIVE') && (complications_number == 0) && (edema == 0)",
          variables: ["appetite_test_result", "complications_number", "edema"]
        },
        description: "Appétit bon, absence de complications et fonte totale des œdèmes. Prêt pour le transfert en CNA.",
        variablesExplanation: {}
      }
    ],

    // The main treatment changes to F-100 or RUTF (ATPE)
    recommendedTreatments: [
      {
        code: "F100", // or ATPE, as the protocol prefers ATPE when possible
        type: "nutritional", // RECOMMENDED_TREATMENT_TYPE.NUTRITIONAL
        duration: {
          type: 'while_in_phase',
        }
      },
      {
        // Antibiotics started in Phase 1 are continued if necessary
        code: "AMOX", // MEDICINE_CODES.AMOX
        type: "systematic",
        duration: {
          type: 'days',
          value: 5 // Total duration is typically 5-7 days from the start of Phase 1
        }
      },
    ],

    // The protocol states that monitoring is the same as in Phase 1
    monitoringPlan: [
      {
        category: "anthropometric",
        code: "weight",
        frequency: { intervalUnit: 'day', intervalValue: 1, countInUnit: 1 },
        source: "not_calculated"
      },
      {
        category: "data_field",
        code: "edema_godet_count",
        frequency: { intervalUnit: "day", intervalValue: 1, countInUnit: 1 },
        source: "not_calculated"
      },
      {
        category: "data_field",
        code: "temperature",
        frequency: { intervalUnit: 'day', intervalValue: 1, countInUnit: 2 },
        source: "not_calculated"
      },
      // ... etc., the rest of the Phase 1 monitoring plan can be copied here
    ],
  };

 */
