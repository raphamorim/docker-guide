var http = require('http'),
  	 port = process.env.PORT || 8080;

var server = http.createServer(function (request, response) {
   response.writeHead(200, {"Content-Type": "text/plain"});
   text = "Running Node.js:" + process.versions.node

   response.end(text);
});

server.listen(port, function(){
	console.log("Server running at http://127.0.0.1:" + port + "/");
});
