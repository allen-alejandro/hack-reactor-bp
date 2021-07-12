

const outerFunction = outerVariable => {
  return function innerFunction (innerVariable) {
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Inner Variable: ${innerVariable}`);
  }
}


const newFunction = outerFunction('outside')

newFunction('inside')






function buildName(name) {
  var greeting = "Hello, " + name + "!";
  var sayName = function () {
    console.log(greeting + " Welcome!");
  }
  return sayName;
}

var sayMyName = buildName("John");
sayMyName();  // Hello, John. Welcome!
sayMyName();  // Hello, John. Welcome!
sayMyName();  // Hello, John. Welcome!



function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();