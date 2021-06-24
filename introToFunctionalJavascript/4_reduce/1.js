

// Write a function that takes an array of numbers and returns the sum of all the numbers:

var sum = function (numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue); 
};

console.log(sum([2, 4, 6])); // => 12