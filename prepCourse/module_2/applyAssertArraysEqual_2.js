

// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(callbackFunction(array[i]))
    }
    return newArray;
}

function cubeAll(numbers) {
    return map(numbers, cubeNum);
}

// ASSERTION FUNCTION(S) TO BE USED

const assertArraysEqual = (actual, expected, testName) => {
    let isEqual = true;

    for (let i = 0; i < actual.length; i++) {
        if (actual.length !== expected.length || actual[i] !== expected[i]) {
            isEqual = false;
        }
    }
    isEqual === true ? console.log('passed') : console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
}



const squareNum = num => {
    return num * num;
}

const cubeNum = num => {
    return num * num * num;
}


// TESTS CASES

// map function test 
let arr1 = [1, 2, 3, 4]; 
console.log(map(arr1, squareNum));

// cubeAll function test 
console.log(cubeAll(arr1));

// assert function test 
let arr2 = [1, 2, 3, 4];
let arr3 = [1, 2, 3, 4, 4];

assertArraysEqual(arr2, arr3, 'each num is multiplied by three');



