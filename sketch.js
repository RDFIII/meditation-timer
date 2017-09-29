function preLoad() {
	input = createInput();
	input.position(20, 65);

	button = createButton('submit');
	button.position(input.x + input.width, 65);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	background(210, 20, 20);
	let inputMinutes = createInput();

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
	arc(windowWidth/2, windowHeight/2, windowHeight/1.4, windowHeight/1.4, -90, ((milliseconds/170) -90), PIE);

	// Middle Circle
	noStroke();
	fill(210, 20, 20);
	ellipse(windowWidth/2, windowHeight/2,  windowHeight/6, windowHeight/6);

	// Timer
	textAlign(CENTER);
	textSize(32);
	fill(255, 204, 300);
	text(Math.floor(milliseconds/1000), windowWidth/2, windowHeight/2);

}
