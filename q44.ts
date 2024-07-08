function makeSandwich(...items:string[]){
    console.log(`\t MAKING A SANDWICH WITH THE FOLLOWING ITEMS`)
    items.map((names)=>console.log(names))
    console.log("NOW ENJOY YOUR SANDWICH!!!")
}
makeSandwich("chicken","sauce","potato");
makeSandwich("chicken");
makeSandwich("chicken","sauce","potato","cabbage","pepper");
makeSandwich("mayo","vegetable","cheese","pepper","sauce","fries");