const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  } else {
    const cs = [];
    const swe = [];
    const lines = fs.readFileSync(path, 'utf-8').split('\n');
    // console.log(lines);
    lines.forEach((line) => {
      if (line.length !== 0) {
        lines.slice(1).forEach((line) => {
          if (line.split(',')[3] === 'CS') {
            cs.push(line.split(',')[0]);
          } else if (line.split(',')[3] === 'SWE') {
            swe.push(line.split(',')[0]);
          }
        });
      }
    });
    console.log(`Number of students: ${lines.slice(1).length}`);
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length} List: ${swe.join(', ')}`);
  }
}

module.exports = countStudents;
