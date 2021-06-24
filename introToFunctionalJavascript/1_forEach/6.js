

//Write a function evens that accepts an array as an argument, and returns an array consisting of all of the even numbers in that array.

const evens = array => {
  let evens = []; 
  array.forEach(x => {
    if (x % 2 === 0) {
      evens.push(x);
    }
  })
  return evens; 
}


console.log(evens([2, 4, 5, 6, 7, 8, 8, 9, 9, 0, 12]));