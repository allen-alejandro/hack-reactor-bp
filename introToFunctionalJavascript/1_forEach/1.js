
// Refactor the following imperative code to be declarative by using the forEach() native array method instead of a for loop:


var sumImperative = function (array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result = result + array[i];
  }
  return result;
};


var sumDeclarative = function (array) {
  var result = 0;
  array.forEach(x => result += x);
  return result;
};


console.log(sumDeclarative([1, 2, 3]));