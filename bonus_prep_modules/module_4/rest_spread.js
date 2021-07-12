

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