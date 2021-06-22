

// Write a function called "getLongestWordOfMixedElements".

// Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

//     Notes:

// If the array is empty, it should return an empty string("").
// If the array contains no strings; it should return an empty string.
// var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
// console.log(output); // --> 'word'

const getLongestWordOfMixedElements = arr => {
    if (arr.length === 0) return "";
    let result = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (typeof result !== 'string' && typeof arr[i] === 'string') {
            result = arr[i]; 
        } else if (typeof result === 'string' && typeof arr[i] === 'string' && result.length < arr[i].length) {
            result = arr[i];
        }
    }
    return typeof result === 'string' ? result : ""; 
}


console.log(getLongestWordOfMixedElements([3, 3, 5, 3, 3, 1]));