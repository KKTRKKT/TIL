// JavaScript source code
var book = [
    {
        title: "The Giver",
        stars: 4
    },
    {
        title: "FIFA",
        stars: 5
    },
    {
        title: "about game",
        stars: 6
    }
];
background(102, 0, 0);

// draw shelf
fill(214, 177, 122);
rect(0, 120, width, 10);

// draw one book

for (var i = 0; i < book.length; i++) {
    fill(214 + i * 30, 255 - i * 30, 219 - i * 10);
    rect(10 + i * 100, 20, 90, 100);
    fill(0, 0, 0);
    text(book[i].title, 15 + i * 100, 29, 70, 100);
    for (var j = 0; j < book[i].stars; j++) {
        image(getImage("cute/Star"), 15 + j * 15 + i * 96, 80, 20, 30);
    }
}
