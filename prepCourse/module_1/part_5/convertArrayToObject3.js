


// Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

// The argument will look like this:

var input = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];
// Given that input, the return value should look like this:

// [
//     { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
//     { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }
// ]
// Note that the input may have a different number of rows or different keys than the given sample.

// For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.


const transformEmployeeData = employeeData => {
    let peopleData = []; 

    for (let i = 0; i < employeeData.length; i++) {
        let obj = {};
        for (let j = 0; j < employeeData[i].length; j++) {
            let key = employeeData[i][j][0]; 
            let value = employeeData[i][j][1];
            obj[key] = value;
        }
        peopleData.push(obj)
    }
    return peopleData;
}


console.log(transformEmployeeData(input));