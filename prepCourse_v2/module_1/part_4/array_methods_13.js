const getLargestElement = arr => {
  if (arr[0] === undefined) { return 0 }

  let result = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (result < arr[i]) {
      result = arr[i];
    }
  }
  return result;
}




const computeSumOfAllElements = arr => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

