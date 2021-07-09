const computeFactorialOfN = n => {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}


const repeatString = (string, num) => {
  let finalStr = '';

  for (let i = 0; i < num; i++) {
    finalStr += string;
  }
  return finalStr;
}

