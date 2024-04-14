let magicians: string[] = ['Paul Daniels' ,'Derren Brown' ,'Penn Teller' ,'Harry Potter'];

function make_great(magiciansname: string[]): string[] {
  let greatMagician:string[] = [];
  magicians.forEach((magician) => {
    greatMagician.push(`${magician} The Great`);
});
return greatMagician;
}

function show_magicians(magicians: string[]) {
  magicians.forEach((magicianNames) => {
    console.log(magicianNames);
  });
}

//prints the name of each magician in the array
let greatMagician = make_great(magicians.slice()); 
console.log("\nOriginal Magicians Names:");
 // Shows original names
show_magicians(magicians);
console.log("\nGreat Magicians Names:");
// Shows copy names
show_magicians(greatMagician); 
