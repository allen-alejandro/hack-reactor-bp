const squareElements = arr => {
  return arr.map(el => el * el);
}

const filterOddElements = arr => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const computeProductOfAllElements = arr => {
  if (arr.length === 0) { return 0 };

  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}

