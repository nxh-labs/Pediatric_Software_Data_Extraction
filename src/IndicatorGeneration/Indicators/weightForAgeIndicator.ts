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
  MAX_AGE_IN_MONTH_TO_USE_WEIGHT_FOR_AGE_INDICATOR,
  ZScorePossibleValueLimit,
} from "../../../constants";
import { fExp } from "../../../utils";
import { CreateIndicatorProps } from "../types";

export const weightForAgeIndicator: CreateIndicatorProps = {
  code: AnthroSystemCodes.WFA,
  name: "Weight For Age",
  neededMeasureCodes: [
    AnthroSystemCodes.WEIGHT,
    AnthroSystemCodes.AGE_IN_DAY,
    AnthroSystemCodes.AGE_IN_MONTH,
  ],
  axeX: {
    value: fExp`(${AnthroSystemCodes.AGE_IN_MONTH} > ${MAX_AGE_MONTH_TO_USE_AGE_IN_DAY}) ? (${AnthroSystemCodes.AGE_IN_MONTH}): (${AnthroSystemCodes.AGE_IN_DAY})`,
    variables: [AnthroSystemCodes.AGE_IN_MONTH, AnthroSystemCodes.AGE_IN_DAY],
  },
  axeY: {
    value: fExp`${AnthroSystemCodes.WEIGHT}`,
    variables: [AnthroSystemCodes.WEIGHT],
  },
  availableRefCharts: [
    {
      chartCode: GrowthRefChartAndTableCodes.WFA_BOYS_0_5_CHART,
      condition: {
        value: fExp`(${AnthroSystemCodes.SEX} == ${Sex.MALE}) && (${AnthroSystemCodes.AGE_IN_DAY} <= ${MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY})`,
        variables: [AnthroSystemCodes.SEX, AnthroSystemCodes.AGE_IN_DAY],
      },
    },
    {
      chartCode: GrowthRefChartAndTableCodes.WFA_GIRLS_0_5_CHART,
      condition: {
        value: fExp`(${AnthroSystemCodes.SEX} == ${Sex.FEMALE}) && (${AnthroSystemCodes.AGE_IN_DAY} <= ${MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY})`,
        variables: [AnthroSystemCodes.SEX, AnthroSystemCodes.AGE_IN_DAY],
      },
    },
    {
      chartCode: GrowthRefChartAndTableCodes.WFA_BOYS_5_10_CHART,
      condition: {
        value: fExp`(${AnthroSystemCodes.SEX} == ${Sex.MALE}) && (${AnthroSystemCodes.AGE_IN_DAY} > ${MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY})`,
        variables: [AnthroSystemCodes.SEX, AnthroSystemCodes.AGE_IN_DAY],
      },
    },
    {
      chartCode: GrowthRefChartAndTableCodes.WFA_GIRLS_5_10_CHART,
      condition: {
        value: fExp`(${AnthroSystemCodes.SEX} == ${Sex.FEMALE}) && (${AnthroSystemCodes.AGE_IN_DAY} > ${MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY})`,
        variables: [AnthroSystemCodes.SEX, AnthroSystemCodes.AGE_IN_DAY],
      },
    },
  ],
  availableRefTables: [],
  usageConditions: {
    value: fExp`${AnthroSystemCodes.AGE_IN_MONTH} <= ${MAX_AGE_IN_MONTH_TO_USE_WEIGHT_FOR_AGE_INDICATOR}`,
    variables: [AnthroSystemCodes.AGE_IN_MONTH],
  },
  interpretations: [
    {
      name: "High weight for age",
      code: "high_weight",
      range: GrowthIndicatorRange.ABOVE_3,
      condition: {
        value: fExp`${ZScoreVarName} > ${ZScorePossibleValueLimit.pos3}`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Possible growth problem",
      code: "possible_growth_problem",
      range: GrowthIndicatorRange.ABOVE_2,
      condition: {
        value: fExp`(${ZScoreVarName} > ${ZScorePossibleValueLimit.pos2}) && (${ZScoreVarName} <= ${ZScorePossibleValueLimit.pos3})`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Normal",
      code: "normal",
      range: GrowthIndicatorRange.MEDIAN,
      condition: {
        value: fExp`(${ZScoreVarName} >= ${ZScorePossibleValueLimit.neg2}) && (${ZScoreVarName} <= ${ZScorePossibleValueLimit.pos2})`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Underweight",
      code: "underweight",
      range: GrowthIndicatorRange.BELOW_M2,
      condition: {
        value: fExp`(${ZScoreVarName} < ${ZScorePossibleValueLimit.neg2}) && (${ZScoreVarName} >= ${ZScorePossibleValueLimit.neg3})`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Severely underweight",
      code: "severely_underweight",
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
