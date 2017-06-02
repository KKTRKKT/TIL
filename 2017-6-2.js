// JavaScript source code
/*************
*OBJECT TYPES
**************/
/******************
*Flower Object Type
*******************/


/*****************
*Tulip Object Type
******************/

var Flower = function (x, y, height) {  // 공통된 객체
    this.x = x;
    this.y = y;
    this.height = height;
};


var Tulip = function (x, y, height) { //튤립 함수는 플라워 함수를 콜함
    Flower.call(this, x, y, height);
};

Tulip.prototype = Object.create(Flower.prototype);  //튤힙 프로토타입 선언 

Tulip.prototype.draw = function () {
    noStroke();
    fill(16, 122, 12);
    rect(this.x, this.y, 10, -this.height);
    fill(255, 0, 0);
    // petals
    ellipse(this.x + 5, this.y - this.height, 44, 44);
    triangle(this.x - 16, this.y - this.height,
            this.x + 20, this.y - this.height,
            this.x - 20, this.y - this.height - 31);
    triangle(this.x - 14, this.y - this.height,
            this.x + 24, this.y - this.height,
            this.x + 3, this.y - this.height - 39);
    triangle(this.x + -4, this.y - this.height,
            this.x + 26, this.y - this.height,
            this.x + 29, this.y - this.height - 36);
};

Flower.prototype.growBy = function (amount) { // 꽃마다 성장하는 크기가 달라짐
    this.height += amount * 2;
};

/*********************
*Sunflower Object Type
**********************/
var Sunflower = function (x, y, height) {
    Flower.call(this, x, y, height);
};

Sunflower.prototype = Object.create(Flower.prototype);

Sunflower.prototype.draw = function () {
    fill(16, 122, 12);

    rect(this.x, this.y, 10, -this.height);

    // petals
    stroke(0, 0, 0);
    fill(255, 221, 0);
    ellipse(this.x - 10, this.y - this.height, 20, 18);
    ellipse(this.x + 5, this.y - this.height - 15, 20, 18);
    ellipse(this.x + 5, this.y - this.height + 15, 20, 18);
    ellipse(this.x + 20, this.y - this.height, 20, 18);
    fill(20, 20, 20);
    ellipse(this.x + 5, this.y - this.height, 20, 20);
};

/**************
*MAIN PROGRAM
***************/

/** create object instances **/
var tulip = new Tulip(38, 390, 150);
var sunflower = new Sunflower(186, 390, 100);
var tu = new Tulip(48, 390, 150);
var sun = new Sunflower(196, 390, 100);

var drawScene = function () { //객체 지향적 설계
    background(207, 250, 255);
    tulip.draw();
    sunflower.draw();
    tu.draw();
    sun.draw();
};

mouseClicked = function () {
    tulip.growBy(10);
    sunflower.growBy(20);
    tu.growBy(10);
    sun.growBy(20);
    drawScene();
};

drawScene();
drawScene();