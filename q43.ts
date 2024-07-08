function showMagicians(magicians:string[]){
    magicians.map((item)=>console.log(item))
}
function makeGreat(magicians:string[]){
return magicians.map(item=>`THE GREAT ${item}`);
}
let magicianName=["ALI","USAMA","HINA","MEHAK"]
let copyArray=magicianName.slice()
let copyGreatMagician=makeGreat(copyArray)
console.log("IT IS AN ORIGINAL ARRAY");
showMagicians(magicianName)
console.log("IT IS A COPIED ARRAY")
showMagicians(copyGreatMagician)