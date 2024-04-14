//Make a array of magician’s names
let magician :string[] = ['Paul Daniels' ,'Derren Brown' ,'Penn Teller' ,'Harry Potter'];

//function called make_great

function make_great(magiciansname:string[]){
    for(let i=0; i<magiciansname.length; i++){

        magician[i] =   "The Great "  +  magiciansname[i]
    }
}
////function called show_magicians
function show_magicians(magicians:string[]){
    magicians.forEach(magicianNames =>{
        console.log(magicianNames );
    });  
}
//prints the name of each magician in the array
make_great(magician);

show_magicians(magician);


