//let user:string[]=["kulsum","ali","jea","sohaib"];
let user:string[]=[];
if(user.length===0){
    console.log("Your array is empty, we need to find some users!!!")
}
else{
user.map(oneUser=> console.log(`Hello ${oneUser},thankyou for logging in`))}
