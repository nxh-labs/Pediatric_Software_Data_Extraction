import { GrowthStandard } from "../constants";
import {  IChartData } from "../types";

export function createGrowthRefChartOMS(
  name: string,
  code: string,
  sex: "M" | "F",
  data: IChartData[]
) {
  return {
    name,
    code,
    sex,
    standard: GrowthStandard.OMS,
    data,
  };
}