var http = require('http');
var static = require('node-static');
var file = new(static.Server)('./public', {
	cache: 0
});
var port = process.env.PORT || 5000;

console.log('Server running on port '+port);

var server = http.createServer(function(req, res) {
	file.serve(req, res);
}).listen(port);
