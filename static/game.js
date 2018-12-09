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
socket.emit('new player');
setInterval(function() {
  socket.emit('movement', movement);
}, 1000 / 60);

var canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 600;
var context = canvas.getContext('2d');
socket.on('state', function(players) {
  context.clearRect(0, 0, 800, 600);
  context.fillStyle = 'green';
  for (var id in players) {
    var player = players[id];
    context.beginPath();
    context.arc(player.x, player.y, 10, 0, 2 * Math.PI);
    context.fill();
  }
});


	
	

