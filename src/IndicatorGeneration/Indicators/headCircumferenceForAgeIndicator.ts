import {
  AnthroSystemCodes,
  MAX_AGE_MONTH_TO_USE_AGE_IN_DAY,
  GrowthRefChartAndTableCodes,
  Sex,
  MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY,
  GrowthIndicatorRange,
  ZScoreVarName,
  ZScoreComputingStrategyType,
  StandardShape,
  ZScorePossibleValueLimit,
} from "../../../constants";
import { fExp } from "../../../utils";
import { CreateIndicatorProps } from "../types";

export const headCircumferenceForAgeIndicator: CreateIndicatorProps = {
  code: AnthroSystemCodes.HC_FOR_AGE,
  name: "Head Circumference For Age",
  neededMeasureCodes: [
    AnthroSystemCodes.HEAD_CIRCUMFERENCE,
    AnthroSystemCodes.AGE_IN_DAY,
  ],
  axeX: {
    value: fExp`${AnthroSystemCodes.AGE_IN_DAY}`,
    variables: [AnthroSystemCodes.AGE_IN_DAY],
  },
  axeY: {
    value: fExp`${AnthroSystemCodes.HEAD_CIRCUMFERENCE}`,
    variables: [AnthroSystemCodes.HEAD_CIRCUMFERENCE],
  },
  availableRefCharts: [
    {
      chartCode: GrowthRefChartAndTableCodes.HCFA_BOYS_0_5_CHART,
      condition: {
        value: fExp`${AnthroSystemCodes.SEX} == ${Sex.MALE}`,
        variables: [AnthroSystemCodes.SEX],
      },
    },
    {
      chartCode: GrowthRefChartAndTableCodes.HCFA_GIRLS_0_5_CHART,
      condition: {
        value: fExp`${AnthroSystemCodes.SEX} == ${Sex.FEMALE}`,
        variables: [AnthroSystemCodes.SEX],
      },
    },
  ],
  availableRefTables: [],
  usageConditions: {
    value: fExp`${AnthroSystemCodes.AGE_IN_DAY} <= ${MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY}`,
    variables: [AnthroSystemCodes.AGE_IN_DAY],
  },
  interpretations: [
    {
      name: "Macrocephaly",
      code: "macrocephaly",
      range: GrowthIndicatorRange.ABOVE_2,
      condition: {
        value:fExp `${ZScoreVarName} > ${ZScorePossibleValueLimit.pos2}`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Normal",
      code: "normal",
      range: GrowthIndicatorRange.MEDIAN,
      condition: {
        value: fExp`${ZScoreVarName} >= ${ZScorePossibleValueLimit.neg2} && ${ZScoreVarName} <= ${ZScorePossibleValueLimit.pos2}`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Microcephaly",
      code: "microcephaly",
      range: GrowthIndicatorRange.BELOW_M2,
      condition: {
        value: fExp`${ZScoreVarName} < ${ZScorePossibleValueLimit.neg2}`,
        variables: [ZScoreVarName],
      },
    },
  ],
  zScoreComputingStrategy: ZScoreComputingStrategyType.AGEBASED,
  standardShape: StandardShape.CURVE,
};
