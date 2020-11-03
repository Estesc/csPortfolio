var startX = 0;
var startY = 350;
var endX = 0;
var endY = 150;

var fstartX = 350;
var fstartY = 0;
var fendX = 150;
var fendY = 0;



function setup() {
  createCanvas(800, 800);
	background(0);
	strokeWeight(1);
	fill(255);
	String(10, 80, "Click!");
	
}

function draw() {
  while(fstartY < 800) {
		stroke((Math.random()*265) , (Math.random()*265) , (Math.random()*265));
		fendX = fstartX + (Math.random()*36 -18);
		fendY = fstartY + (Math.random()*9);
		line(fstartX, fstartY, fendX, fendY);
		fstartX = fendX;
		fstartY = fendY;		 
	}
	
	while(startX < 800) {
		stroke((Math.random()*265) , (Math.random()*265) , (Math.random()*265));
		endX = startX + (int)(Math.random()*9);
		endY = startY + (int)(Math.random()*36 -18);
		line(startX, startY, endX, endY);
		startX = endX;
		startY = endY;		 
	}
}
function mousePressed() {
	startX = 0;
	startY = 350;
	endX = 0;
	endY = 150;
	
	fstartX = 350;
	fstartY = 0;
	fendX = 150;
	fendY = 0;
	
}