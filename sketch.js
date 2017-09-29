function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	background(210, 20, 20);
}

function draw() {

	let milliseconds = millis();

	// noStroke();
	// fill(255, 255, 255);
	// ellipse(windowWidth/2, windowHeight/2, 700, 700);

	noStroke();
	fill(255, 255, 255);
	ellipse(windowWidth/2, windowHeight/2, windowHeight/1.5, windowHeight/1.5);

	noStroke();
	fill(210, 20, 20);
	arc(windowWidth/2, windowHeight/2, windowHeight/1.4, windowHeight/1.4, -90, ((milliseconds/100) - 90), PIE);

	// Middle Circle
	// noStroke();
	// fill(255, 204, 30);
	// ellipse(windowWidth/2, windowHeight/2, 150, 150);

	// Timer
	// textAlign(CENTER);
	// textSize(32);
	// fill(255, 204, 300);
	// text(Math.floor(milliseconds/1000), windowWidth/2, windowHeight/2);

}
