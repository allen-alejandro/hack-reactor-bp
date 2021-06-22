

// Complete the function splitPairs such that it splits the input string into pairs of characters.If the input string has a length that is odd, then it should replace the missing second character of the final pair with an underscore _.Note, an empty string should make your function produce an empty array.



const splitPairs = input => {
  let result = [];
  let charArr = input.split('');

  for (let i = 0; i < charArr.length; i += 2) {
    let char1 = input[i];
    let char2 = input[i + 1];

    char2 === undefined ? result.push(`${char1}_`) : result.push(`${char1}${char2}`);
  }
  return result;
}






console.log(splitPairs('peanutbutters'));