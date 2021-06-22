

// FUNCTION DEFINITION(S)
function square(n) {
    return n * n;
}

// ASSERTION FUNCTION(S) TO BE USED
const assertEqual = (condition, testName) => {
    condition ? console.log('passed') : console.log(`FAILED [${testName}] `);
}

// TESTS CASES
let squared = square(2); 
assertEqual(squared === 5, 'should return result of two squared'); 
