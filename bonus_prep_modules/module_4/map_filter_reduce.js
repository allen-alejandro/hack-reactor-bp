let myArr = [1, 2, 3]

let mySecondArr = [];
myArr.forEach(x => mySecondArr.push(x + 1))

let myThirdArr = myArr.map(x => x + 1)

let myFourthArr = myArr.filter(x => x % 2 == 1)

// console.log(myArr);
// console.log(mySecondArr);
// console.log(myThirdArr);
// console.log(myFourthArr);


let test1 = [1, 2, 3, 4];


// console.log(test1.reduce((accum, value) => accum + value, 0));

// forEach(['one', 'two', 'three'], function (val, index, arr) {
//   console.log(val, index, arr);
// });



function map(array, callbackFunction) {
  result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callbackFunction(array[i]));
  }
  return result;
}

// console.log(map([1, 2, 3], x => x + 2));



const filter = (array, callbackFunction) => {
  let result = []; 
  for (let i = 0; i < array.length; i++) {
    if (callbackFunction(array[i])) {
      result.push(array[i]); 
    }
  }
  return result;
}


// console.log(filter([1, 2, 3], x => x % 2 === 0))



const reduce = (array, callbackFunction, startingValue) => {
  let sum = startingValue; 
  for (let i = 0; i < array.length; i++) {
    sum = callbackFunction(sum, array[i]); 
  }
  return sum; 
}



console.log(reduce([1, 2, 3, 4], (x, y) => x + y, 0));

