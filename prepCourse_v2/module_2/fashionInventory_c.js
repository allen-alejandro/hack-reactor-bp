
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


function listAllBlackShoes(inventory) {
  let result = ''; 

  for (let i = 0; i < inventory.length; i++) {
    let designer = inventory[i].name; 
    let shoes = inventory[i].shoes; 

    for (let j = 0; j < shoes.length; j++) {
      let shoe = shoes[j].name;
      let price = shoes[j].price;
      if (shoe.includes('black')) {
        result += `${designer}, ${shoe}, ${price}\n`;
      }
    }
  }
  return result; 
}

