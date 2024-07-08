let guests:string[]=["kiran","kulsum","bisma"];
let cantattend:string="kiran";
guests.splice(0,1,"hina")
console.log(guests)
console.log("Welcome All, we found a bigger dinner table")
guests.unshift("shabana")
guests.splice(2,0,"aqsa")
guests.push("saba")
console.log(guests)
guests.map((item)=>console.log(`Hey ${item}, you're invited to dinner`))