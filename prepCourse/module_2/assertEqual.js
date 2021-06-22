

const assertEqual = (actual, expected, testName) => {
    return actual === expected ? console.log('passed') : console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
}


function multiplyByTwo(n) {
    return n * 2 + 1;
}


let output = multiplyByTwo(2)
assertEqual(output, 4, 'it doubles 2 to 4');

