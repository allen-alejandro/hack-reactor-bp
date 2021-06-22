

// Write a function called "repeatString".

// Given a string and a number, "repeatString" returns the given string repeated the given number of times.

// var output = repeatString('code', 3);
// console.log(output); // --> 'codecodecode'


const repeatString = (string, num) => {
    let finalStr = ''; 

    for (let i = 0; i < num ;i++) {
        finalStr += string; 
    }
    return finalStr; 
}