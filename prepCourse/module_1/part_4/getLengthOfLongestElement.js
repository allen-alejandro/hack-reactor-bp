


// Write a function called "getLengthOfLongestElement".

// Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.

//     Notes:

// It should return 0 if the array is empty.
// var output = getLengthOfLongestElement(['one', 'two', 'three']);
// console.log(output); // --> 5


const getLengthOfLongestElement = arr => {
    if (arr.length === 0) {
        return 0;
    }

    let longestString = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longestString.length) {
            longestString = arr[i];
        }
    }
    return longestString.length; 
}


console.log(getLengthOfLongestElement(['one', 'two', 'three']));