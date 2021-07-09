


const modulo = (num1, num2) => {
  let result = num1;
  if (num2 === 0) return NaN;
  if (Math.sign(num1) === -1) result = num1 * -1

  while (result >= num2) {
    if (result === num2) {
      result = 0;
    } else {
      result = result -= num2;
    }
  }
  return Math.sign(num1) === -1 ? Math.floor(result * -1) : Math.floor(result);
}