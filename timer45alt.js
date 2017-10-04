function timer45alt() {

let milliseconds = millis();
let countdown = (milliseconds/500);


background(255, 150, 51);

noStroke();
fill(255, 241, 230);
ellipse(windowWidth/5.5, windowHeight/2, windowHeight/1.8, windowHeight/1.8);

noStroke();
fill(255, 150, 51);
ellipse(windowWidth/5.5, windowHeight/2, countdown*5.5, countdown*5.5);



noStroke();
fill(255, 183, 128);
ellipse(windowWidth/2.32, windowHeight/2, windowHeight/2.4, windowHeight/2.4);

noStroke();
fill(255, 150, 51);
ellipse(windowWidth/2.32, windowHeight/2, countdown*2.32, countdown*2.32);



noStroke();
fill(230, 99, 0);
ellipse(windowWidth/1.623, windowHeight/2, windowHeight/3.3, windowHeight/3.3);

noStroke();
fill(255, 150, 51);
ellipse(windowWidth/1.623, windowHeight/2, countdown*1.6, countdown*1.6);



noStroke();
fill(179, 77, 0);
ellipse(windowWidth/1.327, windowHeight/2, windowHeight/4.3, windowHeight/4.3);

noStroke();
fill(255, 150, 51);
ellipse(windowWidth/1.327, windowHeight/2, countdown*1.358, countdown*1.358);




noStroke();
fill(128, 55, 0);
ellipse(windowWidth/1.1686, windowHeight/2, windowHeight/6, windowHeight/6);

noStroke();
fill(255, 150, 51);
ellipse(windowWidth/1.1686, windowHeight/2, countdown*1.18, countdown*1.18);




noStroke();
fill(77, 33, 0);
ellipse(windowWidth/1.079, windowHeight/2, windowHeight/9, windowHeight/9);

noStroke();
fill(255, 150, 51);
ellipse(windowWidth/1.079, windowHeight/2, countdown*1.08, countdown*1.08);








}

// noStroke();
// fill(255, 241, 230);
// ellipse(windowWidth/5.5, windowHeight/2, windowHeight/1.8, windowHeight/1.8);
//
// noStroke();
// fill(255, 183, 128);
// ellipse(windowWidth/2.32, windowHeight/2, windowHeight/2.4, windowHeight/2.4);
//
// noStroke();
// fill(230, 99, 0);
// ellipse(windowWidth/1.6, windowHeight/2, windowHeight/3.3, windowHeight/3.3);
//
// noStroke();
// fill(179, 77, 0);
// ellipse(windowWidth/1.358, windowHeight/2, windowHeight/4.3, windowHeight/4.3);
//
// noStroke();
// fill(128, 55, 0);
// ellipse(windowWidth/1.18, windowHeight/2, windowHeight/6, windowHeight/6);
//
// noStroke();
// fill(77, 33, 0);
// ellipse(windowWidth/1.08, windowHeight/2, windowHeight/9, windowHeight/9);
