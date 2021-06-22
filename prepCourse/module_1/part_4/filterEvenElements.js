

// Write a function called "filterEvenElements".

// Given an array of numbers, "filterEvenElements" returns an array containing only the even numbers of the given array.

// var output = filterEvenElements([2, 3, 4, 5, 6]);
// console.log(output); // --> [2, 4, 6]


const filterEvenElements = arr => {
    let result = arr.filter(num => num % 2 === 0);
    return result; 
}




console.log(filterEvenElements([2, 3, 4, 5, 6]));