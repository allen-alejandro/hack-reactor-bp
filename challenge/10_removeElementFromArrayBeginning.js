// Remove an element from beginning of an Array


// Complete a function called removeFromFront.

// Given an array, removeFromFront returns the input array with its first element removed.You should be familiar with the Array method shift.

// var output = removeFromFront([1, 2, 3]);
// console.log(output); // --> [2, 3]

function removeFromFront(arr) {
    arr.shift();
    return arr;
}


console.log(removeFromFront([1, 2, 3]));