"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeShirt(size = "large", message = "I love cats") {
    console.log(`You've selected ${size} shirt with ${message} print on that shirt`);
}
makeShirt();
makeShirt("medium");
makeShirt("small", "Hello world!");
