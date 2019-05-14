var http = require('http')

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello Node!');

//whenever anyone request for me, return hello world
}).listen(8080)
//wait at port 8080 - a port is like a pincode, or to use to access a particular server (that is hosted on a single computer)
//LocalHost = opening my own server. so on google now, if you write: "localhost:8080" you will get a page that has "Hello Node!" on it
//80: google server; 23: email server

console.log('Server started on port 8080. Please press Ctrl+C to stop')
//basically, this is a 'Hello World' code.