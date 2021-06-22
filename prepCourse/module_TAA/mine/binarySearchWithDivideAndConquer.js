






function search(array, value) {
  let currentArr = array;
  let midpoint = findMidpoint(currentArr);

  while (currentArr.length > 0) {
    if (midpoint === value) {
      return array.indexOf(midpoint);
    } else {
      currentArr = sliceMe(currentArr, midpoint, value);
      midpoint = findMidpoint(currentArr);
    }
  }
  return null;
}

// finds midpoint in current array 
const findMidpoint = array => {
  let index = Math.floor(array.length / 2);
  return array[index];
}

// returns half of previous array 
const sliceMe = (arr, midpoint, value) => {
  result = [];
  if (midpoint > value) {
    result = arr.slice(0, arr.indexOf(midpoint))
  } else if (midpoint < value) {
    result = arr.slice(arr.indexOf(midpoint) + 1)
  } else {
    result = arr;
  }
  return result;
}



// console.log(sliceMe([12, 16, 49, 56, 78, 86], 49, 16));


// console.log(findMidpoint([2])); 


// var arr = [1, 3, 16, 22, 31, 33, 34]

var arr = [1, 3, 16, 22, 31, 33, 34]
// let arr2 = [7]

// console.log(arr2.slice(1));

console.log('-------TESTING-------');

console.log(search(arr, 31))

console.log('-------TESTING-------');


// console.log(findMidpoint([31]));



let arr3 = [31]

// console.log(sliceMe(arr3, 31, 31));