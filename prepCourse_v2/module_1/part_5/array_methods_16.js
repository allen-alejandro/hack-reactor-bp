const getLongestWordOfMixedElements = arr => {
  if (arr.length === 0) return "";
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (typeof result !== 'string' && typeof arr[i] === 'string') {
      result = arr[i];
    } else if (typeof result === 'string' && typeof arr[i] === 'string' && result.length < arr[i].length) {
      result = arr[i];
    }
  }
  return typeof result === 'string' ? result : "";
}

const getLargestNumberAmongMixedElements = arr => {
  if (arr.length === 0) return 0;
  let result = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (typeof result !== 'number' && typeof arr[i] === 'number') {
      result = arr[i];
    } else if (typeof result === 'number' && typeof arr[i] === 'number' && result < arr[i]) {
      result = arr[i];
    }
  }
  return typeof result === 'number' ? result : 0;
}