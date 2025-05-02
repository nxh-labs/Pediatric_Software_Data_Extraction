import { IChartData } from "../types";

export function createChartData(
  value: number,
  median: number,
  l: number,
  s: number,
  curvePoints: Record<string, number>
): IChartData {
  return { value, median, l, s, curvePoints };
}
