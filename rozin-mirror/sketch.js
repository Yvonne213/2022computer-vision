let capture;
const w = 640;
const h = 360;


function setup() {
  createCanvas(w, h);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
  
   colorMode(HSB, 255);
  
  ellipseMode(CENTER)
}

function draw() {
  background(0);
  
  const stepSize = 20;
  noStroke();
  capture.loadPixels();
  
  push()
    translate(width, 0);
    scale(-1, 1);
  for(let y = 0; y < capture.height; y+=stepSize) {
    for(let x = 0; x < capture.width; x+=stepSize) {
      
      const i = (x + y * width) * 4;
      
      const r = capture.pixels[i]; // red channel
      const g = capture.pixels[i+1]; // green channel
      const b = capture.pixels[i+2]; // blue channel
    // capture.pixels[i+3] ; // alpha channel
      
      const brightness = (r + g + b) /3
      
      fill(r,g,b);
      
      const size = map(brightness, 0, 255, 0,stepSize)
      
      const start = map(brightness,0,255, 0, 2*PI )
      const rotation = map(brightness, 0, 255, 0, PI)

     push()
    translate(x, y)
     rotate(rotation)
      arc(0,0, size, size, 0, start);
      
      //ellipse(x, y, size, size);
     pop() 
    }
  }
  pop();
  
  capture.updatePixels();
  
  // image(capture, 0, 0);
  //print(capture.pixels.length)
  
}