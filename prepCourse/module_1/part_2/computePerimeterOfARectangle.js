

// Write a function called "computePerimeterOfARectangle".

// Given a length and a width describing a rectangle, "computePerimeterOfARectangle" returns its perimeter.

// var output = computePerimeterOfARectangle(5, 2);
// console.log(output); // --> 14


const computePerimeterOfARectangle = (length, width) => {
    let lengthTotal = length * 2; 
    let widthTotal = width * 2; 
    return lengthTotal + widthTotal; 
}