var bgimg;
var cat , mouse ;

function preload() {
    bgimg=lodeImage("garden.png");
    cat=lodeImage("cat1.png");
mouse=loaadImage("mouse1");
}

function setup(){
    createCanvas(800,800);
    cat=createSprite(750,400,20,20);
 mouse=createSprite(350,400,20,20);


}

function draw() {

    background(bgimg);
   
    drawSprites();
}


function keyPressed(){

 if (keyDown("left")){
mouse.velocityX=-2;
cat.velocityX=2;
 }
}

}
