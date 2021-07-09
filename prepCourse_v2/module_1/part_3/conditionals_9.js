

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




var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};


const select = (arr, obj) => {
  let result = {}; 
  arr.map(el => {
    if (obj[el] !== undefined) {
      result[el] = obj[el]; 
    }
  })
  return result; 
}

var output2 = select(arr, obj);
console.log(output2); // --> { a: 1, c: 3 }

