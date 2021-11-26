let x = 20;
let y = 0;

function setup(){
	createCanvas(720,400);
	frameRate(30);
	background(255);	

	strokeWeight(3);
}

function draw(){
	stroke(0);
	line(0,height/2, width, height/2);	
	line(20,height, 20, 0);
	x = x -1;
	if (x < 20) {
		x = width;
	}
	stroke(255, 204, 0);
	 y = y* cos(PI * x);
	point (x, y);

}


