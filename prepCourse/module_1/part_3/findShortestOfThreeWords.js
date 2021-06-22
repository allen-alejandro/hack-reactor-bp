

// Write a function called "findShortestOfThreeWords".

//     Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.

//         Notes:

// If there are ties, it should return the first word in the parameters list.
// var output = findShortestOfThreeWords('a', 'two', 'three');
// console.log(output); // --> 'a'

const findShortestOfThreeWords = (word1, word2, word3) => {
    let shortestWord = word1; 
    let wordArr = [word2, word3]; 

    for (let i = 0; i < wordArr.length; i++) {
        if (shortestWord.length > wordArr[i].length) {
            shortestWord = wordArr[i];
        }
    }
    return shortestWord;
}