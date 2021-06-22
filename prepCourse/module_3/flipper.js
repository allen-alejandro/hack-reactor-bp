

// Flip every pair of characters in a string.


//     Example:
// var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!




// function flipParis accepts a string parameter 
const flipPairs = sentence => {
    // define a str variable that will be our result
    let flippedPairs = ''; 
    let letters = sentence.split(''); 
    // iterate through the string parameter 
    for (let i = 0; i < letters.length; i += 2 ) {
        flippedPairs += letters[i+1] + letters[i]; 
    }
    return flippedPairs; 
}

console.log(flipPairs('check out how interesting this problem is, it\'s insanely interesting!'));



// return str result 
