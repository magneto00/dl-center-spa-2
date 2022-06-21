export function getUniqueItems(array: string[]): string[] {
  return array.filter((item, index, arr) => arr.indexOf(item) === index);
}
