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

export const weightForHeightUnisexNCHSIndicator: CreateIndicatorProps = {
  code: AnthroSystemCodes.WFH_UNISEX_NCHS,
  name: "Poids pour taille (NCHS)",
  neededMeasureCodes: [
    AnthroSystemCodes.WEIGHT,
    // AnthroSystemCodes.HEIGHT,
    AnthroSystemCodes.LENHEI,
  ],
  axeX: {
    value: fExp`(${AnthroSystemCodes.LENHEI} - (${AnthroSystemCodes.LENHEI} % 1)) + (((${AnthroSystemCodes.LENHEI} % 1)<=0.2) ? 0:(((${AnthroSystemCodes.LENHEI} %1)>=0.8)?1:0.5))`,
    variables: [AnthroSystemCodes.LENHEI],
  },
  axeY: {
    value: fExp`${AnthroSystemCodes.WEIGHT}`,
    variables: [AnthroSystemCodes.WEIGHT],
  },
  availableRefCharts: [],
  availableRefTables: [
    {
      tableCode: GrowthRefChartAndTableCodes.WFH_UNISEX_NCHS_TABLE,
      condition: {
        value: ALWAYS_TRUE_CONDITION,
        variables: [],
      },
    },
  ],
  usageConditions: {
    value: fExp`(${AnthroSystemCodes.LENHEI} > 120) &&( ${AnthroSystemCodes.LENHEI} <= 171)`,
    variables: [AnthroSystemCodes.LENHEI],
  },
  interpretations: [
    {
      name: "Normal",
      code: "normal",
      range: GrowthIndicatorRange.MEDIAN,
      condition: {
        value: fExp`(${ZScoreVarName} > ${ZScorePossibleValueLimit.neg2}) && (${ZScoreVarName} <= ${ZScorePossibleValueLimit.pos1})`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Malnutrition aigüe modérée",
      code: "wasted",
      range: GrowthIndicatorRange.BELOW_M2,
      condition: {
        value: fExp`(${ZScoreVarName} <= ${ZScorePossibleValueLimit.neg2}) && (${ZScoreVarName} > ${ZScorePossibleValueLimit.neg3})`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Malnutrition aigüe sévère",
      code: "severely_wasted",
      range: GrowthIndicatorRange.BELOW_M3,
      condition: {
        value: fExp`${ZScoreVarName} <= ${ZScorePossibleValueLimit.neg3}`,
        variables: [ZScoreVarName],
      },
    },
  ],
  zScoreComputingStrategy: ZScoreComputingStrategyType.TABLEBASED,
  standardShape: StandardShape.TABLE,
};
