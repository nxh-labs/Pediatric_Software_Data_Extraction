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
  ClinicalDataType,
} from "../../constants";
import { ClinicalSignReference } from "../../types";
import { f } from "../../utils";
import { diagnosticClinicalRefs } from "./diagnosticClinicalRef";

export const clinicalSignRefs: ClinicalSignReference[] = [
  {
    name: "Hyperthermie",
    code: CLINICAL_SIGNS.HYPERTHERMIA,
    description:
      "Une hyperthermie est définie par une température corporelle supérieure ou égale à 38.5°C",
    evaluationRule: {
      value: f(`${VITAL_SIGNS.TEMPERATURE} >= 38.5`),
      variables: [VITAL_SIGNS.TEMPERATURE],
    },
    data: [
      {
        name: "Température corporelle",
        code: VITAL_SIGNS.TEMPERATURE,
        question:
          "Quelle est la température axillaire du patient (en degrés Celsius) ?", // Plus précis
        dataType: ClinicalDataType.INT,
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
      value: f(`${VITAL_SIGNS.TEMPERATURE} < 35`),
      variables: [VITAL_SIGNS.TEMPERATURE],
    },
    data: [
      {
        name: "Température corporelle",
        code: VITAL_SIGNS.TEMPERATURE,
        question:
          "Quelle est la température corporelle du patient (température axillaire) ?",
        dataType: ClinicalDataType.INT,
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
      value: f(
        `(${QUESTIONS.EYELIDS_DURING_SLEEP} == ${ConditionResult.True}) || (${VITAL_SIGNS.TEMPERATURE} < 36.5 && ${QUESTIONS.CONSCIOUSNESS_LEVEL} == ${ConditionResult.True})`
      ),
      variables: [
        QUESTIONS.EYELIDS_DURING_SLEEP,
        VITAL_SIGNS.TEMPERATURE,
        QUESTIONS.CONSCIOUSNESS_LEVEL,
      ],
    },
    data: [
      {
        name: "Aspect des paupières pendant le sommeil",
        code: QUESTIONS.EYELIDS_DURING_SLEEP,
        question:
          "L'enfant garde-t-il les yeux partiellement ouverts pendant son sommeil ?", // Plus descriptif
        dataType: ClinicalDataType.BOOL,
        required: true,
      },
      {
        name: "Température corporelle",
        code: VITAL_SIGNS.TEMPERATURE,
        question:
          "Quelle est la température corporelle du patient (température axillaire) ?",
        dataType: ClinicalDataType.INT,
        required: true,
      },
      {
        name: "Clarté et conscience",
        code: QUESTIONS.CONSCIOUSNESS_LEVEL,
        question:
          "L'enfant présente-t-il une diminution de sa réactivité ou de son niveau de conscience ?", // Plus précis
        dataType: ClinicalDataType.BOOL,
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
      value: f(`${DATA_POINTS.LIQUID_STOOL_COUNT} >= 3`),
      variables: [DATA_POINTS.LIQUID_STOOL_COUNT],
    },
    data: [
      {
        name: "Nombre de selles liquides par jour",
        code: DATA_POINTS.LIQUID_STOOL_COUNT,
        question:
          "Combien de selles liquides l'enfant a-t-il eu durant les dernières 24 heures ?", // Plus précis sur la période
        dataType: ClinicalDataType.INT,
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
      value: f(`${DATA_POINTS.VOMITING_COUNT} >= 1`),
      variables: [DATA_POINTS.VOMITING_COUNT],
    },
    data: [
      {
        name: "Nombre de vomissements par jour",
        code: DATA_POINTS.VOMITING_COUNT,
        question:
          "Quel est le nombre de vomissements au cours des dernières 24h ?",
        dataType: ClinicalDataType.INT,
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
      value: f(
        `(${DATA_POINTS.GENERAL_CONDITION} =='${GENERAL_CONDITION_VALUES.ALTERED}') || (${VITAL_SIGNS.TEMPERATURE} >= 38.5) || (${VITAL_SIGNS.TEMPERATURE} < 35)`
      ),
      variables: [DATA_POINTS.GENERAL_CONDITION, VITAL_SIGNS.TEMPERATURE],
    },
    data: [
      {
        name: "État Général",
        code: DATA_POINTS.GENERAL_CONDITION,
        question:
          "Comment évaluez-vous l'état général du patient ? (normal ou altéré)", // Plus clair sur les options
        dataType: ClinicalDataType.ENUM,
        required: true,
        enumValue: [
          GENERAL_CONDITION_VALUES.ALTERED,
          GENERAL_CONDITION_VALUES.NORMAL,
        ],
      },
      {
        name: "Température Corporelle",
        code: VITAL_SIGNS.TEMPERATURE,
        question:
          "Quelle est la température corporelle du patient (température axillaire) ?",
        dataType: ClinicalDataType.INT,
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
      value: f(`(${OBSERVATIONS.SUBCOSTAL_RETRACTION} == ${
        ConditionResult.True
      }) ||
        (${AnthroSystemCodes.AGE_IN_MONTH} < 2 && ${
        VITAL_SIGNS.RESPIRATORY_RATE
      } > 60) ||
        (${AnthroSystemCodes.AGE_IN_MONTH} >= 2 && ${
        AnthroSystemCodes.AGE_IN_MONTH
      } < ${MONTH_IN_YEARS} && ${VITAL_SIGNS.RESPIRATORY_RATE} > 50) ||
        (${AnthroSystemCodes.AGE_IN_MONTH} >= ${MONTH_IN_YEARS} && ${
        AnthroSystemCodes.AGE_IN_MONTH
      } < ${MONTH_IN_YEARS * 5} && ${VITAL_SIGNS.RESPIRATORY_RATE} > 40) ||
        (${AnthroSystemCodes.AGE_IN_MONTH} >= ${MONTH_IN_YEARS * 5} && ${
        VITAL_SIGNS.RESPIRATORY_RATE
      } > 30)`),
      variables: [
        VITAL_SIGNS.RESPIRATORY_RATE,
        OBSERVATIONS.SUBCOSTAL_RETRACTION,
        AnthroSystemCodes.AGE_IN_MONTH,
      ],
    },
    data: [
      {
        name: "Fréquence respiratoire",
        code: VITAL_SIGNS.RESPIRATORY_RATE,
        question:
          "Combien de respirations par minute l'enfant effectue-t-il (sur une minute complète) ?", // Plus précis sur la méthode
        dataType: ClinicalDataType.INT,
        required: true,
      },
      {
        name: "Tirage sous-costal",
        code: OBSERVATIONS.SUBCOSTAL_RETRACTION,
        question:
          "Observez-vous un creusement sous les côtes lors de la respiration de l'enfant ?", // Plus descriptif
        dataType: ClinicalDataType.BOOL,
        required: true,
      },
    ],
  },
  ...diagnosticClinicalRefs,
];
