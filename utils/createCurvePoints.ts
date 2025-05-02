export function createCurvePoints(excelFileRowObject: any) {
  const { SD4neg, SD3neg, SD2neg, SD1neg, SD0, SD1, SD2, SD3, SD4 } =
    excelFileRowObject;

  return { SD4neg, SD3neg, SD2neg, SD1neg, SD0, SD1, SD2, SD3, SD4 };
}
