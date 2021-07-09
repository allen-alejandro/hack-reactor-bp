const select = (arr, obj) => {
  let result = {};
  arr.map(el => {
    if (obj[el] !== undefined) {
      result[el] = obj[el];
    }
  })
  return result;
}