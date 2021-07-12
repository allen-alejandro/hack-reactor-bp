


// //returns a function
// function higherOrder() {
//   return function () {
//     return 'helloooo'
//   }
// }

// console.log(higherOrder()());; // the returned function, used as an expression (currying)
// let returnedFunction = higherOrder(); //the returned function, saved in a value (generator)

// console.log(returnedFunction());


// let myArr = [1, 2, 3]

// let mySecondArr = []; 
// myArr.forEach(x => mySecondArr.push(x + 1))

// let myThirdArr = myArr.map(x => x + 1)

// let myFourthArr = myArr.filter(x => x % 2 == 1)

// console.log(myArr);
// console.log(mySecondArr);
// console.log(myThirdArr);
// console.log(myFourthArr);


// let test1 = [1, 2, 3, 4]; 


// console.log(test1.reduce((accum, value) => accum + value, 0));


function forEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }

  return arr;
}

forEach(['one', 'two', 'three'], function (val, index, arr) {
  console.log(val, index, arr);
});



function map(array, callbackFunction) {
  result = []; 
  for (let i = 0; i < array.length; i++) {
    result.push(callbackFunction(array[i]))
  }
  return result; 
}

console.log(map([1, 2, 3], x => x + 2));