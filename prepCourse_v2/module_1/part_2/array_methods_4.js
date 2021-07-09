const getAllElementsButFirst = array => {
  array.shift();
  return array;
}

const getAllElementsButLast = array => {
  array.pop();
  return array;
}


const removeFromFront = arr => {
  arr.shift();
  return arr;
}