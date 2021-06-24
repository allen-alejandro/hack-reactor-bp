

// Write a function evenLengthWords that takes an array of strings as an argument, and returns an array of just the words that have an even 

const evenLengthWords = array => {
  let evens = []; 
  array.forEach(x => {
    if (x.length % 2 === 0) {
      evens.push(x); 
    }
  })
  return evens; 
}

console.log(evenLengthWords(['food', 'leo', 'allen', 'trucks']));