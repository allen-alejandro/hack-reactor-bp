

// Write a function called "getElementsUpTo".

// Given an array and a index, "getElementsUpTo", returns an array with all the elements up until, but not including, the element at the given index.

//     Notes:

// In order to do this you should be familiar with the 'slice' method.
// var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3)
// console.log(output); // --> ['a', 'b', 'c']


const getElementsUpTo = (array, n) => {
    let newArray = array.slice(0, n);
    return newArray;
}





console.log(getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3));