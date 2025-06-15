import {
  AnthroSystemCodes,
  GrowthRefChartAndTableCodes,
  GrowthIndicatorRange,
  ZScoreVarName,
  ZScoreComputingStrategyType,
  StandardShape,
  ZScorePossibleValueLimit,
  ALWAYS_TRUE_CONDITION,
} from "../../../constants";
import { fExp } from "../../../utils";
import { CreateIndicatorProps } from "../types";

export const weightForHeightUnisexIndicator: CreateIndicatorProps = {
  code: AnthroSystemCodes.WFLH_UNISEX,
  name: "Weight For Length/Height (OMS 2006, UNISEX)",
  neededMeasureCodes: [AnthroSystemCodes.WEIGHT, AnthroSystemCodes.LENHEI],
  axeX: {
    value: fExp`(${AnthroSystemCodes.LENHEI} - (${AnthroSystemCodes.LENHEI} % 1)) + ((${AnthroSystemCodes.LENHEI} % 1)<=0.2 ? 0:((${AnthroSystemCodes.LENHEI} %1)>=0.8?1:0.5))`,
    variables: [AnthroSystemCodes.LENHEI],
  },
  axeY: {
    value: fExp`${AnthroSystemCodes.WEIGHT}`,
    variables: [AnthroSystemCodes.WEIGHT],
  },
  availableRefCharts: [],
  availableRefTables: [
    {
      tableCode: GrowthRefChartAndTableCodes.WFLH_UNISEX_OMS_TABLE,
      condition: {
        value: ALWAYS_TRUE_CONDITION,
        variables: [],
      },
    },
  ],
  usageConditions: {
    value: fExp`${AnthroSystemCodes.LENHEI} >= 45 && ${AnthroSystemCodes.LENHEI} <= 120`,
    variables: [AnthroSystemCodes.LENHEI],
  },
  interpretations: [
    {
      name: "Normal",
      code: "normal",
      range: GrowthIndicatorRange.MEDIAN,
      condition: {
        value: fExp`${ZScoreVarName} >= ${ZScorePossibleValueLimit.neg2} && ${ZScoreVarName} <= ${ZScorePossibleValueLimit.pos1}`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Wasted",
      code: "wasted",
      range: GrowthIndicatorRange.BELOW_M2,
      condition: {
        value: fExp`${ZScoreVarName} < ${ZScorePossibleValueLimit.neg2} && ${ZScoreVarName} >= ${ZScorePossibleValueLimit.neg3}`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Severely wasted",
      code: "severely_wasted",
      range: GrowthIndicatorRange.BELOW_M3,
      condition: {
        value: fExp`${ZScoreVarName} < ${ZScorePossibleValueLimit.neg3}`,
        variables: [ZScoreVarName],
      },
    },
  ],
  zScoreComputingStrategy: ZScoreComputingStrategyType.TABLEBASED,
  standardShape: StandardShape.TABLE,
};
