// JavaScript source code
var answer = floor(random(1, 5));
fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
if (answer === 3 || answer === 5) {
    fill(255, 0, 0);
}
else if (answer === 4) {
    fill(255, 255, 0);
}
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);

if (answer === 3 || answer === 5) {
    text("  WOW", 176, 200);
    text("CLOSED!!!", 177, 229);
}
else if (answer < 3 || answer === 5) {
    text("NOT YET", 176, 200);
    text("IMPLEMENTED", 159, 229);
}
else {
    fill(9, 0, 255);
    textSize(15);
    text("^^", 192, 200);
    text("congratuation!!", 149, 229);
}
