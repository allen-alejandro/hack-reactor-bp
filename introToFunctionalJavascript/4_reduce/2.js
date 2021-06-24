

// Write a function that takes an array of numbers and returns the product of all the numbers:


var product = function (numbers) {
  return numbers.reduce((accum, value) => accum * value);
};

console.log(product([2, 4, 6]));; // => 48