

// Write a function called "isOddWithoutModulo".

// Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

//     Note:

// It does so without using the modulo operator(%).
// It should work for negative numbers and zero.
// var output = isOddWithoutModulo(17);
// console.log(output); // --> true


const isOddWithoutModulo = num => {
    let isOdd = false; 
    let counter = Math.abs(num);  

    for (let i = 0; i < counter; i++) {
        isOdd = !isOdd; 
    }
    return isOdd; 
}



console.log(isOddWithoutModulo(120));