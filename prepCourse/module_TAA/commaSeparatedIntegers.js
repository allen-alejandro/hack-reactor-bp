

// You are going to create a function called "solution", which will take in an array of increasing integers, and return them in the format described below.

// A format for expressing an ordered list of integers is to use a comma separated list of either individual integers or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.

// The range includes all integers in the interval including both endpoints.It is not considered a range unless it spans at least 3 numbers.

// For example, an input of[12, 13, 15, 16, 17] would return "12, 13, 15-17"

// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.Below is an example of your code running, assuming you have solved the problem correctly.

//   solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-6,-3-1,3-5,7-11,14,15,17-20"

// solution([-4, -3, -2, -1, 2, 3, 5, 6, 12, 13, 14, 15, 17]);
// // returns "-4--1,2,3,5,6,12-15,17"


const solution = arr => {
  let result = [];
  let currentRange = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let nextNum = arr[i + 1];
    if (nextNum - num === 1) {
      currentRange.push(num);
    } else if (currentRange.length === 2 && nextNum - num !== 1) {
      if (num - currentRange[currentRange.length - 1] === 1) {
        currentRange.push(num);
        result.push(`${currentRange[0]}-${currentRange[currentRange.length - 1]}`);
        currentRange = [];
      }
    } else if (currentRange.length > 2 && num - currentRange[currentRange.length - 1] === 1) {
      currentRange.push(num);
      result.push(`${currentRange[0]}-${currentRange[currentRange.length - 1]}`);
      currentRange = [];
    } else if (currentRange.length > 2 && num - currentRange[currentRange.length - 1] !== 1) {
      result.push(`${currentRange[0]}-${currentRange[currentRange.length - 1]}`);
      currentRange = [];
    } else {
      currentRange.map(x => result.push(x));
      result.push(num);
      currentRange = [];
    }
  }
  return result.toString();
}



// const rangeFinder = arr => {
//   let result = '';
//   let currentRange = []; 

//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i]
//     let nextNum = arr[i + 1]
//     if (nextNum - num === 1) {
//       currentRange.push(num);
//     } else if (currentRange.length === 2 && nextNum - num !== 1) {
//       if (num - currentRange[currentRange.length - 1] === 1) {
//         currentRange.push(num);
//         result += `${currentRange[0]}-${currentRange[currentRange.length - 1]}`
//         currentRange = [];
//       }
//     } else if (currentRange.length > 2 && num - currentRange[currentRange.length - 1] === 1) {
//         currentRange.push(num);
//         result += `${currentRange[0]}-${currentRange[currentRange.length - 1]}`
//         currentRange = [];
//     } else if (currentRange.length > 2 && num - currentRange[currentRange.length - 1] !== 1) {
//       result += `${currentRange[0]}-${currentRange[currentRange.length - 1]}`
//       currentRange = [];
//     } else {
//       currentRange.map(x => result += x.toString());
//       result +=  num.toString()
//       currentRange = [];
//     }
//   }
//   return result; 
// }




// TEMP SOLUTION






// console.log(rangeFinder([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));

console.log(rangeFinder([-4, -3, -2, -1, 2, 3, 5, 6, 12, 13, 14, 15, 17]));