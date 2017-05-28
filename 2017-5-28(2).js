// JavaScript source code
imageMode(CENTER);


for (var j = 0; j < 13; j++) {
    fill(255, 0, 0);
    text(j, 13, j * 30 + 30);
    for (var i = 0; i < 12; i++) { //for 문 내포 j가 한번 돌떄마다 i는 다 돌음
        fill(130, 56, 56);
        text(i, i * 36, j * 30 + 30);
        image(getImage("cute/Heart"), i * 36, j * 30, 40, 60);   
    }
}