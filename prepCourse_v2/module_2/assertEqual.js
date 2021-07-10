const assertEqual = (actual, expected, testName) => {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
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