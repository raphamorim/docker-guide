// Load the http module to create an http server.
var http = require('http'),
	port = process.env.PORT || 8080;

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  text = "Running Node.js:" + process.versions.node

  response.end(text);
});

// Put a friendly message on the terminal
server.listen(port, function(){
	console.log("Server running at http://127.0.0.1:" + port + "/");
});
