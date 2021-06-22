

// Write a function called "filterOddLengthWords".

// Given an array of strings, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

// var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
// console.log(output); // --> ['there', "now']

const filterOddLengthWords = words => {
    let newArr = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length % 2 === 1) {
            newArr.push(words[i]); 
        }
    }
    return newArr; 
}


console.log(filterOddLengthWords(['there', 'it', 'is', 'now']));