// Skeleton

// FUNCTION DEFINITION(S)
function average(numbers) {
  // uses sum function
  // returns the average of an array of numbers
  return sum(numbers) / numbers.length;
}

function sum(numbers) {
  // returns the sum of an array of numbers
  let sum = 0;
  numbers.map(x => sum += x);
  return sum;
}

// ASSERTION FUNCTION(S) TO BE USED
let assertFunc = (actual, expected, testName) => {
  let actualStr = JSON.stringify(actual);
  let expectedStr = JSON.stringify(expected);

  actualStr === expectedStr ? console.log('passed') : console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
}

// TESTS CASES

// testing sum function 
console.log(sum([1, 2, 3]));

// testing assertion function [PASSED]

let testResult1 = 4;
let expectedResult1 = 4;

// testing assertion function [FAILED]
let testResult2 = 4;
let expectedResult2 = 6;

assertFunc(testResult2, expectedResult2, 'returns the average of array of numbers')


console.log(average([1, 2, 3, 4]));





