


// Write a function called "joinArrayOfArrays".

// Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.

// var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
// console.log(output); // --> [1, 4, true, false, 'x', 'y']
// You should be familiar with the "concat" method for this problem.


const joinArrayOfArrays = arr => {
    let newArr = []; 

    for (let i = 0; i < arr.length; i++) {
        newArr = newArr.concat(arr[i]);
    }
    return newArr;
}


console.log(joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]));
