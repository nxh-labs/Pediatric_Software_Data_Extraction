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

export const subscapularSkinfoldForAgeIndicator: CreateIndicatorProps = {
  code: AnthroSystemCodes.SSF_FOR_AGE,
  name: "Pli cutané sous-scapulaire pour l'Âge",
  neededMeasureCodes: [AnthroSystemCodes.SSF, AnthroSystemCodes.AGE_IN_DAY],
  axeX: {
    value: fExp`${AnthroSystemCodes.AGE_IN_DAY}`,
    variables: [AnthroSystemCodes.AGE_IN_DAY],
  },
  axeY: {
    value: fExp`${AnthroSystemCodes.SSF}`,
    variables: [AnthroSystemCodes.SSF],
  },
  availableRefCharts: [
    {
      chartCode: GrowthRefChartAndTableCodes.SSF_BOYS_3M_5Y_CHART,
      condition: {
        value: fExp`${AnthroSystemCodes.SEX} == ${Sex.MALE}`,
        variables: [AnthroSystemCodes.SEX],
      },
    },
    {
      chartCode: GrowthRefChartAndTableCodes.SSF_GIRLS_3M_5Y_CHART,
      condition: {
        value: fExp`${AnthroSystemCodes.SEX} == ${Sex.FEMALE}`,
        variables: [AnthroSystemCodes.SEX],
      },
    },
  ],
  availableRefTables: [],
  usageConditions: {
    value: fExp`(${AnthroSystemCodes.AGE_IN_DAY} >= ${MIN_AGE_IN_DAY_TO_USE_MUCA_TSF_SSF}) && (${AnthroSystemCodes.AGE_IN_DAY} <= ${MAX_AGE_IN_DAY_TO_USE_AGE_IN_DAY})`,
    variables: [AnthroSystemCodes.AGE_IN_DAY],
  },
  interpretations: [
    {
      name: "Graisse tronculaire élevée",
      code: "high_trunk_fat",
      range: GrowthIndicatorRange.ABOVE_2,
      condition: {
        value: fExp`${ZScoreVarName} > ${ZScorePossibleValueLimit.pos2}`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Graisse tronculaire au-dessus de la moyenne",
      code: "above_average_trunk_fat",
      range: GrowthIndicatorRange.ABOVE_1,
      condition: {
        value: fExp`(${ZScoreVarName} > ${ZScorePossibleValueLimit.pos1}) && (${ZScoreVarName} <= ${ZScorePossibleValueLimit.pos2})`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Graisse tronculaire normale",
      code: "normal_trunk_fat",
      range: GrowthIndicatorRange.MEDIAN,
      condition: {
        value: fExp`(${ZScoreVarName} >= ${ZScorePossibleValueLimit.neg2}) && (${ZScoreVarName} <= ${ZScorePossibleValueLimit.pos1})`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Graisse tronculaire en dessous de la moyenne",
      code: "below_average_trunk_fat",
      range: GrowthIndicatorRange.BELOW_M2,
      condition: {
        value: fExp`(${ZScoreVarName} < ${ZScorePossibleValueLimit.neg2}) && (${ZScoreVarName} >= ${ZScorePossibleValueLimit.neg3})`,
        variables: [ZScoreVarName],
      },
    },
    {
      name: "Faible graisse tronculaire",
      code: "low_trunk_fat",
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
