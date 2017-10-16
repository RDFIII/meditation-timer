function timer15() {

let milliseconds = millis();
let countdown = (milliseconds/100) -90;
let colors =[[153, 255, 230], [0, 128, 96], [0, 204, 153]];

// noStroke();
// fill(210, 20, 20);
// arc(windowWidth/2, windowHeight/2, windowHeight/1.4, windowHeight/1.4, -90, ((milliseconds/1700) -90), PIE);

background(colors[2]);

noStroke();
fill(colors[1]);
triangle(windowWidth, windowHeight, windowWidth, 1/windowHeight, 1/windowWidth, 1/windowWidth);

noStroke();
fill(colors[0]);
ellipse(windowWidth/4, windowHeight/1.5, windowHeight/2.1, windowHeight/2.1);

noStroke();
fill(colors[0]);
ellipse((windowWidth-(windowWidth/4)), windowHeight/3, windowHeight/2.1, windowHeight/2.1);


//pink arc, blue background
stroke(colors[1]);
fill(colors[1]);
arc(windowWidth/4, windowHeight/1.5, windowHeight/2.1, windowHeight/2.1, -90, countdown, PIE);

//blue arc, pink background
stroke(colors[2]);
fill(colors[2]);
arc((windowWidth-(windowWidth/4)), windowHeight/3, windowHeight/2.1, windowHeight/2.1, -90, countdown, PIE);




}

// old colors (102, 153, 255) background
// (255, 128, 128) pink
// (102, 153, 255) blue
// (255, 235, 220) light color
