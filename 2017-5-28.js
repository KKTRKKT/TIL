fill(120, 9, 148);
var message = "y is now ";

var y = 90;
while (y < 279) {
    text(message + y, 30, y);
    y += 50;
    // Go back to the start of the loop!
}

/* The Three Loop Questions:
 1. What do I want to repeat? 
   -> The text function with the message!
 2. What do I want to change each time? 
   -> The y position, increasing by 20 each time.
 3. How long should we repeat?
   -> As long as y is less than 400, all the way down.
*/