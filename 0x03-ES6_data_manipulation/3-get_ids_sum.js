export default function getStudentIdsSum(students) {
  const ids = students.map((student) => student.id);
  const sum = ids.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
}
