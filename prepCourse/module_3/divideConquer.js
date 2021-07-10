// Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

// Given a sorted array, such as this:
// [1, 3, 16, 22, 31, 33, 34]

// You can search for the value 31, as follows:

//   1) Pick the midpoint: 22.
// 2) The value is higher than 22, so now consider only the right half of the previous array:
// [...31, 33, 34]
// 3) Pick the midpoint: 33
// 4) The value is lower than 33, so now consider only the left half of the previous array:
// [...31...]
// 5) Pick the midpoint: 31
// 6) You've hit the value.
// 7) Return the index of the value.

//   Notes:
// * If you don't find the value, you can return null.
//   * If at any point you calculate the index of the midpoint and get a fractional number, just round it down("floor" it).
//     WNINFPEVCG




// function that takes an array, target value 
// need to find midpoint --> array length divided by two and flooring it 
// if value less that arr[midpoint] 
// return index  


const binarySearch = (array, targetValue) => {
  let copyArr = array.slice();
  while (array.length > 1) {
    let midpoint = Math.floor(array.length / 2);
    if (array[midpoint] === targetValue) {
      return copyArr.indexOf(targetValue);
    } else if (array[midpoint] > targetValue) {
      array.splice(midpoint, array.length - 1);
    } else {
      array.splice(0, midpoint + 1);
    }
  }
  return null;
}



//TESTING
let array = [1, 3, 16, 22, 'fo', 33, 34]
let targetValue = 16

console.log(binarySearch(array, targetValue));



/*

const binarySearch = (array, targetValue) => {
  let midpoint = Math.floor(array.length / 2);

  if (targetValue >= array[midpoint]) {
    for (let i = midpoint; i < array.length; i++) {
      if (targetValue === array[i]) {
        return i;
      }
    }
  } else if (targetValue < array[midpoint]) {
    for (let i = 0; i <= midpoint; i++) {
      if (targetValue === array[i]) {
        return i;
      }
    }
  }
  return null;
}

*/