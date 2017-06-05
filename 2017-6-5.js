// JavaScript source code
var btn1 = {   //버튼 전역 함수 선언
    x: 100,
    y: 100,
    width: 150,
    height: 50
};

var btn2 = {    //버튼2
    x: 100,
    y: 200,
    width: 150,
    height: 50
};


var drawButton = function (btn) {   //버튼 모양
    fill(0, 234, 255);
    rect(btn.x, btn.y, btn.width, btn.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text("Useless button", btn.x + 10, btn.y + btn.height / 4);
};


var isMouseInside = function (btn) {   //버튼 조건
    return (mouseX >= btn.x &&                      // 받은 인자를 비교한후 반환
            mouseX <= (btn.x + btn.width) &&
            mouseY >= btn.y &&
            mouseY <= (btn.y + btn.height));
};

mouseClicked = function () {        
    if (isMouseInside(btn1)) {
        println("Still pretty useless");
    } else if (isMouseInside(btn2)) {
        println("2nd one still quite useless!");
    }
};


drawButton(btn1);  
drawButton(btn2);
