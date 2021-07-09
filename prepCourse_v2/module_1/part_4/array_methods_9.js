

const filterOddLengthWords = words => {
  let newArr = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 === 1) {
      newArr.push(words[i]);
    }
  }
  return newArr;
}


const filterEvenLengthWords = words => {
  return words.filter(word => word.length % 2 === 0); 
}





const getLengthOfLongestElement = arr => {
  if (arr.length === 0) return 0;
  let longestString = arr[0];
  arr.map(word => {
    if (word.length > longestString.length) {
      longestString = word; 
    }
  })
  return longestString.length;
}