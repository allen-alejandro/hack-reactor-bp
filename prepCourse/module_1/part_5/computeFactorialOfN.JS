

// Write a function called "computeFactorialOfN".

// Given a natural number(a whole number greater than 0), "computeFactorialOfN" returns its factorial.

// var output = computeFactorialOfN(3);
// console.log(output); // --> 6

// var output = computeFactorialOfN(4);
// console.log(output); // --> 24

const computeFactorialOfN = n => {
    let result = 1; 
    for (let i = n; i > 0; i--) {
        result *= i;
    }
    return result; 
}



console.log(computeFactorialOfN(5));