// Using slice



// We are going to complete a function that takes in three parameters, an array and two integer indexes.

// Your function should apply the slice method to the input array, from the first integer index to the last integer index, and return the result of this operation.

function useSlice(array, start, end) {
    return array.slice(start, end);
}





console.log(useSlice([1, 2, 3, 4, 5, 6], 2, 4));
