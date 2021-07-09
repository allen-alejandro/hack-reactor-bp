const isEvenWithoutModulo = num => {
  let isEven = true;
  let counter = Math.abs(num);

  for (let i = 0; i < counter; i++) {
    isEven = !isEven;
  }
  return isEven;
}


