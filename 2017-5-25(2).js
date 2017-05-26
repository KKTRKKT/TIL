noStroke();
var x = 11; // position of the car

/* 주석처리
var draw = function() {
     
};
*/

var drawCar = function () {
    background(252, 255, 214);

    // draw the car body
    fill(255, 0, 115);
    rect(x, 200, 100, 20);
    rect(x + 15, 178, 70, 40);

    // draw the wheels
    fill(77, 66, 66);
    ellipse(x + 25, 221, 24, 24);
    ellipse(x + 75, 221, 24, 24);

    x = x + 3;  //3씩 x값 증가
};

mouseMoved = function () {   // 라이브러리 함수 
    fill(mouseX, mouseY, mouseY);
    ellipse(mouseX, mouseY, 10, 10);
};
