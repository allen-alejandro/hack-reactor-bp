
// Write a function that takes an array of words that are singular and returns an array of the same words pluralized:

var pluralize = function (words) {
  return words.map(x => x + 's'); 
};

console.log(pluralize(['dog', 'cat', 'worm', 'kyle']));; // => ['dogs', 'cats', 'worms', 'kyles']