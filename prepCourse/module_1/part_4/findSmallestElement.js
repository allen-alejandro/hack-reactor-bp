


// Write a function called "findSmallestElement".

// Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.

//     Notes:

// If the given array is empty, it should return 0.
// var output = findSmallestElement([4, 1, 9, 10]);
// console.log(output); // --> 1


const findSmallestElement = arr => {
    if (arr[0] === undefined) {return 0}; 

    let result = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (result > arr[i]) {
            result = arr[i]; 
        }
    }
    return result; 
}