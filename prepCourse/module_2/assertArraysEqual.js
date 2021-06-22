
let arr1 = ['b', 'r', 'o', 'k', 'e', 'n']
let arr2 = ['b', 'r', 'o', 'k', 'e', 'p']





const assertArraysEqual = (actual, expected, testName) => {
    let isEqual = true; 

    for (let i = 0; i < actual.length; i++) {
        if (actual.length !== expected.length || actual[i] !== expected[i]) {
            isEqual = false; 
        }
    }
    isEqual === true ? console.log('passed') : console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
}



assertArraysEqual(arr1, arr2, 'generates first 7 Fibonacci numbers');