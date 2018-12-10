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

Hammer(element).on("press", function () {	
	//mouseDat.isPressed = true;
});

//element.addEventListener("click", getClickPosition, false);

//When the click happens, we have an event handler that will react to that click:
function getClickPosition(e) {
    mouseDat.x = e.clientX;
    mouseDat.y = e.clientY;
	mouseDat.isPressed = true;
}

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
	socket.emit('keys', keys);
}, 1000 / 60);

setInterval(function() {
	mouseDat.x = mouseX;
	mouseDat.y = mouseY;
	//mouseDat.isPressed = mouseIsPressed
	socket.emit('mouse', mouseDat);	
	mouseDat.isSwiped = false;
}
, 1000/60);

this.setup = function() {
	canvas = createCanvas(POP.WIDTH,POP.HEIGHT);
};

this.draw = function(){	

	background(50,50,50);	
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
	
	textSize(15);
	fill(255,255,255);
	text("Mr Hem's Multiplayer Node.JS test", 40,20);
	text(mouseDat.x + "," + mouseDat.y, 100,100);
};

//received updated client states
socket.on('state', function(clients) {
		players = clients;
});

socket.on('projectiles', function(data) {
	   projectiles = data;
});




	
	

