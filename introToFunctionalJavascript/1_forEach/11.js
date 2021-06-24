

// Read about the join method on MDN and use it to implement a function that accepts a string as an argument and returns that string reversed.

const reverseString = string => {
  return string.split('').reverse().join('') 
}


console.log(reverseString('Allen'));