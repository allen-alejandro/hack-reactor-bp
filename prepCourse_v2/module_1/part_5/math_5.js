const calculateBillTotal = preTaxAndTipAmount => {
  let tip = preTaxAndTipAmount * 0.15;
  return preTaxAndTipAmount * 1.095 + tip;
}