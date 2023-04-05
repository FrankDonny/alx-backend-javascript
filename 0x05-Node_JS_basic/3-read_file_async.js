const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    } else {
      console.log(data);
    }
  });
//   if (!fs.existsSync(path)) {
//     throw new Error('Cannot load the database');
//   } else {
//     const cs = [];
//     const swe = [];
//     const liness = fs.readFile(path, 'utf-8').split('\n');
//     liness.splice(0, 1);
//     const lines = liness.filter((str) => str !== '');
//     for (let idx = 0; idx < lines.length; idx += 1) {
//       if (lines[idx].split(',')[3] === 'CS') {
//         cs.push(lines[idx].split(',')[0]);
//       } else if (lines[idx].split(',')[3] === 'SWE') {
//         swe.push(lines[idx].split(',')[0]);
//       }
//     }
//     console.log(`Number of students: ${lines.length}`);
//     console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
//     console.log(`Number of students in SWE: ${swe.length} List: ${swe.join(', ')}`);
//   }
}

module.exports = countStudents;
