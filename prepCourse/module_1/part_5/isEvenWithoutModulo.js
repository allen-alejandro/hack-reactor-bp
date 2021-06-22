

// Write a function called "isEvenWithoutModulo".

// Given a number, "isEvenWithoutModulo" returns whether it is even.

//     Notes:

// It does so without using the modulo operator(%).
// It should work for negative numbers and zero.
// var output = isEvenWithoutModulo(8);
// console.log(output); // --> true


const isEvenWithoutModulo = num => {
    let isEven = true; 
    let counter = Math.abs(num); 

    for (let i = 0; i < counter; i++) {
        isEven = !isEven;
    }
    return isEven;
}


console.log(isEvenWithoutModulo(11));