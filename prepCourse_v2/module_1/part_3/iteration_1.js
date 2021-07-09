

const getIndexOf = (char, str) => {
  let strArr = str.split('');

  for (let i = 0; i < strArr.length; i++) {
    if (char === strArr[i]) {
      return i;
    }
  }
  return -1;
}



