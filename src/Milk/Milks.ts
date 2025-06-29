import {
  AnthroSystemCodes,
  APPETITE_TEST_CODES,
  CLINICAL_SIGNS,
  COMPLICATION_CODES,
  ConditionResult,
} from "../../constants";
import { Milk, MilkType, RecommendedMilkPerDay } from "../../types";
import { fExp } from "../../utils";

export const milkRefs: Milk[] = [
  {
    type: MilkType.F75,
    name: "Lait F75",
    condition: {
      value: fExp`(((${AnthroSystemCodes.AGE_IN_MONTH} < 6) || (${AnthroSystemCodes.WEIGHT} < 3)) && (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.True})) || ((${APPETITE_TEST_CODES.CODE} == '${APPETITE_TEST_CODES.NEGATIVE}') && (${COMPLICATION_CODES.COMPLICATIONS_NUMBER} > 0))`,
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
      RecommendedMilkPerDay.FIVE,
      RecommendedMilkPerDay.HEIGHT,
      RecommendedMilkPerDay.SIX,
    ],
    recommendationPerRanges: [
      {
        weightRange: {
          min: 2,
          max: 2.1,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 40,
          [RecommendedMilkPerDay.SIX]: 50,
          [RecommendedMilkPerDay.FIVE]: 65,
        },
      },
      {
        weightRange: {
          min: 2.2,
          max: 2.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 45,
          [RecommendedMilkPerDay.SIX]: 60,
          [RecommendedMilkPerDay.FIVE]: 70,
        },
      },
      {
        weightRange: {
          min: 2.5,
          max: 2.7,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 50,
          [RecommendedMilkPerDay.SIX]: 65,
          [RecommendedMilkPerDay.FIVE]: 75,
        },
      },
      {
        weightRange: {
          min: 2.8,
          max: 2.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 55,
          [RecommendedMilkPerDay.SIX]: 70,
          [RecommendedMilkPerDay.FIVE]: 80,
        },
      },
      {
        weightRange: {
          min: 3.0,
          max: 3.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 60,
          [RecommendedMilkPerDay.SIX]: 75,
          [RecommendedMilkPerDay.FIVE]: 85,
        },
      },
      {
        weightRange: {
          min: 3.5,
          max: 3.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 65,
          [RecommendedMilkPerDay.SIX]: 80,
          [RecommendedMilkPerDay.FIVE]: 95,
        },
      },
      {
        weightRange: {
          min: 4.0,
          max: 4.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 70,
          [RecommendedMilkPerDay.SIX]: 85,
          [RecommendedMilkPerDay.FIVE]: 110,
        },
      },
      {
        weightRange: {
          min: 4.5,
          max: 4.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 80,
          [RecommendedMilkPerDay.SIX]: 95,
          [RecommendedMilkPerDay.FIVE]: 120,
        },
      },
      {
        weightRange: {
          min: 5.0,
          max: 5.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 90,
          [RecommendedMilkPerDay.SIX]: 110,
          [RecommendedMilkPerDay.FIVE]: 130,
        },
      },
      {
        weightRange: {
          min: 5.5,
          max: 5.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 100,
          [RecommendedMilkPerDay.SIX]: 120,
          [RecommendedMilkPerDay.FIVE]: 150,
        },
      },
      {
        weightRange: {
          min: 6.0,
          max: 6.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 110,
          [RecommendedMilkPerDay.SIX]: 140,
          [RecommendedMilkPerDay.FIVE]: 175,
        },
      },
      {
        weightRange: {
          min: 7.0,
          max: 7.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 125,
          [RecommendedMilkPerDay.SIX]: 160,
          [RecommendedMilkPerDay.FIVE]: 200,
        },
      },
      {
        weightRange: {
          min: 8.0,
          max: 8.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 140,
          [RecommendedMilkPerDay.SIX]: 180,
          [RecommendedMilkPerDay.FIVE]: 225,
        },
      },
      {
        weightRange: {
          min: 9.0,
          max: 9.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 155,
          [RecommendedMilkPerDay.SIX]: 190,
          [RecommendedMilkPerDay.FIVE]: 250,
        },
      },
      {
        weightRange: {
          min: 10.0,
          max: 10.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 170,
          [RecommendedMilkPerDay.SIX]: 200,
          [RecommendedMilkPerDay.FIVE]: 275,
        },
      },
      {
        weightRange: {
          min: 11.0,
          max: 11.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 190,
          [RecommendedMilkPerDay.SIX]: 230,
          [RecommendedMilkPerDay.FIVE]: 275,
        },
      },
      {
        weightRange: {
          min: 12.0,
          max: 12.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 205,
          [RecommendedMilkPerDay.SIX]: 250,
          [RecommendedMilkPerDay.FIVE]: 300,
        },
      },
      {
        weightRange: {
          min: 13.0,
          max: 13.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 230,
          [RecommendedMilkPerDay.SIX]: 275,
          [RecommendedMilkPerDay.FIVE]: 350,
        },
      },
      {
        weightRange: {
          min: 14.0,
          max: 14.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 250,
          [RecommendedMilkPerDay.SIX]: 290,
          [RecommendedMilkPerDay.FIVE]: 375,
        },
      },
      {
        weightRange: {
          min: 15.0,
          max: 19.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 260,
          [RecommendedMilkPerDay.SIX]: 300,
          [RecommendedMilkPerDay.FIVE]: 400,
        },
      },
      {
        weightRange: {
          min: 20.0,
          max: 24.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 290,
          [RecommendedMilkPerDay.SIX]: 320,
          [RecommendedMilkPerDay.FIVE]: 450,
        },
      },
      {
        weightRange: {
          min: 25.0,
          max: 29.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 300,
          [RecommendedMilkPerDay.SIX]: 350,
          [RecommendedMilkPerDay.FIVE]: 450,
        },
      },
      {
        weightRange: {
          min: 30.0,
          max: 39.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 320,
          [RecommendedMilkPerDay.SIX]: 370,
          [RecommendedMilkPerDay.FIVE]: 500,
        },
      },
      {
        weightRange: {
          min: 40.0,
          max: 60.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 350,
          [RecommendedMilkPerDay.SIX]: 400,
          [RecommendedMilkPerDay.FIVE]: 500,
        },
      },
    ],
    notes: [],
  },
  {
    type: MilkType.F100,
    name: "Lait F100",
    condition: {
      value: fExp`((${AnthroSystemCodes.WEIGHT}>=3) && (${AnthroSystemCodes.AGE_IN_MONTH} >=6) )&& ((${APPETITE_TEST_CODES.CODE} == '${APPETITE_TEST_CODES.POSITIVE}') && (${COMPLICATION_CODES.COMPLICATIONS_NUMBER} == 0))`,
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
      RecommendedMilkPerDay.SIX,
      RecommendedMilkPerDay.FIVE,
    ],
    recommendationPerRanges: [
      {
        weightRange: {
          min: 3,
          max: 3.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.SIX]: 75,
          [RecommendedMilkPerDay.FIVE]: 85,
        },
      },
      {
        weightRange: {
          min: 3.5,
          max: 3.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.SIX]: 80,
          [RecommendedMilkPerDay.FIVE]: 95,
        },
      },
      {
        weightRange: {
          min: 4,
          max: 4.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.SIX]: 85,
          [RecommendedMilkPerDay.FIVE]: 110,
        },
      },
      {
        weightRange: {
          min: 4.5,
          max: 4.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.SIX]: 95,
          [RecommendedMilkPerDay.FIVE]: 120,
        },
      },
      {
        weightRange: {
          min: 5,
          max: 5.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.SIX]: 110,
          [RecommendedMilkPerDay.FIVE]: 130,
        },
      },
      {
        weightRange: {
          min: 5.5,
          max: 5.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.SIX]: 120,
          [RecommendedMilkPerDay.FIVE]: 150,
        },
      },
      {
        weightRange: {
          min: 6,
          max: 6.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.SIX]: 140,
          [RecommendedMilkPerDay.FIVE]: 175,
        },
      },
      {
        weightRange: {
          min: 7,
          max: 7.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.SIX]: 160,
          [RecommendedMilkPerDay.FIVE]: 200,
        },
      },
      {
        weightRange: {
          min: 8,
          max: 8.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.SIX]: 180,
          [RecommendedMilkPerDay.FIVE]: 225,
        },
      },
      {
        weightRange: {
          min: 9,
          max: 9.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.SIX]: 190,
          [RecommendedMilkPerDay.FIVE]: 250,
        },
      },
      {
        weightRange: {
          min: 10,
          max: 10.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.SIX]: 200,
          [RecommendedMilkPerDay.FIVE]: 275,
        },
      },
      {
        weightRange: {
          min: 11,
          max: 11.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.SIX]: 230,
          [RecommendedMilkPerDay.FIVE]: 275,
        },
      },
      {
        weightRange: {
          min: 12,
          max: 12.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.SIX]: 250,
          [RecommendedMilkPerDay.FIVE]: 300,
        },
      },
      {
        weightRange: {
          min: 13,
          max: 13.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.SIX]: 275,
          [RecommendedMilkPerDay.FIVE]: 350,
        },
      },
      {
        weightRange: {
          min: 14,
          max: 14.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.SIX]: 290,
          [RecommendedMilkPerDay.FIVE]: 375,
        },
      },
      {
        weightRange: {
          min: 15,
          max: 19.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.SIX]: 300,
          [RecommendedMilkPerDay.FIVE]: 400,
        },
      },
      {
        weightRange: {
          min: 20,
          max: 24.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.SIX]: 320,
          [RecommendedMilkPerDay.FIVE]: 450,
        },
      },
      {
        weightRange: {
          min: 25,
          max: 29.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.SIX]: 350,
          [RecommendedMilkPerDay.FIVE]: 450,
        },
      },
      {
        weightRange: {
          min: 30,
          max: 39.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.SIX]: 370,
          [RecommendedMilkPerDay.FIVE]: 500,
        },
      },
      {
        weightRange: {
          min: 40,
          max: 60,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.SIX]: 400,
          [RecommendedMilkPerDay.FIVE]: 500,
        },
      },
    ],
    notes: [],
  },
  {
    type: MilkType.F100Diluted,
    name: "Lait F100 - dilué",
    condition: {
      value: fExp`((${AnthroSystemCodes.WEIGHT} < 3) || (${AnthroSystemCodes.AGE_IN_MONTH} < 6)) && (${CLINICAL_SIGNS.EDEMA} == ${ConditionResult.False})`,
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
    recommendedMilkPerDay: [RecommendedMilkPerDay.HEIGHT],
    recommendationPerRanges: [
      {
        weightRange: {
          min: 0,
          max: 1.2,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 25,
        },
      },
      {
        weightRange: {
          min: 1.3,
          max: 1.5,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 30,
        },
      },
      {
        weightRange: {
          min: 1.6,
          max: 1.7,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 35,
        },
      },
      {
        weightRange: {
          min: 1.8,
          max: 2.1,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 40,
        },
      },
      {
        weightRange: {
          min: 2.2,
          max: 2.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 45,
        },
      },
      {
        weightRange: {
          min: 2.5,
          max: 2.7,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 50,
        },
      },
      {
        weightRange: {
          min: 2.8,
          max: 2.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 55,
        },
      },
      {
        weightRange: {
          min: 3.0,
          max: 3.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 60,
        },
      },
      {
        weightRange: {
          min: 3.5,
          max: 3.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 65,
        },
      },
      {
        weightRange: {
          min: 4.0,
          max: 4.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [RecommendedMilkPerDay.HEIGHT]: 70,
        },
      },
    ],
    notes: [],
  },
];
