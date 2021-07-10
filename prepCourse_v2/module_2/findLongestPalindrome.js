// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  let arrayOfPalindromes = [];
  // split sentence into words
  let arrOfWords = sentence.split(" ");
  // iterate words and collect the palindromes
  for (let i = 0; i < arrOfWords.length; i++) {
    let reversedWord = reverseString(arrOfWords[i])
    if (isPalindrome(reversedWord)) {
      arrayOfPalindromes.push(arrOfWords[i]);
    }
  }
  // sort the list of palindromes by word length
  arrayOfPalindromes.sort(sortAscendingByLength);
  // return the largest item in the sorted list
  return arrayOfPalindromes[arrayOfPalindromes.length - 1];
}


function reverseString(string) {
  return string.split('').reverse().join('');
}

function isPalindrome(word) {
  return word === reverseString(word) ? true : false;
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

// ASSERTION FUNCTION(S) TO BE USED

const assertionFunc = (actual, expected, testName) => {
  actual === expected ? console.log('passed') : console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
}

// TESTS CASES

let actualTest = findLongestPalindrome('Hi madam great job anna')
let expectedTest = 'madam'


assertionFunc(actualTest, expectedTest, 'returns if actual palidrome matches the expected palindrome')
