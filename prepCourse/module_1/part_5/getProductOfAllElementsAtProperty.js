

// Given an object and a key, "getProductOfAllElementsAtProperty" returns the product of all the elements in the array located at the given key.

//     Notes:

// If the array is empty, it should return 0.
// If the property at the given key is not an array, it should return 0.
// If there is no property at the given key, it should return 0.
var obj = {
    key: [1, 2, 3, 4]
};
// var output = getProductOfAllElementsAtProperty(obj, 'key');
// console.log(output); // --> 24


const getProductOfAllElementsAtProperty = (obj, key) => {
    if (obj[key] === undefined) return 0;
    if (obj[key].length === 0) return 0; 
    if (!Array.isArray(obj[key])) return 0; 

    let result = 1; 
    obj[key].map(x => result *= x)
    return result; 
}



console.log(getProductOfAllElementsAtProperty(obj, 'key'));