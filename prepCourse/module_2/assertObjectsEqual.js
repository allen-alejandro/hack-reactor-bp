
var person = {
    firstName: 'Cassidy',
    lastName: 'Jacobs'
};

var expected = {
    firstName: 'Jack',
    lastName: 'Jacobs'
};






const assertObjectsEqual = (actual, expected, testName) => {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);

    if (actual === expected) {
        console.log('passed');
    } else {
        console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
    }
}


assertObjectsEqual(person, expected, "updates person's existing first name field");