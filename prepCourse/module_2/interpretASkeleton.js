

// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
    let charArr = word.split(""); 
    let obj = {}; 
    let result = 0; 

    for (let i = 0; i < charArr.length; i++) {
        let char = charArr[i];
        
        obj[char] === undefined ? obj[char] = 1 : obj[char] += 1; 

        for (key in obj) {
            if (obj[key] > result) result = obj[key];
        }
    }
    return result;
}

function findFirstWordWithMostRepeatedChars(text) {
    var maxRepeatCountOverall = 0;
    var wordWithMaxRepeatCount = '';
    let wordArr = text.split(" ")

    for (let i = 0; i < wordArr.length; i++) {
        let repeatCountForWord = findMaxRepeatCountInWord(wordArr[i])
        if (maxRepeatCountOverall < repeatCountForWord) {
            maxRepeatCountOverall = repeatCountForWord; 
            wordWithMaxRepeatCount = wordArr[i];
        }
    }
    return wordWithMaxRepeatCount;
}

// ASSERTION FUNCTION(S) TO BE USED

const assertionFunc = (actual, expected, testName) => {
    actual === expected ? console.log('passed') : console.log(`FAILED [${testName}] Expected {${expected}}, but got ${actual}`);
}

// TESTS CASES

let expectedResult = 'lolaleto'
let actual = findFirstWordWithMostRepeatedChars('yum yummy great lolaleto')


assertionFunc(actual, expectedResult, 'returns first word with most repeated characters')


// let obj2 = {
//     a: 1,
//     b: 0
// }

// obj2["r"] += 4

// console.log(obj2);

