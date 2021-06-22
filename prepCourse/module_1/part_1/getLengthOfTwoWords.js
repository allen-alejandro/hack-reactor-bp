

// Write a function called "getLengthOfTwoWords".Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.

// var output = getLengthOfTwoWords('some', 'words');
// console.log(output); // --> 9


const getLengthOfTwoWords = (word1, word2) => {
    let concatWords = word1 + word2;
    return concatWords.length;
}