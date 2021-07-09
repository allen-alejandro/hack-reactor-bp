
const joinArrayOfArrays = arr => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr = newArr.concat(arr[i]);
  }
  return newArr;
}
