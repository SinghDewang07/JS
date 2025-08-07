console.log(2 > 4);
console.log(2 == "2");



// The reason is that an equality check == and comparisons > < >=
// <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false. LE I Lasero Layout US.


// == & === are different in js
// == & <= are also different wokring


//Strict Check
console.log(2 == "2");
console.log(2 === "2"); // check the data type
