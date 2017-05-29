// JavaScript source code
var paintBrush = {
    x: 164,
    y: 154,
    img: getImage("avatars/leaf-grey")
};

var paintCanvas = function () {
    imageMode(CENTER);
    image(paintBrush.img, paintBrush.x, paintBrush.y);
};
mouseMoved = function () {
    paintBrush.x = (mouseX);
    paintBrush.y = (mouseY);
    paintCanvas();
};

