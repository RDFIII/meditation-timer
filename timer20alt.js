function timer20alt() {

let milliseconds = millis();
let arcSize = windowHeight/6;
let countdown = (milliseconds/100) -90;
let placementConstant = (((windowHeight/1.29)-(windowHeight/4.44))/2);

// noStroke();
// fill(140, 10, 20);
// arc(windowWidth/2, (windowHeight/2), windowHeight/1.15, windowHeight/1.15, -90, countdown, PIE);
//
// noStroke();
// fill(100, 10, 20);
// arc(windowWidth/2, (windowHeight/2), windowHeight/1.2, windowHeight/1.2, -90, countdown, PIE);
//
// noStroke();
// fill(30, 0, 0);
// arc(windowWidth/2, (windowHeight/2), windowHeight/1.3, windowHeight/1.3, -90, countdown, PIE);

noStroke();
fill(255, 179, 179);
ellipse(windowWidth/2, windowHeight/2, windowHeight/1.4, windowHeight/1.4);

noStroke();
fill(30, 0, 0);
arc(windowWidth/2, (windowHeight/1.29), arcSize, arcSize, -90, countdown, PIE);

noStroke();
fill(77, 0, 0);
arc(windowWidth/2, placementConstant*2.6, arcSize, arcSize, -90, countdown, PIE);

noStroke();
fill(128, 0, 0);
arc(windowWidth/2, placementConstant*2.32, arcSize, arcSize, -90, countdown, PIE);

noStroke();
fill(179, 0, 0);
arc(windowWidth/2, placementConstant*2.04, arcSize, arcSize, -90, countdown, PIE);

noStroke();
fill(230, 0, 0);
arc((windowWidth/2), placementConstant*1.76, arcSize, arcSize, -90, countdown, PIE);

noStroke();
fill(255, 26, 26);
arc((windowWidth/2), placementConstant*1.48, arcSize, arcSize, -90, countdown, PIE);

noStroke();
fill(255, 77, 77);
arc(windowWidth/2, placementConstant*1.2, arcSize, arcSize, -90, countdown, PIE);

noStroke();
fill(255, 128, 128);
arc((windowWidth/2), placementConstant, arcSize, arcSize, -90, countdown, PIE);

noStroke();
fill(255, 153, 153);
arc((windowWidth/2), (windowHeight/4.44), arcSize, arcSize, -90, countdown, PIE);


}
