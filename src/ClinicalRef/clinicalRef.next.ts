import {
  CLINICAL_SIGNS,
  VITAL_SIGNS,
  QUESTIONS,
  DATA_POINTS,
  GENERAL_CONDITION_VALUES,
  OBSERVATIONS,
  AnthroSystemCodes,
  MONTH_IN_YEARS,
  ConditionResult,
} from "../../constants";
import { Next_ClinicalSignReference } from "../../types";
import { fExp } from "../../utils";
import { next_diagnosticClinicalRefs } from "./diagnosticClinicalRef.next";

export const next_clinicalSignRefs: Next_ClinicalSignReference[] = [
  {
    name: "Hyperthermie",
    code: CLINICAL_SIGNS.HYPERTHERMIA,
    description:
      "Une hyperthermie est définie par une température corporelle supérieure ou égale à 38.5°C",
    evaluationRule: {
      value: fExp`${VITAL_SIGNS.TEMPERATURE} >= 38.5`,
      variables: [VITAL_SIGNS.TEMPERATURE],
    },
    data: [
      {
        code: VITAL_SIGNS.TEMPERATURE,
        required: true,
      },
    ],
  },
  {
    name: "Hypothermie",
    code: CLINICAL_SIGNS.HYPOTHERMIA,
    description:
      "Une hypothermie est définie par une température corporelle inférieure à 35°C",
    evaluationRule: {
      value: fExp`${VITAL_SIGNS.TEMPERATURE} < 35`,
      variables: [VITAL_SIGNS.TEMPERATURE],
    },
    data: [
      {
        code: VITAL_SIGNS.TEMPERATURE,
        required: true,
      },
    ],
  },
  {
    name: "Hypoglycémie",
    code: CLINICAL_SIGNS.HYPOGLYCEMIA,
    description:
      "Une hypoglycémie est suspectée lorsque le patient présente : des paupières ouvertes pendant le sommeil, une température corporelle inférieure à 36.5°C et/ou une altération du niveau de conscience",
    evaluationRule: {
      value: fExp`(${QUESTIONS.EYELIDS_DURING_SLEEP} == ${ConditionResult.True}) || ((${VITAL_SIGNS.TEMPERATURE} < 36.5) && (${QUESTIONS.CONSCIOUSNESS_LEVEL} == ${ConditionResult.True}))`,
      variables: [
        QUESTIONS.EYELIDS_DURING_SLEEP,
        VITAL_SIGNS.TEMPERATURE,
        QUESTIONS.CONSCIOUSNESS_LEVEL,
      ],
    },
    data: [
      {
        code: QUESTIONS.EYELIDS_DURING_SLEEP,
        required: true,
      },
      {
        code: VITAL_SIGNS.TEMPERATURE,
        required: true,
      },
      {
        code: QUESTIONS.CONSCIOUSNESS_LEVEL,
        required: true,
      },
    ],
  },
  {
    name: "Diarrhée",
    code: CLINICAL_SIGNS.DIARRHEA,
    description:
      "Une diarrhée est définie par un nombre de selles liquides supérieur ou égal à trois par jour",
    evaluationRule: {
      value: fExp`${DATA_POINTS.LIQUID_STOOL_COUNT} >= 3`,
      variables: [DATA_POINTS.LIQUID_STOOL_COUNT],
    },
    data: [
      {
        code: DATA_POINTS.LIQUID_STOOL_COUNT,
        required: true,
      },
    ],
  },
  {
    name: "Vomissement",
    code: CLINICAL_SIGNS.VOMITING,
    description:
      "Un vomissement est défini par un nombre de vomissements supérieur ou égal à 1 par jour",
    evaluationRule: {
      value: fExp`${DATA_POINTS.VOMITING_COUNT} >= 1`,
      variables: [DATA_POINTS.VOMITING_COUNT],
    },
    data: [
      {
        code: DATA_POINTS.VOMITING_COUNT,
        required: true,
      },
    ],
  },
  {
    name: "Patient Sévèrement malade",
    code: CLINICAL_SIGNS.SEVERE_SICKNESS,
    description:
      "Un patient est sévèrement malade lorsque le patient a une condition générale altérée, ou une hypothermie, ou une hyperthermie",
    evaluationRule: {
      value: fExp`(${DATA_POINTS.GENERAL_CONDITION} =='${GENERAL_CONDITION_VALUES.ALTERED}') || (${VITAL_SIGNS.TEMPERATURE} >= 38.5) || (${VITAL_SIGNS.TEMPERATURE} < 35)`,
      variables: [DATA_POINTS.GENERAL_CONDITION, VITAL_SIGNS.TEMPERATURE],
    },
    data: [
      {
        code: DATA_POINTS.GENERAL_CONDITION,
        required: true,
      },
      {
        code: VITAL_SIGNS.TEMPERATURE,
        required: true,
      },
    ],
  },
  {
    name: "Détresse respiratoire",
    code: CLINICAL_SIGNS.RESPIRATORY_DISTRESS,
    description:
      "Le patient présente une détresse respiratoire lorsque la fréquence respiratoire par minute est supérieure à l'intervalle normal pour l'âge ou présente un tirage sous-costal.",
    evaluationRule: {
      value: fExp`(${OBSERVATIONS.SUBCOSTAL_RETRACTION} == ${
        ConditionResult.True
      }) ||
        ((${AnthroSystemCodes.AGE_IN_MONTH} < 2) && (${
        VITAL_SIGNS.RESPIRATORY_RATE
      } > 60)) ||
        ((${AnthroSystemCodes.AGE_IN_MONTH} >= 2) && (${
        AnthroSystemCodes.AGE_IN_MONTH
      } < ${MONTH_IN_YEARS}) && (${VITAL_SIGNS.RESPIRATORY_RATE} > 50)) ||
        ((${AnthroSystemCodes.AGE_IN_MONTH} >= ${MONTH_IN_YEARS}) && (${
        AnthroSystemCodes.AGE_IN_MONTH
      } < ${MONTH_IN_YEARS * 5}) && (${VITAL_SIGNS.RESPIRATORY_RATE} > 40)) ||
        ((${AnthroSystemCodes.AGE_IN_MONTH} >= ${MONTH_IN_YEARS * 5}) && (${
        VITAL_SIGNS.RESPIRATORY_RATE
      } > 30))`,
      variables: [
        VITAL_SIGNS.RESPIRATORY_RATE,
        OBSERVATIONS.SUBCOSTAL_RETRACTION,
        AnthroSystemCodes.AGE_IN_MONTH,
      ],
    },
    data: [
      {
        code: VITAL_SIGNS.RESPIRATORY_RATE,
        required: true,
      },
      {
        code: OBSERVATIONS.SUBCOSTAL_RETRACTION,
        required: true,
      },
    ],
  },
  ...next_diagnosticClinicalRefs,
];
