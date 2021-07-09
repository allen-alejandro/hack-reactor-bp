const getStringLength = string => {
  let count = 0;
  string.split('').map(x => count++)
  return count;
}

