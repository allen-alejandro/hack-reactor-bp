

var obj1 = {
  a: 1,
  b: 2
};

var obj2 = {
  b: 4,
  c: 3
};



function extend(obj1, obj2) {
  for (key in obj2) {
    if (obj1[key] === undefined) {
      obj1[key] = obj2[key]; 
    }
  }
}





extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}



var obj3 = {
  a: 2,
  b: 'remaining',
  c: [8, 0]
};


const removeNumberValues = obj => {
  for (key in obj) {
    if (Number.isInteger(obj[key])) {
      delete obj[key];
    }
  }
  return obj;
}


removeNumberValues(obj3);
console.log(obj3); // --> { b: 'remaining' }



const removeStringValues = obj => {
  for (key in obj) {
    if (typeof obj[key] === 'string') {
      delete obj[key];
    }
  }
  return obj;
}