

const getElementsThatEqual10AtProperty = (obj, key) => {

  if (obj[key] === undefined) return []; // no property at the key return empty array
  if (Array.isArray(obj[key]) === false) return []; // property is not an array, return empty array
  if (obj[key].length === 0) return []; // the array is empty, return empty array

  let result = [];

  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i] === 10) {
      result.push(obj[key][i]);
    }
  }
  return result;
}


const getElementsLessThan100AtProperty = (obj, key) => {
  if (obj[key] === undefined) return [];
  if (Array.isArray(obj[key]) === false) return [];
  if (obj[key].length === 0) return [];

  let result = [];

  for (let i = 0; i < obj[key].length; i++) {
    if (obj[key][i] < 100) result.push(obj[key][i]);
  }
  return result;
}

