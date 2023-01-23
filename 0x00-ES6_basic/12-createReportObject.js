export default function createReportObject(employeesList) {
  let newObj = {
    allEmployees: {...employeesList},
    getNumberOfDepartments(employeesList) {
      let count = 0;
      for (let key in employeesList) {
        count = count + 1;
      }
      return count;
    }
  }
  return newObj
}
