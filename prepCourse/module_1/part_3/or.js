


// Write a function called "or".

//     Given 2 boolean expressions, "or" returns true or false, corresponding to the '||' operator.Notes:

// Do not use the || operator.
//     Use! and && operators instead.
// var output = or(true, false);
// console.log(output); // --> true;


const or = (expression1, expression2) => {
    return !(!expression1 && !expression2)
}



console.log(or(false, false));