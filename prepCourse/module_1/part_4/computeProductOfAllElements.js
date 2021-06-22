

// Write a function called "computeProductOfAllElements".

// Given an array of numbers, "computeProductOfAllElements" returns the products of all the elements in the given array.

//     Notes:

// If given array is empty, it should return 0.
// var output = computeProductOfAllElements([2, 5, 6]);
// console.log(output); // --> 60


const computeProductOfAllElements = arr => {
    if (arr.length === 0) { return 0}; 

    let result = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        result *= arr[i]; 
    }
    return result; 
}


console.log(computeProductOfAllElements([2, 5, 6]));