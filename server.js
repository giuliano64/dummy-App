#!/usr/bin/env nodejs

var http = require('http');
http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World! Node.js is working correctly.\n');
}).listen(3001);
console.log('Server running at http://127.0.0.1:3001/');
