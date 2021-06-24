

// Write a function that takes an array of user objects and returns an array of just the users' first names:

var users = [
  { firstName: 'Homer', lastName: 'Simpson' },
  { firstName: 'Marge', lastName: 'Simpson' },
  { firstName: 'Bart', lastName: 'Simpson' },
  { firstName: 'Lisa', lastName: 'Simpson' },
  { firstName: 'Maggie', lastName: 'Simpson' }
];

var firstNames = function (users) {
  return users.map(el => el.firstName); 
};

console.log(firstNames(users));; // => ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie']