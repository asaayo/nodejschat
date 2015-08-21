var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', (process.env.PORT || 5000));
var appPort = process.env.PORT || 5000;

//Route for index
app.get('/', function(request, response){
	response.sendFile(__dirname + '/index.html');
});

//Route for css
app.get('/public/style.css', function(request, response){
	response.sendFile(__dirname + '/public/style.css');
});

//Socket handling
io.on('connection', function(socket){
	//Handling for user connect messages
	socket.on('statusMessage', function(message){
		io.emit('statusMessage', message);
	});
	//Handling for chat messages
	socket.on('chatMessage', function(message){
		io.emit('chatMessage', message);
	});
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
});

//Starts the node server
http.listen(appPort, function(){
	console.log('listening on localhost:' + appPort);
});