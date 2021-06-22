

// Write a function called "multiply".

//     Given 2 numbers, "multiply" returns their product.

//         Notes:

// It should not use the multiply operator - *
// var output = multiply(4, 7);
// console.log(output); // --> 28


// const multiply = (num1, num2) => {
//     let sum = 0; 
//     let multiplier = num2
//     if (Math.sign(num2) === -1) num2 = num2 * -1

//     for (let i = 0; i < num2; i++) {
//         if (Math.sign(num1) === -1) {
//             console.log(num1);
//             sum += num1;
//             console.log('after');
//             console.log(sum);
//             console.log('before');

//         } else {
//             sum += num1;
//         }
//     }
//     return Math.sign(num2) === -1 ? sum * -1 : sum;
// }

// console.log(multiply(-4, -7));






const multiply = (num1, num2) => {
    let resultIsPositive = true; 
    if ( (num1 > 0 && num2 < 0) || (num2 > 0 && num1 < 0)) {
        resultIsPositive = false; 
    }
    num1 = Math.abs(num1); 
    num2 = Math.abs(num2);

    let result = 0; 

    for (let i = 0; i < num2; i++) {
        result += num1; 
    }
    if (resultIsPositive) {
        return result; 
    } else {
        return -result; 
    }
}
console.log(multiply(4, -7));

console.log('testing');


