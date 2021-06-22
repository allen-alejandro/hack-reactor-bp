


// Write a function called "computeAverageLengthOfWords".

// Given two words, "computeAverageLengthOfWords" returns the average of their lengths.

// var output = computeAverageLengthOfWords('code', 'programs');
// console.log(output); // --> 6


const computeAverageLengthOfWords = (word1, word2) => {
    let sum = word1.length + word2.length; 
    return sum / 2; 
}