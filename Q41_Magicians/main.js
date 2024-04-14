//Make a array of magician’s names
var magician = ['Paul Daniels', 'Derren Brown', 'Penn Teller', 'Harry Potter'];
function show_magicians(magicians) {
    magicians.forEach(function (magicianNames) {
        console.log(magicianNames);
    });
}
//prints the name of each magician in the array
show_magicians(magician);
