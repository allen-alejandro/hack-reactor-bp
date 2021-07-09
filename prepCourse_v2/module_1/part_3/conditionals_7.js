


const joinThreeArrays = (arr1, arr2, arr3) => {
  let arr = arr1.concat(arr2, arr3)
  return arr;
}



const addToFrontOfNew = (arr, element) => {
  let newArr = arr.slice();
  newArr.unshift(element);
  return newArr;
}


const addToBackOfNew = (arr, element) => {
  let newArr = arr.slice();
  newArr.push(element);
  return newArr;
}





function getAllElementsButNth(array, n) {
  array.splice(n, 1); 
  return array; 
}


var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']


const areValidCredentials = (name, password) => {
  return name.length > 3 && password.length >= 8 ? true : false;
}


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