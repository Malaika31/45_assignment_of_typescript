let currentUser=["malaika","kashaf","hina","sana","naila"];
let newUser=["Sana","sohaib","hina","naila","ahmed"];
newUser.map(newUsers=>{
    let condition=currentUser.some(currentUsers=>currentUsers.toLowerCase()===newUsers.toLowerCase())

if(condition){
    console.log(`Sorry ${newUsers} is already taken!,kindly change the username`)
}
else{
    console.log(`This username ${newUsers} is available`)
}})