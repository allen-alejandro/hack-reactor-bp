

// Given a list of non - negative integers and a target sum, find a pair of numbers that sums to the target sum.

//   Example:

// var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
// console.log(pair); // --> [4, 5]


// function (array, num) 
// loop of i 
// loop of j to check all other elements 
// loop of j should not run if element === i 
// if sum === num then push i and j to result arr
// return array containing 2 elements that sum to 'num'


const findPairForSum = (list, targetSum) => {
  let result = []; 
  for (let i = 0; i < list.length; i++) {
    let element1 = list[i];
    for (let j = 0; j < list.length; j++) {
      let element2 = list[j]; 
      if (i !== j) {
        if (targetSum === element1 + element2) {
          result.push(element1, element2);
          return result;
        }
      }
    }
  }
  return 'none of the array element pairs sum to the target sum'
}

// Assertion Function 
let assertionFunc = (actual, expected, testName) => {
  actual = JSON.stringify(actual); 
  expected = JSON.stringify(expected); 
  actual === expected ? console.log('passed') : console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
}



let actualTest = findPairForSum([3, 34, 4, 12, 4, 2], 9);
let expectedTest = [4, 5]; 

assertionFunc(actualTest, expectedTest, 'this check passes if a pair passed through the actual parameter matches the expected result')