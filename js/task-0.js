const students = [
  { name: 'Mango', score: 83 },
  { name: 'Poly', score: 59 },
  { name: 'Ajax', score: 37 },
  { name: 'Kiwi', score: 94 },
];
const inAscendingScoreOrder = students.toSorted(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);
console.log('🚀 ~ inAscendingScoreOrder:', inAscendingScoreOrder);

const inDescendingScoreOrder = students.toSorted(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);
console.log('🚀 ~ inDescendingScoreOrder:', inDescendingScoreOrder);

const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);
console.log('🚀 ~ inAlphabeticalOrder:', inAlphabeticalOrder);
