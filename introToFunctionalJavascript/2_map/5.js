

// Write a function that takes an array of user objects and returns an array with just the users' full names:

var users = [
  { firstName: 'Homer', lastName: 'Simpson' },
  { firstName: 'Marge', lastName: 'Simpson' },
  { firstName: 'Bart', lastName: 'Simpson' },
  { firstName: 'Lisa', lastName: 'Simpson' },
  { firstName: 'Maggie', lastName: 'Simpson' }
];

var fullNames = function (users) {
  return users.map(el => `${el.firstName} ${el.lastName}`); 
};

console.log(fullNames(users));; // => ['Homer Simpson', 'Marge Simpson', 'Bart Simpson', 'Lisa Simpson', 'Maggie Simpson']