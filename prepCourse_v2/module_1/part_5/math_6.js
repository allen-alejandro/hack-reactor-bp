

const computeCompoundInterest = (principal, interestRate, compoundingFrequency, timeInYears) => {
  return principal * (1 + interestRate / compoundingFrequency) ** (compoundingFrequency * timeInYears) - principal;
}
