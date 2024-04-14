// Making a Function with parameter which return a default value
function city_country(city:string , country:string) : string {
    return `${city} , ${country}`;
}
//Calling a Function and print the value that’s returned

console.log(city_country("London", " England"));

console.log(city_country("Paris", " Farance"));

console.log(city_country("Quetta", " Pakistan"));