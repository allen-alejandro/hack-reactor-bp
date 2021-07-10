

var expected = [1, 2, 3];
var actual = [1, 2, 4];




function assertArraysEqual(actual, expected, testName) {
  if (Array.isArray(actual) && Array.isArray(expected) && actual.join() === expected.join()) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}] Expected "${expected.join()}", but got "${actual.join()}"`);
  }
}


/*
const assertArraysEqual = (actual, expected, testName) => {
    let isEqual = true;

    for (let i = 0; i < actual.length; i++) {
        if (actual.length !== expected.length || actual[i] !== expected[i]) {
            isEqual = false;
        }
    }
    isEqual === true ? console.log('passed') : console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
}


*/

console.log(assertArraysEqual(actual, expected, 'splits string into array of characters'));