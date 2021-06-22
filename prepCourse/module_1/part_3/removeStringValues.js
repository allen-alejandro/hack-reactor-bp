

var obj = {
    name: 'Sam',
    age: 20
}
// removeStringValues(obj);
// console.log(obj); // { age: 20 }


const removeStringValues = obj => {
    for (key in obj) {
        if (typeof obj[key] === typeof '') {
            delete obj[key];
        }
    }
    return obj;
}



console.log(removeStringValues(obj));