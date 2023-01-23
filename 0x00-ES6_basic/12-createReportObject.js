export default function createReportObject(employeesList) {
  const newObj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      let count = 0;
      for (const key of employeesList) {
        count += 1;
      }
      return count;
    },
  };
  return newObj;
}
