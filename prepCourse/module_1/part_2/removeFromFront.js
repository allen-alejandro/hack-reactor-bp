

// Write a function called "removeFromFront".

// Given an array, "removeFromFront" returns the given array with its first element removed.

//     Notes:

// You should be familiar with the method 'shift'.
// var output = removeFromFront([1, 2, 3]);
// console.log(output); // --> [2, 3]

const removeFromFront = arr => {
    arr.shift();
    return arr; 
}