function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	background(255, 204, 0);
}

function draw() {

	let milliseconds = millis();

	// noStroke();
	// fill(204, 102, 0);
	// ellipse(windowWidth/2, windowHeight/2, 500, 500);


	noStroke();
	fill(255, 204, 300);
	arc(windowWidth/2, windowHeight/2, 500, 500, 0, milliseconds/100, PIE);

	noStroke();
	fill(255, 204, 300);
	arc(windowWidth/2, windowHeight/2, 500, 500, 0, milliseconds/100, PIE);
}
