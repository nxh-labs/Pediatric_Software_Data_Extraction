import { GrowthStandard } from "../constants";
import { TableData, GrowthReferenceTableProps } from "../types";

export function  createGrowthRefTableNCHS(
  tableName: string,
  tableCode: string,
  data: TableData[]
): GrowthReferenceTableProps {
  return {
    name: tableName,
    code: tableCode,
    data: data,
    standard: GrowthStandard.NCHS,
  };
}