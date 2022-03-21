var sprite;
var sprite_image;

function preload(){
  //load images, animations and sound
  
  sprite_image = loadAnimation("assets/sprite_0.png","assets/sprite_1.png","assets/sprite_2.png",
  "assets/sprite_0.png","assets/sprite_3.png","assets/sprite_4.png","assets/sprite_5.png","assets/sprite_6.png",
  "assets/sprite_7.png" );


}

function setup() {
  createCanvas(500, 700);
  
  sprite = createSprite(250, 350, 50, 70);
  sprite.addAnimation("flying", sprite_image);
  sprite.scale = 0.5;
}

function draw() {
  background(0);




  drawSprites();
}