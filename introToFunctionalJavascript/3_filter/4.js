

// Write a function that takes an array of words and returns an array of just the words that are pluralized (end with 's'):

var onlyPlural = function (words) {
  return words.filter(word => word[word.length -1] === 's'); 
};

console.log(onlyPlural(['dogs', 'cat', 'humans', 'kyle']));; // => ['dogs', 'humans']