// JavaScript source code

// string = text
fill(92, 24, 219);
var howBig = 30;
var draw = function () { // draw = ����ؼ� �ݺ�
    howBig = howBig + 1;
    textSize(howBig);
    background(0, 238, 255);
    var myName = "lee"; // text lee ���� ����
    var message = myName + "!!!"; // �޼����� ���̳��� + !!! ���� ����
    text(message, mouseX, mouseY); // mouseX ���� ���� ���콺 ��ġ
};
