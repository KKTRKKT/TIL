// JavaScript source code
fill(0, 0, 0);
textSize(20);
textAlign(CENTER);     //기본 설정

//images of Leafers
var seed = getImage("avatars/leafers-seed");   
var seedling = getImage("avatars/leafers-seedling");
var sapling = getImage("avatars/leafers-sapling");
var tree = getImage("avatars/leafers-tree");
var ultimate = getImage("avatars/leafers-ultimate");   //이미지 저장

var currentScene;   //현재 장면

var drawScene1 = function () {         //1번쨰
    currentScene = 1;
    background(200, 175, 175);
    image(seed, 50, 200);
    text("Leafers started out as a seed", 200, 50);
};

var drawScene2 = function () {      //두번쨰
    currentScene = 2;
    background(201, 113, 113);
    image(seedling, 50, 200);
    text("Leafers started out as a seed", 200, 50);
};

var drawScene3 = function () {      //세번째
    currentScene = 3;
    background(224, 186, 186);
    image(sapling, 50, 200);
    text("Leafers started out as a seed", 200, 50);
};

var drawScene4 = function () {
    currentScene = 4;
    background(8, 105, 40);
    image(tree, 50, 200);
    text("Leafers started out as a seed", 200, 50);
};

var drawScene5 = function () {
    currentScene = 5;
    background(150, 150, 175);
    image(ultimate, 200, 200);
    text("In the end, Leafers became Ultimate Leafers", 200, 50);
};

drawScene1();    //현재 장면 초기화

mouseClicked = function () {
    if (currentScene === 5) {
        drawScene1();
    }
    else if (currentScene === 1) {   //현재 장면이 1이면 다음 장면이 2를 실행
        drawScene2();
    }
    else if (currentScene === 2) {
        drawScene3();
    }
    else if (currentScene === 3) {
        drawScene4();
    }
    else if (currentScene === 4) {
        drawScene5();
    }
};