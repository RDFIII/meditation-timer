function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	background(255, 204, 0);
}

function draw() {

	let milliseconds = millis();

	noStroke();
	fill(255, 204, 300);
	ellipse(windowWidth/2, windowHeight/2, 600, 600);

	noStroke();
	fill(255, 204, 0);
	arc(windowWidth/2, windowHeight/2, 600, 600, 0, milliseconds/100, PIE);
}
