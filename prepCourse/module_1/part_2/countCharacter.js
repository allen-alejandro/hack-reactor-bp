

// Write a function called "countCharacter".

// Given a string input and a character, "countCharacter" returns the number of occurrences of a given character in the given string.

// var output = countCharacter('I am a hacker', 'a');
// console.log(output); // --> 3

const countCharacter = (str, char) => {
    let strArr = str.split("");
    let count = 0; 

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === char) {
            count++; 
        }
    }
    return count; 
}


