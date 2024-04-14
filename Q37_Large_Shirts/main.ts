//Making a  function
function make_shirt(size: string = 'large',  message: string = 'I love TypeScript.'){
    console.log(`Creating a ${size} size with the message : ${message}`);
}
 //function with Larg size and  default message
    make_shirt()

//function now with by default Medium size  and default message
make_shirt("Medium");

//function now with by default Medium size  and also with a different message
make_shirt("small" , "I Love Coding");