// JavaScript source code

//태양과 세모  구름 크기에 따라 태양광선도 
angleMode = "degrees";
var backgroundColor = color(135, 206, 250);
var sunColor = color(255, 255, 0);
var sunStrokeColor = color(200, 200, 0);
var sunDiameter = 100;
var scaleF = 2.0;

var drawCloud = function () {
    noStroke();
    fill(255, 255, 255);
    ellipse(0, 0, 126, 97);
    ellipse(60, 0, 70, 60);
    ellipse(-60, 0, 70, 60);
};

var drawSunRay = function () {
    fill(sunColor);
    noStroke();
    triangle(0, 90, -40, 0, 40, 0);
};

var drawSun = function () {
    //draw sun rays
    for (var i = 0; i < 10; i++) {
        pushMatrix();
        translate(200, 200);
        rotate(i * 36);
        drawSunRay();
        popMatrix();
    }
    //draw center of sun
    fill(sunColor);
    stroke(sunStrokeColor);
    ellipse(width / 2, height / 2, sunDiameter, sunDiameter);

};

//draw background
background(backgroundColor);

//draw sun
pushMatrix();
translate(200 - 200 * scaleF, 200 - 200 * scaleF); // 균형
scale(scaleF);
drawSun();
popMatrix();

//draw clouds
pushMatrix();
translate(305, 253);
drawCloud();
popMatrix();