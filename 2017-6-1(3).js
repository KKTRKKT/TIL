// JavaScript source code
var Creature = function (nickname, age, x, y) {
    this.nickname = nickname;
    this.age = age + "yrs old";
    this.x = x;
    this.y = y;
};

Creature.prototype.talk = function () {
    text("SUPPP!?!?!?!??!", this.x + 20, this.y + 140);
};

var Hopper = function (nickname, age, x, y) {
    Creature.call(this, nickname, age, x, y);  // 크리쳐 함수를 콜한다
};

Hopper.prototype = Object.create(Creature.prototype); // 호퍼의 프로토타입을 크리쳐의 프로토타입으로 넣음

Hopper.prototype.draw = function () {
    fill(217, 90, 0);
    var img = getImage("creatures/Hopper-Happy");
    image(img, this.x, this.y);
    var txt = this.nickname + ", " + this.age;
    text(txt, this.x + 10, this.y - 7);
};

Hopper.prototype.hooray = function () {
    text("Hooooray!!!", this.x + 29, this.y + 140);
};

var Winston = function (nickname, age, x, y) {
    Creature.call(this, nickname, age, x, y);
};

Winston.prototype = Object.create(Creature.prototype); //윈스턴의 프로토타입을 크리쳐 프로토타입에 넣음

Winston.prototype.draw = function () {
    fill(255, 0, 0);
    var img = getImage("creatures/Winston");
    image(img, this.x, this.y);
    var txt = this.nickname + ", " + this.age;
    text(txt, this.x + 20, this.y - 10);
};


var winstonTeen = new Winston("Winsteen", 15, 20, 50);
var winstonAdult = new Winston("Mr. Winst-a-lot", 30, 229, 50);

winstonTeen.draw();
winstonTeen.talk();
winstonAdult.draw();

var lilHopper = new Hopper("Little Hopper", 15, 20, 240);
lilHopper.draw();
lilHopper.talk();
var bigHopper = new Hopper("Big Hopper", 30, 220, 240);
bigHopper.draw();
bigHopper.hooray();