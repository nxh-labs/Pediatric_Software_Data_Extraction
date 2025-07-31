import { ALWAYS_TRUE_CONDITION, AnthroSystemCodes } from "../../constants";
import { AnthropometricMeasure } from "../../types";
import { fExp } from "../../utils";

export const anthropometricMeasures: AnthropometricMeasure[] = [
  {
    name: "Poids",
    code: AnthroSystemCodes.WEIGHT,
    unit: "kg",
    availableUnit: ["kg", "g"],
    description: "Poids corporel total de l’enfant",
    validationRules: [
      {
        condition: ALWAYS_TRUE_CONDITION,
        // Ajusté pour les prématurés jusqu’aux enfants plus âgés
        rule: fExp`(${AnthroSystemCodes.WEIGHT} >= 0.35)&& (${AnthroSystemCodes.WEIGHT} < 120)`,
        variables: [AnthroSystemCodes.WEIGHT],
      },
    ],
  },
  {
    name: "Longueur",
    code: AnthroSystemCodes.LENGTH,
    unit: "cm",
    availableUnit: ["cm", "m"],
    description:
      "Mesure de la longueur en décubitus dorsal (généralement utilisée chez les enfants de moins de 2 ans)",
    validationRules: [
      {
        condition: ALWAYS_TRUE_CONDITION,
        rule: fExp`(${AnthroSystemCodes.LENGTH} >= 30) && (${AnthroSystemCodes.LENGTH}<=120)`,
        variables: [AnthroSystemCodes.LENGTH],
      },
    ],
  },
  {
    name: "Taille",
    code: AnthroSystemCodes.HEIGHT,
    unit: "cm",
    availableUnit: ["cm", "m"],
    description:
      "Mesure de la taille debout (généralement utilisée chez les enfants de 2 ans et plus)",
    validationRules: [
      {
        condition: ALWAYS_TRUE_CONDITION,
        rule: fExp`(${AnthroSystemCodes.HEIGHT} >= 30) && (${AnthroSystemCodes.HEIGHT}<=200)`,
        variables: [AnthroSystemCodes.HEIGHT],
      },
    ],
  },
  {
    name: "Périmètre crânien",
    code: AnthroSystemCodes.HEAD_CIRCUMFERENCE,
    unit: "cm",
    availableUnit: ["cm"],
    description: "Mesure du tour de tête au niveau de la plus grande circonférence",
    validationRules: [
      {
        condition: ALWAYS_TRUE_CONDITION,
        // Ajusté pour les prématurés jusqu’à l’adolescence
        rule: fExp`(${AnthroSystemCodes.HEAD_CIRCUMFERENCE} >= 20) && (${AnthroSystemCodes.HEAD_CIRCUMFERENCE} < 65)`,
        variables: [AnthroSystemCodes.HEAD_CIRCUMFERENCE],
      },
    ],
  },
  {
    name: "Périmètre brachial",
    code: AnthroSystemCodes.MUAC,
    unit: "cm",
    availableUnit: ["cm", "mm"],
    description: "Circonférence du bras mesurée au point médian entre l’acromion et l’olécrane",
    validationRules: [
      {
        condition: ALWAYS_TRUE_CONDITION,
        rule: fExp`(${AnthroSystemCodes.MUAC} >= 6.5) && (${AnthroSystemCodes.MUAC} < 35)`,
        variables: [AnthroSystemCodes.MUAC],
      },
    ],
  },
  {
    name: "Pli cutané tricipital (TST)",
    code: AnthroSystemCodes.TSF,
    unit: "mm",
    availableUnit: ["mm"],
    description: "Épaisseur du pli cutané à la face postérieure du bras (triceps)",
    validationRules: [
      {
        condition: ALWAYS_TRUE_CONDITION,
        rule: fExp`(${AnthroSystemCodes.TSF} >= 2) && (${AnthroSystemCodes.TSF} < 50)`,
        variables: [AnthroSystemCodes.TSF],
      },
    ],
  },
  {
    name: "Pli cutané sous-scapulaire (SSF)",
    code: AnthroSystemCodes.SSF,
    unit: "mm",
    availableUnit: ["mm"],
    description: "Épaisseur du pli cutané sous l’omoplate (sous-scapulaire)",
    validationRules: [
      {
        condition: ALWAYS_TRUE_CONDITION,
        rule: fExp`(${AnthroSystemCodes.SSF} >= 2) && (${AnthroSystemCodes.SSF} < 50)`,
        variables: [AnthroSystemCodes.SSF],
      },
    ],
  },
];
