var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create edgeSprite
    edges = createEdgeSprites();

    //create 4 different surfaces
    limeSurface = createSprite(100,590,200,20);
    cyanSurface = createSprite(300,590,200,20);
    yellowSurface = createSprite(500,590,200,20);
    redSurface = createSprite(700,590,200,20);

    limeSurface.shapeColor = "lime";
    cyanSurface.shapeColor = "cyan";
    yellowSurface.shapeColor = "yellow";
    redSurface.shapeColor = "red";



    //create box sprite and give velocity
    box = createSprite(random(20,750),25,30,30);
    box.shapeColor="white";
    box.velocityX=3;
    box.velocityY=5;
}

function draw() {
    background(0);

    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(box.isTouching(limeSurface)&&box.bounceOff(limeSurface)){
        box.shapeColor = "lime";
    }
    if(box.isTouching(cyanSurface)&&box.bounceOff(cyanSurface)){
        box.shapeColor = "cyan";
        music.play();
    }
    if(box.isTouching(yellowSurface)){
        box.shapeColor = "yellow";
        music.stop();
        box.velocityX = 0;
        box.velocityY = 0;
    }
    if(box.isTouching(redSurface)&&box.bounceOff(redSurface)){
        box.shapeColor = "red";
    }
    



    
    drawSprites();
}
