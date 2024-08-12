// Simple exampl of enum type
enum Directions {
    Up,
    Down,
    Left,
    Right
}

Directions.Up;     // 0
Directions.Down;   // 1
Directions.Left;   // 2
Directions.Right;  // 3

// Reverse enum 
enum Directions {
    Up,
    Down,
    Left,
    Right
}

Directions[1]  // "Up"
Directions[2]  // "Down"
Directions[3]  // "Left"
Directions[4]  // "right"

// Complited Code
"use strict"
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["left"] = 2] = "Left";
    Directions[Directions["right"] = 3] = "right";
})(Directions || (Directions = {}));

// Custom index for enum elements
enum Directions {
    Up = 2;
    Down = 4;
    Left = 6;
    Right = 8
}

Directions.Up;     // 2
Directions.Down;   // 4
Directions[6];     // Left
Directions[8];     // Right

// Custom name for keys
enum links {
    youtube = 'https://youtube.com/',
    twitter = 'https://x.com/',
    facebook = 'https://facebook.com/'
}

// Using
links.twitter    // 'https://x.com/'
links.facebook   // 'https://facebook.com/'

// Complited Code
"use strict"
var links;
(function (links) {
    links["youtube"] = "https://youtube.com/";
    links["twitter"] = "https://x.com/";
    links["facebook"] = "https://facebook.com/";
})(links || (links = {}));

// const enum (without using)
const enum links {
    youtube = 'https://youtube.com/',
    twitter = 'https://x.com/',
    facebook = 'https://facebook.com/'
}

// Complited code is empty
"use strict";

// const enum (with using)
const enum links {
    youtube = 'https://youtube.com/',
    twitter = 'https://x.com/',
    facebook = 'https://facebook.com/'
}

// Using of enum properties
const arr = [links.youtube, links.facebook];

// Complited code
"use strict";
const arr = ["https://youtube.com/" /* youtube */, "https://facebook.com/" /* facebook */];

