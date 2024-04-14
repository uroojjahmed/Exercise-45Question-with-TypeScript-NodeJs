var current_users = ["Ali", "tom", "Hina", "TaHa", "sultan", "Yumna"];
var new_users = ["Zayan", "taha", "Minhal", "yumna", "Shareq"];
new_users.forEach(function (new_names) {
    if (current_users.some(function (current_names) { return current_names.toLowerCase()
        === new_names.toLowerCase(); })) {
        console.log("The user name ".concat(new_names, " alrady taken!will need to enter a new user name."));
    }
    else {
        console.log("The user name ".concat(new_names, " is available."));
    }
});
