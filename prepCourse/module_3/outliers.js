

// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

// The return value should be 1 - indexed, not 0 - indexed.

//   Examples :
// detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
// detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd

// function takes a string of numbers 
const detectOutlierValue = stringOfNumbers => {
  let oddArr = [];
  let evenArr = [];
  let stringArr = stringOfNumbers.split(' ')
  let numberArray = stringArr.map(x => parseInt(x))
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
      evenArr.push(numberArray[i]);
    } else {
      oddArr.push(numberArray[i]);
    }
  }
  return oddArr.length === 1 ? numberArray.indexOf(oddArr[0] + 1) : numberArray.indexOf(evenArr[0] + 1);
}
// split string at empty space 
// parse.Int() and push to number arry 
// iterate number array 
// mod 2 
// if even push to even array
// if odd push to odd array 
// array.index of either arrays element [0]
// return index + 1 of the sole even||odd number 





console.log(detectOutlierValue('1 3 5 7 8 9'));