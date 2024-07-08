function createCar(manufacturer,model, ...options){
    let car={
        manufacturer:manufacturer,
        model:model,
    };
    options.forEach(option=>{
        let[key,value]=option.split(":");
        car[key.trim()]=value.trim();
    });
    return car;
}
let myCar=createCar("TOYOTA","COROLLA","COLOR:BLACK","SUNROOF:TRUE")
console.log(myCar)
