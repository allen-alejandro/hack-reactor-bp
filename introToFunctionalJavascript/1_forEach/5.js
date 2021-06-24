

// Write a function remove that accepts an array and an element, and returns an array with all ocurrences of element removed.

function remove(array, element) {
  let result = []; 
  array.forEach(x => {
    if (x !== element) {
      result.push(x); 
    }
  })
  return result; 
}

console.log(remove([1, 3, 6, 2, 3], 3));// => [1, 6, 2]