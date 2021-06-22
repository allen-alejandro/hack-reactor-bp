

// Skeleton

// FUNCTION DEFINITION(S)
function isIsogram(text) {
    let lowerCaseText = text.toLowerCase();
    let textSet = new Set(lowerCaseText);
    return text.length === textSet.size ? true : false; 
}

// ASSERTION FUNCTION(S) TO BE USED
const assertFunc = (actual, expected, testName) => {
    return actual === expected ? console.log('passed') : console.log(`FAIELD [${testName}] Expected ${expected}, but got ${actual}`);
}

// TESTS CASES

let testWord1 = 'amazing';
let testWord2 = 'interesting';
let testWord3 = 'questionable';
let testWord4 = 'love';

let expectedBool = true; 
let actualBool = isIsogram(testWord1);

assertFunc(actualBool, expectedBool, 'return true if word is an isogram')