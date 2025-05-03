import { IChartData, GrowthReferenceChartProps } from "../../../types";
import { createChartData, createCurvePoints, createGrowthRefChartOMS, extractDataFromExcel } from "../../../utils";


export const lengthTableExtractionCallBack = (excelFileRowObject: any): IChartData => {
  const { Length, M, L, S } = excelFileRowObject;
  return createChartData(
    Length as number,
    M as number,
    L as number,
    S as number,
    createCurvePoints(excelFileRowObject)
  );
};

const heightTableExtractionCallback = (excelFileRowObject: any): IChartData => {
  const { Height, M, L, S } = excelFileRowObject;
  return createChartData(
    Height as number,
    M as number,
    L as number,
    S as number,
    createCurvePoints(excelFileRowObject)
  );
};



export function extractWeightForLengthChartFromFile(
  filename: string,
  chartName: string,
  chartCode: string,
  sex: "M" | "F"
): GrowthReferenceChartProps {
  return createGrowthRefChartOMS(
    chartName,
    chartCode,
    sex,
    extractDataFromExcel(filename, lengthTableExtractionCallBack)
  );
}

export function extractWeightForHeightChartFromFile(
  filename: string,
  chartName: string,
  chartCode: string,
  sex: "M" | "F"
): GrowthReferenceChartProps {
  return createGrowthRefChartOMS(
    chartName,
    chartCode,
    sex,
    extractDataFromExcel(filename, heightTableExtractionCallback)
  );
}
