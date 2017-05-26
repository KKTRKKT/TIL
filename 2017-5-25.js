// JavaScript source code

var head = 190;
var eyes = head / 5;
var mouth = eyes * 2.0;
var X = head;
var Y = head;

draw = function () {
    background(255, 255, 255);
    fill(0, 0, 0);
    textSize(30);            //텍스트 사이즈
    text("STUFFED WINSTON!", 10, 30);  
    textSize(10);
    text("SO SOFT! DON'T GO TO SLEEP WITHOUT ONE!", 10, 87);
    fill(255, 255, 0);
    ellipse(X, Y, 193, head);
    fill(mouseX - 180, 0, 0);
    ellipse(X * 0.7, Y * 0.9, eyes + mouseX / 20, eyes + mouseY / 20);
    ellipse(X * 1.3, Y * 0.8, eyes + mouseX / 20, eyes + mouseY / 20);
    fill(255, 0, 0);
    ellipse(X * 1.2, Y * 1.2, mouth, mouth);
    fill(255, 255, 255);
    rect(329, 258, 66, -43);
    fill(255, 0, 0);
    textSize(20);
    text("HERE!!", 333, 247);

};


