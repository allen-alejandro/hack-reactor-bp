

// Write a function called "removeStringValuesLongerThan".

// Given an number and an object, "removeStringValuesLongerThan" removes any properties on the given object whose values are strings longer than the given number.

var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
};
// removeStringValuesLongerThan(6, obj);
// console.log(obj); // { age: 20, location: 'Texas' }


const removeStringValuesLongerThan = (num, obj) => {
    for (key in obj) {
        if ((typeof obj[key] === typeof '') && (obj[key].length > num)) {
            delete obj[key];
        }
    }
    return obj; 
}


console.log(removeStringValuesLongerThan(6, obj));