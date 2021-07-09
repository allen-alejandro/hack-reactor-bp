const findSmallestElement = arr => {
  if (arr[0] === undefined) { return 0 };

  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (result > arr[i]) {
      result = arr[i];
    }
  }
  return result;
}

const findShortestElement = arr => {
  if (arr[0] === undefined) { return '' }

  let result = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (result.length > arr[i].length) {
      result = arr[i];
    }
  }
  return result;
}


