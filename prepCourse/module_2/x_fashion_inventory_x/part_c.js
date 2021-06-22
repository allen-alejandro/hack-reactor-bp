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


//ARRAY < OBJECT 1 < PROPERTY1, PROPERTY2(ARRAY < OBJ, OBJ, OBJ, OBJ) --> OBJECT 2 < PROPERTY1, PROPERTY2(ARRAY < OBJ, OBJ)


function listAllBlackShoes (inventory) {
  let flatList = ''; 

  for (let i = 0; i < inventory.length; i++) {
    let designer = inventory[i];
    let name = designer.name; 
    let shoes = designer.shoes;
    for (let j = 0; j < shoes.length; j++) {
      let includesBlack = shoes[j].name.includes('black');
      let shoeName = shoes[j].name;
      let price = shoes[j].price;
      if (includesBlack) {
        flatList += `${name}, ${shoeName}, ${price}\n`;
      }
    }
  }
  return flatList; 
}


// ASSERTION FUNCTION 

function assertionFunc (actual, expected, testName) {
    actual === expected ? console.log('passed') : console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
}

// TEST 

actualPassingTest1 = listAllBlackShoes(currentInventory);
actualFailingTest1 = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nGucci, black leather laced sneakers, 900\nGucci, red leather laced sneakers, 800';
expectedTest1 = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nGucci, black leather laced sneakers, 900\n';

// calling assertion func 

//pass
assertionFunc(actualPassingTest1, expectedTest1, 'will check to see if actual only includes shoes with black in the name');

//fail
assertionFunc(actualFailingTest1, expectedTest1, 'will check to see if actual only includes shoes with black in the name');

