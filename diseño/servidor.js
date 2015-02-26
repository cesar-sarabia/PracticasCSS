var http = require('http');
var fs = require('fs');

var host = '127.0.0.1';
var port = 1337;

var server = http.createServer(function (request, response){
	fs.readFile('.'+ request.url , function(error, data){
		
		if(error){
			response.writeHead(404, {'Content-type':'text/plain'});
			response.end('404 file not found');
		}
		else{
			response.writeHead(200,{'Content-type':'text/html'});
			response.end(data);
		}
	});
});

server.listen(port, host, function(){
	console.log('Server running at http://127.0.0.1:8000/');
});

