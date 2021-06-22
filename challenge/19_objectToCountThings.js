// Use an Object to count things


// Complete a function called countAllCharacters.

// Given a string, your function returns an object where each key is a character in the given string.

// The value of each key should be how many times each character appeared in the given string.

//     Notes:

// If given an empty string, countAllCharacters should return an empty object.
// var output = countAllCharacters('banana');
// console.log(output); // --> {b: 1, a: 3, n: 2}


// split the string [] a, e, i, o, i, u

// double loop for -- in -> condition here 
// if char found in key, the value ++ 


function countAllCharacters(str) {
    let strArr = str.split("")
    let myObj = {};

    for (let i = 0; i < strArr.length; i++) {
        typeof myObj[strArr[i]] === 'undefined' ? myObj[strArr[i]] = 1 : myObj[strArr[i]]++;
    }
    return myObj;
} 


console.log(countAllCharacters("peapnut"));


