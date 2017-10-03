function timer45() {

let milliseconds = millis();
let countdown = (milliseconds/100) -90;


background(255, 150, 51);

noStroke();
fill(255, 241, 230);
ellipse(windowWidth/4.5, windowHeight/2, windowHeight/1.6, windowHeight/1.6);

noStroke();
fill(255, 212, 179);
ellipse(windowWidth/4, windowHeight/2, windowHeight/1.7, windowHeight/1.7);

noStroke();
fill(255, 183, 128);
ellipse(windowWidth/3.5, windowHeight/2, windowHeight/1.8, windowHeight/1.8);

noStroke();
fill(255, 154, 77);
ellipse(windowWidth/3, windowHeight/2, windowHeight/1.9, windowHeight/1.9);

noStroke();
fill(255, 125, 26);
ellipse(windowWidth/2.5, windowHeight/2, windowHeight/2, windowHeight/2);

noStroke();
fill(230, 99, 0);
ellipse(windowWidth/2, windowHeight/2, windowHeight/2.2, windowHeight/2.2);

noStroke();
fill(179, 77, 0);
ellipse(windowWidth/1.6, windowHeight/2, windowHeight/2.4, windowHeight/2.4);

noStroke();
fill(128, 55, 0);
ellipse(windowWidth/1.3, windowHeight/2, windowHeight/2.7, windowHeight/2.7);

noStroke();
fill(77, 33, 0);
ellipse(windowWidth/1.12, windowHeight/2, windowHeight/3, windowHeight/3);



}
