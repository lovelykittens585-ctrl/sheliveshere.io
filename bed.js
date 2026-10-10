let capture;
let video
let videoLayer;
let placeholder = "PLACEHOLDER.jpg"

//add new arrays
const words = ["don't mind the mess, i haven't put my clothes up"]
const words2 = ["snoozeeeee"]
const words3 = ["i think you can really be yourself in your room, its a sacred, private, space"]
const words4 = ["all my favorite things live here"]
const words5 = ["no sleeper sheets thats a mattress", "no sleeper sheets thats a mattress", "no sleeper sheets thats a mattress", "no sleeper sheets thats a mattress", "no sleeper sheets thats a mattress", "no sleeper sheets thats a mattress", "no sleeper sheets thats a mattress", "no sleeper sheets thats a mattress", "no sleeper sheets thats a mattress", "no sleeper sheets thats a mattress", "no sleeper sheets thats a mattress", "no sleeper sheets thats a mattress", "no sleeper sheets thats a mattress", "no sleeper sheets thats a mattress", "no sleeper sheets thats a mattress", "no sleeper sheets thats a mattress"]



function setup() {
createCanvas(windowWidth, windowHeight);
 
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
  //background-color(white)
  clear();
textAlign(CENTER,CENTER)
    // Draw the webcam to the off-screen layer
  videoLayer.clear();
  //change postion 
  videoLayer.image(capture, 0, 0, 700, 700);

  //gif of model
  gif = createImg("pjs_7.gif");
  gif.position(200, 700);
  gif.size(1000, 1000);
  gif.position((windowWidth - 200) / 2, 150);


  

const margin = 200;
const lineHeight = 80;
textSize(16);

for (let i = 0; i < words.length; i++) {
  text(words[i], margin, margin + 50 + i * lineHeight, width - margin * 2, lineHeight);
  text(words2[i], 100, 20 + 50 + i * lineHeight, width - margin * 2, lineHeight);
  text(words3[i], 200, 40 + 50 + i * lineHeight, width - margin * 2, lineHeight);
  text(words4[i], 500, 700 + 50 + i * lineHeight, width - margin * 2, lineHeight);
  text(words5_random, 100, 250 + 50 + i * lineHeight, width - margin * 2, lineHeight);

  }



  
}

   
  
 



