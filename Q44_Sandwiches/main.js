function make_Sandwiche(items) {
    console.log("\nMaking a Sandwiche with youe'r following items :");
    items.forEach(function (Item_name) { return console.log("-" + Item_name); });
    console.log("Enjoy your tasty Sandwiche.\n");
}
//Call the function three times, using a different number of arguments each time
make_Sandwiche(["Bread", "Jam"]);
make_Sandwiche(["Chicken", "Cheese", "Tomato", "Egg"]);
make_Sandwiche(["Turkey", "Lettuce", "Avocado", "Mayo", "Bread", "Tomato"]);
