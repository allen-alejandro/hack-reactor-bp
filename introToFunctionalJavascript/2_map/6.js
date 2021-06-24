

// Write a function that takes an array of user objects and returns an array of objects with just the users' full names:

var users = [
  { firstName: 'Homer', lastName: 'Simpson' },
  { firstName: 'Marge', lastName: 'Simpson' },
  { firstName: 'Bart', lastName: 'Simpson' },
  { firstName: 'Lisa', lastName: 'Simpson' },
  { firstName: 'Maggie', lastName: 'Simpson' }
];

var fullNameObjects = function (users) {
  return users.map(el => {
    return {fullName: `${el.firstName} ${el.lastName}`};
  }
)};

console.log(fullNameObjects(users));; // => [{ fullName: 'Homer Simpson' }, { fullName: 'Marge Simpson' }, { fullName: 'Bart Simpson' }, { fullName: 'Lisa Simpson' }, { fullName: 'Maggie Simpson' }]