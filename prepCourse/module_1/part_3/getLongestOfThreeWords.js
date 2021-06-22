

// Write a function called "getLongestOfThreeWords".

//     Given 3 words, "getLongestOfThreeWords" returns the longest of three words.

//         Notes:

// If there is a tie, it should return the first word in the tie.
// var output = getLongestOfThreeWords('these', 'three', 'words');
// console.log(output); // --> 'these'


const getLongestOfThreeWords = (word1, word2, word3) => {
    let longestWord = word1; 
    let wordArr = [word2, word3]; 

    for (let i = 0; i < wordArr.length; i++) {
        if (longestWord.length < wordArr[i].length) {
            longestWord = wordArr[i];
        }
    }
    return longestWord; 
}