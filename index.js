var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', (process.env.PORT || 5000));
var appPort = process.env.PORT || 5000;

app.get('/', function(request, response){
	response.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	io.emit('user connected');
	console.log('user connected');
	socket.on('chat message', function(message){
		io.emit('chat message', message);
		console.log(message);
	});
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
});

http.listen(appPort, function(){
	console.log('listening on localhost:' + appPort);
});