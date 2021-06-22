

// Write a function called "removeOddValues".

// Given an object, "removeOddValues" removes any properties whose values are odd numbers.

// var obj = {
//     a: 2,
//     b: 3,
//     c: 4
// };
// removeOddValues(obj);


const removeOddValues = obj => {
    for (key in obj) {
        if (obj[key] % 2 === 1) {
            delete obj[key];
        }
    }
    return obj; 
}