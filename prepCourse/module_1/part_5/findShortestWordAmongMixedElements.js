

// Write a function called "findShortestWordAmongMixedElements".

// Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

//     Notes:

// If there are ties, it should return the first element to appear in the given array.
// Expect the given array to have values other than strings.
// If the given array is empty, it should return an empty string.
// If the given array contains no strings, it should return an empty string.
// var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
// console.log(output); // --> 'two'


const findShortestWordAmongMixedElements = arr => {
    if (arr.length === 0) return ''; 
    let result = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] === 'string' && typeof result !== 'string') {
            result = arr[i];
        } else if (typeof arr[i] === 'string' && arr[i].length < result.length) {
            result = arr[i];
        }
    }
    return typeof result === 'string' ? result : ''; 
}


console.log(findShortestWordAmongMixedElements(['word', 'twothree', 'yumyum', 'piea']));


// typeof arr[i] === 'string' &&