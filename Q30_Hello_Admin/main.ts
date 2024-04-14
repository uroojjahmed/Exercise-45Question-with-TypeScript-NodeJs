//creating a Array
let userNames :string[] =["iffat" , "abdullah" , "alishah", "mustafa" ,"admin"];

for(let userName of userNames){
    if (userName === "admin"){
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${userName}, thank you for loggin in again.`);
    }
  };