var circleX;
var circleY;
var color;
var color2;
var color3;

function setup() {
  var canvas = createCanvas(680, 400);
	background(50);
	
}

function draw(){
	
	circleX = random(width);
	circleY = random(height);
	color = 0;
	color2 = 0;
	color3 = random(0,255);

	fill(color,color2,color3);
	ellipse(circleX, circleY, 24, 24);
}
function mousePressed () {
	background(50);

}
