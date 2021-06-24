

// Refactor the following imperative code to be declarative by using the forEach() native array method instead of a for loop:

var maxNumImperative = function (array) {
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

var maxNumDeclarative = function (array) {
  let max = array[0]; 
  array.forEach(x => {
    if (x > max) {
      max = x; 
    }
  })
  return max; 
};

console.log(maxNumDeclarative([1, 2, 3, 6, 8, 3, 32, 56, 4, 3, 2, 5, 0]));