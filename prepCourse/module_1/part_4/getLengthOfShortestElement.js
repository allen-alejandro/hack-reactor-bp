

// Write a function called "getLengthOfShortestElement".

// Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

//     Notes:

// It should return 0 if the array is empty.
// var output = getLengthOfShortestElement(['one', 'two', 'three']);
// console.log(output); // --> 3


const getLengthOfShortestElement = arr => {
    if (arr[0] === undefined) {return 0}; 

    let shortest = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (shortest.length > arr[i].length) {
            shortest = arr[i]; 
        }
    }
    return shortest.length; 
}