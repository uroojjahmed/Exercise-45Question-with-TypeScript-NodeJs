var userNames = ["iffat", "abdullah", "alishah", "mustafa", "admin"];
//If the list is empty, print the message We need to find some users!
if (userNames.length === 0) {
    console.log(" We need to find some user");
}
//Remove all of the usernames from your array, and make sure the correct message is printed
else {
    userNames = [];
    console.log("All username have been  removed." + userNames.length);
}
