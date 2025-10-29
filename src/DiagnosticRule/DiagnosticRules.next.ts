
import { NextDiagnosticRule } from "../../types/DiagnosticRule.next";
import { fExp } from "../../utils";
import {
  CLINICAL_SIGNS,
  ZScorePossibleValueLimit,
  ConditionResult,
  AnthroSystemCodes,
  OBSERVATIONS,
  DIAGNOSTIC_CODES,
  MONTH_IN_YEARS,
} from "../../constants";

export const nextDiagnosticRules: NextDiagnosticRule[] = [
  {
    name: "Malnutrition aiguë sévère",
    code: DIAGNOSTIC_CODES.SEVERE_ACUTE_MALNUTRITION,
    priority: 1,
    criterions: [
      {
        condition: {
          value: fExp`(${AnthroSystemCodes.WFLH_UNISEX}<${ZScorePossibleValueLimit.neg3}) || (${AnthroSystemCodes.WFLH}<${ZScorePossibleValueLimit.neg3})`,
          variables: [AnthroSystemCodes.WFLH_UNISEX],
        },
        description: "Z-score Poids/Taille (P/T) est inférieur à -3. Ce critère est générique et conservé pour compatibilité.",
        variablesExplanation: {
          [AnthroSystemCodes.WFLH_UNISEX]: "Z-score Poids/Taille (P/T) pour les enfants de 0 à 5 ans.",
          [AnthroSystemCodes.WFLH]: "Z-score Poids/Taille (P/T) pour les enfants de 0 à 5 ans (legacy).",
        },
        priority: 3,
      },
      {
        condition: {
          value: fExp`((${AnthroSystemCodes.AGE_IN_MONTH} >= 6) && (${AnthroSystemCodes.AGE_IN_MONTH}< ${MONTH_IN_YEARS * 8})) && ((${AnthroSystemCodes.WFLH_UNISEX}<${ZScorePossibleValueLimit.neg3}) || (${AnthroSystemCodes.WFLH}<${ZScorePossibleValueLimit.neg3}))`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.WFLH_UNISEX],
        },
        description: "Z-score Poids/Taille (P/T) est inférieur à -3 pour les enfants de 6 à 59 mois.",
        variablesExplanation: {
          [AnthroSystemCodes.AGE_IN_MONTH]: "Âge de l'enfant en mois.",
          [AnthroSystemCodes.WFLH_UNISEX]: "Z-score Poids/Taille (P/T) pour les enfants de 0 à 5 ans.",
          [AnthroSystemCodes.WFLH]: "Z-score Poids/Taille (P/T) pour les enfants de 0 à 5 ans (legacy).",
        },
        priority: 3,
      },
      {
        condition: {
          value: fExp`((${AnthroSystemCodes.AGE_IN_MONTH} >= 6) && (${AnthroSystemCodes.AGE_IN_MONTH}<${MONTH_IN_YEARS * 8})) && (${AnthroSystemCodes.MUAC}<115)`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.MUAC],
        },
        description: "Périmètre brachial (MUAC) est inférieur à 115mm pour les enfants de 6 à 59 mois.",
        variablesExplanation: {
          [AnthroSystemCodes.AGE_IN_MONTH]: "Âge de l'enfant en mois.",
          [AnthroSystemCodes.MUAC]: "Périmètre brachial (MUAC) en millimètres.",
        },
        priority: 2,
      },
      {
        condition: {
          value: fExp`${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.True}`,
          variables: [CLINICAL_SIGNS.EDEMA],
        },
        description: "Présence d'œdèmes bilatéraux, quel que soit l'âge.",
        variablesExplanation: {
          [CLINICAL_SIGNS.EDEMA]: "Présence d'œdèmes bilatéraux.",
        },
        priority: 1,
      },
      {
        condition: {
          value: fExp`(${AnthroSystemCodes.AGE_IN_MONTH}<6) && ((${AnthroSystemCodes.WFLH_UNISEX}<${ZScorePossibleValueLimit.neg3}) || (${AnthroSystemCodes.WFLH}<${ZScorePossibleValueLimit.neg3}))`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.WFLH_UNISEX],
        },
        description: "Pour les enfants de moins de 6 mois avec un Z-score Poids/Taille (P/T) disponible, celui-ci est inférieur à -3.",
        variablesExplanation: {
          [AnthroSystemCodes.AGE_IN_MONTH]: "Âge de l'enfant en mois.",
          [AnthroSystemCodes.WFLH_UNISEX]: "Z-score Poids/Taille (P/T) pour les enfants de 0 à 5 ans.",
          [AnthroSystemCodes.WFLH]: "Z-score Poids/Taille (P/T) pour les enfants de 0 à 5 ans (legacy).",
        },
        priority: 3,
      },
      {
        condition: {
          value: fExp`(${AnthroSystemCodes.AGE_IN_MONTH}<6) && (${AnthroSystemCodes.WFA}<${ZScorePossibleValueLimit.neg3})`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.WFA],
        },
        description: "Pour les enfants de moins de 6 mois, en l'absence de Z-score P/T, le Z-score Poids/Âge (P/A) est inférieur à -3.",
        variablesExplanation: {
          [AnthroSystemCodes.AGE_IN_MONTH]: "Âge de l'enfant en mois.",
          [AnthroSystemCodes.WFA]: "Z-score Poids/Âge (P/A).",
        },
        priority: 3,
      },
      {
        condition: {
          value: fExp`((${AnthroSystemCodes.AGE_IN_MONTH} >= 60) && (${AnthroSystemCodes.AGE_IN_MONTH} <= ${MONTH_IN_YEARS * 18})) && (${AnthroSystemCodes.BMI_FOR_AGE}<${ZScorePossibleValueLimit.neg3})`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.BMI_FOR_AGE],
        },
        description: "Pour les enfants de 60 à 228 mois, le Z-score de l'IMC pour l'âge est inférieur à -3 (selon les normes OMS 2007).",
        variablesExplanation: {
          [AnthroSystemCodes.AGE_IN_MONTH]: "Âge de l'enfant en mois.",
          [AnthroSystemCodes.BMI_FOR_AGE]: "Z-score de l'Indice de Masse Corporelle (IMC) pour l'âge.",
        },
        priority: 3,
      },
      {
        condition: {
          value: fExp`((${AnthroSystemCodes.AGE_IN_MONTH} >= 96) && (${AnthroSystemCodes.AGE_IN_MONTH} <=  ${MONTH_IN_YEARS * 18})) && (${AnthroSystemCodes.WFH_UNISEX_NCHS}<${ZScorePossibleValueLimit.neg3})`,
          variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.WFH_UNISEX_NCHS],
        },
        description: "Critère optionnel de transition pour les enfants de 96 à 228 mois : le Z-score Poids/Taille (P/T) est inférieur à -3 (selon les normes NCHS).",
        variablesExplanation: {
          [AnthroSystemCodes.AGE_IN_MONTH]: "Âge de l'enfant en mois.",
          [AnthroSystemCodes.WFH_UNISEX_NCHS]: "Z-score Poids/Taille (P/T) unisexe selon les normes NCHS.",
        },
        priority: 3,
      },
      {
        condition: {
          value: fExp`${OBSERVATIONS.MUSCLE_LOSS} == ${ConditionResult.True}`,
          variables: [OBSERVATIONS.MUSCLE_LOSS],
        },
        description: "Présence de signes cliniques de marasme (si cette donnée est collectée).",
        variablesExplanation: {
          [OBSERVATIONS.MUSCLE_LOSS]: "Signe clinique de marasme (perte musculaire visible).",
        },
        priority: 1,
      },
    ],
  },
  {
    name: "Malnutrition aiguë modérée",
    code: DIAGNOSTIC_CODES.MODERATE_ACUTE_MALNUTRITION,
    priority: 2,
    criterions: [
      {
        condition: {
          value: fExp`((${AnthroSystemCodes.WFLH_UNISEX} >= ${ZScorePossibleValueLimit.neg3}) || (${AnthroSystemCodes.WFLH} >= ${ZScorePossibleValueLimit.neg3})) && ((${AnthroSystemCodes.WFLH_UNISEX} < ${ZScorePossibleValueLimit.neg2}) || (${AnthroSystemCodes.WFLH} < ${ZScorePossibleValueLimit.neg2}))`,
          variables: [AnthroSystemCodes.WFLH_UNISEX],
        },
        description: "Z-score Poids/Taille (P/T) est compris entre -3 (inclus) et -2 (exclus).",
        variablesExplanation: {
          [AnthroSystemCodes.WFLH_UNISEX]: "Z-score Poids/Taille (P/T) pour les enfants de 0 à 5 ans.",
          [AnthroSystemCodes.WFLH]: "Z-score Poids/Taille (P/T) pour les enfants de 0 à 5 ans (legacy).",
        },
        priority: 3,
      },
      {
        condition: {
          value: fExp`(${AnthroSystemCodes.MUAC} >= 115) && (${AnthroSystemCodes.MUAC} < 125)`,
          variables: [AnthroSystemCodes.MUAC],
        },
        description: "Périmètre brachial (MUAC) est compris entre 115mm (inclus) et 125mm (exclus).",
        variablesExplanation: {
          [AnthroSystemCodes.MUAC]: "Périmètre brachial (MUAC) en millimètres.",
        },
        priority: 2,
      },
    ],
  },
  {
    name: "Malnutrition chronique sévère",
    code: DIAGNOSTIC_CODES.SEVERE_CHRONIC_MALNUTRITION,
    priority: 3,
    criterions: [
      {
        condition: {
          value: fExp`${AnthroSystemCodes.HFA} < ${ZScorePossibleValueLimit.neg3}`,
          variables: [AnthroSystemCodes.HFA],
        },
        description: "Z-score Taille/Âge (T/A) est inférieur à -3.",
        variablesExplanation: {
          [AnthroSystemCodes.HFA]: "Z-score Taille/Âge (T/A).",
        },
        priority: 3,
      },
    ],
  },
  {
    name: "Malnutrition chronique modérée",
    code: DIAGNOSTIC_CODES.MODERATE_CHRONIC_MALNUTRITION,
    priority: 4,
    criterions: [
      {
        condition: {
          value: fExp`(${AnthroSystemCodes.HFA} >= ${ZScorePossibleValueLimit.neg3}) && (${AnthroSystemCodes.HFA} < ${ZScorePossibleValueLimit.neg2})`,
          variables: [AnthroSystemCodes.HFA],
        },
        description: "Z-score Taille/Âge (T/A) est compris entre -3 (inclus) et -2 (exclus).",
        variablesExplanation: {
          [AnthroSystemCodes.HFA]: "Z-score Taille/Âge (T/A).",
        },
        priority: 3,
      },
    ],
  },
  {
    name: "Insuffisance pondérale sévère",
    code: DIAGNOSTIC_CODES.SEVERE_UNDERWEIGHT,
    priority: 5,
    criterions: [
      {
        condition: {
          value: fExp`${AnthroSystemCodes.WFA} < ${ZScorePossibleValueLimit.neg3}`,
          variables: [AnthroSystemCodes.WFA],
        },
        description: "Z-score Poids/Âge (P/A) est inférieur à -3.",
        variablesExplanation: {
          [AnthroSystemCodes.WFA]: "Z-score Poids/Âge (P/A).",
        },
        priority: 3,
      },
    ],
  },
  {
    name: "Insuffisance pondérale modérée",
    code: DIAGNOSTIC_CODES.MODERATE_UNDERWEIGHT,
    priority: 6,
    criterions: [
      {
        condition: {
          value: fExp`(${AnthroSystemCodes.WFA} >= ${ZScorePossibleValueLimit.neg3}) && (${AnthroSystemCodes.WFA} < ${ZScorePossibleValueLimit.neg2})`,
          variables: [AnthroSystemCodes.WFA],
        },
        description: "Z-score Poids/Âge (P/A) est compris entre -3 (inclus) et -2 (exclus).",
        variablesExplanation: {
          [AnthroSystemCodes.WFA]: "Z-score Poids/Âge (P/A).",
        },
        priority: 3,
      },
    ],
  },
  {
    name: "Obésité",
    code: DIAGNOSTIC_CODES.OBESITY,
    priority: 7,
    criterions: [
      {
        condition: {
          value: fExp`${AnthroSystemCodes.BMI_FOR_AGE} > ${ZScorePossibleValueLimit.pos3}`,
          variables: [AnthroSystemCodes.BMI_FOR_AGE],
        },
        description: "Z-score de l'IMC pour l'âge est supérieur à +3.",
        variablesExplanation: {
          [AnthroSystemCodes.BMI_FOR_AGE]: "Z-score de l'Indice de Masse Corporelle (IMC) pour l'âge.",
        },
        priority: 3,
      },
    ],
  },
  {
    name: "Surpoids",
    code: DIAGNOSTIC_CODES.OVERWEIGHT,
    priority: 8,
    criterions: [
      {
        condition: {
          value: fExp`(${AnthroSystemCodes.BMI_FOR_AGE} > ${ZScorePossibleValueLimit.pos2}) && (${AnthroSystemCodes.BMI_FOR_AGE} <= ${ZScorePossibleValueLimit.pos3})`,
          variables: [AnthroSystemCodes.BMI_FOR_AGE],
        },
        description: "Z-score de l'IMC pour l'âge est compris entre +2 (exclus) et +3 (inclus).",
        variablesExplanation: {
          [AnthroSystemCodes.BMI_FOR_AGE]: "Z-score de l'Indice de Masse Corporelle (IMC) pour l'âge.",
        },
        priority: 3,
      },
    ],
  },
  {
    name: "État nutritionnel normal",
    code: DIAGNOSTIC_CODES.NORMAL_NUTRITIONAL_STATUS,
    priority: 9,
    criterions: [
      {
        condition: {
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
        description: "L'état nutritionnel est considéré comme normal lorsque tous les indicateurs anthropométriques et cliniques sont dans les limites de la normale.",
        variablesExplanation: {
          [AnthroSystemCodes.WFLH_UNISEX]: "Z-score Poids/Taille (P/T) est entre -2 et +2.",
          [AnthroSystemCodes.MUAC]: "Périmètre brachial (MUAC) est supérieur ou égal à 125mm.",
          [CLINICAL_SIGNS.EDEMA]: "Absence d'œdèmes bilatéraux.",
          [AnthroSystemCodes.HFA]: "Z-score Taille/Âge (T/A) est entre -2 et +2.",
          [AnthroSystemCodes.WFA]: "Z-score Poids/Âge (P/A) est entre -2 et +2.",
          [AnthroSystemCodes.BMI_FOR_AGE]: "Z-score de l'IMC pour l'âge est entre -2 et +2.",
        },
        priority: 3,
      },
    ],
  },
];
