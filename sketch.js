function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	background(255, 204, 0);
}

function draw() {

	let milliseconds = millis();

	noStroke();
	fill(255, 204, 300);
	ellipse(windowWidth/2, windowHeight/2, 700, 700);

	noStroke();
	fill(255, 204, 0);
	arc(windowWidth/2, windowHeight/2, 710, 710, -90, ((milliseconds/100) - 90), PIE);

	// noStroke();
	// fill(255, 204, 30);
	// ellipse(windowWidth/2, windowHeight/2, 200, 200);

}
