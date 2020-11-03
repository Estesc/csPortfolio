size(1000,400);
background(14,77,146);

var s = "I like Computer Science";
var x = 30;

var yo = createFont("YuGo-Medium",65);
textSize(65);


for(var i = 0; i < s.length(); i++){
	var c = s.charAt(i);
	textSize(random(12, 90));
	text(c, s, 100)
	fill(random(255));
	text(s.charAt(i), x, 150);
	x = x+textWidth(c);
	
	x = x+15;
}