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
  MIN_AGE_IN_DAY_TO_USE_MUCA_TSF_SSF,
  ZScorePossibleValueLimit,
} from "../../../constants";
import { fExp } from "../../../utils";
import { CreateIndicatorProps } from "../types";

export const muacForAgeIndicator: CreateIndicatorProps = {
  code: AnthroSystemCodes.MUAC_FOR_AGE,
  name: "Mid-Upper Arm Circumference For Age",
  neededMeasureCodes: [
    AnthroSystemCodes.MUAC,
    AnthroSystemCodes.AGE_IN_DAY,
  ],
  axeX: {
    value: fExp`${AnthroSystemCodes.AGE_IN_DAY}`,
    variables: [AnthroSystemCodes.AGE_IN_DAY],
  },
  axeY: {
    value: fExp`${AnthroSystemCodes.MUAC}`,
    variables: [AnthroSystemCodes.MUAC],
  },
  availableRefCharts: [
    {
      chartCode: GrowthRefChartAndTableCodes.MUAC_BOYS_3M_5Y_CHART,
      condition: {
        value: fExp`${AnthroSystemCodes.SEX} == ${Sex.MALE}`,
        variables: [AnthroSystemCodes.SEX],
      },
    },
    {
      chartCode: GrowthRefChartAndTableCodes.MUAC_GIRLS_3M_5Y_CHART,
      condition: {
        value: fExp`${AnthroSystemCodes.SEX} == ${Sex.FEMALE}`,
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
      name: "Well nourished",
      code: "well_nourished",
      range: GrowthIndicatorRange.ABOVE_1,
      condition: {
        value: fExp`${ZScoreVarName} >= ${ZScorePossibleValueLimit.pos1}`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Normal",
      code: "normal",
      range: GrowthIndicatorRange.MEDIAN,
      condition: {
        value: fExp`${ZScoreVarName} >= ${ZScorePossibleValueLimit.neg2} && ${ZScoreVarName} < ${ZScorePossibleValueLimit.pos1}`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Moderate acute malnutrition",
      code: "moderate_acute_malnutrition",
      range: GrowthIndicatorRange.BELOW_M2,
      condition: {
        value: fExp`${ZScoreVarName} < ${ZScorePossibleValueLimit.neg2} && ${ZScoreVarName} >= ${ZScorePossibleValueLimit.neg3}`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Severe acute malnutrition",
      code: "severe_acute_malnutrition",
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
