var app = require('express')();
var http = require('http').Server(app);

app.set('port', (process.env.PORT || 5000));
var appPort = process.env.PORT;

app.get('/', function(request, response){
	response.send('<h1>Hello World</h1>');
	response.end();
});

http.listen(appPort, function(){
	console.log('listening on *:3000');
});