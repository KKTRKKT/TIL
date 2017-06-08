// JavaScript source code
noStroke();
background(0, 0, 0);
var r = 255;
var g = 90;
var b = 0;
fill(r, g, b);


for (var i = 0; i < 12; i++) {
    pushMatrix();
    translate(200, 200);
    r -= i * 6;
    g += i * 4;
    b += i * 6;
    fill(r, g, b);
    rotate(i * 30);

    rect(0, 0, 150, 15);

    popMatrix();
}