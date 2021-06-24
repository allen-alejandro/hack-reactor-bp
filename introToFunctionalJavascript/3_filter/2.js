

// Write a function that takes an array of numbers and returns an array of just the even numbers:

var onlyEvens = function (numbers) {
  return numbers.filter(num => num % 2 === 0); 
};

console.log(onlyEvens([25, 16, 12, 99, 8, 37]));; // => [16, 12, 8]

