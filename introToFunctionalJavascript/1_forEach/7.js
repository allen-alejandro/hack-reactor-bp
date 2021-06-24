

// Write a function called average that takes an array of numbers as a parameter and returns the average of those numbers.

const average = array => {
  let sum = 0;
  array.forEach(x => sum += x); 
  return sum/array.length; 
}

console.log(average([2, 3, 45, 6, 7, 8]));