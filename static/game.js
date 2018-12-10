var socket = io();

socket.on('message', function(data) {
	console.log(data);
});

var movement = {
	up: false,
	down: false,
	left: false,
	right: false
}

var players = {};

var keys = {};

var keyPressed = function() 
{
	keys[keyCode] = true;
}

var keyReleased = function()
{
	keys[keyCode] = false;
}

/*
document.addEventListener('keydown', function(event) 
{
	var key = event.keyCode;
	
	if (key == 65)
	{
		movement.left = true;
	}
	else if (key == 87)
	{
		movement.up = true;
	}
	else if (key == 68)
	{
		movement.right = true;
	}
	else if (key == 83)
	{
		movement.down = true;
	}
}
);


document.addEventListener('keyup', function(event)
{
	var key = event.keyCode;
	
	if (key == 65)
	{
		movement.left = false;
	}
	else if (key == 87)
	{
		movement.up = false;
	}
	else if (key == 68)
	{
		movement.right = false;
	}
	else if (key == 83)
	{
		movement.down = false;
	}
});
*/
socket.emit('new player');

setInterval(function() {
//socket.emit('movement', movement);
}, 1000 / 60);

setInterval(function() {
	socket.emit('keys', keys);
}, 1000 / 60);

this.setup = function() {
	canvas = createCanvas(400,400);
};

this.draw = function(){	
	background(0,0,0);
	fill(0,255,0);
		
		//draw all clients
	for (var id in players) {
		player = players[id];
		rect(player.x, player.y, 10,10);
	}		
};

//recieved updated client states
socket.on('state', function(clients) {
		players = clients;
});





	
	

