

// Write a function called "countAllCharacters".

// Given a string, "countAllCharacters" returns an object where each key is a character in the given string.The value of each key should be how many times each character appeared in the given string.

//     Notes:

// If given an empty string, countAllCharacters should return an empty object.
// var output = countAllCharacters('banana');
// console.log(output); // --> {b: 1, a: 3, n: 2}


const countAllCharacters = str => {
    if (str === '') return {}; 

    let strArr = str.split(''); 
    let obj = {};
    
    for (let i = 0; i < strArr.length; i++) {
        if (obj[strArr[i]] === undefined ) {
            obj[strArr[i]] = 1; 
        } else {
            obj[strArr[i]]++; 
        }
    }
    return obj; 
}



// obj1 = { b: 1, a: 3, n: 2 }

// console.log(obj1['b'] ++);
// console.log(obj1['b']++);
// console.log(obj1['b']);