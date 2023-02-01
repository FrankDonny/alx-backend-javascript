export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const cityStudents = getListStudents.filter((student) => student.city === city);
  cityStudents.map((student) => {
    if (student.grade) {
      return student.set('grade', newGrades.grade);
    }
    return student.set('grade', 'N/A');
  });
}
