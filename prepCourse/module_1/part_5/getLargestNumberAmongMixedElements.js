

// Write a function called "getLargestNumberAmongMixedElements".

// Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

//     Notes:

// The array might contain values of a type other than numbers.
// If the array is empty, it should return 0.
// If the array contains no numbers, it should return 0.
// var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
// console.log(output); // --> 5


const getLargestNumberAmongMixedElements = arr => {
    if (arr.length === 0) return 0; 
    let result = arr[0]; 

    for (let i = 0; i < arr.length; i++) {
        if (typeof result !== 'number' && typeof arr[i] === 'number') {
            result = arr[i]; 
        } else if (typeof result === 'number' && typeof arr[i] === 'number' && result < arr[i]) {
            result = arr[i]; 
        }
    }
    return typeof result === 'number' ? result : 0; 
}