import {
  CLINICAL_SIGNS,
  ClinicalDataType,
  ConditionResult,
  OBSERVATIONS,
} from "../../constants";
import { ClinicalSignReference } from "../../types";
import { fExp } from "../../utils";

export const diagnosticClinicalRefs: ClinicalSignReference[] = [
  {
    name: "Œdèmes bilatéraux",
    code: CLINICAL_SIGNS.EDEMA,
    evaluationRule: {
      value: fExp`${OBSERVATIONS.EDEMA_PRESENCE} == ${ConditionResult.True}`,
      variables: [OBSERVATIONS.EDEMA_PRESENCE],
    },
    data: [
      {
        name: "Présence d'œdèmes bilatéraux",
        code: OBSERVATIONS.EDEMA_PRESENCE,
        question:
          "L'enfant présente-t-il des œdèmes bilatéraux prenant le godet ?",
        dataType: ClinicalDataType.BOOL,
        required: true,
      },
      {
        name: "Degré de sévérité des œdèmes",
        code: OBSERVATIONS.EDEMA_GODET_COUNT,
        question:
          "Quel est le degré de sévérité des œdèmes ? (0=Absent, 1=Léger/pieds, 2=Modéré/jambes et mains, 3=Sévère/généralisé)",
        dataType: ClinicalDataType.RANGE,
        dataRange: [0, 3],
        required: false,
      },
    ],
    description:
      "Accumulation bilatérale de liquide dans les tissus mous, prenant le godet à la pression. Indicateur de déficit protéique.",
  },
  {
    name: "Signes cutanés",
    code: CLINICAL_SIGNS.SKIN,
    evaluationRule: {
      value: fExp`${OBSERVATIONS.SKIN_CHANGES} == ${ConditionResult.True}`,
      variables: [OBSERVATIONS.SKIN_CHANGES],
    },
    data: [
      {
        name: "État de la peau",
        code: OBSERVATIONS.SKIN_CHANGES,
        question:
          "Observez-vous des altérations cutanées (peau sèche, crevasses) ?",
        dataType: ClinicalDataType.BOOL,
        required: true,
      },
    ],
    description:
      "Altérations cutanées pouvant indiquer des carences en vitamine A, zinc ou acides gras essentiels",
  },
  {
    name: "Signes capillaires",
    code: CLINICAL_SIGNS.HAIR,
    evaluationRule: {
      value: fExp`${OBSERVATIONS.HAIR_CHANGES} == ${ConditionResult.True}`,
      variables: [OBSERVATIONS.HAIR_CHANGES],
    },
    data: [
      {
        name: "État des cheveux",
        code: OBSERVATIONS.HAIR_CHANGES,
        question:
          "Les cheveux sont-ils secs, cassants, ternes ou anormalement fins ?",
        dataType: ClinicalDataType.BOOL,
        required: true,
      },
    ],
    description:
      "Altérations capillaires pouvant indiquer des carences en protéines ou zinc",
  },
  {
    name: "État des ongles",
    code: CLINICAL_SIGNS.NAILS,
    evaluationRule: {
      value: fExp`${OBSERVATIONS.NAIL_CHANGES} == ${ConditionResult.True}`,
      variables: [OBSERVATIONS.NAIL_CHANGES],
    },
    data: [
      {
        name: "Altérations des ongles",
        code: OBSERVATIONS.NAIL_CHANGES,
        question:
          "Les ongles présentent-ils des striations ou des déformations ?",
        dataType: ClinicalDataType.BOOL,
        required: true,
      },
    ],
    description:
      "Modifications des ongles pouvant indiquer des carences en protéines ou zinc",
  },
  {
    name: "Signes de la cornée",
    code: CLINICAL_SIGNS.CORNEA,
    evaluationRule: {
      value: fExp`${OBSERVATIONS.CORNEA_CHANGES} == ${ConditionResult.True}`,
      variables: [OBSERVATIONS.CORNEA_CHANGES],
    },
    data: [
      {
        name: "État de la cornée",
        code: OBSERVATIONS.CORNEA_CHANGES,
        question: "Observez-vous une sclérose ou une opacité de la cornée ?",
        dataType: ClinicalDataType.BOOL,
        required: true,
      },
    ],
    description:
      "Altérations de la cornée pouvant indiquer une carence en vitamine A",
  },
  {
    name: "Signes buccaux",
    code: CLINICAL_SIGNS.MOUTH,
    evaluationRule: {
      value: fExp`${OBSERVATIONS.MOUTH_CHANGES} == ${ConditionResult.True}`,
      variables: [OBSERVATIONS.MOUTH_CHANGES],
    },
    data: [
      {
        name: "État de la langue et la bouche",
        code: OBSERVATIONS.MOUTH_CHANGES,
        question:
          "Y a-t-il présence d'une langue dépapillée ou d'une stomatite excoriante ?",
        dataType: ClinicalDataType.BOOL,
        required: true,
      },
    ],
    description:
      "Altérations buccales pouvant indiquer des carences en vitamine B12, folates, riboflavine, fer, ou niacine",
  },
  {
    name: "Signes hémorragiques",
    code: CLINICAL_SIGNS.HEMORRHAGE,
    evaluationRule: {
      value: fExp`${OBSERVATIONS.HEMORRHAGE_SIGNS} == ${ConditionResult.True}`,
      variables: [OBSERVATIONS.HEMORRHAGE_SIGNS],
    },
    data: [
      {
        name: "Signes hémorragiques",
        code: OBSERVATIONS.HEMORRHAGE_SIGNS,
        question: "Observez-vous des pétéchies ou des ecchymoses ?",
        dataType: ClinicalDataType.BOOL,
        required: true,
      },
    ],
    description:
      "Signes hémorragiques pouvant indiquer des carences en vitamines K ou C",
  },
  {
    name: "État musculaire",
    code: CLINICAL_SIGNS.MUSCLE,
    evaluationRule: {
      value: `${OBSERVATIONS.MUSCLE_LOSS} == ${ConditionResult.True}`,
      variables: [OBSERVATIONS.MUSCLE_LOSS],
    },
    data: [
      {
        name: "Perte musculaire",
        code: OBSERVATIONS.MUSCLE_LOSS,
        question: "Observez-vous une perte de la masse musculaire ?",
        dataType: ClinicalDataType.BOOL,
        required: true,
      },
    ],
    description:
      "Perte de masse musculaire pouvant indiquer des carences en protéines ou sélénium",
  },
  {
    name: "Signes neurologiques",
    code: CLINICAL_SIGNS.NEURO,
    evaluationRule: {
      value: fExp`${OBSERVATIONS.NEURO_SIGNS} == ${ConditionResult.True}`,
      variables: [OBSERVATIONS.NEURO_SIGNS],
    },
    data: [
      {
        name: "Signes neurologiques",
        code: OBSERVATIONS.NEURO_SIGNS,
        question: "L'enfant présente-t-il des paresthésies ou une ataxie ?",
        dataType: ClinicalDataType.BOOL,
        required: true,
      },
    ],
    description:
      "Signes neurologiques pouvant indiquer des carences en thiamine ou vitamine B12",
  },
  {
    name: "État du foie",
    code: CLINICAL_SIGNS.LIVER,
    evaluationRule: {
      value: fExp`${OBSERVATIONS.HEPATOMEGALY} == ${ConditionResult.True}`,
      variables: [OBSERVATIONS.HEPATOMEGALY],
    },
    data: [
      {
        name: "Hépatomégalie",
        code: OBSERVATIONS.HEPATOMEGALY,
        question: "Constatez-vous une hépatomégalie ?",
        dataType: ClinicalDataType.BOOL,
        required: true,
      },
    ],
    description: "Hépatomégalie pouvant indiquer des carences en protéines",
  },
];
