

// Write a function called "getLargestElement".

// Given an array, "getLargestElement" returns the largest number in the given array.

//     Notes:

// It should return 0 if the array is empty.
// var output = getLargestElement([5, 2, 8, 3]);
// console.log(output); // --> 8;

const getLargestElement = arr => {
    if (arr[0] === undefined) {return 0}

    let result = arr[0]; 

    for (let i = 0; i < arr.length; i++) {
        if (result < arr[i]) {
            result = arr[i]; 
        }
    }
    return result; 
}