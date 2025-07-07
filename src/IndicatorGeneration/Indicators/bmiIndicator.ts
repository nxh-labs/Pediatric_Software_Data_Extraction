import {
  AnthroSystemCodes,
  GrowthRefChartAndTableCodes,
  Sex,
  MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY,
  MAX_AGE_IN_MONTH_IN_PEDIATRIC,
  GrowthIndicatorRange,
  ZScoreVarName,
  ZScoreComputingStrategyType,
  StandardShape,
  ZScorePossibleValueLimit,
} from "../../../constants";
import { fExp } from "../../../utils";
import { CreateIndicatorProps } from "../types";

export const bmiIndicator: CreateIndicatorProps = {
  code: AnthroSystemCodes.BMI_FOR_AGE,
  name: "Indice de Masse Corporelle pour l'Âge",
  neededMeasureCodes: [
    AnthroSystemCodes.WEIGHT,
    AnthroSystemCodes.HEIGHT,
    AnthroSystemCodes.AGE_IN_DAY,
  ],
  axeX: {
    value: fExp`${AnthroSystemCodes.AGE_IN_DAY}`,
    variables: [AnthroSystemCodes.AGE_IN_DAY],
  },
  axeY: {
    value: fExp`${AnthroSystemCodes.WEIGHT}/((${AnthroSystemCodes.LENHEI}/100)^2)`,
    variables: [AnthroSystemCodes.WEIGHT, AnthroSystemCodes.LENHEI],
  },
  availableRefCharts: [
    {
      chartCode: GrowthRefChartAndTableCodes.BMIAGE_BOYS_0_5_CHART,
      condition: {
        value: fExp`(${AnthroSystemCodes.SEX} == ${Sex.MALE}) && (${AnthroSystemCodes.AGE_IN_DAY} <= ${MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY})`,
        variables: [AnthroSystemCodes.SEX, AnthroSystemCodes.AGE_IN_DAY],
      },
    },
    {
      chartCode: GrowthRefChartAndTableCodes.BMIAGE_GIRLS_0_5_CHART,
      condition: {
        value: fExp`(${AnthroSystemCodes.SEX} == ${Sex.FEMALE}) && (${AnthroSystemCodes.AGE_IN_DAY} <= ${MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY})`,
        variables: [AnthroSystemCodes.SEX, AnthroSystemCodes.AGE_IN_DAY],
      },
    },
    {
      chartCode: GrowthRefChartAndTableCodes.BMIAGE_BOYS_5_19_CHART,
      condition: {
        value: fExp`(${AnthroSystemCodes.SEX} == ${Sex.MALE}) && (${AnthroSystemCodes.AGE_IN_DAY} > ${MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY})`,
        variables: [AnthroSystemCodes.SEX, AnthroSystemCodes.AGE_IN_DAY],
      },
    },
    {
      chartCode: GrowthRefChartAndTableCodes.BMIAGE_GIRLS_5_19_CHART,
      condition: {
        value: fExp`(${AnthroSystemCodes.SEX} == ${Sex.FEMALE}) && (${AnthroSystemCodes.AGE_IN_DAY} > ${MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY})`,
        variables: [AnthroSystemCodes.SEX, AnthroSystemCodes.AGE_IN_DAY],
      },
    },
  ],
  availableRefTables: [],
  usageConditions: {
    value: fExp`(${AnthroSystemCodes.AGE_IN_DAY} >= 0) && (${AnthroSystemCodes.AGE_IN_MONTH} <= ${MAX_AGE_IN_MONTH_IN_PEDIATRIC})`,
    variables: [AnthroSystemCodes.AGE_IN_MONTH],
  },
  interpretations: [
    {
      name: "Obésité sévère",
      code: "severe_obesity_5_19",
      range: GrowthIndicatorRange.ABOVE_3,
      condition: {
        value: fExp`(${AnthroSystemCodes.AGE_IN_DAY} > ${MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY}) && (${ZScoreVarName} > ${ZScorePossibleValueLimit.pos3})`,
        variables: [ZScoreVarName, AnthroSystemCodes.AGE_IN_DAY],
      },
    },
    {
      name: "Obésité",
      code: "obesity_0_5",
      range: GrowthIndicatorRange.ABOVE_3,
      condition: {
        value: fExp`(${AnthroSystemCodes.AGE_IN_DAY} <= ${MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY}) && (${ZScoreVarName} > ${ZScorePossibleValueLimit.pos3})`,
        variables: [ZScoreVarName, AnthroSystemCodes.AGE_IN_DAY],
      },
    },
    {
      name: "Surpoids",
      code: "overweight_0_5",
      range: GrowthIndicatorRange.ABOVE_2,
      condition: {
        value: fExp`(${AnthroSystemCodes.AGE_IN_DAY} <= ${MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY}) && (${ZScoreVarName} > ${ZScorePossibleValueLimit.pos2}) && (${ZScoreVarName} <= ${ZScorePossibleValueLimit.pos3})`,
        variables: [ZScoreVarName, AnthroSystemCodes.AGE_IN_DAY],
      },
    },
    {
      name: "Obésité",
      code: "obesity_5_19",
      range: GrowthIndicatorRange.ABOVE_2,
      condition: {
        value: fExp`(${AnthroSystemCodes.AGE_IN_DAY} > ${MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY}) && (${ZScoreVarName} > ${ZScorePossibleValueLimit.pos2}) && (${ZScoreVarName} <= ${ZScorePossibleValueLimit.pos3})`,
        variables: [ZScoreVarName, AnthroSystemCodes.AGE_IN_DAY],
      },
    },
    {
      name: "Surpoids",
      code: "overweight_5_19",
      range: GrowthIndicatorRange.ABOVE_1,
      condition: {
        value: fExp`(${AnthroSystemCodes.AGE_IN_DAY} > ${MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY}) && (${ZScoreVarName} > ${ZScorePossibleValueLimit.pos1}) && (${ZScoreVarName} <= ${ZScorePossibleValueLimit.pos2})`,
        variables: [ZScoreVarName, AnthroSystemCodes.AGE_IN_DAY],
      },
    },
    {
      name: "Risque de surpoids",
      code: "overweight_risk",
      range: GrowthIndicatorRange.ABOVE_1,
      condition: {
        value: fExp`(${AnthroSystemCodes.AGE_IN_DAY} <= ${MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY}) && (${ZScoreVarName} > ${ZScorePossibleValueLimit.pos1}) && (${ZScoreVarName} <= ${ZScorePossibleValueLimit.pos2})`,
        variables: [ZScoreVarName, AnthroSystemCodes.AGE_IN_DAY],
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
  zScoreComputingStrategy: ZScoreComputingStrategyType.AGEBASED,
  standardShape: StandardShape.CURVE,
};
