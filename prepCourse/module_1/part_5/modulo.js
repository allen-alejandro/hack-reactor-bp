

// Write a function called "modulo".

//     Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

// It should behave as described in the canonical documentation(MDN) for the JavaScript remainder operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_() 

//     Notes:

//     Do NOT use the actual built -in modulo(aka "remainder") operator(%) in your implementation.
// 0 % ANYNUMBER = 0.
// ANYNUMBER % 0 = NaN.
// If either operand is NaN, then the result is NaN.
// Modulo always returns the sign of the first number, even if the remainder is 0.
// var output = modulo(25, 4);
// console.log(output); // --> 1



const modulo = (num1, num2) => {
    let result = num1;
    if (num2 === 0) return NaN;
    if (Math.sign(num1) === -1) result = num1 * -1

    while (result >= num2) {
        if (result === num2) {
            result = 0;
        }  else {
            result = result -= num2;
        }
    }
    return Math.sign(num1) === -1 ? Math.floor(result * -1) : Math.floor(result);
}

console.log(modulo(-4, 3));


console.log(5 % 25);




// else if (Math.sign(result) === -1) {
//     result *= -1
//     console.log('this his ');
//     console.log(result);
//     result = result -= num2;
// }


