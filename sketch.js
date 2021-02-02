function preload(){
  DiamondImg = loadAnimation("Diamond/tile000.png","Diamond/tile001.png",
  "Diamond/tile002.png","Diamond/tile003.png","Diamond/tile004.png");
  ChurchImg = loadImage("Church.png");
  FireStationImg = loadImage("Fire Station.png");
  GymImg = loadImage("Gym.png");
  HospitalImg = loadImage("Hospital.png");
  HotelImg = loadImage("Hotel.png");
  HouseImg = loadImage("House.png");
  MallImg = loadImage("Mall.png");
  ParkImg = loadImage("Park.png");
  PoliceImg = loadImage("Police.png");
  PostOfficeImg = loadImage("Post Office.png");
  BgImg = loadImage("Poster.jpg");
  SchoolImg = loadImage("School.png");
  ThiefImg = loadImage("Thief.png");
}

function setup() {
  createCanvas(windowWidth-10,windowHeight-10);
  background(BgImg);

  //Input
  name_input = createInput("Enter Your Name");
  name_input.position(windowWidth/2-110,windowHeight/2);
  name_input.style("height","35px");
  name_input.style("width","160px");
  name_input.style("font-size","20px");
  name_input.style("background",rgb(29, 132, 1));
  name_input.style('color', rgb(250, 236, 95));

  //Buttons
  play_button = createButton("Play Now");
  play_button.position(windowWidth/2-60,windowHeight/2+60);
  play_button.style("height","30px");

  how_button = createButton("How To Play");
  how_button.position(windowWidth/2-68,windowHeight/2+120);
  how_button.style("height","30px");

  //Blocks Around The Diamond
  Block_2 = createSprite(windowWidth/2+5,windowHeight/2-5,100,100);
  Block_2.shapeColor = rgb(245, 48, 253);
  Block_2.visible = false;

  Block_1 = createSprite(windowWidth/2-5,windowHeight/2-5,100,100);
  Block_1.shapeColor = rgb(248, 150, 253);
  Block_1.visible = false;

  //Sprites
  Church = createSprite(windowWidth/2,windowHeight/2-225);
  Church.addImage(ChurchImg);
  Church.scale = 0.15;
  Church.visible = false;

  FireStation = createSprite(windowWidth/2+225,windowHeight/2-140);
  FireStation.addImage(FireStationImg);
  FireStation.scale = 0.2;
  FireStation.visible = false;

  Gym = createSprite(windowWidth/2,windowHeight/2+110);
  Gym.addImage(GymImg);
  Gym.scale = 0.3;
  Gym.visible = false;

  Diamond = createSprite(windowWidth/2,windowHeight/2);
  Diamond.addAnimation("diamond rotating",DiamondImg);
  Diamond.scale = 0.5;
  Diamond.visible = false;

  Hospital = createSprite(windowWidth/2-175,windowHeight/2-25);
  Hospital.addImage(HospitalImg);
  Hospital.scale = 0.15;
  Hospital.visible = false;

  Hotel = createSprite(windowWidth/2+250,windowHeight-100);
  Hotel.addImage(HotelImg);
  Hotel.scale = 0.31;
  Hotel.visible = false;

  House = createSprite(windowWidth/2-540,windowHeight/2);
  House.addImage(HouseImg);
  House.scale = 0.11;
  House.visible = false;

  Mall = createSprite(windowWidth/2-350,windowHeight-107);
  Mall.addImage(MallImg);
  Mall.scale = 0.11;
  Mall.visible = false;

  Park = createSprite(windowWidth/2+440,windowHeight/2-15);
  Park.addImage(ParkImg);
  Park.scale = 0.11;
  Park.visible = false;

  Police = createSprite(windowWidth-60,windowHeight-120);
  Police.addImage(PoliceImg);
  Police.scale = 0.5;
  Police.visible = false;

  PostOffice = createSprite(windowWidth/2-300,windowHeight/2-175);
  PostOffice.addImage(PostOfficeImg);
  PostOffice.scale = 0.15;
  PostOffice.visible = false;

  School = createSprite(windowWidth-120,windowHeight-540);
  School.addImage(SchoolImg);
  School.scale = 0.15;
  School.visible = false;

  Thief = createSprite(windowWidth/2-585,windowHeight/2-215);
  Thief.addImage(ThiefImg);
  Thief.scale = 0.12;
  Thief.visible = false;

  //Barrier
  //push();
  //translate(width / 2, height / 2);
  //rotate(PI / 3.0)
  //Barrier_1 = createSprite(windowWidth/4-30,windowHeight/2-100,70,10);
  //pop();
}

function draw() {
  
  play_button.mousePressed(()=>{
    name_input.hide();
    play_button.hide();
    how_button.hide();
    background(99, 255, 85);
    Church.visible = true;
    FireStation.visible = true;
    Gym.visible = true;
    Thief.visible = true;
    Diamond.visible = true;
    Hospital.visible = true;
    Park.visible = true;
    School.visible = true;
    PostOffice.visible = true;
    Mall.visible = true;
    Police.visible = true;
    Hotel.visible = true;
    House.visible = true;
    Block_1.visible = true;
    Block_2.visible = true;
  })

  drawSprites();
}