

// Write a function called "findMaxLengthOfThreeWords".

//     Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.

// var output = findMaxLengthOfThreeWords('a', 'be', 'see');
// console.log(output); // --> 3


const findMaxLengthOfThreeWords = (word1, word2, word3) => {
    let longestWord = word1; 
    let wordArray = [word2, word3];

    for (let i = 0; i < wordArray.length; i++) {
        if (longestWord.length < wordArray[i].length) {
            longestWord = wordArray[i]; 
        }
    }
    return longestWord.length;
}