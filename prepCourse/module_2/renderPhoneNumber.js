// Skeleton

// FUNCTION DEFINITION(S)
function PhoneNumberFormatter(numbers) {
    this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function () {
    var string = '';
    string += this.parenthesize(this.getAreaCode());
    string += " ";
    string += this.getExchangeCode(); 
    string += '-'; 
    string += this.getLineNumber(); 
    return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function () {
    return this.slice(0, 3); 

};

PhoneNumberFormatter.prototype.getExchangeCode = function () {
    return this.slice(3, 6); 
};

PhoneNumberFormatter.prototype.getLineNumber = function () {
    return this.slice(6, 10); 
};

PhoneNumberFormatter.prototype.parenthesize = function (string) {
    return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function (start, end) {
    return this.numbers.slice(start, end).join('');
};

// ASSERTION FUNCTION(S) TO BE USED

const assertionFunc = (actual, expected, testName) => {
    actual === expected ? console.log('passed') : console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
}


// TESTS CASES

let myNumber = new PhoneNumberFormatter([8, 3, 2, 7, 9, 5, 3, 5, 6, 7]);

let actualNumber = myNumber.render();
let expectedNumber = '(832) 795-3560';


assertionFunc(actualNumber, expectedNumber, 'comfirms that the actual phone number result matches the expected phone number');