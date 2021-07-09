

const removeEvenValues = obj => {
  for (key in obj) {
    if (obj[key] % 2 === 0) {
      delete obj[key];
    }
  }
  return obj;
}




var obj = {
  a: 1,
  b: 2,
  c: 3
};




const countNumberOfKeys = obj => {
  return Object.keys(obj).length;
}



var output = countNumberOfKeys(obj);
console.log(output); // --> 3



const removeOddValues = obj => {
  for (key in obj) {
    if (obj[key] % 2 === 1) {
      delete obj[key];
    }
  }
  return obj;
}