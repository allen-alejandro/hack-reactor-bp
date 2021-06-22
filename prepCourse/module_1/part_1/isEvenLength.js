

// Write a function called "isEvenLength".

// Given a word, "isEvenLength" returns whether the length of the word is even.

// var output = isEvenLength('wow');
// console.log(output); // --> false

const isEvenLength = word => {
    return word.length % 2 === 0 ? true : false; 
}