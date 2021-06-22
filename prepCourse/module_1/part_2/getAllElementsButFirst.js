

// Write a function called "getAllElementsButFirst".

// Given an array, "getAllElementsButFirst" returns an array with all the elements but the first.

// var input = [1, 2, 3, 4];
// var output = getAllElementsButFirst(input);
// console.log(output); // --> [2, 3, 4]



const getAllElementsButFirst = array => {
    array.shift();
    return array;
}


console.log(getAllElementsButFirst([1, 2, 3, 4]));