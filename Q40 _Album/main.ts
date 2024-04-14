//Make_album a function
function make_album(artist_name :string ,album_title :string ,tracks? :number){
    
    let album:{artist:string , title:string, tracks? :number } = {
        artist:artist_name,
        title:album_title,
    };
if(tracks !== undefined){
    album.tracks = tracks;
}
return  album;
}
let album1 = make_album("Artist 1", "Album title 1");
console.log(album1);

let album2 = make_album("Artist 2", "Album title 2");
console.log(album2);

let album3 = make_album("Artist 3", "Album title 3" ,20);
console.log(album3);



