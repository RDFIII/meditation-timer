function timer20() {

let milliseconds = millis();
let arcSize = windowHeight/5;
let countdown = (milliseconds/5) -90;

// noStroke();
// fill(255, 255, 255);
// ellipse(windowWidth/2, windowHeight/2, 700, 700);

noStroke();
fill(255, 179, 179);
ellipse(windowWidth/2, windowHeight/2, windowHeight/1.4, windowHeight/1.4);

noStroke();
fill(255, 128, 128);
arc((windowWidth/2), (windowHeight/6), arcSize, arcSize, -90, countdown, PIE);

noStroke();
fill(255, 77, 77);
arc(windowWidth/2, (windowHeight/4), arcSize, arcSize, -90, countdown, PIE);

noStroke();
fill(255, 26, 26);
arc((windowWidth/2) , (windowHeight/2.85), arcSize, arcSize, -90, countdown, PIE);

noStroke();
fill(230, 0, 0);
arc((windowWidth/2) , (windowHeight/2.22), arcSize, arcSize, -90, countdown, PIE);

noStroke();
fill(179, 0, 0);
arc(windowWidth/2, (windowHeight/1.82), arcSize, arcSize, -90, countdown, PIE);

noStroke();
fill(128, 0, 0);
arc(windowWidth/2, (windowHeight/1.54), arcSize, arcSize, -90, countdown, PIE);

noStroke();
fill(77, 0, 0);
arc(windowWidth/2, (windowHeight/1.34), arcSize, arcSize, -90, countdown, PIE);

noStroke();
fill(26, 0, 0);
arc(windowWidth/2, (windowHeight/1.2), arcSize, arcSize, -90, countdown, PIE);


}
