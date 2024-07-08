function showMagicians(magicians:string[]){
    magicians.map((item)=>console.log(item))
}
function makeGreat(magicians:string[]){
return magicians.map(item=>`THE GREAT ${item}`);
}
let magicianName=["ALI","USAMA","HINA","MEHAK"]
let greatMagician=makeGreat(magicianName)
showMagicians(greatMagician)