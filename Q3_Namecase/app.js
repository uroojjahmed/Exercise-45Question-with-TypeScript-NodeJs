// lower case
var personName = "Urooj";
console.log("lowercase:", personName.toLowerCase());
// upper case
console.log("uppercase:", personName.toLocaleUpperCase());
// Title case
console.log("titlecase:", personName.replace(/\uw/g, function (c) { return c.toUpperCase(); }));
