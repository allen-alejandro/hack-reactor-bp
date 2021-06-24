
// Write a function shortestWord that works like longestWord, but returns the shortest word instead.

const shortestWord = string => {
  let strArr = string.split(' ');
  let shortest = strArr[0];
  strArr.forEach(x => {
    if (x.length < shortest.length) {
      shortest = x; 
    }
  }) 
  return shortest; 
}


console.log(shortestWord('love htx photo boot in houston texas'));