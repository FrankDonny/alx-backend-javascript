export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((cur, item) => cur + item.id, 0);
}
