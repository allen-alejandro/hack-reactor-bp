const removeElement = (array, discarter) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] != discarter) result.push(array[i])
  }
  return result === array ? [] : result;
}


const keep = (array, keeper) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === keeper) result.push(array[i]);
  }
  return result;
}


const computeAverageOfNumbers = nums => {
  if (nums.length === 0) return 0;

  let average = 0;
  let i = 0;

  while (i < nums.length) {
    average += nums[i];
    i++;
  }
  return average / nums.length;
}

