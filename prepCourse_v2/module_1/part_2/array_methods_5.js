


function removeFromBackOfNew(arr) {
  return arr.slice(0, arr.length - 1); 
}




var arr = [1, 2, 3];
var output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]



function removeFromFrontOfNew(arr) {
  return arr.slice(1, arr.length);
}



function countCharacter(str, char) {
  let total = 0; 
  let strArr = str.split(''); 
  for (let i = 0; i < strArr.length; i++) {
    if (char === strArr[i]) total++; 
  }
  return total;
}

