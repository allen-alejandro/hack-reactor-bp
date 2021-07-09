const getSumOfAllElementsAtProperty = (obj, key) => {
  let result = 0;
  if (!Array.isArray(obj[key])) return 0;
  if (obj[key] === undefined) return 0;

  obj[key].map(x => result += x);
  return result;
}

