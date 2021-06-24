

// Write a function that takes an array of words and returns a sentence(single string) with all the element strings concatenated together:


var stringConcat = function (strings) {
  return strings.reduce((accum, value) => accum + " " + value)
};

console.log(stringConcat(['Hello', 'my', 'name', 'is', 'Alexandra']));; // => 'Hello my name is Alexandra'