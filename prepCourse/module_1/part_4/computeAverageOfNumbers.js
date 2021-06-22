


// Write a function called "computeAverageOfNumbers".

// Given an array of numbers, "computeAverageOfNumbers" returns their average.

//     Notes:

// If given an empty array, it should return 0.
// var input = [1, 2, 3, 4, 5];
// var output = computeAverageOfNumbers(input);
// console.log(output); // --> 3


const computeAverageOfNumbers = nums => {
    if (nums.length === 0) return 0; 

    let average = 0; 
    let i = 0; 

    while (i < nums.length) {
        average += nums[i]; 
        i++;
    }
    return average / nums.length; 
}