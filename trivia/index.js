var jsonServer = require('json-server');
var fs = require('fs');
var https = require('https');
var jsonServer = require('json-server');

server = jsonServer.create(),
router = jsonServer.router('trivia/trivia.json'),
middlewares = jsonServer.defaults();

var options = {
    key: fs.readFileSync('ssl/key.pem'),
    cert: fs.readFileSync('ssl/cert.pem')
};
    
server.use(middlewares);
server.use(router);

https.createServer(options, server).listen(3000, function() {    
console.log("json-server started on port " + 3000);
});