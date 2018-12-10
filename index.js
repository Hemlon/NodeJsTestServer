var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketIO(server);

var portnum = 3000;
app.set('port', portnum );
app.use('/static', express.static(__dirname + '/static'));

// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

// Starts the server.
server.listen(portnum , function() {
  console.log('Starting server on port' + portnum);
});

setInterval(function() {
  io.sockets.emit('message', 'server is still running');
}, 1000);

//dictionary of new players
var players = {};
var playerSpd = 3;

//register a new players when they connect
io.on('connection', function(socket) {
  socket.on('new player', function() {
    players[socket.id] = {
      x: math.randInt(0,500),
      y: math.randInt(0,500)
    };
  });
  
  //update new layer positions
  socket.on('keys', function(data) {
    var player = players[socket.id] || {};
	
    if (data[37]) {
      player.x -= playerSpd;
    }
    if (data[38]) {
      player.y -= playerSpd; 
	  }
    if (data[39]) {
      player.x += playerSpd;
    }
    if (data[40]) {
      player.y += playerSpd 
    }
  });
  
});

//broadcast updated player state to all players
setInterval(function() {
  io.sockets.emit('state', players);
}, 1000 / 60);