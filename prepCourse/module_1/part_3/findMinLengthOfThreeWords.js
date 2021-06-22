

// Write a function called "findMinLengthOfThreeWords".

//     Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

// var output = findMinLengthOfThreeWords('a', 'be', 'see');
// console.log(output); // --> 1


const findMinLengthOfThreeWords = (word1, word2, word3) => {
    let shortestWord = word1;
    let arrayOfWords = [word2, word3];

    for (let i = 0; i < arrayOfWords.length; i++) {
        if (shortestWord.length > arrayOfWords[i].length) {
            shortestWord = arrayOfWords[i]; 
        }
    }
    return shortestWord.length; 
}


console.log(findMinLengthOfThreeWords('a', 'be', 'see'));