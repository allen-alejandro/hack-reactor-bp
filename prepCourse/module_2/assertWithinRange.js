
// roll dice 

const dieRoll = () => {
    return Math.floor(Math.random() * 12 + 1)
}




const assertWithinRange = (low, high, actual, testName) => {
    actual >= low && actual <= high ? console.log('passed') : console.log(`FAIL [${testName}] "${actual}" not within range ${low} to ${high}`);
}


assertWithinRange(1, 6, dieRoll(), 'die roll should be between 1 and 6');






// (1, 6, dieRoll, 'die roll should be between 1 and 6')