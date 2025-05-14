import { GrowthStandard } from "../constants";
import { TableData, GrowthReferenceTableProps } from "../types";

export function createGrowthRefTableOMS(
  tableName: string,
  tableCode: string,
  data: TableData[]
): GrowthReferenceTableProps {
  return {
    name: tableName,
    code: tableCode,
    data: data,
    standard: GrowthStandard.OMS,
  };
}
