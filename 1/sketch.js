function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
}

let xPos = 0;
let xVelocity = 5; //数字越大，速度越快

function update(){

}

function draw() {
  background("pink"); //每运行就会刷新一次新的背景
  ellipse(xPos, 50, 50, 50);
  
  xPos = xPos + xVelocity; 
  
  if(xPos > width){
    xVelocity = -5;
  }
  if (xPos < 0){
    xVelocity = 5;
  }

}
