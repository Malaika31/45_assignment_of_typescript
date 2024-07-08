"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showMagicians(magicians) {
    magicians.map((item) => console.log(item));
}
function makeGreat(magicians) {
    return magicians.map(item => `THE GREAT ${item}`);
}
let magicianName = ["ALI", "USAMA", "HINA", "MEHAK"];
let greatMagician = makeGreat(magicianName);
showMagicians(greatMagician);
