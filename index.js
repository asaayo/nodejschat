var app = require('express')();
var http = require('http').Server(app);

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response){
	res.send('<h1>Hello World</h1>');
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});