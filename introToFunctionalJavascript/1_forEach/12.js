

// Write a function keep that "keeps" certain elements in an array. The function will need to take two arguments, an array, and something else -- the second argument will be what is used to determine which elements to keep.

// You should be able to use this function to write evens, evenLengthWords, a hypothetical odds function, or oddLengthWords without changing the keep function.


const keep = (array, element) => {
  let result = []; 
  array.forEach(x => {
    if (x === element) {
      result.push(element); 
    }
  })
  return result; 
}