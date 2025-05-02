export function generateGrowthRefChartName(
  firstMeasure: string,
  lastMeasure: string,
  startAge: number,
  endAge: number,
  ageUnit: string
): string {
  return `Courbe de croissance: ${firstMeasure}/${lastMeasure} , de ${startAge} - ${endAge} ${ageUnit} `;
}
