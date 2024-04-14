//Making a  function
function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript.'; }
    console.log("Creating a ".concat(size, " size with the message : ").concat(message));
}
//function with Larg size and  default message
make_shirt();
//function now with by default Medium size  and default message
make_shirt("Medium");
//function now with by default Medium size  and also with a different message
make_shirt("small", "I Love Coding");
