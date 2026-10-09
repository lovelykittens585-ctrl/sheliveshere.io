
const thanks = ["if you make it here, zeniya says hiiii!! Also, this project means a lot to me, it was so fun working on it. I intend on adding much more", "much thanks to kai, daniela and laurenne"]

function setup() {
const canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0, 0);
 canvas.style("z-index", "0");

 
  textSize(random(20,60))
  frameRate(2.5)
  textStyle(BOLDITALIC)
   

    //create button here[window]
    windowButton = createButton("WINDOW");
    windowButton.style("z-index", "10");
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
    bedButton.style("z-index", "10");
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
}
