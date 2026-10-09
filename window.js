
let capture;
let video
let videoLayer;
let placeholder = "PLACEHOLDER.jpg"


const words = ["oftentimes, i open up the curtains of my window"]
const words2 = ["sometimes copilot likes to fill in the blanks"]
const words3 = ["it wants me to write whatever it thinks im thinking"]
const words4 = ["but i don't mince my words"]
const words5 = ["i don't mince my words", "i don't mince my words", "i don't mince my words", "i don't mince my words", "i don't mince my words", "i don't mince my words", "i don't mince my words", "i don't mince my words", "i don't mince my words", "i don't mince my words", "i don't mince my words", "i don't mince my words", "i don't mince my words", "i don't mince my words", "i don't mince my words", "i don't mince my words", "i don't mince my words", "i don't mince my words", "i don't mince my words", "copilot is annoying as fuck"]


var every = "I have cute curtains <3"



function setup() {
const canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0, 0);


 
  textSize(20)
  frameRate(1)
  textStyle(BOLDITALIC)
    // Set angle mode to degrees
  angleMode(DEGREES);
    videoLayer = createGraphics(700, 700);
 //captures video
  capture = createCapture(VIDEO, { flipped: true });
  capture.size(160, 160);
  capture.position(80, 650);
  capture.hide

words5_random = random(words5); 

}


function draw() {
  //background-image("placeholder", windowWidth, windowHeight);
  clear()
textAlign(CENTER,CENTER)
    // Draw the webcam to the off-screen layer
  videoLayer.clear();
  videoLayer.image(capture, 0, 0, 700, 700);

  //gif of model
  gif = createImg("pjs_7.gif");
  gif.position(200, 300);
  gif.size(1000, 1000);
  gif.position((windowWidth - 200) / 2, 150);
  

const margin = 200;
const lineHeight = 80;
textSize(16);

for (let i = 0; i < words.length; i++) {
  text(words[i], margin, margin + 50 + i * lineHeight, width - margin * 2, lineHeight);
  text(words2[i], 100, 20 + 50 + i * lineHeight, width - margin * 2, lineHeight);
  text(words3[i], 200, 40 + 50 + i * lineHeight, width - margin * 2, lineHeight);
  text(words4[i], 300, 700 + 50 + i * lineHeight, width - margin * 2, lineHeight);
  text(words5_random, 100, 250 + 50 + i * lineHeight, width - margin * 2, lineHeight);

  }

}

   
  
 


