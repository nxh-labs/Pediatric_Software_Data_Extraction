import {
  AnthroSystemCodes,
  APPETITE_TEST_CODES,
  CLINICAL_SIGNS,
  COMPLICATION_CODES,
  ConditionResult,
} from "../../constants";
import { Milk, MilkType, FeedingFrequenciePerDay } from "../../types";
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
      FeedingFrequenciePerDay.FIVE,
      FeedingFrequenciePerDay.EIGHT,
      FeedingFrequenciePerDay.SIX,
    ],
    recommendationPerRanges: [
      {
        weightRange: {
          min: 2,
          max: 2.1,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 40,
          [FeedingFrequenciePerDay.SIX]: 50,
          [FeedingFrequenciePerDay.FIVE]: 65,
        },
      },
      {
        weightRange: {
          min: 2.2,
          max: 2.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 45,
          [FeedingFrequenciePerDay.SIX]: 60,
          [FeedingFrequenciePerDay.FIVE]: 70,
        },
      },
      {
        weightRange: {
          min: 2.5,
          max: 2.7,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 50,
          [FeedingFrequenciePerDay.SIX]: 65,
          [FeedingFrequenciePerDay.FIVE]: 75,
        },
      },
      {
        weightRange: {
          min: 2.8,
          max: 2.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 55,
          [FeedingFrequenciePerDay.SIX]: 70,
          [FeedingFrequenciePerDay.FIVE]: 80,
        },
      },
      {
        weightRange: {
          min: 3.0,
          max: 3.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 60,
          [FeedingFrequenciePerDay.SIX]: 75,
          [FeedingFrequenciePerDay.FIVE]: 85,
        },
      },
      {
        weightRange: {
          min: 3.5,
          max: 3.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 65,
          [FeedingFrequenciePerDay.SIX]: 80,
          [FeedingFrequenciePerDay.FIVE]: 95,
        },
      },
      {
        weightRange: {
          min: 4.0,
          max: 4.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 70,
          [FeedingFrequenciePerDay.SIX]: 85,
          [FeedingFrequenciePerDay.FIVE]: 110,
        },
      },
      {
        weightRange: {
          min: 4.5,
          max: 4.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 80,
          [FeedingFrequenciePerDay.SIX]: 95,
          [FeedingFrequenciePerDay.FIVE]: 120,
        },
      },
      {
        weightRange: {
          min: 5.0,
          max: 5.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 90,
          [FeedingFrequenciePerDay.SIX]: 110,
          [FeedingFrequenciePerDay.FIVE]: 130,
        },
      },
      {
        weightRange: {
          min: 5.5,
          max: 5.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 100,
          [FeedingFrequenciePerDay.SIX]: 120,
          [FeedingFrequenciePerDay.FIVE]: 150,
        },
      },
      {
        weightRange: {
          min: 6.0,
          max: 6.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 110,
          [FeedingFrequenciePerDay.SIX]: 140,
          [FeedingFrequenciePerDay.FIVE]: 175,
        },
      },
      {
        weightRange: {
          min: 7.0,
          max: 7.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 125,
          [FeedingFrequenciePerDay.SIX]: 160,
          [FeedingFrequenciePerDay.FIVE]: 200,
        },
      },
      {
        weightRange: {
          min: 8.0,
          max: 8.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 140,
          [FeedingFrequenciePerDay.SIX]: 180,
          [FeedingFrequenciePerDay.FIVE]: 225,
        },
      },
      {
        weightRange: {
          min: 9.0,
          max: 9.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 155,
          [FeedingFrequenciePerDay.SIX]: 190,
          [FeedingFrequenciePerDay.FIVE]: 250,
        },
      },
      {
        weightRange: {
          min: 10.0,
          max: 10.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 170,
          [FeedingFrequenciePerDay.SIX]: 200,
          [FeedingFrequenciePerDay.FIVE]: 275,
        },
      },
      {
        weightRange: {
          min: 11.0,
          max: 11.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 190,
          [FeedingFrequenciePerDay.SIX]: 230,
          [FeedingFrequenciePerDay.FIVE]: 275,
        },
      },
      {
        weightRange: {
          min: 12.0,
          max: 12.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 205,
          [FeedingFrequenciePerDay.SIX]: 250,
          [FeedingFrequenciePerDay.FIVE]: 300,
        },
      },
      {
        weightRange: {
          min: 13.0,
          max: 13.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 230,
          [FeedingFrequenciePerDay.SIX]: 275,
          [FeedingFrequenciePerDay.FIVE]: 350,
        },
      },
      {
        weightRange: {
          min: 14.0,
          max: 14.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 250,
          [FeedingFrequenciePerDay.SIX]: 290,
          [FeedingFrequenciePerDay.FIVE]: 375,
        },
      },
      {
        weightRange: {
          min: 15.0,
          max: 19.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 260,
          [FeedingFrequenciePerDay.SIX]: 300,
          [FeedingFrequenciePerDay.FIVE]: 400,
        },
      },
      {
        weightRange: {
          min: 20.0,
          max: 24.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 290,
          [FeedingFrequenciePerDay.SIX]: 320,
          [FeedingFrequenciePerDay.FIVE]: 450,
        },
      },
      {
        weightRange: {
          min: 25.0,
          max: 29.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 300,
          [FeedingFrequenciePerDay.SIX]: 350,
          [FeedingFrequenciePerDay.FIVE]: 450,
        },
      },
      {
        weightRange: {
          min: 30.0,
          max: 39.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 320,
          [FeedingFrequenciePerDay.SIX]: 370,
          [FeedingFrequenciePerDay.FIVE]: 500,
        },
      },
      {
        weightRange: {
          min: 40.0,
          max: 60.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 350,
          [FeedingFrequenciePerDay.SIX]: 400,
          [FeedingFrequenciePerDay.FIVE]: 500,
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
        COMPLICATION_CODES.COMPLICATIONS_NUMBER
      ],
    },
    doseFormula: {
      value: fExp`${AnthroSystemCodes.WEIGHT} * 130`,
      variables: [AnthroSystemCodes.WEIGHT],
    },
    recommendedMilkPerDay: [
      FeedingFrequenciePerDay.SIX,
      FeedingFrequenciePerDay.FIVE,
    ],
    recommendationPerRanges: [
      {
        weightRange: {
          min: 3,
          max: 3.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.SIX]: 75,
          [FeedingFrequenciePerDay.FIVE]: 85,
        },
      },
      {
        weightRange: {
          min: 3.5,
          max: 3.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.SIX]: 80,
          [FeedingFrequenciePerDay.FIVE]: 95,
        },
      },
      {
        weightRange: {
          min: 4,
          max: 4.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.SIX]: 85,
          [FeedingFrequenciePerDay.FIVE]: 110,
        },
      },
      {
        weightRange: {
          min: 4.5,
          max: 4.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.SIX]: 95,
          [FeedingFrequenciePerDay.FIVE]: 120,
        },
      },
      {
        weightRange: {
          min: 5,
          max: 5.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.SIX]: 110,
          [FeedingFrequenciePerDay.FIVE]: 130,
        },
      },
      {
        weightRange: {
          min: 5.5,
          max: 5.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.SIX]: 120,
          [FeedingFrequenciePerDay.FIVE]: 150,
        },
      },
      {
        weightRange: {
          min: 6,
          max: 6.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.SIX]: 140,
          [FeedingFrequenciePerDay.FIVE]: 175,
        },
      },
      {
        weightRange: {
          min: 7,
          max: 7.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.SIX]: 160,
          [FeedingFrequenciePerDay.FIVE]: 200,
        },
      },
      {
        weightRange: {
          min: 8,
          max: 8.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.SIX]: 180,
          [FeedingFrequenciePerDay.FIVE]: 225,
        },
      },
      {
        weightRange: {
          min: 9,
          max: 9.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.SIX]: 190,
          [FeedingFrequenciePerDay.FIVE]: 250,
        },
      },
      {
        weightRange: {
          min: 10,
          max: 10.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.SIX]: 200,
          [FeedingFrequenciePerDay.FIVE]: 275,
        },
      },
      {
        weightRange: {
          min: 11,
          max: 11.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.SIX]: 230,
          [FeedingFrequenciePerDay.FIVE]: 275,
        },
      },
      {
        weightRange: {
          min: 12,
          max: 12.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.SIX]: 250,
          [FeedingFrequenciePerDay.FIVE]: 300,
        },
      },
      {
        weightRange: {
          min: 13,
          max: 13.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.SIX]: 275,
          [FeedingFrequenciePerDay.FIVE]: 350,
        },
      },
      {
        weightRange: {
          min: 14,
          max: 14.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.SIX]: 290,
          [FeedingFrequenciePerDay.FIVE]: 375,
        },
      },
      {
        weightRange: {
          min: 15,
          max: 19.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.SIX]: 300,
          [FeedingFrequenciePerDay.FIVE]: 400,
        },
      },
      {
        weightRange: {
          min: 20,
          max: 24.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.SIX]: 320,
          [FeedingFrequenciePerDay.FIVE]: 450,
        },
      },
      {
        weightRange: {
          min: 25,
          max: 29.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.SIX]: 350,
          [FeedingFrequenciePerDay.FIVE]: 450,
        },
      },
      {
        weightRange: {
          min: 30,
          max: 39.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.SIX]: 370,
          [FeedingFrequenciePerDay.FIVE]: 500,
        },
      },
      {
        weightRange: {
          min: 40,
          max: 60,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.SIX]: 400,
          [FeedingFrequenciePerDay.FIVE]: 500,
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
    recommendedMilkPerDay: [FeedingFrequenciePerDay.EIGHT],
    recommendationPerRanges: [
      {
        weightRange: {
          min: 0,
          max: 1.2,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 25,
        },
      },
      {
        weightRange: {
          min: 1.3,
          max: 1.5,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 30,
        },
      },
      {
        weightRange: {
          min: 1.6,
          max: 1.7,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 35,
        },
      },
      {
        weightRange: {
          min: 1.8,
          max: 2.1,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 40,
        },
      },
      {
        weightRange: {
          min: 2.2,
          max: 2.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 45,
        },
      },
      {
        weightRange: {
          min: 2.5,
          max: 2.7,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 50,
        },
      },
      {
        weightRange: {
          min: 2.8,
          max: 2.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 55,
        },
      },
      {
        weightRange: {
          min: 3.0,
          max: 3.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 60,
        },
      },
      {
        weightRange: {
          min: 3.5,
          max: 3.9,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 65,
        },
      },
      {
        weightRange: {
          min: 4.0,
          max: 4.4,
        },
        recommendedQuantityPerMilkRecommendationPerDay: {
          [FeedingFrequenciePerDay.EIGHT]: 70,
        },
      },
    ],
    notes: [],
  },
];
