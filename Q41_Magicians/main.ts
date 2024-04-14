//Make a array of magician’s names
let magician :string[] = ['Paul Daniels' ,'Derren Brown' ,'Penn Teller' ,'Harry Potter'];

function show_magicians(magicians:string[]){
    magicians.forEach(magicianNames =>{
        console.log(magicianNames );
    });  
}
//prints the name of each magician in the array
show_magicians(magician);