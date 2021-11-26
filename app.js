function setup(){
	createCanvas(720,400);
	stroke(0);
	frameRate(30);
}

function draw(){
	background(255);	
	line(0,height/2, width, height/2);	
	line(20,height, 20, 0);
	x= x -1;
	if (x < 20) {
		x = width,
	}
	y= x*0,2;

	point(x, y);
}


