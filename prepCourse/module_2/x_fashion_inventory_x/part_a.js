

var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];


const renderInventory = inventory => {
  let flatList = '';
  for (let i = 0; i < inventory.length; i++) {
    let designerArray = [];
    let obj = inventory[i];
    for (key in obj) {
      if (key === 'name') {
        let designerName = obj[key];
        designerArray.push(designerName);
      } else if (key === 'shoes') {
        let shoeArray = obj[key];
        for (let j = 0; j < shoeArray.length; j++) {
          let shoeObj = shoeArray[j];
          let values = Object.values(shoeObj);
          let currentDesigner = designerArray;
          let designerAndInventoryArray = [];
          designerAndInventoryArray.push(currentDesigner.concat(values).join(', '));
          let finalString = designerAndInventoryArray.join('');
          flatList += `${finalString}\n`;
        }
      }
    }
  }
  return flatList; 
}


renderInventory(currentInventory)


//FETCH
// designer
// shoe name
// price 

// var flatList = `First line\nSecond Line\nThird Line\n`;
// console.log(flatList);