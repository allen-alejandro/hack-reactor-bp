const isOddWithoutModulo = num => {
  let isOdd = false;
  let counter = Math.abs(num);

  for (let i = 0; i < counter; i++) {
    isOdd = !isOdd;
  }
  return isOdd;
}




function generateHaiku(firstLine, secondLine, thirdLine) {
  // create a haiku variable
  // assign it to an expression involving the input lines, such that they format correct when the return value is logged to the console
  // return the haiku variable
  return `${firstLine}\n${secondLine}\n${thirdLine}`


}

var resultHaiku1 = generateHaiku('In the twilight rain', 'these brilliant-hued hibiscus -', 'A lovely sunset.');


let myObj = {x: 'food'}


function isAnObject(input) {
  // create an isObject variable
  // assign it to whether the input is an object type
  // create an isNotAnArray variable
  // assign it to whether the input is not an array
  // create an isObjectAndNotAnArray variable
  // assign it to a combination of isObject AND isNotAnArray
  // return the isObjectAndNotAnArray variable
  return !Array.isArray(input) && typeof input === 'object'
}

console.log(isAnObject(myObj));





function verifyStock(recipeMinimums, stockTomatoes, stockOnions) {
  // if stock of tomatoes and stock of onions are both less than minimum
  // return 'We need more tomatoes and more onions.'
  // otherwise if stock of tomatoes is less than minimum but stock of onions is sufficient
  // return 'We have enough onions, but need more tomatoes.'
  // otherwise if stock of tomatoes is sufficient but stock of onions is less than minimum
  // return 'We have enough tomatoes, but need more onions.'
  // otherwise
  // return 'We have enough tomatoes and onions. There will be {excessTomatoes} extra tomato, and {excessOnions} extra onion.'
  let excessTomatoes = stockTomatoes - recipeMinimums.tomatoes
  let excessOnions = stockOnions - recipeMinimums.onions

  if (excessTomatoes < 0 && excessOnions < 0) {
    return 'We need more tomatoes and more onions.'
  } else if (excessTomatoes < 0 && excessOnions >= 0) {
    return 'We have enough onions, but need more tomatoes.'
  } else if (excessTomatoes >= 0 && excessOnions < 0) {
    return 'We have enough tomatoes, but need more onions.'
  } else {
    return 'We have enough tomatoes and onions. There will be ' + excessTomatoes + ' extra tomato, and ' + excessOnions + 'extra onion.'
  }
}

