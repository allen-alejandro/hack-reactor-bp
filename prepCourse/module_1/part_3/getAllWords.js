

// Write a function called "getAllWords".

// Given a sentence, "getAllWords" returns an array containing every word in the sentence.

//     Notes:

// If given an empty string, it should return an empty array.
// You should be familiar with the 'split' method.
// var output = getAllWords('Radagast the Brown');
// console.log(output); // --> ['Radagast', 'the', 'Brown']

const getAllWords = str => {
    let newStr = str.split(" ");
    return  str === "" ? [] :  newStr;
}


console.log(getAllWords(''));