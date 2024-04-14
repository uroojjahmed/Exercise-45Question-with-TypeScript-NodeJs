var magicians = ['Paul Daniels', 'Derren Brown', 'Penn Teller', 'Harry Potter'];
function make_great(magiciansname) {
    var greatMagician = [];
    magicians.forEach(function (magician) {
        greatMagician.push("".concat(magician, " The Great"));
    });
    return greatMagician;
}
function show_magicians(magicians) {
    magicians.forEach(function (magicianNames) {
        console.log(magicianNames);
    });
}
//prints the name of each magician in the array
var greatMagician = make_great(magicians.slice());
console.log("\nOriginal Magicians Names:");
// Shows original names
show_magicians(magicians);
console.log("\nGreat Magicians Names:");
// Shows copy names
show_magicians(greatMagician);
