function timer30alt() {

  let milliseconds = millis();
  let countdown = (windowWidth/50000)*milliseconds;

  background(51, 51, 153)


  noStroke();
  fill(217, 217, 242);
  ellipse(windowWidth/2, windowHeight/2, countdown, countdown);



  noStroke();
  fill(217, 217, 242);
  ellipse(windowWidth/5, windowHeight/1.4, countdown, countdown);


  noStroke();
  fill(217, 217, 242);
  ellipse(windowWidth-(windowWidth/5), windowHeight/1.4, countdown, countdown);

  noStroke();
  fill(217, 217, 242);
  ellipse(windowWidth/5, windowHeight-(windowHeight/1.5), countdown, countdown);

  noStroke();
  fill(217, 217, 242);
  ellipse(windowWidth-(windowWidth/5), windowHeight-(windowHeight/1.5), countdown, countdown);




}
