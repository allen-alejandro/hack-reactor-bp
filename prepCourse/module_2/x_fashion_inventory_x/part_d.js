var currentInventory = [
    {
        name: 'Brunello Cucinelli',
        shoes: [
            { name: 'tasselled black low-top lace-up', price: 1000 },
            { name: 'tasselled green low-top lace-up', price: 1100 },
            { name: 'plain beige suede moccasin', price: 950 },
            { name: 'plain olive suede moccasin', price: 1050 }
        ]
    },
    {
        name: 'Gucci',
        shoes: [
            { name: 'red leather laced sneakers', price: 800 },
            { name: 'black leather laced sneakers', price: 900 }
        ]
    }
];


// ARRAY < OBJ1 (PROPERTY, PROPERTY(ARRAY < OBJ, OBJ, OBJ, OBJ)) OBJ2 (PROPERTY, PROPERTY(ARRAY < OBJ, OBJ))

function generateLaceDetails (inventory) {
  let resultArr = [];

  for (let i = 0; i < inventory.length; i++) {
  let shoes = inventory[i].shoes; 

    for (let j = 0; j < shoes.length; j++) {
        let shoeName = shoes[j].name;
        if (shoeName.includes('lace')) {
          let shoeObj = {}
          shoeObj['namewords'] = shoeName.split(' ');
          shoeObj['targetWordIndex'] = targetWordIndexFinder(shoeName.split(' '));
          resultArr.push(shoeObj); 
        }
    }
  }
  return resultArr; 
}

// helper function 

const targetWordIndexFinder = arrayOfWords => {
    for (let i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].includes('lace')){
            return i; 
        }
    }
}


// ASSERTION FUNCTION 

const assertionFunc = (actual, expected, testName) => {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);

    if (actual === expected) {
        console.log('passed')
    } else {
        console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
    }

//   convertActualToString === convertExpectedToString ? console.log('passed') : console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
    // convertActualToString === convertExpectedToString ? console.log('passed') : console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
}


// TEST 
let actualResult = generateLaceDetails(currentInventory); 
let passedExpected = [
    {
        "nameWords": [
            "tasselled",
            "black",
            "low-top",
            "lace-up"
        ],
        "targetWordIndex": 3
    },
    {
        "nameWords": [
            "tasselled",
            "green",
            "low-top",
            "lace-up"
        ],
        "targetWordIndex": 3
    },
    {
        "nameWords": [
            "red",
            "leather",
            "laced",
            "sneakers"
        ],
        "targetWordIndex": 2
    },
    {
        "nameWords": [
            "black",
            "leather",
            "laced",
            "sneakers"
        ],
        "targetWordIndex": 2
    }
];

// console.log(targetWordIndexFinder(['red', 'leather', 'laced', 'sneakers']));


// generateLaceDetails(currentInventory)


assertionFunc(actualResult, passedExpected, 'returns array of objects containing words that include lace and their index');