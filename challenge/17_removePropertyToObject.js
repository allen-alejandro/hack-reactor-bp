// Removing a property


// Complete a function that takes in two parameters, an object, and a string(which will represent a key).

// Your function should remove(delete) the property located at the inputted key.Your function should then return the inputted object.


function removeProperty(obj, key) {
    delete obj[key];
    return obj;
}


let myObj = {
    name: 'Allen',
    gender: 'Male',
    age: 31
}


removeProperty(myObj, 'gender');

console.log(myObj);