const http = require('http');
const countStudents = require('./2-read_file');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {

  }
});

app.listen(1245, 'localhost');

module.exports = app;
