import moment, { Moment } from "moment";

export function asString(item: unknown): string | undefined {
  if (typeof item == "string") return item as string;
}

export const ageCalculation = (birthOfDate: Moment) => {
  const today = new Date();
  const y1 = today
    .getFullYear()
    .toString()
    .padStart(4, "0");
  const m1 = (today.getMonth() + 1).toString().padStart(2, "0");
  const d1 = today
    .getDate()
    .toString()
    .padStart(2, "0");
  const birth = moment(birthOfDate)
    .format("YYYY-MM-DD")
    .split("-");

  return Math.floor((Number(y1 + m1 + d1) - Number(birth[0] + birth[1] + birth[2])) / 10000);
};

// 副作用のないcompact
export function compactObject(target: DictionaryLike, recursive = true): DictionaryLike {
  const obj = { ...target };
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (!obj[key]) {
        delete obj[key as keyof typeof obj];
      } else if (typeof obj[key as keyof typeof obj] === "object") {
        if (recursive) {
          obj[key] = compactObject(obj[key] as DictionaryLike, recursive);
        }
      }
    }
  }
  return obj;
}
