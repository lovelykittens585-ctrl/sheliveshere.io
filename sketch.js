var ss
var photo = "ascii-art.png"
var me = "ascii-text-art.png"
let capture;
let snapButton;
let video
let windowButton
let bedButton

let snapped = false;
let snapped_2 = false;
let snapshot
let snapshot_2 //second snapshot
let offset = 0;
let easing = 0.05;
let videoLayer;
let blurAmount = 10;


const words = ["I need to get bolder.", "I need to go outside of myself, ", "I need more audacity, ", "I need to do more than think, ", "I need to kill myself and start all over again.",  "I need to invade my privacy,", "I need to be honest, ", "I need to be meaner, ", "I need to exist somewhere that’s not here."]

var every = "BITCH YOU COULD NEVER"

function takeSnap() {
  snapshot = videoLayer.get();
  snapped = true;
  capture.hide();
}

function setup() {
const canvas = createCanvas(6000, 6000);
canvas.position(0, 0);
// Set the cursor to hands: 
      cursor("hands_cursor.png", 20, 6000);
 
  textSize(random(20,60))
  frameRate(2.5)
  textStyle(BOLDITALIC)
    // Set angle mode to degrees
  angleMode(DEGREES);
    videoLayer = createGraphics(700, 700);

    //create button here[window]

    windowButton = createButton("WINDOW");
    windowButton.position(1000, 1500);
    windowButton.size(500,600)
    windowButton.style("background-image", "url('window.png')")
    windowButton.style("border-radius", "30px")
    windowButton.style("font-size", "30px")
  windowButton.mousePressed(() => {
  window.location.href = "window.html";
});


    //creates button here[bed]

    bedButton = createButton("BED");
    bedButton.position(700, 2500);
    bedButton.size(500,500)
    bedButton.style("background-image", "url('bed.png')")
    bedButton.style("border-radius", "30px")
    bedButton.style("font-size", "30px")
  bedButton.mousePressed(() => {
  window.location.href = "bed.html";
});
    



  //creates snapButton
   snapButton = createButton("CHEESE");
  snapButton.position(20, 20);
  snapButton.size(100,50)
  snapButton.mousePressed(takeSnap);
  snapButton.style("background-color",'yellow')
  snapButton.style("border-radius", "30px")
  snapButton.style("font-size", "18px")

  //captures video
  capture = createCapture(VIDEO, { flipped: true });
  capture.size(800, 900);
  capture.position(200, 1000);
  capture.hide
  
 //captures 2nd video
  capture_2 = createCapture(VIDEO, { flipped: true });
  capture_2.size(160, 160);
  capture_2.position(100, 300);
  capture_2.hide

  ss = createImg("Screenshot 2026-09-18 at 8.42.53 PM.png");
   ss.position(500, 500);
  ss.size(1000, 2000);
  ss.position((windowWidth - 200) / 2, 150);
   // Put the img behind the canvas
  ss.position(0, 0);
  ss.style("z-index", "-1");

  //photo = createImg("ascii-text-art.png") 
  //photo.position(700, 500)
 // photo.size (1000,2000)
  //photo.position(500, 500);
 // photo.style("z-index", "-2");

 //change to model possibly? 
  me = createImg("mee photo.png") 
  me.size (500,500)
  me.position(650, 800);
  me.style("z-index", "-2");

}


function draw() {
  background(255, 0, 255);
  clear()
 
  
    textAlign(CENTER,CENTER)
    stroke(0)
    fill('yellow')
    noTint()
    
  

  
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

        // Loop through angles 0, 30, 60, 90 degrees
  for (let angle=200; angle <= 90; angle += 30) {
      // Save current coordinate system
      push();                       

      // Restore coordinate system
      pop();           
      
  translate(width/2, height/2);
  rotate(frameCount);
  text(every , 0 , 9 , 100, 500); }



//keeps text in canvas
 for (let i = 0; i < words.length; i++) {
    let message = words[i];
   textSize(random(10,60))

    let x = random(100, width - 100);
    let y = random(200, height - 100);
    let maxWidth = min(100, width - x - 50);

    text(message, x, y, maxWidth);
    
text(every, 300, 900, 1000);

  
  } 


  
}

