
const words = ["mind ur manners"]

function setup() {
const canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0, 0);
 canvas.style("z-index", "0");

 
  textSize(random(20,60))
  frameRate(2.5)
  textStyle(BOLDITALIC)
   

    //create button here[window]
    windowButton.style("z-index", "10");
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
    bedButton.style("z-index", "10");
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

