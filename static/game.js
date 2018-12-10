/*
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
var projectiles = {};
var keys = {};

var mouseDat = {
	x: 0,
	y: 0,
	isPressed: false,
	isSwiped: false
}

var element = document.getElementsByTagName('BODY')[0];
	Hammer(element).on("swipe", function () {	
		 mouseDat.isSwiped = true;
});


var keyPressed = function() 
{
	keys[keyCode] = true;
}

var keyReleased = function()
{
	keys[keyCode] = false;
}


socket.emit('new player');

setInterval(function() {
//socket.emit('movement', movement);
}, 1000 / 60);

setInterval(function() {
	socket.emit('keys', keys);
}, 1000 / 60);

setInterval(function() {
	mouseDat.x = mouseX;
	mouseDat.y = mouseY;
	mouseDat.isPressed = mouseIsPressed;
	socket.emit('mouse', mouseDat);	
	mouseDat.isSwiped = false;
}
, 1000/60);

this.setup = function() {
	canvas = createCanvas(400,400);
};

this.draw = function(){	
	background(0,0,0);
	noStroke();	
	for (var id in players) {
		player = players[id];
		fill(player.r,player.g,player.b);
		rect(player.x, player.y, 10,10);
	}	
	
	for(var id in projectiles){
		projectile = projectiles[id];
		fill(player.r, player.g, player.b);
		ellipse(projectile.x, projectile.y, projectile.size, projectile.size);
	}
	
};

//received updated client states
socket.on('state', function(clients) {
		players = clients;
});

socket.on('projectiles', function(data) {
	   projectiles = data;
});

*/



	
	

