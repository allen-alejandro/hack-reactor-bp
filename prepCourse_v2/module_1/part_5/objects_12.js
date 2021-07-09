const getProductOfAllElementsAtProperty = (obj, key) => {
  if (obj[key] === undefined) return 0;
  if (obj[key].length === 0) return 0;
  if (!Array.isArray(obj[key])) return 0;

  let result = 1;
  obj[key].map(x => result *= x)
  return result;
}
