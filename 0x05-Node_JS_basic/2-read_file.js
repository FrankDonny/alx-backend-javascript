const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  } else {
    const student = fs.readFileSync(path, 'utf-8').split('\n');
    student.splice(0, 1);
    console.log(`Number of students: ${student.length}`);
    const obj = {};
    for (const idx in student) {
      if (!obj[student[idx].split(',')[3]]) {
        obj[student[idx].split(',')[3]] = [];
        obj[student[idx].split(',')[3]].push(student[idx].split(',')[0]);
      } else {
        obj[student[idx].split(',')[3]].push(student[idx].split(',')[0]);
      }
    }
    for (const key in obj) {
      if (key) {
        console.log(`Number of students in ${key}: ${obj[key].length}. List: ${obj[key].join(', ')}`);
      }
    }
  }
}

module.exports = countStudents;
