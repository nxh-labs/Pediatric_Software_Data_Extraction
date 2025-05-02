import XLSX from "xlsx";

export function extractDataFromExcel<T>(
  excelFileName: string,
  callback: (excelFileRowObject: any) => T
) {
  const excelFileRowArray = readAndReturnFirstSheetAsJsonArray(excelFileName);
  return excelFileRowArray.map(callback);
}

function readAndReturnFirstSheetAsJsonArray(filename: string) {
  const workbook = XLSX.readFile(filename);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const jsonArray = XLSX.utils.sheet_to_json(worksheet);
  return jsonArray;
}
