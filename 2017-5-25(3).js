// JavaScript source code
background(89, 216, 255);

var centerX = 200;
var centerY = 100;
var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(162, 0, 255);

noStroke(); //선 없앰
var water = function (centerX, centerY) {  // 인자값
    fill(26, 120, 0);
    rect(centerX, centerY + mouseY, 16, 482, 982);
};

water(41, 109); //함수 호출
water(293, 105);
water(170, 120);
water(106, 65);
water(238, 98);
water(349, 47);

var bouble = function (X, Y, width) {       //인자
    fill(56, 255, 255);
    ellipse(X, Y, width, width);
    ellipse(X + 10, Y - 20, width + 6, width + 6);
    ellipse(X - 10, Y - 50, width + 12, width + 12);
};

bouble(200, 391, 10);
bouble(74, 394, 20);
bouble(201, 217, 5);


var fish = function (centerX, centerY, bodyColor, bodyLenth, bodyHeight) {
    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength / 4;
    var tailHeight = bodyHeight / 2;
    triangle(centerX - bodyLength / 2, centerY,
             centerX - bodyLength / 2 - tailWidth, centerY - tailHeight,
             centerX - bodyLength / 2 - tailWidth, centerY + tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX + bodyLength / 4, centerY, bodyHeight / 5, bodyHeight / 5);
};
fish(339, 200, color(255, 255, 255), 20, 126);
fish(200, 294, color(221, 255, 0), 200, 108);
fish(104, 100, color(255, 0, 0), 216, 109);




