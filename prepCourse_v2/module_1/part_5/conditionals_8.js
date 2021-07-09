
const convertScoreToGrade = score => {
  if (score > 100 || score < 0) return 'INVALID SCORE';
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  if (score >= 0) return 'F';
}

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