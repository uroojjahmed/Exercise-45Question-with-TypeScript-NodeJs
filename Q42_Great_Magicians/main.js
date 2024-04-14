//Make a array of magician’s names
var magician = ['Paul Daniels', 'Derren Brown', 'Penn Teller', 'Harry Potter'];
function make_great(magiciansname) {
    for (var i = 0; i < magiciansname.length; i++) {
        magician[i] = "The Great " + magiciansname[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (magicianNames) {
        console.log(magicianNames);
    });
}
//prints the name of each magician in the array
make_great(magician);
show_magicians(magician);
