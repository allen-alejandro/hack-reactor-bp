const multiply = (num1, num2) => {
  let resultIsPositive = true;
  if ((num1 > 0 && num2 < 0) || (num2 > 0 && num1 < 0)) {
    resultIsPositive = false;
  }
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  let result = 0;

  for (let i = 0; i < num2; i++) {
    result += num1;
  }
  if (resultIsPositive) {
    return result;
  } else {
    return -result;
  }
}

