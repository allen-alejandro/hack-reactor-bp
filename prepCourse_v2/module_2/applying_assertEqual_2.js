

// Note: This is a simple, albeit temporarily incorrect implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// FUNCTION DEFINITION(S)
const every = (array, callbackFunction) => {
  let doesEveryElementMatch = true;

  for (let i = 0; i < array.length; i++) {
    doesEveryElementMatch = callbackFunction(array[i]);
  }

  return doesEveryElementMatch;
}

// ASSERTION FUNCTION(S) TO BE USED
const assertEqual = arrayElement => {
  return typeof arrayElement === 'string' ? true : false;
}

// TESTS CASES
console.log(every(['a', 'b', 5], assertEqual));
console.log(every(['a', 'b', 'c'], assertEqual));
