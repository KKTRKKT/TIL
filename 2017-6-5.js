// JavaScript source code
var btn1 = {   //��ư ���� �Լ� ����
    x: 100,
    y: 100,
    width: 150,
    height: 50
};

var btn2 = {    //��ư2
    x: 100,
    y: 200,
    width: 150,
    height: 50
};


var drawButton = function (btn) {   //��ư ���
    fill(0, 234, 255);
    rect(btn.x, btn.y, btn.width, btn.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text("Useless button", btn.x + 10, btn.y + btn.height / 4);
};


var isMouseInside = function (btn) {   //��ư ����
    return (mouseX >= btn.x &&                      // ���� ���ڸ� ������ ��ȯ
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
