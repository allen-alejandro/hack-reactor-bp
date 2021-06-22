

// Write a function called "sumDigits".

// Given a number, "sumDigits" returns the sum of all its digits.

// var output = sumDigits(1148);
// console.log(output); // --> 14
// If the number is negative, the first digit should count as negative.

// var output = sumDigits(-316);
// console.log(output); // --> 4
// Notes:

// In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
// Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.


// split the num 
// iterate 
// counter += iterate

const sumDigits = num => {
    let strArr = num.toString().split('')
    let counter = 0; 
    
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[0] === '-' && i < 2) {
            counter = Number(-strArr[1])
            i = 1; 
        } else {
            counter += Number(strArr[i]);
        }
    }
    return counter; 
}


console.log(sumDigits(-654123));