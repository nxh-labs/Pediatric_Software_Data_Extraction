import { GrowthStandard } from "../constants";
import { IChartData } from "./ChartData";

export interface GrowthReferenceChartProps {
  code: string;
  name: string;
  sex: "M" | "F";
  standard: GrowthStandard;
  data: IChartData[];
}
