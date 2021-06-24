

// Write a function called min that find the smallest number in an array of numbers and returns it.

var min = function (array) {
  let smallest = array[0];
  array.forEach(x => {
    if (x < smallest) {
      smallest = x; 
    }
  })
  return smallest; 
};

console.log(min([100, 54, 73, 8, 12, 3])); // => 3