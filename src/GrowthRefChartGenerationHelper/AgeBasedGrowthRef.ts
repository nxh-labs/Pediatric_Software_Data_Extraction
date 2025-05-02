import { IChartData } from "../../types";
import {
  createChartData,
  createCurvePoints,
  createGrowthRefChartOMS,
  extractDataFromExcel,
} from "../../utils";

const ageInDayBasedTableExtractionCallBack = (
  excelFileRowObject: any
): IChartData => {
  const { Day, M, L, S } = excelFileRowObject;
  return createChartData(
    Day as number,
    M as number,
    L as number,
    S as number,
    createCurvePoints(excelFileRowObject)
  );
};
const ageInMonthBasedTableExtractionCallBack = (
  excelFileRowObject: any
): IChartData => {
  const { Month, M, L, S } = excelFileRowObject;
  return createChartData(
    Month as number,
    M as number,
    L as number,
    S as number,
    createCurvePoints(excelFileRowObject)
  );
};
export function extractAgeInDayBasedChartFromFile(
  filename: string,
  chartName: string,
  chartCode: string,
  sex: "M" | "F"
) {
  return createGrowthRefChartOMS(
    chartName,
    chartCode,
    sex,
    extractDataFromExcel(filename, ageInDayBasedTableExtractionCallBack)
  );
}

export function extractAgeInMonthBasedChartFromFile(
  filename: string,
  chartName: string,
  chartCode: string,
  sex: "M" | "F"
) {
  return createGrowthRefChartOMS(
    chartName,
    chartCode,
    sex,
    extractDataFromExcel(filename, ageInMonthBasedTableExtractionCallBack)
  );
}
