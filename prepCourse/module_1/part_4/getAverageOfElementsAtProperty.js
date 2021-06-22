

// Write a function called "getAverageOfElementsAtProperty".

// Given an object and a key, "getAverageOfElementsAtProperty" returns the average of all the elements in the array located at the given key.

//     Notes:

// If the array at the given key is empty, it should return 0.
// If the property at the given key is not an array, it should return 0.
// If there is no property at the given key, it should return 0.
var obj = {
    key: [1, 2, 3]
};
// var output = getAverageOfElementsAtProperty(obj, 'key');
// console.log(output); // --> 2


const getAverageOfElementsAtProperty = (obj, key) => {
    if (!Array.isArray(obj[key])) return 0; 
    if (obj[key] === undefined) return 0; 

    let result = 0; 
    obj[key].map(x => result += x); 
    return obj[key].length === 0 ? 0 : result / obj[key].length; 
}


console.log(getAverageOfElementsAtProperty(obj, 'key'));

