

// Write a function called "joinThreeArrays".

// Given three arrays, "joinThreeArrays" returns an array with the elements of "arr1" in order followed by the elements in "arr2" in order followed by the elements of "arr3" in order.

// var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
// console.log(output); // --> [1, 2, 3, 4, 5, 6]
// You should be familiar with the "concat" method for this problem.

const joinThreeArrays = (arr1, arr2, arr3) => {
    let arr = arr1.concat(arr2, arr3)
    return arr; 
}


console.log(joinThreeArrays([1, 2], [3, 4], [5, 6]));



