

// Write a function called "removeNumberValues".

// Given an object, "removeNumberValues" removes any properties whose values are numbers.

var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
// removeNumberValues(obj);
// console.log(obj); // --> { b: 'remaining' }


const removeNumberValues = obj => {
    for (key in obj) {
        if (Number.isInteger(obj[key])) {
            delete obj[key];
        }
    }
    return obj; 
}


console.log(removeNumberValues(obj))