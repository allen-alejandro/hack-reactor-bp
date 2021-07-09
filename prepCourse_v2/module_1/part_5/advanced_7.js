const isOddWithoutModulo = num => {
  let isOdd = false;
  let counter = Math.abs(num);

  for (let i = 0; i < counter; i++) {
    isOdd = !isOdd;
  }
  return isOdd;
}

