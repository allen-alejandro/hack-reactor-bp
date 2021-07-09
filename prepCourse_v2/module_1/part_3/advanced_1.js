







function countWords(str) {
  let words = str.split(' '); 
  let obj = {}; 
  
  for (let i = 0; i < words.length; i++) {
    let word = words[i]; 
    if (obj[word] === undefined) {
      obj[word] = 1; 
    } else {
      obj[word]++; 
    }
  }
  return str === '' ? {} : obj; 
}


var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}