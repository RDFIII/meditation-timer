function timer30() {

  let milliseconds = millis();
  let countdown = (milliseconds/100) -90;

  background(134, 45, 89)

  noStroke();
  fill(236, 198, 216);
  ellipse(windowWidth/2, windowHeight/2, (windowWidth/30000)*milliseconds, (windowWidth/30000)*milliseconds);

  noStroke();
  fill(153, 51, 102);
  ellipse(windowWidth/2, windowHeight/2, (windowWidth/35000)*milliseconds, (windowWidth/35000)*milliseconds);

  noStroke();
  fill(210, 121, 166);
  ellipse(windowWidth/2, windowHeight/2, (windowWidth/40000)*milliseconds, (windowWidth/40000)*milliseconds);

  noStroke();
  fill(236, 198, 217);
  ellipse(windowWidth/2, windowHeight/2, (windowWidth/50000)*milliseconds, (windowWidth/50000)*milliseconds);






}
