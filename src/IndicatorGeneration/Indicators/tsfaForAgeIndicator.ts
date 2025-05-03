import {
  AnthroSystemCodes,
  GrowthRefChartAndTableCodes,
  Sex,
  MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY,
  GrowthIndicatorRange,
  ZScoreVarName,
  ZScoreComputingStrategyType,
  StandardShape,
  MIN_AGE_IN_DAY_TO_USE_MUCA_TSF_SSF,
  ZScorePossibleValueLimit,
} from "../../../constants";
import { fExp } from "../../../utils";
import { CreateIndicatorProps } from "../types";

export const tricepsSkinfoldForAgeIndicator: CreateIndicatorProps = {
  code: AnthroSystemCodes.TSF_FOR_AGE,
  name: "Triceps Skinfold For Age",
  neededMeasureCodes: [AnthroSystemCodes.TSF, AnthroSystemCodes.AGE_IN_DAY],
  axeX: {
    value: fExp` ${AnthroSystemCodes.AGE_IN_DAY}`,
    variables: [AnthroSystemCodes.AGE_IN_DAY],
  },
  axeY: {
    value: fExp`${AnthroSystemCodes.TSF}`,
    variables: [AnthroSystemCodes.TSF],
  },
  availableRefCharts: [
    {
      chartCode: GrowthRefChartAndTableCodes.TSF_BOYS_3M_5Y_CHART,
      condition: {
        value: fExp`${AnthroSystemCodes.SEX} == ${Sex.MALE} `,
        variables: [AnthroSystemCodes.SEX],
      },
    },
    {
      chartCode: GrowthRefChartAndTableCodes.TSF_GIRLS_3M_5Y_CHART,
      condition: {
        value: fExp`${AnthroSystemCodes.SEX} == ${Sex.FEMALE} `,
        variables: [AnthroSystemCodes.SEX],
      },
    },
  ],
  availableRefTables: [],
  usageConditions: {
    value: fExp`${AnthroSystemCodes.AGE_IN_DAY} >= ${MIN_AGE_IN_DAY_TO_USE_MUCA_TSF_SSF} && ${AnthroSystemCodes.AGE_IN_DAY} <= ${MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY}`,
    variables: [AnthroSystemCodes.AGE_IN_DAY],
  },
  interpretations: [
    {
      name: "High fat stores",
      code: "high_fat_stores",
      range: GrowthIndicatorRange.ABOVE_2,
      condition: {
        value: fExp`${ZScoreVarName} > ${ZScorePossibleValueLimit.pos2}`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Above average fat stores",
      code: "above_average_fat_stores",
      range: GrowthIndicatorRange.ABOVE_1,
      condition: {
        value: fExp`${ZScoreVarName} > ${ZScorePossibleValueLimit.pos1} && ${ZScoreVarName} <= ${ZScorePossibleValueLimit.pos2}`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Normal fat stores",
      code: "normal_fat_stores",
      range: GrowthIndicatorRange.MEDIAN,
      condition: {
        value: fExp`${ZScoreVarName} >= ${ZScorePossibleValueLimit.neg2} && ${ZScoreVarName} <= ${ZScorePossibleValueLimit.pos1}`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Below average fat stores",
      code: "below_average_fat_stores",
      range: GrowthIndicatorRange.BELOW_M2,
      condition: {
        value: fExp`${ZScoreVarName} < ${ZScorePossibleValueLimit.neg2} && ${ZScoreVarName} >= ${ZScorePossibleValueLimit.neg3}`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Low fat stores",
      code: "low_fat_stores",
      range: GrowthIndicatorRange.BELOW_M3,
      condition: {
        value: fExp`${ZScoreVarName} < ${ZScorePossibleValueLimit.neg3}`,
        variables: [ZScoreVarName],
      },
    },
  ],
  zScoreComputingStrategy: ZScoreComputingStrategyType.AGEBASED,
  standardShape: StandardShape.CURVE,
};
