
const assertWithinRange = (low, high, actual, testName) => {
  actual >= low && actual <= high ? console.log('passed') : console.log(`FAIL [${testName}] "${actual}" not within range ${low} to ${high}`);
}



