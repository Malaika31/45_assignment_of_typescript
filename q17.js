"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["kiran", "kulsum", "bisma"];
let cantattend = "kiran";
guests.splice(0, 1, "hina");
console.log(guests);
guests.unshift("shabana");
guests.splice(2, 0, "aqsa");
guests.push("saba");
console.log(guests);
console.log("we can invite only two people for dinner");
while (guests.length > 2) {
    let removeguests = guests.pop();
    console.log(`\n sorry ${removeguests} we can't invite you ot dinner`);
}
console.log(guests);
console.log(`only ${guests} are invited to dinner`);
guests.map((item) => console.log(`Hey ${item}, you're invited to dinner`));
guests.pop();
guests.pop();
console.log(guests);
