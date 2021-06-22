

// Write a function called "filterEvenLengthWords".

// Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.

// var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
// console.log(output); // --> ['word', 'word']


const filterEvenLengthWords = words => {
    let evenWords = []; 

    for (let i = 0; i < words.length; i++) {
        if (words[i].length % 2 === 0) {
            evenWords.push(words[i]);
        }
    }
    return evenWords; 
}