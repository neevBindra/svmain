var gameState = "wait"
var jumpS,coinS,fireS;
var titS,tipB,playB,tipBI,playBI,lv1BgI,lv1bg;
var player , playerRunningR,playerIdle,playerRunningL,f,fi;
// platforms for level one 
var plat1,plat2,plat3,plat4,plat5,plat6,plat7,plat8,plat9,plat10,plat11,plat12,plat13
,plat14,plat15
var p1,p2,p3,p4;
var coin,coinI;
var invGround;
function preload(){
  //loading images
  lv1BgI = loadImage("images/lv1bg.jpg")
    titS = loadImage("images/titleScreen.png")
    tipBI = loadImage("images/tips.png")
    playBI = loadImage("images/play.png")
    playerIdle = loadAnimation("images/Idle__000.png","images/Idle__001.png","images/Idle__002.png","images/Idle__003.png")
    playerRunningR = loadAnimation("images/Run__000.png","images/Run__001.png","images/Run__002.png"
    ,"images/Run__003.png","images/Run__004.png","images/Run__005.png")
    playerRunningL = loadAnimation("images/Run__006.png","images/Run__007.png","images/Run__008.png","images/Run__009.png",
    "images/Run__0010.png","images/Run__0011.png")
    p1 = loadImage("images/p1.png");
    p2 = loadImage("images/p2.png");
    p3 = loadImage("images/p3.png");
    p4 = loadImage("images/p4.png");
    coinI = loadImage("images/coin.gif")

}
function setup(){
    createCanvas(windowWidth,windowHeight);
  
  //backgrounds
    lv1bg = createSprite(2500,height/2,width*5,displayHeight)
    lv1bg.addImage(lv1BgI)
    lv1bg.visible = false;
    lv1bg.scale = 1.5;
    invGround = createSprite(0,670,50000,20)
    invGround.visible = false;
    //creating play and tips button
     playB = createSprite(850,455,200,50)
     playB.addImage(playBI);
     playB.scale = 0.5
     tipB = createSprite(850,485,200,50)
     tipB.addImage(tipBI);
     tipB.scale = 0.5
     //lv1 platforms
     plat1 = createSprite(225,450,10,20)
     plat1.addImage(p2)
     plat1.scale = 0.5;
     plat1.visible = false;
     plat2 = createSprite(285,425,10,10)
     plat2.addImage(p1)
     plat2.scale = 0.5;
     plat2.visible = false;
     plat3 = createSprite(445,250,10,10)
     plat3.addImage(p3)
     plat3.scale = 0.5;
     plat3.visible = false;
     plat4 = createSprite(655,535,10,10)
     plat4.addImage(p4)
     plat4.scale = 0.5;
     plat5 = createSprite(695,485,10,10)
     plat5.addImage(p1)
     plat5.scale = 0.5;
     plat6 = createSprite(845,455,10,10)
     plat6.addImage(p3)
     plat6.scale = 0.5;
     plat7 = createSprite(975,345,10,10)
     plat7.addImage(p4)
     plat7.scale = 0.5;

    plat1.debug = false;
    plat1.setCollider("rectangle",0,-120,100,50,0)
   // plat2.debug = true;
   // plat3.debug = true;
    //plat4.debug = true;

    //creating player sprite
     player = createSprite(0,615,30,30);
     player.addAnimation("idle",playerIdle)
     player.addAnimation("runningR",playerRunningR)
     player.addAnimation("runningL",playerRunningL)
     player.scale = 0.2;
     player.visible = false;
     player.debug = true;
}

function draw(){
console.log(mouseX,mouseY)

  if(gameState === "wait"){
background(titS);
  }

  if(mousePressedOver(playB)){

    gameState = "lv1";
  }
 
  if(gameState === "lv1"){
    lv1bg.visible = true;
    tipB.visible = false;
    playB.visible = false;
    player.visible = true;
    plat1.visible = true;
    plat2.visible = true;
    plat3.visible = true;
    camera.x = player.x+300;
    player.collide(invGround)
   /* player.collide(plat1)
    player.collide(plat2)
    player.collide(plat3)
    player.collide(plat4)*/

    if(keyDown("LEFT_ARROW")){
      player.changeAnimation("runningL",playerRunningL);
      player.x = player.x-5;
      lv1bg.x = lv1bg.x-2;
    }else{
      player.changeAnimation("idle",playerIdle)
    }
    if(keyDown("RIGHT_ARROW")){
      player.changeAnimation("runningR",playerRunningR);
      player.x = player.x+5;
      lv1bg.x = lv1bg.x+2;   
    }
    if(keyDown("UP_ARROW")){
      player.velocityY = -5
    }
    player.velocityY = player.velocityY + 0.8

  }
  drawSprites();

}


