// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  let peopleArray = [];

  for (let i = 0; i < classList.length; i++) {
    let personObj = {};
    personObj['name'] = classList[i];
    personObj['age'] = getRandomIntInclusive(10, 11);
    peopleArray.push(personObj);
  }
  return peopleArray;
}

// ASSERTION FUNCTION(S) TO BE USED

const assertFunc = (actual, expected, testName) => {
  let status = true;

  for (let i = 0; i < actual.length; i++) {
    if (actual[i]['age'] !== 10 && actual[i]['age'] !== 11) {
      status = false;
      break;
    }
  }
  return status === expected ? console.log('passed') : console.log(`FAILED [${testName}] Expected ${expected}, but got ${status}`);
}

// TESTS CASES

// passed sample
let actualTestObj1 = [{ "name": "TEST1", "age": 11 }, { "name": "TEST2", "age": 10 }];
let expectedTestObj2 = [{ "name": "TEST1", "age": 11 }, { "name": "TEST2", "age": 10 }];

// failed sample
let actualTestObj3 = [{ "name": "TEST1", "age": 11 }, { "name": "TEST2", "age": 12 }];
let expectedTestObj4 = [{ "name": "TEST1", "age": 11 }, { "name": "TEST2", "age": 10 }];


// testing assertion fuction
assertFunc(actualTestObj1, true, "return true if actual included only ages 10 or 11");