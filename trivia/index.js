var jsonServer = require('json-server'),
server = jsonServer.create(),
router = jsonServer.router('trivia/trivia.json'),
middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(process.env.PORT || 5000, function() {
console.log("json-server started on port " + process.env.PORT || 5000);
});