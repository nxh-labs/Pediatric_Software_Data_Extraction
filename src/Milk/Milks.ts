import {
  AnthroSystemCodes,
  APPETITE_TEST_CODES,
  CLINICAL_SIGNS,
  COMPLICATION_CODES,
  ConditionResult,
} from "../../constants";
import { Milk, MilkType, RecommendedMilkQuantityPerDay } from "../../types";
import { fExp } from "../../utils";

export const milkRefs: Milk[] = [
  {
    type: MilkType.F75,
    name: "Lait F75",
    condition: {
      value: fExp`((${AnthroSystemCodes.AGE_IN_MONTH} < 6 || ${AnthroSystemCodes.WEIGHT} < 3) && ${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.True}) || ((${APPETITE_TEST_CODES.CODE} == '${APPETITE_TEST_CODES.NEGATIVE}') && (${COMPLICATION_CODES.COMPLICATIONS_NUMBER} > 0))`,
      variables: [
        AnthroSystemCodes.AGE_IN_MONTH,
        AnthroSystemCodes.WEIGHT,
        APPETITE_TEST_CODES.CODE,
        COMPLICATION_CODES.COMPLICATIONS_NUMBER,
        CLINICAL_SIGNS.EDEMA,
      ],
    },
    doseFormula: {
      value: fExp`130 * ${AnthroSystemCodes.WEIGHT}`,
      variables: [AnthroSystemCodes.WEIGHT],
    },
    recommendedMilkPerDay: [
      RecommendedMilkQuantityPerDay.FIVE,
      RecommendedMilkQuantityPerDay.HEIGHT,
      RecommendedMilkQuantityPerDay.SIX,
    ],
    recommendedMilkPerWeightRanges: [
      {
        weightRanges: {
          min: 2,
          max: 2.1,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 40,
          [RecommendedMilkQuantityPerDay.SIX]: 50,
          [RecommendedMilkQuantityPerDay.FIVE]: 65,
        },
      },
      {
        weightRanges: {
          min: 2.2,
          max: 2.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 45,
          [RecommendedMilkQuantityPerDay.SIX]: 60,
          [RecommendedMilkQuantityPerDay.FIVE]: 70,
        },
      },
      {
        weightRanges: {
          min: 2.5,
          max: 2.7,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 50,
          [RecommendedMilkQuantityPerDay.SIX]: 65,
          [RecommendedMilkQuantityPerDay.FIVE]: 75,
        },
      },
      {
        weightRanges: {
          min: 2.8,
          max: 2.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 55,
          [RecommendedMilkQuantityPerDay.SIX]: 70,
          [RecommendedMilkQuantityPerDay.FIVE]: 80,
        },
      },
      {
        weightRanges: {
          min: 3.0,
          max: 3.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 60,
          [RecommendedMilkQuantityPerDay.SIX]: 75,
          [RecommendedMilkQuantityPerDay.FIVE]: 85,
        },
      },
      {
        weightRanges: {
          min: 3.5,
          max: 3.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 65,
          [RecommendedMilkQuantityPerDay.SIX]: 80,
          [RecommendedMilkQuantityPerDay.FIVE]: 95,
        },
      },
      {
        weightRanges: {
          min: 4.0,
          max: 4.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 70,
          [RecommendedMilkQuantityPerDay.SIX]: 85,
          [RecommendedMilkQuantityPerDay.FIVE]: 110,
        },
      },
      {
        weightRanges: {
          min: 4.5,
          max: 4.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 80,
          [RecommendedMilkQuantityPerDay.SIX]: 95,
          [RecommendedMilkQuantityPerDay.FIVE]: 120,
        },
      },
      {
        weightRanges: {
          min: 5.0,
          max: 5.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 90,
          [RecommendedMilkQuantityPerDay.SIX]: 110,
          [RecommendedMilkQuantityPerDay.FIVE]: 130,
        },
      },
      {
        weightRanges: {
          min: 5.5,
          max: 5.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 100,
          [RecommendedMilkQuantityPerDay.SIX]: 120,
          [RecommendedMilkQuantityPerDay.FIVE]: 150,
        },
      },
      {
        weightRanges: {
          min: 6.0,
          max: 6.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 110,
          [RecommendedMilkQuantityPerDay.SIX]: 140,
          [RecommendedMilkQuantityPerDay.FIVE]: 175,
        },
      },
      {
        weightRanges: {
          min: 7.0,
          max: 7.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 125,
          [RecommendedMilkQuantityPerDay.SIX]: 160,
          [RecommendedMilkQuantityPerDay.FIVE]: 200,
        },
      },
      {
        weightRanges: {
          min: 8.0,
          max: 8.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 140,
          [RecommendedMilkQuantityPerDay.SIX]: 180,
          [RecommendedMilkQuantityPerDay.FIVE]: 225,
        },
      },
      {
        weightRanges: {
          min: 9.0,
          max: 9.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 155,
          [RecommendedMilkQuantityPerDay.SIX]: 190,
          [RecommendedMilkQuantityPerDay.FIVE]: 250,
        },
      },
      {
        weightRanges: {
          min: 10.0,
          max: 10.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 170,
          [RecommendedMilkQuantityPerDay.SIX]: 200,
          [RecommendedMilkQuantityPerDay.FIVE]: 275,
        },
      },
      {
        weightRanges: {
          min: 11.0,
          max: 11.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 190,
          [RecommendedMilkQuantityPerDay.SIX]: 230,
          [RecommendedMilkQuantityPerDay.FIVE]: 275,
        },
      },
      {
        weightRanges: {
          min: 12.0,
          max: 12.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 205,
          [RecommendedMilkQuantityPerDay.SIX]: 250,
          [RecommendedMilkQuantityPerDay.FIVE]: 300,
        },
      },
      {
        weightRanges: {
          min: 13.0,
          max: 13.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 230,
          [RecommendedMilkQuantityPerDay.SIX]: 275,
          [RecommendedMilkQuantityPerDay.FIVE]: 350,
        },
      },
      {
        weightRanges: {
          min: 14.0,
          max: 14.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 250,
          [RecommendedMilkQuantityPerDay.SIX]: 290,
          [RecommendedMilkQuantityPerDay.FIVE]: 375,
        },
      },
      {
        weightRanges: {
          min: 15.0,
          max: 19.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 260,
          [RecommendedMilkQuantityPerDay.SIX]: 300,
          [RecommendedMilkQuantityPerDay.FIVE]: 400,
        },
      },
      {
        weightRanges: {
          min: 20.0,
          max: 24.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 290,
          [RecommendedMilkQuantityPerDay.SIX]: 320,
          [RecommendedMilkQuantityPerDay.FIVE]: 450,
        },
      },
      {
        weightRanges: {
          min: 25.0,
          max: 29.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 300,
          [RecommendedMilkQuantityPerDay.SIX]: 350,
          [RecommendedMilkQuantityPerDay.FIVE]: 450,
        },
      },
      {
        weightRanges: {
          min: 30.0,
          max: 39.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 320,
          [RecommendedMilkQuantityPerDay.SIX]: 370,
          [RecommendedMilkQuantityPerDay.FIVE]: 500,
        },
      },
      {
        weightRanges: {
          min: 40.0,
          max: 60.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 350,
          [RecommendedMilkQuantityPerDay.SIX]: 400,
          [RecommendedMilkQuantityPerDay.FIVE]: 500,
        },
      },
    ],
    notes: [],
  },
  {
    type: MilkType.F100,
    name: "Lait F100",
    condition: {
      value: fExp`(${AnthroSystemCodes.WEIGHT}>=3 && ${AnthroSystemCodes.AGE_IN_MONTH} >=6 )&& (${APPETITE_TEST_CODES.CODE} == '${APPETITE_TEST_CODES.POSITIVE}' && ${COMPLICATION_CODES.COMPLICATIONS_NUMBER} == 0)`,
      variables: [
        AnthroSystemCodes.WEIGHT,
        AnthroSystemCodes.AGE_IN_MONTH,
        APPETITE_TEST_CODES.CODE,
      ],
    },
    doseFormula: {
      value: fExp`${AnthroSystemCodes.WEIGHT} * 130`,
      variables: [AnthroSystemCodes.WEIGHT],
    },
    recommendedMilkPerDay: [
      RecommendedMilkQuantityPerDay.SIX,
      RecommendedMilkQuantityPerDay.FIVE,
    ],
    recommendedMilkPerWeightRanges: [
      {
        weightRanges: {
          min: 3,
          max: 3.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.SIX]: 75,
          [RecommendedMilkQuantityPerDay.FIVE]: 85,
        },
      },
      {
        weightRanges: {
          min: 3.5,
          max: 3.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.SIX]: 80,
          [RecommendedMilkQuantityPerDay.FIVE]: 95,
        },
      },
      {
        weightRanges: {
          min: 4,
          max: 4.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.SIX]: 85,
          [RecommendedMilkQuantityPerDay.FIVE]: 110,
        },
      },
      {
        weightRanges: {
          min: 4.5,
          max: 4.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.SIX]: 95,
          [RecommendedMilkQuantityPerDay.FIVE]: 120,
        },
      },
      {
        weightRanges: {
          min: 5,
          max: 5.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.SIX]: 110,
          [RecommendedMilkQuantityPerDay.FIVE]: 130,
        },
      },
      {
        weightRanges: {
          min: 5.5,
          max: 5.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.SIX]: 120,
          [RecommendedMilkQuantityPerDay.FIVE]: 150,
        },
      },
      {
        weightRanges: {
          min: 6,
          max: 6.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.SIX]: 140,
          [RecommendedMilkQuantityPerDay.FIVE]: 175,
        },
      },
      {
        weightRanges: {
          min: 7,
          max: 7.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.SIX]: 160,
          [RecommendedMilkQuantityPerDay.FIVE]: 200,
        },
      },
      {
        weightRanges: {
          min: 8,
          max: 8.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.SIX]: 180,
          [RecommendedMilkQuantityPerDay.FIVE]: 225,
        },
      },
      {
        weightRanges: {
          min: 9,
          max: 9.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.SIX]: 190,
          [RecommendedMilkQuantityPerDay.FIVE]: 250,
        },
      },
      {
        weightRanges: {
          min: 10,
          max: 10.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.SIX]: 200,
          [RecommendedMilkQuantityPerDay.FIVE]: 275,
        },
      },
      {
        weightRanges: {
          min: 11,
          max: 11.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.SIX]: 230,
          [RecommendedMilkQuantityPerDay.FIVE]: 275,
        },
      },
      {
        weightRanges: {
          min: 12,
          max: 12.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.SIX]: 250,
          [RecommendedMilkQuantityPerDay.FIVE]: 300,
        },
      },
      {
        weightRanges: {
          min: 13,
          max: 13.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.SIX]: 275,
          [RecommendedMilkQuantityPerDay.FIVE]: 350,
        },
      },
      {
        weightRanges: {
          min: 14,
          max: 14.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.SIX]: 290,
          [RecommendedMilkQuantityPerDay.FIVE]: 375,
        },
      },
      {
        weightRanges: {
          min: 15,
          max: 19.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.SIX]: 300,
          [RecommendedMilkQuantityPerDay.FIVE]: 400,
        },
      },
      {
        weightRanges: {
          min: 20,
          max: 24.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.SIX]: 320,
          [RecommendedMilkQuantityPerDay.FIVE]: 450,
        },
      },
      {
        weightRanges: {
          min: 25,
          max: 29.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.SIX]: 350,
          [RecommendedMilkQuantityPerDay.FIVE]: 450,
        },
      },
      {
        weightRanges: {
          min: 30,
          max: 39.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.SIX]: 370,
          [RecommendedMilkQuantityPerDay.FIVE]: 500,
        },
      },
      {
        weightRanges: {
          min: 40,
          max: 60,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.SIX]: 400,
          [RecommendedMilkQuantityPerDay.FIVE]: 500,
        },
      },
    ],
    notes: [],
  },
  {
    type: MilkType.F100_dilue,
    name: "Lait F100 - dilué",
    condition: {
      value: fExp`((${AnthroSystemCodes.WEIGHT} < 3) || (${AnthroSystemCodes.AGE_IN_MONTH} < 6)) && ${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.False}`,
      variables: [
        AnthroSystemCodes.AGE_IN_MONTH,
        AnthroSystemCodes.WEIGHT,
        CLINICAL_SIGNS.EDEMA,
      ],
    },
    doseFormula: {
      value: fExp`130 * ${AnthroSystemCodes.WEIGHT}`,
      variables: [AnthroSystemCodes.WEIGHT],
    },
    recommendedMilkPerDay: [RecommendedMilkQuantityPerDay.HEIGHT],
    recommendedMilkPerWeightRanges: [
      {
        weightRanges: {
          min: 0,
          max: 1.2,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 25,
        },
      },
      {
        weightRanges: {
          min: 1.3,
          max: 1.5,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 30,
        },
      },
      {
        weightRanges: {
          min: 1.6,
          max: 1.7,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 35,
        },
      },
      {
        weightRanges: {
          min: 1.8,
          max: 2.1,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 40,
        },
      },
      {
        weightRanges: {
          min: 2.2,
          max: 2.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 45,
        },
      },
      {
        weightRanges: {
          min: 2.5,
          max: 2.7,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 50,
        },
      },
      {
        weightRanges: {
          min: 2.8,
          max: 2.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 55,
        },
      },
      {
        weightRanges: {
          min: 3.0,
          max: 3.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 60,
        },
      },
      {
        weightRanges: {
          min: 3.5,
          max: 3.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 65,
        },
      },
      {
        weightRanges: {
          min: 4.0,
          max: 4.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkQuantityPerDay.HEIGHT]: 70,
        },
      },
    ],
    notes: [],
  },
];
