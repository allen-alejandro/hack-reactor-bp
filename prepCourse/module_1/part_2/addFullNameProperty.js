

// Write a function called "addFullNameProperty".

// Given an object that has a "firstName" property and a "lastName" property, "addFullNameProperty" sets a "fullName" property on the input object, whose value is a string with the first name and last name separated by a space.

// var person = {
//     firstName: 'Jade',
//     lastName: 'Smith'
// };
// addFullNameProperty(person);
// console.log(person.fullName); // --> 'Jade Smith'


const addFullNameProperty = obj => {
    obj["fullName"] = `${obj.firstName} ${obj.lastName}`
}



let person = {
    firstName: 'Jade',
    lastName: 'Smith'
};

addFullNameProperty(person);


console.log(person.fullName); // --> 'Jade Smith'