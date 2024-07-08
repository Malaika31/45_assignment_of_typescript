let guests:string[]=["kiran","kulsum","bisma"];
let cantattend:string="kiran";
console.log(`${cantattend}, cannot make for dinner`);
guests.splice(0,1,"hina")
console.log(guests)
guests.map((item)=>console.log(`Hey ${item}, you're invited to dinner`))