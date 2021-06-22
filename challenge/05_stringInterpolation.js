// String Interpolation



// Complete the function 'interpolate'.

//This function will take in a string parameter, and return a string as follows:

// var message1 = interpolate("turkey");
// console.log(message1); // "My favorite food is turkey!"

// var message2 = interpolate("tofurkey");
// console.log(message2); // "My favorite food is tofurkey!"
// Pay close attention to the punctuation in the resulting string.

function interpolate(favoriteFood) {
    return `My favorite food is ${favoriteFood}!`
}


let message2 = interpolate("tofurkey");
console.log(message2);