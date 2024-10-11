let angle = 0;
let colorOne, colorTwo;

function setup() {
  createCanvas(2000, 1000);
  colorMode(HSB);
  
  colorOne = color(150, 75, 100);
  colorTwo = color(220, 60, 100);
  
  angleMode(DEGREES);
}

function draw() {
  background(0, 0, 0);
  
  translate(width/2, height/2);
  
  for (let i = 0; i < 6; i++) {
    push();
    rotate(i * 60 + angle);
    for (let r = 0; r < 300; r += 20) {
      let inter = map(r, 0, 100, 0, 1);
      let finalColor = lerpColor(colorOne, colorTwo, inter);
      fill(finalColor);
      noStroke();
    
      push();
      translate(r, 0);
      rotate(r * 0.5 + angle);
      scale(map(r, 0, 150, 1, 0.5));
    
      ellipse(0, 0, 30, 30);
      ellipse (60,60, 30, 30);
      ellipse (100,150,30,30);
      pop();
    }
    
    pop();
  }
  
  
  angle += 1.0;
}