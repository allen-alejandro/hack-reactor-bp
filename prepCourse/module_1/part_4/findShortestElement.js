

// Write a function called "findShortestElement".

// Given an array, "findShortestElement" returns the shortest string within the given array.

//     Notes:

// If there are ties, it should return the first element to appear.
// If the given array is empty, it should return an empty string.
// var output = findShortestElement(['a', 'two', 'three']);
// console.log(output); // --> 'a'


const findShortestElement = arr => {
    if (arr[0] === undefined) {return ''}

    let result = arr[0]; 

    for (let i = 0; i < arr.length; i++) {
        if (result.length > arr[i].length) {
            result = arr[i]; 
        }
    }
    return result; 
}


console.log(findShortestElement(['a', 'two', 'three']));