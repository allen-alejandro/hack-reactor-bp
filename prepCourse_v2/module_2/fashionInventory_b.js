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


// expected ---> [OBJ] (property) [ARRAY] (OBJ) 

function calculateAveragePricePerDesigner(inventory) {
  let result = {designers: []};

  for (let i = 0; i < inventory.length; i++) {
    let designer = inventory[i].name; 
    let shoes = inventory[i].shoes; 
    let sum = 0; 

    for (let j = 0; j < shoes.length; j++) {
      let price = shoes[j].price; 
      sum += price; 
    }
    result.designers.push({name: designer, averagePrice: sum / shoes.length});
  }
  return result; 
}


calculateAveragePricePerDesigner(currentInventory)