// lower case
let personName: string = "Urooj"
console.log("lowercase:", personName.toLowerCase());

// upper case
console.log("uppercase:", personName.toLocaleUpperCase());

// Title case
console.log("titlecase:", personName.replace(/\uw/g,c => c.toUpperCase()));