

// Write a function called "getElementsGreaterThan10AtProperty".

// Given an object and a key, "getElementsGreaterThan10AtProperty" returns an array containing the elements within the array, located at the given key, that are greater than 10.

// Notes:

// If the array is empty, it should return an empty array.
// If the array contains no elements greater than 10, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the key, it should return an empty array.
// var obj = {
//     key: [1, 20, 30]
// };
// var output = getElementsGreaterThan10AtProperty(obj, 'key');
// console.log(output); // --> [20, 30]


const getElementsGreaterThan10AtProperty = (obj, key) => {
    if (obj[key] === undefined) return [];
    if (Array.isArray(obj[key]) === false) return [];
    if (obj[key].length === 0) return []; 

    let result = []; 

    for (i = 0; i < obj[key].length; i++) {
        if (obj[key][i] > 10) result.push(obj[key][i]); 
    }
    return result; 
}