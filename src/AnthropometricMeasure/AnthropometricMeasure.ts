import { ALWAYS_TRUE_CONDITION, AnthroSystemCodes } from "../../constants";
import { AnthropometricMeasure } from "../../types";
import { fExp } from "../../utils";

export const anthropometricMeasures: AnthropometricMeasure[] = [
  {
    name: "Weight (Body weight)",
    code: AnthroSystemCodes.WEIGHT,
    unit: "kg",
    availableUnit: ["kg", "g"],
    description: "Child's total body weight",
    validationRules: [
      {
        condition: ALWAYS_TRUE_CONDITION,
        // Adjusted for premature babies up to older children
        rule: fExp`(${AnthroSystemCodes.WEIGHT} >= 0.35)&& (${AnthroSystemCodes.WEIGHT} < 120)`,
        variables: [AnthroSystemCodes.WEIGHT],
      },
    ],
  },
  {
    name: "Length",
    code: AnthroSystemCodes.LENGTH,
    unit: "cm",
    availableUnit: ["cm", "m"],
    description:
      "Recumbent length measurement (typically used for children under 2 years)",
    validationRules: [
      {
        condition: ALWAYS_TRUE_CONDITION,
        rule: fExp`(${AnthroSystemCodes.LENGTH} >= 30) && (${AnthroSystemCodes.LENGTH}<=120)`,
        variables: [AnthroSystemCodes.LENGTH],
      },
    ],
  },
  {
    name: "Height",
    code: AnthroSystemCodes.HEIGHT,
    unit: "cm",
    availableUnit: ["cm", "m"],
    description:
      "Standing height measurement (typically used for children 2 years and older)",
    validationRules: [
      {
        condition: ALWAYS_TRUE_CONDITION,
        rule: fExp`(${AnthroSystemCodes.HEIGHT} >= 30) && (${AnthroSystemCodes.HEIGHT}<=200)`,
        variables: [AnthroSystemCodes.HEIGHT],
      },
    ],
  },
  {
    name: "Head Circumference (HC)",
    code: AnthroSystemCodes.HEAD_CIRCUMFERENCE,
    unit: "cm",
    availableUnit: ["cm"],
    description: "Measurement around the largest part of the head",
    validationRules: [
      {
        condition: ALWAYS_TRUE_CONDITION,
        // Adjusted for premature babies through adolescence
        rule: fExp`(${AnthroSystemCodes.HEAD_CIRCUMFERENCE} >= 20) && (${AnthroSystemCodes.HEAD_CIRCUMFERENCE} < 65)`,
        variables: [AnthroSystemCodes.HEAD_CIRCUMFERENCE],
      },
    ],
  },
  {
    name: "Mid-Upper Arm Circumference (MUAC)",
    code: AnthroSystemCodes.MUAC,
    unit: "cm",
    availableUnit: ["cm", "mm"],
    description: "Circumference of the upper arm measured at the mid-point",
    validationRules: [
      {
        condition: ALWAYS_TRUE_CONDITION,
        rule: fExp`(${AnthroSystemCodes.MUAC} >= 6.5) && (${AnthroSystemCodes.MUAC} < 35)`,
        variables: [AnthroSystemCodes.MUAC],
      },
    ],
  },
  {
    name: "Triceps Skinfold Thickness (TSF)",
    code: AnthroSystemCodes.TSF,
    unit: "mm",
    availableUnit: ["mm"],
    description: "Thickness of skinfold on the back of the upper arm",
    validationRules: [
      {
        condition: ALWAYS_TRUE_CONDITION,
        rule: fExp`(${AnthroSystemCodes.TSF} >= 2) && (${AnthroSystemCodes.TSF} < 50)`,
        variables: [AnthroSystemCodes.TSF],
      },
    ],
  },
  {
    name: "Subscapular Skinfold Thickness (SSF)",
    code: AnthroSystemCodes.SSF,
    unit: "mm",
    availableUnit: ["mm"],
    description: "Thickness of skinfold below the shoulder blade",
    validationRules: [
      {
        condition: ALWAYS_TRUE_CONDITION,
        rule: fExp`(${AnthroSystemCodes.SSF} >= 2) && (${AnthroSystemCodes.SSF} < 50)`,
        variables: [AnthroSystemCodes.SSF],
      },
    ],
  },
];
