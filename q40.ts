function makeAlbum(artistName:string,albumTitle:string,tracks?:number){
    let album:{
        artist:string,
        title:string,
        tracks?:|number

    }={ 
        artist:artistName,
        title:albumTitle,           
    }
    if(tracks!==undefined){
        album.tracks=tracks;
    }
    return album;

}
let album1=makeAlbum("ARIJTI SINGH","KHERIYAT");
let album2=makeAlbum("ABIDA PERVEEN","JHOOM",4)
let album3=makeAlbum("ATIF ASLAM","JAANA")
let album4=makeAlbum("USAMA KHAN","GHAZAL",6)
console.log(album1)
console.log(album2)
console.log(album3)
console.log(album4)