import {
  APPETITE_TEST_CODES,
  APPETITE_TEST_PRODUCT_TYPE,
  APPETITE_TEST_SACHET_FRACTION_PARTITION,
} from "../../constants";
import { AppetiteTestRef } from "../../types";

export const appetiteTestRef: AppetiteTestRef = {
  name: "Test de l'appetit",
  code: APPETITE_TEST_CODES.CODE,
  productType: [
    APPETITE_TEST_PRODUCT_TYPE.IN_POT,
    APPETITE_TEST_PRODUCT_TYPE.IN_SACHET,
  ],
  appetiteTestTable: [
    {
      weightRange: [0, 4],
      sachetRange: [
        APPETITE_TEST_SACHET_FRACTION_PARTITION.ONE_EIGHTH,
        APPETITE_TEST_SACHET_FRACTION_PARTITION.ONE_FOURTH,
      ],
      potRange: [15, 25],
    },
    {
      weightRange: [4, 6.9],
      sachetRange: [
        APPETITE_TEST_SACHET_FRACTION_PARTITION.ONE_FOURTH,
        APPETITE_TEST_SACHET_FRACTION_PARTITION.ONE_THIRD,
      ],
      potRange: [25, 35],
    },
    {
      weightRange: [7, 9.9],
      sachetRange: [
        APPETITE_TEST_SACHET_FRACTION_PARTITION.ONE_THIRD,
        APPETITE_TEST_SACHET_FRACTION_PARTITION.ONE_HALF,
      ],
      potRange: [35, 50],
    },
    {
      weightRange: [10, 14.9],
      sachetRange: [
        APPETITE_TEST_SACHET_FRACTION_PARTITION.ONE_HALF,
        APPETITE_TEST_SACHET_FRACTION_PARTITION.THREE_FOURTH,
      ],
      potRange: [50, 75],
    },
    {
      weightRange: [15, 29],
      sachetRange: [
        APPETITE_TEST_SACHET_FRACTION_PARTITION.THREE_FOURTH,
        APPETITE_TEST_SACHET_FRACTION_PARTITION.ONE,
      ],
      potRange: [100, 150],
    },
    {
      weightRange: [30, 1000],
      sachetRange: [
        APPETITE_TEST_SACHET_FRACTION_PARTITION.ONE,
        APPETITE_TEST_SACHET_FRACTION_PARTITION.INFINITY,
      ],
      potRange: [150, null],
    },
  ],
  otherData: {
    fields: [],
  },
};
