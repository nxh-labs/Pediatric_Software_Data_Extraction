import { TableData, GrowthReferenceTableProps } from "../../../types";
import { createGrowthRefTableOMS, extractDataFromExcel } from "../../../utils";


const lenheiTableExtractionCallBack = (excelFileRowObject: any): TableData => {
  return {
    median: excelFileRowObject["0"],
    normalNeg: excelFileRowObject["-1"],
    value: excelFileRowObject["lenhei"],
    hightSeverNeg: excelFileRowObject["-4.0"],
    severeNeg: excelFileRowObject["-3"],
    moderateNeg: excelFileRowObject["-2"],
    outComeTargetValueNeg: excelFileRowObject["-1.5"],
    isUnisex: true,
  };
};

export function extractUnisexWeightForLenHeiTable(
  filename: string,
  tableName: string,
  tableCode: string
): GrowthReferenceTableProps {
  return createGrowthRefTableOMS(
    tableName,
    tableCode,
    extractDataFromExcel<TableData>(filename, lenheiTableExtractionCallBack)
  );
}
