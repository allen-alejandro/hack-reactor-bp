const getOddLengthWordsAtProperty = (obj, key) => {
  let result = [];
  if (!Array.isArray(obj[key])) return result;

  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i].length % 2 === 1) result.push(obj[key][i]);
  }
  return result;
}


const getAverageOfElementsAtProperty = (obj, key) => {
  if ((!Array.isArray(obj[key])) || obj[key] === undefined) return 0;

  let result = 0;
  obj[key].map(x => result += x);
  return obj[key].length === 0 ? 0 : result / obj[key].length;
}


const getEvenLengthWordsAtProperty = (obj, key) => {
  if (!Array.isArray(obj[key])) return [];
  if (obj[key] === undefined) return [];

  let result = [];

  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i].length % 2 === 0) result.push(obj[key][i]);
  }
  return result;
}