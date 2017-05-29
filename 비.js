// JavaScript source code
var xPositions = [200];
var yPositions = [0];

draw = function () {
    background(204, 247, 255);

    xPositions.push(random(0, 400));
    yPositions.push(0);

    image(getImage("avatars/aqualine-sapling"), 211, 278);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(0, 200, 255);
        ellipse(xPositions[i], yPositions[i], 2, 26);
        yPositions[i] += 5;
    }

};