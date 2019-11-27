const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
app = express();
process.env.PWD = process.cwd();
app.use(express.static(path.join(process.env.PWD, 'dist')));

// app.use(serveStatic(path.join(__dirname, 'dist')));
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(__dirname + '/di/'));
  
// }
const port = process.env.PORT || 80;
app.listen(port);