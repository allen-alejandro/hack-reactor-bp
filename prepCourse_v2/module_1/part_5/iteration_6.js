const multiplyBetween = (num1, num2) => {
  if (num2 < num1 || num2 === num1) return 0;
  let counter = num1;

  for (let i = num1 + 1; i < num2; i++) {
    counter *= i;
  }
  return counter;
}


const computeSumBetween = (num1, num2) => {
  if (num2 < num1 || num2 === num1) return 0;
  let sum = num1;

  for (let i = num1 + 1; i < num2; i++) {
    sum += i;
  }
  return sum;
}


