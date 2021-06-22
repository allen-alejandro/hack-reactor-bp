

// Write a function called "convertScoreToGradeWithPlusAndMinus".

// Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

//     Notes:

// (100 - 90)-- > 'A'
//     (89 - 80)-- > 'B'
//         (79 - 70)-- > 'C'
//             (69 - 60)-- > 'D'
//                 (59 - 0)-- > 'F'
// If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
// If the score is between the 0 and 2(inclusive) of a given range, return the letter with a '-'
// If the score is between the 8 and 9(inclusive) of a given range, return the letter with a '+'
// There are is no F + and there is no F -.
// var output = convertScoreToGradeWithPlusAndMinus(91);
// console.log(output); // --> 'A-'


const convertScoreToGradeWithPlusAndMinus = score => {
    if (score > 100 || score < 0) return 'INVALID SCORE'; 
    if (score >= 98) return 'A+';
    if (score >= 90 && score <= 92) return 'A-';
    if (score >= 90) return 'A';
    if (score >= 88) return 'B+';
    if (score >= 80 && score <= 82) return 'B-';
    if (score >= 80) return 'B';
    if (score >= 78) return 'C+';
    if (score >= 70 && score <= 72) return 'C-';
    if (score >= 70) return 'C';
    if (score >= 68) return 'D+';
    if (score >= 60 && score <= 62) return 'D-';
    if (score >= 60) return 'D';
    if (score < 60) return 'F';
}


console.log(convertScoreToGradeWithPlusAndMinus(99));



//     ALTERNATE SOLUTION 

// function convertScoreToGradeWithPlusAndMinus(score) {
//     var grade = '';
//     if (score >= 90 && score <= 100) {
//         grade = 'A';
//     } else if (score < 90 && score >= 80) {
//         grade = 'B';
//     } else if (score < 80 && score >= 70) {
//         grade = 'C';
//     } else if (score < 70 && score >= 60) {
//         grade = 'D';
//     } else if (score < 60 && score >= 0) {
//         return 'F';
//     } else {
//         return 'INVALID SCORE';
//     }

//     var lastDigit = score % 10;

//     if (score === 100) {
//         return 'A+'
//     } else if (lastDigit >= 0 && lastDigit <= 2) {
//         return grade + '-';
//     } else if (lastDigit >= 8 && lastDigit <= 9) {
//         return grade + '+';
//     } else {
//         return grade;
//     }
// }