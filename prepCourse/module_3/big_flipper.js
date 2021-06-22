


// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

// Note that this is intentionally very similar to the previous problem.

// Please focus on getting a working solution with the tools you know well.

// Practice the interactive / collaborative interview style that's described in the documentation.

// Example:
// var input = 'a short example';
// var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma

// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

//   -> 'ohs axe trelpma'

//  functon that flips every n characters from a string 
// function will accept two paraments: string, number(n characters)
// result string 
// convert string to string array 
// iterate through the string array 
// pull x characters, flip them, contatenate the result string 

// return a flipped string of n characters 



// helper function 

// array, n character 
// loop trhough array 
// increment i by n 


// slice the array at n 
// 

const flipEveryNChars = (input, n) => {
  let characters = input.split(''); 
  let result = '';

  for (let i = 0; i < characters.length; i += n) {
    let slicedWords = characters.slice(i, i + n);
    let revercedAndSlicedWords = slicedWords.reverse().join('');
    result += revercedAndSlicedWords;
  }
  return result; 
}


console.log(flipEveryNChars('a short example', 5));