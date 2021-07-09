const getElementsGreaterThan10AtProperty = (obj, key) => {
  if (obj[key] === undefined) return [];
  if (Array.isArray(obj[key]) === false) return [];
  if (obj[key].length === 0) return [];

  let result = [];

  for (i = 0; i < obj[key].length; i++) {
    if (obj[key][i] > 10) result.push(obj[key][i]);
  }
  return result;
}

const getFirstElementOfProperty = (obj, key) => {
  if (!Array.isArray(obj[key])) return undefined;
  return obj[key][0];
}

const getNthElementOfProperty = (obj, key, n) => {
  if (!Array.isArray(obj[key])) return undefined;
  return obj[key][n];
}

const getLastElementOfProperty = (obj, key) => {
  if (!Array.isArray(obj[key])) return undefined;
  return obj[key][obj[key].length - 1];
}

