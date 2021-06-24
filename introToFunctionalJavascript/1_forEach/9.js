

const countChar = (str, char) => {
  let count = 0; 
  let chars = str.split(''); 
  chars.forEach(x => {
    if (x === char) {
      count++; 
    }
  })
  return count; 
}


console.log(countChar('peanutbutter', 't'));
