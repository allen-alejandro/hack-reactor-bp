


// FUNCTION DEFINITION(S)
function addFullNameProp(obj) {
    let firstName = obj["firstName"];
    let lastName = obj["lastName"];

    if (firstName !== undefined && lastName !== undefined) {
        obj['fullName'] = firstName + ' ' + lastName;
    }
    return obj;
}

// ASSERTION FUNCTION(S) TO BE USED

const assertObjectsEqual = (actual, expected, testName) => {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);

    if (actual === expected) {
        console.log('passed');
    } else {
        console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
    }
}


// TESTS CASES

let obj1 = {
    firstName: 'Allen',
    lastName: 'Alejandro'
}

let obj2 = {
    firstName: 'Allen',
    lastName: 'Alejandro',
    fullName: 'Allen Alejandro'
}

let actualObject = addFullNameProp(obj1); 
let expectedObject = obj2;


assertObjectsEqual(actualObject, expectedObject, 'checks if actual object matches the expected object')