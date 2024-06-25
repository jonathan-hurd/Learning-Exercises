let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

let summary = generateClassRecordSummary(studentScores);
console.log(summary);

function generateClassRecordSummary(scores) {
  let grades = studentGrades(scores);
  let exams = studentExams(scores);

  return {
    studentGrades: grades,
    exams: exams, 
  }
}

function studentExams(scores) {
  let exams = [];

  Object.keys(scores).forEach(student => {
    let examScores = scores[student].scores.exams;
    let averageExam = average((examScores)).toFixed(1);
    let minExam = examScores.reduce((min, num) => min <= num ? min : num);
    let maxExam = examScores.reduce((max, num) => max >= num ? max : num);

    exams.push( {
      average: parseFloat(averageExam),
      minimum: minExam,
      maximum: maxExam,
    });
  });

  return exams;
}

function studentGrades(students) {
   return Object.keys(students).map(student => {
    let avgExam = Math.round(average(students[student].scores.exams));
    let scoreExercise = students[student].scores.exercises.reduce((accum, num) => {
      return accum + num;
    });

    let percentGrade = Math.round(avgExam * .65 + scoreExercise * .35);
    let letterGrade = calcLetterGrade(percentGrade);

    return `${percentGrade} (${letterGrade})`
  })
}

function average(array) {
  return array.reduce((acc, num) => acc + num) / array.length;
}

function calcLetterGrade(percentGrade) {
  if (percentGrade >= 93) { return 'A' }
  else if (percentGrade >= 85) { return 'B' }
  else if (percentGrade >= 77) { return 'C' }
  else if (percentGrade >= 69) { return 'D' }
  else if (percentGrade >= 60) { return 'E' }
  else { return 'F' }
}

/*
function to compute student grade:
first convert the scores to an array
map the array to their scores and return the array with each
element being '81 (C)' formatted.

So each student maps to a score
*/
// Compute the student's average exam score: (90 + 80 + 95 + 71) / 4 = 84
// Compute the student's total exercise score: 20 + 15 + 40 = 75
// Apply weights to determine the final percent grade: 84 * .65 + 75 * .35 = 80.85
// Round the percent grade to the nearest integer: 81
// Lookup the letter grade in the table above: C
// Combine the percent grade and letter grade: "81 (C)"

// generateClassRecordSummary(studentScores);

// // returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }