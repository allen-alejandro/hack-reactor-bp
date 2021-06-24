

// Write a function that takes an array of strings and returns an array of just the words that have an odd number of characters:

var onlyOddWords = function (words) {
  return words.filter(word => word.length % 2 === 1); 
};

console.log(onlyOddWords(['hello', 'my', 'name', 'is', 'alexa']));; // => ['hello', 'alexa']