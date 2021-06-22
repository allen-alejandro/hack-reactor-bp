

// Write a function called "getAllElementsButNth".

// Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.

// var output = getAllElementsButNth(['a', 'b', 'c'], 1);
// console.log(output); // --> ['a', 'c']


const getAllElementsButNth = (array, n) => {
    array.splice(n, 1);
    return array;

    // ******* alt below *****
    // let newArr = []; 

    // for (let i = 0; i < array.length; i++) {
    //     if (i != n) {
    //         newArr.push(array[i]);
    //     }
    // }
    // return newArr; 
}


console.log(getAllElementsButNth([4, 5, 6, 7, 8], 2));