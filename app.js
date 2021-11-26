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
	stroke(50);
	point(x, 30);
	point(50,100);

}


