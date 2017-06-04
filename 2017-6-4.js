// JavaScript source code

var draw = function () {
    background(194, 255, 222);

    var x = cos(millis() * 1);  //1000분 의 1초
분  var y = cos(millis() + 98);

    // face
    image(getImage("creatures/Winston"), x + 177, x + 101, 50, 50);

    // body
    strokeWeight(2);
    line(202, 216, x + 203, x + 150);
    line(x + 220, x * 22 + 266, 202, 213);
    line(x + 188, x * 2 + 266, 202, 213);
    line(x + 167, x * 20 + 150, 204, 169);
    line(y + 164, y * 20 + 148, 204, 168);

    // drum set
    strokeWeight(3);
    fill(255, 255, 255);
    ellipse(162, 176 + y, 54, 15);
    line(161, 256, 161, 184 + y);
    line(134, 275, 162, 255);
    line(185, 275, 162, 257);
    fill(0, 0, 0);
    ellipse(226, 268 + y, 65, 65);
    fill(255, 255, 255);
    ellipse(226, 268, 60, 60);
};