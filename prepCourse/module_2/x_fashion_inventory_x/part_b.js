

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



function calculateAveragePricePerDesigner(inventory) {
  let expected = {designers: []}; 

    for (let i = 0; i < inventory.length; i++) {
      let sum = 0;
      let count = 0;
      let designer = inventory[i].name; 
      let shoes = inventory[i].shoes;
      for (let j = 0; j < shoes.length; j++) {
        let price = shoes[j].price; 
        sum += price;
        count++;
      }
      let result = {name: designer, averagePrice: sum/count};
      expected.designers.push(result);
    } 
  return expected; 
}


const assertionfunc = (actual, expected, testName) => {
  let convertActualToString = JSON.stringify(actual);
  let convertExpectedToString = JSON.stringify(expected); 

  // convertActualToString === convertExpectedToString ? console.log('passed') : console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
  return convertActualToString === convertExpectedToString ? 'passed' : `FAILED [${testName}] Expected ${expected}, but got ${actual}`;
}

let actualTest = calculateAveragePricePerDesigner(currentInventory);
let expectedTest = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 851
    }
  ]
};



// TESTING

console.log(assertionfunc(actualTest, expectedTest, 'confirms that both actual and expected parameters match'));
