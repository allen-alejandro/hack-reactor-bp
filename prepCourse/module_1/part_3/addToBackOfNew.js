

// Write a function called "addToBackOfNew".

// Given an array and an element, "addToBackOfNew" returns a clone of the given array, with the given element added to the end.

//     Important: It should be a NEW array instance, not the original array instance.

// var input = [1, 2];
// var output = addToBackOfNew(input, 3);
// console.log(input); // --> [1, 2]
// console.log(output); // --> [1, 2, 3]

const addToBackOfNew = (arr, element) => {
    let newArr = arr.slice();
    newArr.push(element);
    return newArr; 
}