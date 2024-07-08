"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = ["kulsum", "ali", "admin", "jea", "sohaib"];
user.map(oneUser => {
    if (oneUser == "admin") {
        console.log(`ello ${oneUser},would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${oneUser},thankyou for logging in`);
    }
});
