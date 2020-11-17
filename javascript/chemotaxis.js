var ballArray = [];
var colors = ["#ff4500", "#FF0000", "#8B0000", "#FFFF00"];
var gravity = 0.75;
var friction = 0.8;

 function randomColor(colors) {
 		return colors[Math.floor(Math.random() * colors.length)];
 }

function setup() {
	console.log("hi");
  createCanvas(600, 400);
	ballArray = [];
	for (let i = 0; i < 100; i++) {
    var radius = 40;
    var x = (int)(random(canvas.width));
    var y = (int)(random(canvas.height / 2));
    var dy = (int)(random(5));
    ballArray.push(new Ball(x, y, dy, radius, randomColor(colors)));
  }
}

function draw() {
	background(211,211,211);
	for(let i = 0; i < ballArray.length; i++){
		ballArray[i].show();
		ballArray[i].move();
	}
}

class Ball {
  	constructor(x, y, dy, radius, color) {
			this.color = color;
			this.x = x;
 	 		this.y = y;
  		this.dy = dy;
  		this.radius = radius;
		}
	
		show() {
			stroke(0);
			fill(this.color);
			ellipse(this.x, this.y, this.radius, this.radius);
		}
	
		move() {
			if (this.y + this.radius + this.dy > canvas.height) {
      	this.dy = -this.dy;
     	 	this.dy = this.dy * friction;
    	} 
			else {
      	this.dy += gravity;
    	}
			this.y += this.dy;
		}		
}
addEventListener("click", function (event) {
  setup();
});
