// JavaScript source code
var Rainbow = function (x, y, radius) {

    this.x = x; //this 전달 받은 인자값을 넘겨받음
    this.y = y;
    this.radius = radius;
};

var bigrainbow = new Rainbow(200, 200, 300); //new Rainbow 초기화시켜줌
var Smallrainbow = new Rainbow(199, 200, 150);


var drawRainbow = function (rainbow) {
    noFill();
    strokeWeight(5);
    stroke(255, 0, 0);
    arc(rainbow.x, rainbow.y, rainbow.radius, rainbow.radius, 180, 360);
    stroke(250, 200, 0);
    arc(rainbow.x, rainbow.y, rainbow.radius - 10, rainbow.radius - 10, 180, 360);
    stroke(240, 255, 102);
    arc(rainbow.x, rainbow.y, rainbow.radius - 20, rainbow.radius - 20, 180, 360);
    stroke(29, 255, 13);
    arc(rainbow.x, rainbow.y, rainbow.radius - 30, rainbow.radius - 30, 180, 360);
    stroke(122, 155, 255);
    arc(rainbow.x, rainbow.y, rainbow.radius - 40, rainbow.radius - 40, 180, 360);
};

drawRainbow(bigrainbow);
drawRainbow(Smallrainbow)