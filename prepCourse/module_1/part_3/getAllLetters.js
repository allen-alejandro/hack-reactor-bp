


// Write a function called "getAllLetters".

// Given a word, "getAllLetters" returns an array containing every character in the word.

//     Notes:

// If given an empty string, it should return an empty array.
// You should be familiar with the 'split' method.
// var output = getAllLetters('Radagast');
// console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']


const getAllLetters = str => {
    return str.split("");
}