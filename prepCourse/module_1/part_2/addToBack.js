

// Write a function called "addToBack".

// Given an array and an element, "addToBack" returns the given array with the given element added to the end.

//     Notes:

// It should be the SAME array, not a new array.
// In order to do this you should be familiar with the 'push' method.
// var output = addToBack([1, 2], 3);
// console.log(output); // -> [1, 2, 3]


const addToBack = (arr, element) => {
    arr.push(element); 
    return arr; 
}