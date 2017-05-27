// JavaScript source code
// generate a random number between 0 and 1
var number = random(0, 1);

var integer = round(number);

// display the text
fill(0, 0, 0);
textSize(100);
text(number, 100, 110);
text(integer, 160, 350);

if (integer === false) {  //false 거짓, true 참의 불리언연산식
    fill(132, 0, 255);
}
else { // if의 조건이 아니면 실행
    fill(217, 255, 0);
}

ellipse(200, 200, 100, 100);