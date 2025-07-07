import {
  AnthroSystemCodes,
  GrowthRefChartAndTableCodes,
  Sex,
  GrowthIndicatorRange,
  ZScoreVarName,
  ZScoreComputingStrategyType,
  StandardShape,
  DAY_IN_TWO_YEARS,
  ZScorePossibleValueLimit,
} from "../../../constants";
import { fExp } from "../../../utils";
import { CreateIndicatorProps } from "../types";

export const weightForHeightIndicator: CreateIndicatorProps = {
  code: AnthroSystemCodes.WFLH,
  name: "Poids pour la Taille debout/couchée",
  neededMeasureCodes: [
    AnthroSystemCodes.WEIGHT,
    // AnthroSystemCodes.HEIGHT,
    AnthroSystemCodes.LENHEI,
  ],
  axeX: {
    value: fExp`${AnthroSystemCodes.LENHEI}`,
    variables: [AnthroSystemCodes.LENHEI],
  },
  axeY: {
    value: fExp`${AnthroSystemCodes.WEIGHT}`,
    variables: [AnthroSystemCodes.WEIGHT],
  },
  availableRefCharts: [
    {
      chartCode: GrowthRefChartAndTableCodes.WFL_BOYS_45_110_CHART,
      condition: {
        value: fExp`(${AnthroSystemCodes.SEX} == ${Sex.MALE}) && (${AnthroSystemCodes.AGE_IN_DAY} <= ${DAY_IN_TWO_YEARS})`,
        variables: [AnthroSystemCodes.SEX, AnthroSystemCodes.AGE_IN_DAY],
      },
    },
    {
      chartCode: GrowthRefChartAndTableCodes.WFL_GIRLS_45_110_CHART,
      condition: {
        value: fExp`(${AnthroSystemCodes.SEX} == ${Sex.FEMALE}) && (${AnthroSystemCodes.AGE_IN_DAY} <= ${DAY_IN_TWO_YEARS})`,
        variables: [AnthroSystemCodes.SEX, AnthroSystemCodes.AGE_IN_DAY],
      },
    },
    {
      chartCode: GrowthRefChartAndTableCodes.WFH_BOYS_65_120_CHART,
      condition: {
        value: fExp`(${AnthroSystemCodes.SEX} == ${Sex.MALE}) && (${AnthroSystemCodes.AGE_IN_DAY} > ${DAY_IN_TWO_YEARS})`,
        variables: [AnthroSystemCodes.SEX, AnthroSystemCodes.AGE_IN_DAY],
      },
    },
    {
      chartCode: GrowthRefChartAndTableCodes.WFH_GIRLS_65_120_CHART,
      condition: {
        value: fExp`(${AnthroSystemCodes.SEX} == ${Sex.FEMALE}) && (${AnthroSystemCodes.AGE_IN_DAY} > ${DAY_IN_TWO_YEARS})`,
        variables: [AnthroSystemCodes.SEX, AnthroSystemCodes.AGE_IN_DAY],
      },
    },
  ],
  availableRefTables: [],
  usageConditions: {
    value: fExp`(${AnthroSystemCodes.LENHEI} >= 45) &&( ${AnthroSystemCodes.LENHEI} <= 120)`,
    variables: [AnthroSystemCodes.LENHEI],
  },
  interpretations: [
    {
      name: "Obésité",
      code: "obese",
      range: GrowthIndicatorRange.ABOVE_3,
      condition: {
        value: fExp`${ZScoreVarName} > ${ZScorePossibleValueLimit.pos3}`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Surpoids",
      code: "overweight",
      range: GrowthIndicatorRange.ABOVE_2,
      condition: {
        value:fExp `(${ZScoreVarName} > ${ZScorePossibleValueLimit.pos2}) && (${ZScoreVarName} <= ${ZScorePossibleValueLimit.pos3})`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Risque de surpoids",
      code: "risk_of_overweight",
      range: GrowthIndicatorRange.ABOVE_1,
      condition: {
        value: fExp`(${ZScoreVarName} > ${ZScorePossibleValueLimit.pos1}) && (${ZScoreVarName} <= ${ZScorePossibleValueLimit.pos2})`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Normal",
      code: "normal",
      range: GrowthIndicatorRange.MEDIAN,
      condition: {
        value: fExp`(${ZScoreVarName} >= ${ZScorePossibleValueLimit.neg2}) && (${ZScoreVarName} <= ${ZScorePossibleValueLimit.pos1})`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Émaciation",
      code: "wasted",
      range: GrowthIndicatorRange.BELOW_M2,
      condition: {
        value: fExp`(${ZScoreVarName} < ${ZScorePossibleValueLimit.neg2}) && (${ZScoreVarName} >= ${ZScorePossibleValueLimit.neg3})`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Émaciation sévère",
      code: "severely_wasted",
      range: GrowthIndicatorRange.BELOW_M3,
      condition: {
        value: fExp`${ZScoreVarName} < ${ZScorePossibleValueLimit.neg3}`,
        variables: [ZScoreVarName],
      },
    },
  ],
  zScoreComputingStrategy: ZScoreComputingStrategyType.LENHEIBASED,
  standardShape: StandardShape.CURVE,
};
