var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', (process.env.PORT || 5000));
var appPort = process.env.PORT || 5000;

app.get('/', function(request, response){
	response.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	socket.on('statusMessage', function(message){
		console.log(message);
		io.emit('statusMessage', message);
	});
	socket.on('chatMessage', function(message){
		console.log(JSON.parse(message));
		io.emit('chatMessage', message);
	});
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
});

http.listen(appPort, function(){
	console.log('listening on localhost:' + appPort);
});