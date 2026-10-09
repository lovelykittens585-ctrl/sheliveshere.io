var ss
var photo = "ascii-art.png"
var me = "ascii-text-art.png"


const words = ["I need to get bolder.", "I need to go outside of myself, ", "I need more audacity, ", "I need to do more than think, ", "I need to kill myself and start all over again.",  "I need to invade my privacy,", "I need to be honest, ", "I need to be meaner, ", "I need to exist somewhere that’s not here."]

var every = "BITCH YOU COULD NEVER"



function setup() {
const canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0, 0);

 
  textSize(random(20,60))
  frameRate(2.5)
  textStyle(BOLDITALIC)
   

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
    

  

}


function draw() {
  background(255, 0, 255);
  clear()
 
  
    textAlign(CENTER,CENTER)
    stroke(0)
    fill('yellow')
    noTint()
// Set the cursor to hands: 
      cursor("hands_cursor.png", 20, 6000);


  
}

