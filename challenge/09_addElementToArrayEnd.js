// Add element to end of an Array



// Complete a function called addToBack.

// Given an array and an element of any type, addToBack adds the input element to the back of the input array, and returns the input array.
// Your function should return the INPUT array, rather than create a new one.You should be familiar with the Array method push.

// var output = addToBack([1, 2], 3);
// console.log(output); // -> [1, 2, 3]


function addToBack(arr, element) {
    arr.push(element);
    return arr;
}



console.log(addToBack([1, 2], 3));