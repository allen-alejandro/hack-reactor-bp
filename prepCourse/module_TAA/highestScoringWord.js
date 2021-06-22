

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


const highestScoringWord = string => {
  let words = string.split(' '); 
  let result = words[0];

  for (let i = 1; i < words.length; i++) {
    let word = words[i]; 
    if (sumOfWord(result) < sumOfWord(word)) {
      result = word; 
    }
  }
  return result; 
}

// helper function --> assing a number to the letter 
const letterNum = letter => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return alphabet.indexOf(letter) + 1
}

// helper function --> character sum for a single word
let sumOfWord = word => {
  let total = 0; 
  let charArr = word.split(''); 
  charArr.map(x => total += letterNum(x))
  return total; 
}



console.log(highestScoringWord('hi my name is allen and i like peanut butter'));