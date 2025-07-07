import {
  AnthroSystemCodes,
  GrowthRefChartAndTableCodes,
  Sex,
  MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY,
  GrowthIndicatorRange,
  ZScoreVarName,
  ZScoreComputingStrategyType,
  StandardShape,
  MAX_AGE_IN_MONTH_IN_PEDIATRIC,
  ZScorePossibleValueLimit,
} from "../../../constants";
import { fExp } from "../../../utils";
import { CreateIndicatorProps } from "../types";

export const heightForAgeIndicator: CreateIndicatorProps = {
  code: AnthroSystemCodes.HFA,
  name: "Taille debout/couchée pour l'Âge",
  neededMeasureCodes: [
    AnthroSystemCodes.LENHEI,
    AnthroSystemCodes.AGE_IN_DAY,
    AnthroSystemCodes.AGE_IN_MONTH,
  ],
  axeX: {
    value: fExp`${AnthroSystemCodes.AGE_IN_DAY}`,
    variables: [AnthroSystemCodes.AGE_IN_DAY],
  },
  axeY: {
    value: fExp`${AnthroSystemCodes.LENHEI}`,
    variables: [AnthroSystemCodes.LENHEI],
  },
  availableRefCharts: [
    {
      chartCode: GrowthRefChartAndTableCodes.HFA_BOYS_0_5_CHART,
      condition: {
        value: fExp`(${AnthroSystemCodes.SEX} == ${Sex.MALE}) && (${AnthroSystemCodes.AGE_IN_DAY} <= ${MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY})`,
        variables: [AnthroSystemCodes.SEX, AnthroSystemCodes.AGE_IN_DAY],
      },
    },
    {
      chartCode: GrowthRefChartAndTableCodes.HFA_GIRLS_0_5_CHART,
      condition: {
        value: fExp`(${AnthroSystemCodes.SEX} == ${Sex.FEMALE}) && (${AnthroSystemCodes.AGE_IN_DAY} <= ${MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY})`,
        variables: [AnthroSystemCodes.SEX, AnthroSystemCodes.AGE_IN_DAY],
      },
    },
    {
      chartCode: GrowthRefChartAndTableCodes.HFA_BOYS_5_19_CHART,
      condition: {
        value: fExp`(${AnthroSystemCodes.SEX} == ${Sex.MALE}) && (${AnthroSystemCodes.AGE_IN_DAY} > ${MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY})`,
        variables: [AnthroSystemCodes.SEX, AnthroSystemCodes.AGE_IN_DAY],
      },
    },
    {
      chartCode: GrowthRefChartAndTableCodes.HFA_GIRLS_5_19_CHART,
      condition: {
        value: fExp`(${AnthroSystemCodes.SEX} == ${Sex.FEMALE}) && (${AnthroSystemCodes.AGE_IN_DAY} > ${MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY})`,
        variables: [AnthroSystemCodes.SEX, AnthroSystemCodes.AGE_IN_DAY],
      },
    },
  ],
  availableRefTables: [],
  usageConditions: {
    value: fExp`${AnthroSystemCodes.AGE_IN_MONTH} <= ${MAX_AGE_IN_MONTH_IN_PEDIATRIC}`,
    variables: [AnthroSystemCodes.AGE_IN_MONTH],
  },
  interpretations: [
    {
      name: "Gigantisme",
      code: "tall",
      range: GrowthIndicatorRange.ABOVE_3,
      condition: {
        value: fExp`${ZScoreVarName} > ${ZScorePossibleValueLimit.pos3}`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Normal",
      code: "normal",
      range: GrowthIndicatorRange.ABOVE_2,
      condition: {
        value: fExp`(${ZScoreVarName} >= ${ZScorePossibleValueLimit.neg2}) && (${ZScoreVarName} <= ${ZScorePossibleValueLimit.pos3})`,
        variables: [ZScoreVarName],
      },
    },

    {
      name: "Retard de croissance",
      code: "stunted",
      range: GrowthIndicatorRange.BELOW_M2,
      condition: {
        value: fExp`(${ZScoreVarName} < ${ZScorePossibleValueLimit.neg2}) && (${ZScoreVarName} >= ${ZScorePossibleValueLimit.neg3})`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Retard de croissance sévère",
      code: "severely_stunted",
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
