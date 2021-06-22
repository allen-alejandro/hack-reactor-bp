

// Write a function called "findSmallestNumberAmongMixedElements".

// Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

//     Notes:

// If the given array is empty, it should return 0.
// If the array contains no numbers, it should return 0.
// var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
// console.log(output); // --> 4


const findSmallestNumberAmongMixedElements = arr => {
    if (arr.length === 0) return 0;
    let result = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (typeof result !== 'number' && typeof arr[i] === 'number') {
            result = arr[i];
        } else if (typeof arr[i] === 'number' && arr[i] < result) {
            result = arr[i]; 
        }
    }
    return typeof result !== 'number' ? 0 : result; 
}


console.log(findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']))