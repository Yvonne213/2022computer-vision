let cam;

function setup() {
  createCanvas(1000, 1000);
  cam = createCapture(VIDEO);
  cam.size(width, height);
  cam.hide();
}

function draw() {
  // background(220)
  //mirror camera
  push()
  translate(cam.width,0)
  scale(-1,1)
  //create camera in full size 
  image(cam, 0, 0, width, width * cam.height / cam.width);
  pop()
  //get the color value from one point of camera
  let sample = cam.get(width / 2, height / 2);
  //set the green
  let g = green(sample)
  print (g);
  if (g>100||g<10){
  fill(0,g,0)
} else{
  fill(200-g,0,0)
}
  // new part here : loop
  for(let i=0;i<100;i++){
    for(let j=0;j<100;j++){
      ellipse(i*(width/10)+(width/20),j*(height/10)+(height/20),20);
    }
  }
}