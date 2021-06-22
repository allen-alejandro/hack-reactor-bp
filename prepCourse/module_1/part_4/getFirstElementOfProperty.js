



// Write a function called "getFirstElementOfProperty".

// Given an object and a key, "getFirstElementOfProperty" returns the first element of the array located at the given key.

//     Notes:

// If the array is empty, it should return undefined.
// If the property at the given key is not an array, it should return undefined.
// If there is no property at the key, it should return undefined.
// var obj = {
//     key: [1, 2, 4]
// };
// var output = getFirstElementOfProperty(obj, 'key');
// console.log(output); // --> 1



var obj = {
    key: [1, 2, 4]
};

const getFirstElementOfProperty = (obj, key) => {
    if (!Array.isArray(obj[key])) return undefined;
    return obj[key][0];
}



console.log(getFirstElementOfProperty(obj, 'key'));
