export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsOfCity = students.filter((people) => people.location === city);
  const studentsWithGrades = studentsOfCity.map((student) => {
    const gradeObject = newGrades.find((gradesObject) => gradesObject.studentId === student.id);
    const grade = gradeObject ? gradeObject.grade : 'N/A';
    return { ...student, grade };
  });
  return studentsWithGrades;
}
