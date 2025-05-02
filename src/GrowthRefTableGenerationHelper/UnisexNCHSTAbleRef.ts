import {
  GrowthReferenceTableProps,
  GrowthStandard,
  TableData,
} from "../../types";
import { createGrowthRefTableNCHS, extractDataFromExcel } from "../../utils";
const nchsUnisexTableExtractionCallback = (
  excelFileRowObject: any
): TableData => {
  const sex = excelFileRowObject["sex"];
  return {
    value: excelFileRowObject["height"],
    severeNeg: excelFileRowObject["Sev(70 %)"],
    moderateNeg: excelFileRowObject["Mod(80 %)"],
    outComeTargetValueNeg: excelFileRowObject["P.Cible(85 %)"],
    median: excelFileRowObject["Median(100 %)"],
    isUnisex: sex === "mf",
    ...(sex === "m" && { sex: "M" }),
  };
};



export function extractUnisexWeightForHeightNCHSTable(
  filename: string,
  tableName: string,
  tableCode: string
): GrowthReferenceTableProps {
  return createGrowthRefTableNCHS(
    tableName,
    tableCode,
    extractDataFromExcel(filename, nchsUnisexTableExtractionCallback)
  );
}
