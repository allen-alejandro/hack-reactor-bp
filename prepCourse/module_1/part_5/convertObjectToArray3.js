

// Write a function called "convertObjectToArray" which converts an object literal into an array of arrays, like this:

// Argument:

var input = {
    name: 'Holly',
    age: 35,
    role: 'producer'
};
// Return value:

// [['name', 'Holly'], ['age', 35], ['role', 'producer']]


const convertObjectToArray = obj => {
    let arrays = []; 

    for (key in obj) {
        let individualArr = []; 
        individualArr.push(key);
        individualArr.push(obj[key]);
        arrays.push(individualArr)
    }
    return arrays; 
}


console.log(convertObjectToArray(input));