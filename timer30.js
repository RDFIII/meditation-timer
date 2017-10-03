function timer30() {

  let milliseconds = millis();
  let countdown = (milliseconds/100) -90;

  background(51, 51, 153)


  noStroke();
  fill(217, 217, 242);
  ellipse(windowWidth/2, windowHeight/2, (windowWidth/50000)*milliseconds, (windowWidth/50000)*milliseconds);



}
