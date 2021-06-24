

// Write a function that takes an array of arrays that contain product information, and returns an array of objects with appropriate keys:

var products = [
  ['Dark Chocolate Crunchies', 4.11, 3],
  ['Peppermint Poppers', 0.88, 1],
  ['Banana Bunches', 2.33, 2]
]

var toObject = function (products) {
  return products.map(el => {
    return {name: el[0], price: el[1], quantity: el[2]}
  })
};

console.log(toObject(products));; // => [
//   { name: 'Dark Chocolate Crunchies', price: 4.11, quantity: 3 },
//   { name: 'Peppermint Poppers', price: 0.88, quantity: 1 },
//   { name: 'Banana Bunches', price: 2.33, quantity: 2 }
// ]