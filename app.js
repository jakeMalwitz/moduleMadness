var http = require('http');
var mod3 = require('./module3.js');

http.createServer(function (req, res) {
  res.writeHead(200);
  res.write(mod3());
  res.end();
}).listen(3000);
