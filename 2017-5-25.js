// JavaScript source code

// string = text
fill(92, 24, 219);
var howBig = 30;
var draw = function () { // draw = 계속해서 반복
    howBig = howBig + 1;
    textSize(howBig);
    background(0, 238, 255);
    var myName = "lee"; // text lee 변수 선언
    var message = myName + "!!!"; // 메세지에 마이네임 + !!! 변수 선언
    text(message, mouseX, mouseY); // mouseX 변수 선언 마우스 위치
};
