interface car {
    BrandName: string
    colour: string
    ModelName: string
    Price: number
    launchingYear: number 
}
//creates Objects 
let car = {
    BrandName: "Mercedes-Benz",
    colour: "Balck",
    ModelName: "Mercedes-Benz S-class",
    Price: "US$118,450.00",
    launchingYear: "2024"
}; 
console.log(`The World best car details:
  ${car.BrandName} ,
  ${car.colour} ,
  ${car.ModelName} ,
  ${car.Price} , 
  ${car.launchingYear}.`);
