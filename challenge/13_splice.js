// Using Splice



// Complete a function that demonstrates how to use the splice method on an array. 

// usingSplice will take 4 parameters, an array, an integer start, an integer deleteCount, and a String item.

// Your function should splice the input array: starting at the input start, 
// deleting deleteCount items, and inserting item into the array at start.Your function need not return anything.




function usingSplice(array, start, deleteCount, item) {
    array.splice(start, deleteCount, item)
    return array;
}






console.log(usingSplice([1, 2, 3, 4, 5, 6], 2, 3, "hello"));