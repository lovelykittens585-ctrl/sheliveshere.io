
const thanks = ["if you make it here, zeniya says hiiii!! Also, this project means a lot to me, it was so fun working on it. I intend on adding much more", "much thanks to kai, daniela and laurenne"]



function setup() {
const canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0, 0);
 canvas.style("z-index", "0");

 
  textSize(random(20,60))
  frameRate(2.5)
  textStyle(BOLDITALIC)


}


function draw() {
  background(255, 0, 255);
  clear()
 
  
    textAlign(CENTER,CENTER)
    stroke(0)
    fill('yellow')
    noTint()

//gif of model
  gif = createImg("pjs_5.png");
  gif.position(700, 2000);
  gif.size(1000, 1000);

  gif = createImg("pjs_3.gif");
  gif.position(400, 1000);
  gif.size(800, 1000);
  
     // Draw the webcam to the off-screen layer
  videoLayer.clear();
  videoLayer.image(capture, 0, 0, 700, 700);

  // Blur only the video layer
  videoLayer.filter(BLUR, blurAmount);

  // Display the blurred video
  image(videoLayer, 200, 100, 700, 700);

  // Display the snapshot if CHEESE was pressed
  if (snapped && snapshot) {
    image(snapshot, 200, 100, 700, 700);
  }

  if (snapped_2 && snapshot_2) {
    image(snapshot_2, 200, 100, 700, 700);
  } else {
    image(capture_2, 300, 700, 500, 700);
  }


}
