//create a car Object with optional feature options
import { features } from "process";
function create_Car (manufacturer:string ,  modelName:string , ...options:{ [ key :string ]:any}[]):
object{
  const car = { 
    manufacturer, 
    modelName,
    ...Object.assign({} , ...options)
  }
return car;
 };
let carInfo = create_Car('BMW' ,'BMW xDrive Sedan', {color: 'Alpine White'} ,{year:'2024'} ,{sunroof : true }, 
{features : 'Hybrid-specific'});
// Print the Object
console.log(carInfo);