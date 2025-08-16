import {
  DATA_POINTS,
  FieldDataType,
  GENERAL_CONDITION_VALUES,
  OBSERVATIONS,
  QUESTIONS,
  VITAL_SIGNS,
} from "../../constants";
import { DataFieldCategory, DataFieldReference } from "../../types";

export const dataFieldRefs: DataFieldReference[] = [
  {
    category: DataFieldCategory.VITAL_SIGN,
    code: VITAL_SIGNS.TEMPERATURE,
    label: "Température corporelle",
    question:
      "Quelle est la température axillaire du patient (en degrés Celsius) ?",
    type: FieldDataType.INT,
    defaultValue: 37,
  },
  {
    label: "Aspect des paupières pendant le sommeil",
    category: DataFieldCategory.QUESTION,
    code: QUESTIONS.EYELIDS_DURING_SLEEP,
    question:
      "L'enfant garde-t-il les yeux partiellement ouverts pendant son sommeil ?",
    type: FieldDataType.BOOL,
    defaultValue: false,
  },
  {
    label: "Clarté et conscience",
    category: DataFieldCategory.QUESTION,
    code: QUESTIONS.CONSCIOUSNESS_LEVEL,
    question:
      "L'enfant présente-t-il une diminution de sa réactivité ou de son niveau de conscience ?",
    type: FieldDataType.BOOL,
    defaultValue: false,
  },
  {
    label: "Nombre de selles liquides par jour",
    category: DataFieldCategory.DATA_POINTS,
    code: DATA_POINTS.LIQUID_STOOL_COUNT,
    question:
      "Combien de selles liquides l'enfant a-t-il eu durant les dernières 24 heures ?",
    type: FieldDataType.INT,
    defaultValue: 0,
  },
  {
    label: "Nombre de vomissements par jour",
    category: DataFieldCategory.DATA_POINTS,
    code: DATA_POINTS.VOMITING_COUNT,
    question: "Quel est le nombre de vomissements au cours des dernières 24h ?",
    type: FieldDataType.INT,
    defaultValue: 0,
  },
  {
    label: "État Général",
    category: DataFieldCategory.DATA_POINTS,
    code: DATA_POINTS.GENERAL_CONDITION,
    question:
      "Comment évaluez-vous l'état général du patient ? (normal ou altéré)",
    type: FieldDataType.ENUM,
    enumValue: [
      { value: GENERAL_CONDITION_VALUES.ALTERED, label: "Altéré" },
      { value: GENERAL_CONDITION_VALUES.NORMAL, label: "Normal" },
    ],
    defaultValue: GENERAL_CONDITION_VALUES.NORMAL,
  },
  {
    label: "Fréquence respiratoire",
    category: DataFieldCategory.VITAL_SIGN,
    code: VITAL_SIGNS.RESPIRATORY_RATE,
    question:
      "Combien de respirations par minute l'enfant effectue-t-il (sur une minute complète) ?",
    type: FieldDataType.INT,
    defaultValue: 0,
  },
  {
    label: "Tirage sous-costal",
    category: DataFieldCategory.OBSERVATION,
    code: OBSERVATIONS.SUBCOSTAL_RETRACTION,
    question:
      "Observez-vous un creusement sous les côtes lors de la respiration de l'enfant ?",
    type: FieldDataType.BOOL,
    defaultValue: false,
  },
  {
    label: "Présence d'œdèmes bilatéraux",
    category: DataFieldCategory.OBSERVATION,
    code: OBSERVATIONS.EDEMA_PRESENCE,
    question: "L'enfant présente-t-il des œdèmes bilatéraux prenant le godet ?",
    type: FieldDataType.BOOL,
    defaultValue: false,
  },
  {
    label: "Degré de sévérité des œdèmes",
    category: DataFieldCategory.OBSERVATION,
    code: OBSERVATIONS.EDEMA_GODET_COUNT,
    question:
      "Quel est le degré de sévérité des œdèmes ? (0=Absent, 1=Léger/pieds, 2=Modéré/jambes et mains, 3=Sévère/généralisé)",
    type: FieldDataType.RANGE,
    dataRange: [0, 3],
    defaultValue: 0,
  },
  {
    label: "État de la peau",
    category: DataFieldCategory.OBSERVATION,
    code: OBSERVATIONS.SKIN_CHANGES,
    question:
      "Observez-vous des altérations cutanées (peau sèche, crevasses) ?",
    type: FieldDataType.BOOL,
    defaultValue: false,
  },
  {
    label: "État des cheveux",
    category: DataFieldCategory.OBSERVATION,
    code: OBSERVATIONS.HAIR_CHANGES,
    question:
      "Les cheveux sont-ils secs, cassants, ternes ou anormalement fins ?",
    type: FieldDataType.BOOL,
    defaultValue: false,
  },
  {
    label: "Altérations des ongles",
    category: DataFieldCategory.OBSERVATION,
    code: OBSERVATIONS.NAIL_CHANGES,
    question: "Les ongles présentent-ils des striations ou des déformations ?",
    type: FieldDataType.BOOL,
    defaultValue: false,
  },
  {
    label: "État de la cornée",
    category: DataFieldCategory.OBSERVATION,
    code: OBSERVATIONS.CORNEA_CHANGES,
    question: "Observez-vous une sclérose ou une opacité de la cornée ?",
    type: FieldDataType.BOOL,
    defaultValue: false,
  },
  {
    label: "État de la langue et la bouche",
    category: DataFieldCategory.OBSERVATION,
    code: OBSERVATIONS.MOUTH_CHANGES,
    question:
      "Y a-t-il présence d'une langue dépapillée ou d'une stomatite excoriante ?",
    type: FieldDataType.BOOL,
    defaultValue: false,
  },
  {
    label: "Signes hémorragiques",
    category: DataFieldCategory.OBSERVATION,
    code: OBSERVATIONS.HEMORRHAGE_SIGNS,
    question: "Observez-vous des pétéchies ou des ecchymoses ?",
    type: FieldDataType.BOOL,
    defaultValue: false,
  },
  {
    label: "Perte musculaire",
    category: DataFieldCategory.OBSERVATION,
    code: OBSERVATIONS.MUSCLE_LOSS,
    question: "Observez-vous une perte de la masse musculaire ?",
    type: FieldDataType.BOOL,
    defaultValue: false,
  },
  {
    label: "Signes neurologiques",
    category: DataFieldCategory.OBSERVATION,
    code: OBSERVATIONS.NEURO_SIGNS,
    question: "L'enfant présente-t-il des paresthésies ou une ataxie ?",
    type: FieldDataType.BOOL,
    defaultValue: false,
  },
  {
    label: "Hépatoméalie",
    category: DataFieldCategory.OBSERVATION,
    code: OBSERVATIONS.HEPATOMEGALY,
    question: "Constatez-vous une hépatomégalie ?",
    type: FieldDataType.BOOL,
    defaultValue: false,
  },
  {
    label: "Allaitement actuel",
    category: DataFieldCategory.DATA_POINTS,
    code: DATA_POINTS.IS_BREASTFED,
    question: "L’enfant est-il actuellement allaité (lait maternel) ?",
    type: FieldDataType.BOOL,
    defaultValue: false,
  },
  {
    label: "Quantité quotidienne de lait thérapeutique",
    category: DataFieldCategory.DATA_POINTS,
    code: DATA_POINTS.NUTRITIONAL_MILK_CONSUMPTION_G_PER_DAY,
    question:
      "Quelle est la quantité totale de lait thérapeutique consommée par l’enfant au cours des dernières 24 heures ?",
    type: FieldDataType.QUANTITY,
    defaultValue: 0,
    units: {
      available: ["g", "ml"],
      default: "g",
    },
  },
];
