// Convert a Complex Array to an Object


// Write a function called transformEmployeeData that transforms some employee data from one format to another.

// The argument will look like this:

// var input = [
//     [
//         ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//     ],
//     [
//         ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//     ]
// ];
// Given that input, the return value should look like this:

// var result = [
//     { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
//     { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }
// ]
// Note that the input may have a different number of rows(more employees) or different keys than the given sample.


// function transformEmployeeData(employeeData) {
//     let newArr = [];
//     let obj = {}

//     for (let i = 0; i < employeeData.length; i++) {
//         for (let j = 0; j < employeeData[i].length; j++) {
//             obj[employeeData[i][j][0]] = employeeData[i][j][1]
//             // console.log(employeeData[i][j][0]);
//             // console.log(employeeData[i][j][1]);
//         }
//     }
//     console.log(obj);
// }



function transformEmployeeData(employeeData) {
    let arrOfObjects = [];
    
    for (let i = 0; i < employeeData.length; i++) {
        let obj = {}
        for (let j = 0; j < employeeData[i].length; j++) {
            obj[employeeData[i][j][0]] = employeeData[i][j][1]; 
        }
        arrOfObjects.push(obj); 
    }
    return arrOfObjects; 
}







let input = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];



console.log(transformEmployeeData(input));



// return two objects 