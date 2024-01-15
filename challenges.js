// console.log("Challenges section");

//Challenge 1: Strings
// Capitalize the first word of 'developer', so only the first letter is capitaized
const myString = "developer";
const myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// console.log(myNewString);

//Challenge 2: Numbers
//create a variable 'x' thats a random number between 1 - 100.
//'y' is between 1 - 50
//create a variable for sum, difference, product, quotient/remainder
let x = Math.floor(Math.random() * 100 + 1);
let y = Math.floor(Math.random() * 50 + 1);

let sumOutput = `${x} + ${y} = ${x + y}`;
let differenceOutput = `${x} - ${y} = ${x - y}`;
let productOutput = `${x} * ${y} = ${x * y}`;
let quotientOutput = `${x} / ${y} = ${x / y}`;
let rmOutput = `${x} % ${y} = ${x % y}`;

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);
