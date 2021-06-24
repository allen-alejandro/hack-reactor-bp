
// Write a function that takes an array of numbers and returns a new array with each number squared:

var squared = function (numbers) {
  return numbers.map(x => x * x)
};

console.log(squared([1, 2, 3, 4, 5])); // => [1, 4, 9, 16, 25]