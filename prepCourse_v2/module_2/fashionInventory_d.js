

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








const generateLaceDetails = inventory => {
  let result = []; 
  
  for (let i = 0; i < inventory.length; i++) {
    let shoes = inventory[i].shoes; 

    for (let j = 0; j < shoes.length; j++) {
      let shoeArr = shoes[j].name.split(" "); 

      for (let k = 0; k < shoeArr.length; k++) {
        let shoe = shoeArr[k]; 
        if (shoe.includes('lace')) {
          result.push({ nameWords: shoeArr, targetWordIndex: k});
        }
      }
    }
  }
  return result; 
}



// assert function 
const assert = (actual, expected, testName) => {
  let actualStr = JSON.stringify(actual);
  let expectedStr = JSON.stringify(expected);
  actualStr === expectedStr ? console.log('passed') : console.log(`FAILED [${testName}] Expected ${expectedStr}, but got ${actualStr}`);
}


// testing 

let actuaResult = generateLaceDetails(currentInventory);
let expectedResult = [
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





assert(actuaResult, expectedResult, 'just my test')