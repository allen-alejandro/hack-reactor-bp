

// Write a function that takes an array of numbers and returns an array of all numbers less than 10:

var lessThanTen = function (numbers) {
  return numbers.filter(el => el < 10); 
};

console.log(lessThanTen([1, 5, 12, 18, 94, 3, 16]));; // => [1, 5, 3]