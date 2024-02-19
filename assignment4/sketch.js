let cars = [];

let img, img2;

//array

let frogPos;
let state = 0;
let timer = 0;



function setup() {
  createCanvas(1000, 600);
  bg = loadImage('assets/field.png');
  for (let i = 0; i < 10; i++) {
    cars.push(new Car());
  }
  //for loop, spawning cars
  //push.array.constructor/class
  


  frogPos = createVector(width/2, height-80);
  img = loadImage('assets/spongefinger.png');
  img2 = loadImage('assets/field.png');
  ellipseMode(CENTER);
  imageMode(CENTER);
  noStroke();
}

function draw() {
  
     game();

  
}

/*the game is supposed to have a background image of the jellyfish field from spongebob, but I couldn't get it to appear, butting the image in the background function breaks the code for some reason */

function game(){
  /*image(img2, width/2, height/2, width, height);*/
background(61, 195, 264);
fill(93,177,52,255);
rect(0,500,1400, 750);
   for (let i = 0 ; i < cars.length ; i++) {
     cars[i].display() ;
     cars[i].move() ;
     
     //checks cars distance from frogPos
     if (cars[i].pos.dist(frogPos) < 50) {
       cars.splice(i,1);
       //takes something out of an array, number spliced out
     }
   }
  

  
 
  image(img, frogPos.x, frogPos.y, 80, 80);
  checkForKeys();
  
}




function resetTheGame(){
  timer = 0;
  cars = []; //deletes cars
    for (let i = 0; i < 3; i++) {
    cars.push(new Car());
  } //respawns cars
}

function checkForKeys(){
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 10;
    if (keyIsDown(LEFT_ARROW)) frogPos.x -= 10;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 10;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 10;

}

class Car {
  // The class's constructor and attributes
  constructor() {

    this.pos = createVector(random(width),random(height)) ;
    this.vel = createVector(random(-7,7), random(-7,7));
    this.r = random(600); //color
    this.r2 = random(20);
    this.o = random(255);

  }

  // methods - these get called with a dot after the variable

  display() {
    fill(this.r2, this.r, this.r, this.o);
    circle(this.pos.x, this.pos.y, 50, 25);
  }

  move() {
     this.pos.add(this.vel) ;
    
    if (this.pos.x > width) this.pos.x = 0 ;
    if (this.pos.x < 0) this.pos.x = width ;
    if (this.pos.y > height) this.pos.y = 0 ;
    if (this.pos.y < 0) this.pos.y = height ; 
  }
}
