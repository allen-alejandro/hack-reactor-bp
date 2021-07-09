const countAllCharacters = str => {
  if (str === '') return {};

  let strArr = str.split('');
  let obj = {};

  for (let i = 0; i < strArr.length; i++) {
    if (obj[strArr[i]] === undefined) {
      obj[strArr[i]] = 1;
    } else {
      obj[strArr[i]]++;
    }
  }
  return obj;
}


