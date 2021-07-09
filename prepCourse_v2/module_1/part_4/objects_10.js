const getSquaredElementsAtProperty = (obj, key) => {
  if (obj[key] === undefined) return [];
  if (obj[key].length === 0) return [];
  if (!Array.isArray(obj[key])) return [];

  let result = obj[key].map(x => x * x);

  return result;
}

const getOddElementsAtProperty = (obj, key) => {
  if (obj[key] === undefined) return [];
  if (!Array.isArray(obj[key])) return [];
  if (obj[key].length === 0) return [];

  let result = [];

  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i] % 2 === 1) result.push(obj[key][i]);
  }
  return result;
}


const getEvenElementsAtProperty = (obj, key) => {
  if (obj[key] === undefined) return [];
  if (!Array.isArray(obj[key])) return [];
  if (obj[key].length === 0) return [];

  let result = [];

  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i] % 2 === 0) result.push(obj[key][i]);
  }
  return result;
}
