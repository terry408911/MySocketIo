var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


var recent = [1,3,44,6,2,8,4,3,8,43,9,8,4,7,54,3,87,3,8,43,9,5,7,4,3,4,7,8,9,7,6,45,4,3,78,6,5,4,7,50];
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function (socket) {
	console.log("one user connected.");
	socket.emit('array',recent);
 
    
});

http.listen(3000, function(){
  console.log('listening on *:3000');
  // newSocket.emit('initArray',initArray);
});
