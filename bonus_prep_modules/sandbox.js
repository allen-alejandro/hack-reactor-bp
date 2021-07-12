


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


// function forEach(arr, callback) {
//   for (var i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
//   }

//   return arr;
// }

// forEach(['one', 'two', 'three'], function (val, index, arr) {
//   console.log(val, index, arr);
// });



// function map(array, callbackFunction) {
//   result = []; 
//   for (let i = 0; i < array.length; i++) {
//     result.push(callbackFunction(array[i]))
//   }
//   return result; 
// }

// console.log(map([1, 2, 3], x => x + 2));

// const obj = {x: 1, y: 2, z: 3}


// console.log(obj.x);

// let {x, y, z} = obj

// console.log(x);


// let song1 = {name: 'BUEEE', artist: 'Allen'}

// function playSong({ name, artist }) {
//   return `Now playing song ${name} by ${artist}`
// }


// console.log(playSong(song1));



function greet(name, greeting) {
  return `${greeting}! My name is ${name}.`
}

function greetNisha() {
  const personAndGreeting = ['Nisha', 'Hi there']
  return greet(...personAndGreeting) // this is the line to change
}


function multiply(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((accum, value) => accum * value, 1); 
}

console.log(multiply(1, 2, 3, 4));