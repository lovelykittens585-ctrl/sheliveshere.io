
let capture;
let video
let videoLayer;



function setup() {
const canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0, 0);

 
  textSize(random(20,60))
  frameRate(2.5)
  textStyle(BOLDITALIC)
    // Set angle mode to degrees
  angleMode(DEGREES);
    videoLayer = createGraphics(700, 700);
 //captures video
  capture = createCapture(VIDEO, { flipped: true });
  capture.size(160, 160);
  capture.position(80, 10);
  capture.hide

}


function draw() {
  background(255, 0, 255);
  clear()
  // Set the cursor to hands: 
      cursor("hands_cursor.png", windowWidth, windowHeight);
 
  
    textAlign(CENTER,CENTER)

  
    // Draw the webcam to the off-screen layer
  videoLayer.clear();
  videoLayer.image(capture, 0, 0, 700, 700);

}