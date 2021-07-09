const findShortestWordAmongMixedElements = arr => {
  if (arr.length === 0) return '';
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] === 'string' && typeof result !== 'string') {
      result = arr[i];
    } else if (typeof arr[i] === 'string' && arr[i].length < result.length) {
      result = arr[i];
    }
  }
  return typeof result === 'string' ? result : '';
}

const findSmallestNumberAmongMixedElements = arr => {
  if (arr.length === 0) return 0;
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (typeof result !== 'number' && typeof arr[i] === 'number') {
      result = arr[i];
    } else if (typeof arr[i] === 'number' && arr[i] < result) {
      result = arr[i];
    }
  }
  return typeof result !== 'number' ? 0 : result;
}