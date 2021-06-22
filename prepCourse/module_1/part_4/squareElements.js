

// Write a function called "squareElements".Given an array of numbers, "squareElements" should return a new array where each element is the square of the element of the given array.

// var output = squareElements([1, 2, 3]);
// console.log(output); // --> [1, 4, 9]


const squareElements = arr => {
    let newArr = arr.map(el => el * el);
    return newArr; 
}


console.log(squareElements([1, 2, 3]));



