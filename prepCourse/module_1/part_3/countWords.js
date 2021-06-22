

// Write a function called "countWords".

// Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.

//     Notes:

// If given an empty string, it should return an empty object.
// var output = countWords('ask a bunch get a bunch');
// console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}


const countWords = str => {
    let strArr = str.split(" ");
    let obj = {};
    
    for (let i = 0; i < strArr.length; i++) {
        let key = strArr[i]; 

        if (str === "") {
            obj = {};
        } else if (obj[key] === undefined) {
            obj[key] = 1;
        } else {
            obj[key]++;
        }
    }
    return obj; 
}



console.log(countWords('how much food can I food the wood food'));