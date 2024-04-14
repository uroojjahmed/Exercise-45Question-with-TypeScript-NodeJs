let orange :string = "orange";
let NAME : string = "PAKISTAN";
let number : 29;
let birds = ["Sparrow" , "Falcon" ,"Canary"];


//**Tests for equality and inequality with strings

// Test no 1 equality  with strings
console.log("Equality with string is True :" );
console.log( "orange" == "orange");

/// Test no 2 inequality  with strings
console.log("\nInequality with string :");
console.log( "orange" != "orange");

//**Test using the lower case function

//Test no 3 lower case Conversion (True)

console.log("\nlower case function with True:");
console.log(NAME.toLowerCase() == "pakistan");

//Test no 4 lower case Conversion (False)
console.log("\nlower case function with False :");
console.log(NAME.toLowerCase() != "pakistan");

//**Numerical tests

//Test no 5 equality 
console.log("\nNumerical test with equality :" )
console.log(29 == 29);

//Test no 6 Inequality 
console.log("\nNumerical test with Inequality :" )
console.log(29 != 29);

//Test no 7 Greater than
console.log("\nNumerical test with  Greater than:" )
console.log(29 > 1);

//Test no 8 less than
console.log("\nNumerical test with  Lessthan:" )
console.log(29 < 25);

//Test no 9 Greaterthan or equal to
console.log("\nNumerical test with  Greaterthan or equal to:" )
console.log(29 >= 25);

//Test no 10 lessthan or equal to
console.log("\nNumerical test with  lessthan or equal to:" )
console.log(29 <= 25);

//**Tests using "and" and "or" operators */
//Test no 11 Using && (AND)
//with True
console.log("\nAND operators test with True:" );
console.log(29 == 29 && 29 > 9);

//With False
console.log("\nAND operators test with False:" );
console.log(29 < 25 && 29 == 29);

//Test no 12 Using || (OR)
//with True
console.log("\nUsing OR  operators test with True:" );
console.log(29 == 29 || 29 > 9);

//with False
console.log("\nUsing OR  operators test with False:" );
console.log(29 != 29 || 29 < 9);

// ** Test whether an item is in a array
//Test no 13
console.log("\nIs Falcon inculde in my birds array? ");
console.log(birds.includes("Falcon"));

//**  Test whether an item is not in a array 
//Test no 14
console.log("\nIs Falcon inculde in my birds array ?");
console.log(!birds.includes("Falcon"));