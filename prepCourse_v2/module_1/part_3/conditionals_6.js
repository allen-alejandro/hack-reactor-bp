const or = (expression1, expression2) => {
  return !(!expression1 && !expression2)
}


const isEitherEvenOrAreBoth7 = (num1, num2) => {
  return ((num1 % 2 === 0 || num2 % 2 === 0) || (num1 === 7 && num2 === 7));
}



const isEitherEvenAndLessThan9 = (num1, num2) => {
  return (num1 % 2 === 0 || num2 % 2 === 0) && (num1 < 9 && num2 < 9);
}
