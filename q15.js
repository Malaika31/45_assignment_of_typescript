"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["kiran", "kulsum", "bisma"];
let cantattend = "kiran";
console.log(`${cantattend}, cannot make for dinner`);
guests.splice(0, 1, "hina");
console.log(guests);
guests.map((item) => console.log(`Hey ${item}, you're invited to dinner`));
