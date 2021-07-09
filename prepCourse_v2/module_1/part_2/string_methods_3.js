const getLengthOfThreeWords = (word1, word2, word3) => {
  return word1.length + word2.length + word3.length;
}


const joinArrays = (arr1, arr2) => {
  return arr1.concat(arr2);
}









function getElementsAfter(array, n) {
  return array.slice(n + 1); 
}



function getElementsUpTo(array, n) {
  return array.slice(0, n);
}

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);


console.log(output);