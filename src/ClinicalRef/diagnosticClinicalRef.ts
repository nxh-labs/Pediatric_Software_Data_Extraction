import {
  CLINICAL_SIGNS,
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
        code: OBSERVATIONS.EDEMA_PRESENCE,
        required: true,
      },
      {
        code: OBSERVATIONS.EDEMA_GODET_COUNT,
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
        code: OBSERVATIONS.SKIN_CHANGES,

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
        code: OBSERVATIONS.HAIR_CHANGES,
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
        code: OBSERVATIONS.NAIL_CHANGES,
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
        code: OBSERVATIONS.CORNEA_CHANGES,
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
        code: OBSERVATIONS.MOUTH_CHANGES,
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
        code: OBSERVATIONS.HEMORRHAGE_SIGNS,
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
        code: OBSERVATIONS.MUSCLE_LOSS,
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
        code: OBSERVATIONS.NEURO_SIGNS,
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
        code: OBSERVATIONS.HEPATOMEGALY,
        required: true,
      },
    ],
    description: "Hépatomégalie pouvant indiquer des carences en protéines",
  },
];
