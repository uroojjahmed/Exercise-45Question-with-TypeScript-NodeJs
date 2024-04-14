//creating a Array
var userNames = ["iffat", "abdullah", "alishah", "mustafa", "admin"];
for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
    var userName = userNames_1[_i];
    if (userName === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userName, ", thank you for loggin in again."));
    }
}
;
