

// Write a function that takes an array of users and returns an object with keys that are the users' names and values that are their email addresses:


var users = [
  { fullName: 'George Washington', email: 'george@us.gov' },
  { fullName: 'John Adams', email: 'john@us.gov' },
  { fullName: 'Thomas Jefferson', email: 'thomas@us.gov' },
  { fullName: 'James Madison', email: 'james@us.gov' }
]

var createEmailObject = function (users) {
  return users.reduce((accum, value) => { 
  }
)};

console.log(createEmailObject(users));; // => {
//   'George Washington': 'george@us.gov',
//   'John Adams': 'john@us.gov',
//   'Thomas Jefferson': 'thomas@us.gov',
//   'James Madison': 'james@us.gov'
// }