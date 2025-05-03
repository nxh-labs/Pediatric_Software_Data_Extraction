import { compile, isValidExpression } from "smartcal";

export function f(str: string) {
  compile(str);
  const isValid = isValidExpression(str);
  if (!isValid)
    throw new Error(`[Error]:  Invalid Formula, ${isValid}- [Formula]: ${str}`);
  return str;
}
export function fExp(
  strings: TemplateStringsArray,
  ...keys: unknown[]
): string {
  const rawStr = strings.reduce((res, str, i) => {
    return res + str + (keys[i] !== undefined ? `${keys[i]}` : "");
  }, "");

  return f(rawStr);
}
