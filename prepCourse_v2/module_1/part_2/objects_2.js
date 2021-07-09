


var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};


function addFullNameProperty(obj) {
  obj["fullName"] = `${obj['firstName']} ${obj['lastName']}`
}

addFullNameProperty(person);




var person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};

var person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};

addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }



function addObjectProperty(obj1, key, obj2) {
  obj1[key] = obj2; 
}


function isPersonOldEnoughToDrinkAndDrive(person) {
  return false;
}

