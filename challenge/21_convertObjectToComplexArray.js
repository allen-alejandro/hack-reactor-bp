// Convert an Object to a Complex Array
// Complete a function called convertObjectToArray which converts an object literal into an array of arrays, like this:

// Argument:

var input = {
    name: 'Holly',
    age: 35,
    role: 'producer'
}
// Return value:

// var output = [['name', 'Holly'], ['age', 35], ['role', 'producer']]
// Note that the input may have a different number of properties than the given sample.


function convertObjectToArray(obj) {
    let newArr = []; 

    for (key in obj) {
        let singleArr = []; 
        singleArr.push(key); 
        singleArr.push(obj[key]);
        newArr.push(singleArr); 
    }
    return newArr; 
}


console.log(convertObjectToArray(input));