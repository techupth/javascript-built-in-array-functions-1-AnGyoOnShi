const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(acc, students) {
  // Start coding here
  return acc + students.score;
}

let average = students.reduce(getAverageStudentScore, 0) / students.length; // Output: 87.5
console.log(average);
