


// //returns a function
// function higherOrder() {
//   return function () {
//     return 'helloooo'
//   }
// }

// console.log(higherOrder()());; // the returned function, used as an expression (currying)
// let returnedFunction = higherOrder(); //the returned function, saved in a value (generator)

// console.log(returnedFunction());


let myArr = [1, 2, 3]

let mySecondArr = []; 
myArr.forEach(x => mySecondArr.push(x + 1))

let myThirdArr = myArr.map(x => x + 1)

let myFourthArr = myArr.filter(x => x % 2 == 1)

console.log(myArr);
console.log(mySecondArr);
console.log(myThirdArr);
console.log(myFourthArr);


let test1 = [1, 2, 3, 4]; 


console.log(test1.reduce((accum, value) => accum + value, 0));

