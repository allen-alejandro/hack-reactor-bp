const assertObjectsEqual = (actual, expected, testName) => {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);

  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
  }
}
