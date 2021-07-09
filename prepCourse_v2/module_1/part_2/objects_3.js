function isPersonOldEnoughToDrive(person) {
  return person.age > 15;
}


const isPersonOldEnoughToVote = person => {
  return person.age >= 18 ? true : false;
}



const addArrayProperty = (obj, key, arr) => {
  obj[key] = arr;
}

