function timer15() {

let milliseconds = millis();
let countdown = (milliseconds/100) -90;

// noStroke();
// fill(210, 20, 20);
// arc(windowWidth/2, windowHeight/2, windowHeight/1.4, windowHeight/1.4, -90, ((milliseconds/1700) -90), PIE);

background(102, 153, 255);

noStroke();
fill(255, 128, 128);
triangle(windowWidth, windowHeight, windowWidth, 1/windowHeight, 1/windowWidth, 1/windowWidth);

noStroke();
fill(255, 235, 220);
ellipse(windowWidth/4, windowHeight/1.5, windowHeight/2.1, windowHeight/2.1);

noStroke();
fill(255, 235, 220);
ellipse((windowWidth-(windowWidth/4)), windowHeight/3, windowHeight/2.1, windowHeight/2.1);


//pink arc, blue background
stroke(255, 128, 128);
fill(255, 128, 128);
arc(windowWidth/4, windowHeight/1.5, windowHeight/2.1, windowHeight/2.1, -90, countdown, PIE);

//blue arc, pink background
stroke(102, 153, 255);
fill(102, 153, 255);
arc((windowWidth-(windowWidth/4)), windowHeight/3, windowHeight/2.1, windowHeight/2.1, -90, countdown, PIE);




}
